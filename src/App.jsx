import { createContext, useState } from 'react'
import './App.css'
import Product from './product';
import data from './product.json'
const productContext = createContext(null)
function App() {
  const [products, setProducts] = useState(data)
  function increaseQuantity(index){
    setProducts(products =>
      products.map((item, i) =>
        i === index ? {...item, quantity: item.quantity + 1} : item
      )
    );
  }

  function decreaseQuantity(index) {
    setProducts(products =>
      products.map((item, i) =>
        i === index && item.quantity>1 ? {...item, quantity: item.quantity - 1} : item
      )
    );
  }
  return (
    <productContext.Provider value = {{products, increaseQuantity, decreaseQuantity}}>
      <nav><h1>REACT CONTEXT</h1></nav>
      <div className="products">
        <Product/>
      </div>
    </productContext.Provider>
  )
}

export default App
export {productContext}
