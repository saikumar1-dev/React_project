import React from 'react'

const Form = ({handleSubmit,handleChange,details,a}) => {
  // console.log(a)
  return (
    <div style={{padding:'5px'}}>
      <form action="" >
    <label >Product name</label><br />
     <input type="text" name='productname' value={details.productname} onChange={handleChange} required/><br /> 
    <label >Product price</label><br />
     <input type="text" name='productprice' value={details.productprice} onChange={handleChange} required/> <br />
    <label >Product description</label><br />
     <input type="text" name='productdescription' value={details.productdescription} onChange={handleChange} required/><br />
     <input type="submit" className='btn'id={a} onClick={handleSubmit}/>
     </form>
    </div>
  )
}

export default Form
