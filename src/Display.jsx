import React from 'react'

const Display = ({items,handleDelete,handleEdit}) => {
    // console.log(items)
  return (
    <div>
        {items.map((value,index)=>{
            return(
                <div> 
                    <h4>product name : {value.productname}</h4>
                    <h4>product price : {value.productprice}</h4>
                    <h4>product description : {value.productdescription}</h4>
                    <button id={index} className='btn' onClick={handleEdit}>Edit</button><button id={index} className='btn' onClick={handleDelete}>delete</button>
                </div>
            )
        })}
      
    </div>
  )
}

export default Display
