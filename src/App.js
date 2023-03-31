import './App.css';

import Header  from './core/layouts/Header';
import Footer  from './core/layouts/Footer';
import { Main } from './core/layouts/Main';


function App() {
  return (
    <div className="app-main">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
