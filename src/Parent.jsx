import React from 'react'
import Form from './Form'
import Display from './Display'
import { useState } from 'react'
import './global.css'

const Parent = () => {
    let detail={
        productname:'',
        productprice:'',
        productdescription:'',
    }
    let [details,setDetails]=useState(detail)
    let [items,setItems]=useState([]);
    let [eid,setId]=useState();
    let handleSubmit=(e)=>{
        e.preventDefault();
        let copy=[...items];
        let eid=e.target.id;
        if(eid){
          copy[e.target.id]=details;
          setItems(copy);
          setId();
        }else{
          setItems([...items,details]) 
        }
        setDetails(detail)
        
    }
    let handleChange=(e)=>{
        let {name,value}=e.target;
        setDetails({...details,[name]:value});
    }
    let handleDelete=(e)=>{
      //  console.log( e.target.id)
       let copy=[...items]
        copy.splice(e.target.id,1);
        setItems(copy);
        // console.log(items)
    }
    
    let handleEdit=(e)=>{
      let copy=[...items];
      let [obj]=copy.slice(e.target.id,e.target.id+1)
      setId(e.target.id);
      // console.log(id)
      setDetails(obj);
      // console.log(obj)
      // console.log(details)
    }
  return (
    <>
     <div>
        <Form handleSubmit={handleSubmit} handleChange={handleChange} details={details}a={eid}/>
     </div>
     <div>
        <Display items={items} handleDelete={handleDelete} handleEdit={handleEdit}/>
     </div>
    </>
  )
}

export default Parent
