import React, {useState} from 'react'
import './AddProduct.css'
import upload_area from '../../Assets/upload_area.svg'

const Addproduct = () => {

    const [image,setImage] = useState(false);
     
    const [productDetails,setProductDetails] = useState({
       name:"",
       image:"",
       category:"men ",
       new_price:"",
       old_price:""
    })


    const imageHandler = (e) =>{
       setImage(e.target.files[0])
    }

    const changeHandler = (e) =>{
       setProductDetails({...productDetails,[e.target.name]:e.target.value})
    }

    const Add_Product = async () =>{
       console.log(productDetails);
       
       let responseData;
       let product =productDetails;

       let formData=new FormData();
       formData.append('product',image);

       await fetch('http://localhost:7000/upload',{
        method:'POST',
        headers:{
            Accept:'application/json',
        },
        body:formData,
       }).then((resp)=> resp.json()).then((data)=>{responseData=data});

       if(responseData.success)
       {
         product.image = responseData.image_url;
         console.log(product);

         await fetch('http://localhost:7000/addproduct',{
            method:'POST',
            headers:{
                Accept:'application/json',
                'Content-Type':'application/json',
            },
            body:JSON.stringify(product),
         }).then((resp)=>resp.json()).then((data)=>{
            data.success?alert("product added"):alert("failed")
         })
       }
      
    }


   return (
       <div className='add-product'>
           <div className='addproduct-field'>
               <p>Product title</p>
               <input value={productDetails.name} onChange={changeHandler} type='text' name='name' placeholder='Type here' />
           </div>
           <div className='addproduct-price'>
               <div className='addproduct-field'>
                   <p>Price</p>
                   <input value={productDetails.old_price} onChange={changeHandler} type='text' name='old_price' placeholder='Type here' />
               </div>
               <div className='addproduct-field'>
                   <p>Offer Price</p>
                   <input value={productDetails.new_price} onChange={changeHandler} type='text' name='new_price' placeholder='Type here' />
               </div>
           </div>
           <div className='addproduct-field'>
               <p>Product category</p>
               <select value={productDetails.category} onChange={changeHandler} name='category' className='addproduct-selector'>
                   <option value="men" className="value">Men</option>
                   <option value="women" className="value">Women</option>
                   <option value="kid" className="value">Kid</option>
               </select>
           </div>
           <div className='addproduct-field'>
                   <label htmlFor='file-input'>
                       <img src={image?URL.createObjectURL(image):upload_area} className='addproduct-img'></img>
                   </label>
                   <input onChange={imageHandler} type='file' name='image' id='file-input' hidden />
           </div>
           <button onClick={()=>{Add_Product()}} className='addproduct-btn'>ADD</button>
       </div>
   )
}

export default Addproduct
