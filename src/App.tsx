import './App.css'
import Product from './Components/Product'
import Header from './Components/Header'
import { useState } from 'react'



export default function App() {
  const [cart, setCart] = useState<string[]>([]);
  
  const addToCart = (title: string) => {
    if (!cart.includes(title)) {
      setCart([...cart, title]); 
    }
  };

  return (
    <>
      <Header cart={cart}/>
      <Product addToCart={addToCart}/> {}
    </>
  );
}
