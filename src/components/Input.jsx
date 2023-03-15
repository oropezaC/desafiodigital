import React , {useState, useEffect} from 'react'
import '../../src/App.css';

export const InputString = ({setData}) => {

  const [text, setText] = useState("");


  const onChangeHandler = (event)=>{
    setText(event.target.value)
    setData({
      valid:{
          error:false,
          description:''
      },
      data :{
          first_name:'..esperando',
          lastname:'..esperando',
          id:'..esperando'
      }
  })
  }

  const handleKeyDown = async(event)=>{
    if (event.key === 'Enter') {
      try {
        const decode = await prepare(event.target.value)
        setData({
          valid:{
            error:false,
            description : ''
          },
          data:decode
        })
      } catch (error) {
        setData({
          valid:{
            error:true,
            description : error.toString()
          },
          data :{
            first_name:'',
            lastname:'',
            id:''
        }
        })
        
      }

    }
  }

const onlyNumbers = (str)=> {
    return /^\d+$/.test(str);
}

const onlyText = (str) =>{
    return !/\d/.test(str);
  }

const processKeys = (keys)=>{
    const [first_name,lastname, id ] = keys
    const test_pased = valiData({ first_name, lastname, id})
    if(test_pased == keys.length)
        return { first_name, lastname, id}
    else
        throw new Error("Validación no fue exitosa")
}

const valiData = ({ first_name, lastname, id})=> {
    
    let test = { name:false, last_name:false, id:false }
    let test_pased = 0
    test.name = onlyText(first_name)
    test.last_name = onlyText(lastname)
    test.id = onlyNumbers(id)

    for (const key in test) {
        test_pased += test[key] ? 1 : 0
    }

    return test_pased

}

  const prepare = async(_string)=>{
    const arr_string = _string.split('0')
    const keys = arr_string.filter(key => key != '')
    if(keys.length == 3){

       const {first_name,lastname,id} = processKeys(keys)
      return  {first_name,lastname,id} 
    }
    else
        throw new Error("Cadena mal formada")
  }

  

  return (
    <div className='main-input'>
      <div className="relative z-0">
        <input type="text" 
          className="block py-2.5 px-0 w-full text-3xl text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer" 
          placeholder=" " 
          value={text}
          onChange={onChangeHandler}
          onKeyDown={handleKeyDown}
          />
        <label className=" text-3xl absolute text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Ingresa Cadena ↵ </label>
      </div>
    </div>
  )
}
