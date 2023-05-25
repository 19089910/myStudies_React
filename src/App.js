import React from 'react'; 
//import './styles.css' foi substituido pelo: 
import { Conteiner, H1 } from './styles'; 

function App () { 
 const hello = "Hello React"  
  return (  
//  <div className='conteiner'> foi substituido pelo: 
    <Conteiner> 
      <H1>{hello} </H1>
    </Conteiner> 
//  </div> 
  ); 
} 
 
export default App;