import React ,{useState,useEffect}from 'react';
import AddProduct from './../AddProduct/index';

function ProductUpload(props) {
    const [body,setBody]=useState();
    const [bodyValue,setBodyValue]=useState(0);
    useEffect(()=>{
      switch(bodyValue)
      {
         case 0:{
             setBody(<AddProduct router=""/>)
            break;
         }
         case 1:{
            setBody(<></>)
            break;
         }
         case 2:{
            setBody(<></>)
            break;
         }
         default:{
            setBody(<AddProduct/>)
             break;
         }
      }
    },[bodyValue])
    return (
        <div>
             <ul className='nav nav-tabs' id='myTab' role='tablist'>
        <li className='nav-item' role='presentation'>
          <button
          onClick={()=>setBodyValue(0)}
            className='nav-link active'
            id='home-tab'
            data-bs-toggle='tab'
            data-bs-target='#home'
            type='button'
            role='tab'
            label="Show"
            aria-controls='home'
            aria-selected='true'>
            Coffees
          </button>
        </li>
        <li className='nav-item' role='presentation'>
          <button
            onClick={()=>setBodyValue(1)}
            className='nav-link'
            id='profile-tab'
            data-bs-toggle='tab'
            data-bs-target='#profile'
            type='button'
            role='tab'
            aria-controls='profile'
            aria-selected='false'
                  >
            Books
          </button>
        </li>
        <li className='nav-item' role='presentation'>
          <button
            onClick={()=>setBodyValue(2)}
            className='nav-link'
            id='contact-tab'
            data-bs-toggle='tab'
            data-bs-target='#contact'
            type='button'
            role='tab'
            aria-controls='contact'
            aria-selected='false'>
            News
          </button>
        </li>
      </ul>
      <div className="bodyUpload">{body}</div>
      
        </div>
    );
}

export default ProductUpload;