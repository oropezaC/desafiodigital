import React , {useState, useEffect} from 'react'
import '../../App.css';

import { InputString } from './../../components/Input'
import { CardJson } from '../../components/CardJson';
import { CardLabel } from '../../components/CardLabel';
import { CardError } from '../../components/CardError';



export const Main = () => {
    const [data,setData] =useState({
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

    return (
        <div className='main container mx-auto'>
            <InputString setData={setData}/>
            {!data.valid.error 
                ? 
                <div className="grid grid-cols-2 md:grid-cols-2">
                    <CardLabel data = {data}/>
                    <CardJson data = {data}/>
                </div>
                :
                <div className="grid grid-cols-1 md:grid-cols-1">
                  <CardError data = {data}/>
                </div>
            }
        </div>
    )
}
