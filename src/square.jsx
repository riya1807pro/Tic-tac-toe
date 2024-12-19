import React from 'react'

const Square = (props) =>{
return <>
<div className='square' 
  style={{
    width: '100px',
    height: '100px',
    border: '1px solid black',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '50px',  
    cursor: 'pointer'
  } }
  onClick={props.onClick}>
  {props.value}
</div>
</>

}
export default Square;