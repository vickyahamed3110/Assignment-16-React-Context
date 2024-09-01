import { useContext } from "react"
import './App.css'
import {productContext} from './App';

function Product() {
    const {products, increaseQuantity, decreaseQuantity} = useContext(productContext)
    const totalAmount = products.reduce((acc, item) => acc + (item.quantity * item.price),0)
    return(
        <>
             {products.map(((product,index)=>(
              <div className='product' key={index}> 
              <div className='card-top'>
                  <div className='thumbnail-details'>
                      <div className='thumbnail-div'><img src={product.thumbnail}/></div> 
                  <div className='product-details'>
                      <h1>{product.title}</h1>
                      <p className='description'>{product.description}</p>
                      <div className='rating'>
                          <p>{product.rating}</p>
                          <img src='https://cdn-icons-png.flaticon.com/128/9351/9351980.png'/>
                      </div>
                  </div>
                   </div>
                  <div className='price-details'>
                      <div className='amt-qt'>
                          <button className='dec-btn' onClick={()=>decreaseQuantity(index)} >-</button>
                           <div className='quantity'>{product.quantity}</div>
                           <button className='inc-btn' onClick={()=>increaseQuantity(index)}>+</button>
                          <p className='price'>₹{product.price}</p>
                          </div>
                      <p className='remove-btn' onClick={()=>handleRemove(product.id)}>REMOVE</p>
                  </div>
              </div>
                <div className='line'></div>
               <div className='card-center'>
                      <ul>
                          <li>SUBTOTAL:</li>
                          <li>SHIPPING:</li> 
                      </ul>
                      <ul>
                          <p className='price'>₹{product.price*product.quantity}</p>
                          <p className='remove-btn'>FREE</p>
                      </ul>
              </div>
    
              
          </div>
            
    )))}
    <div className='product'>
      <div className='card-center'>
          <ul>
              <p className='price'>TOTAL</p>
          </ul>
          <ul>
              <p className='price'>₹{totalAmount}</p>
              <p className='remove-btn'>Get daily cash wit nesppolo card</p>
          </ul>
      </div>
      </div>
          </>
      )
}

export default Product