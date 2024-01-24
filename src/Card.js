import React from 'react'
import Div from './Div';

const Card = () => {
 const numbers = Array.from({ length: 100 }, (_, index) => index + 1);

  return (
    <>  
     <div className='row'> {numbers.map((number) => (

        <div className='  col-sm-10 d-flex flex-column-reverse border border-dark '>{number}</div>
        
      ))}
     </div>
    
    </>
  )
}

export default Card
