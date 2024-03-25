import { useEffect, useState } from 'react';
import './App.css'
import handleClicked from './Components/Function/test'
import SingleProduct from './Components/SingleProduct/SingleProduct';

function App() {
  // const result = handleClicked();
  // console.log(result);
  // const result = handleClicked;
  // console.log(result);

  const [stateCount,setStateCount] = useState(0);
  // console.log(stateCount);
  let count = 0;

  const handleVariableCount = () =>{
    // console.log('hello')
    count = count +1;
    console.log(count)
  }

  const handleStateCount = () =>{
    // console.log('hi')
    // stateCount = stateCount +1;
    let sum = stateCount +1;

    setStateCount(sum)
    // stateCount++;
    // setStateCount(stateCount);

  }

  const [products,setProducts] = useState([]);
  useEffect(()=>{
    // const url = `https://fakestoreapi.com/products/`;
    const url = `https://fakestoreapi.com/products`;
    fetch(url)
    .then((res)=>res.json())
    // .then((data)=>console.log(data))
    // .then((data)=>useState(data))
    .then((data)=>setProducts(data))
  },[])
  // console.log(products)

  // useEffect( async ()=>{
  //   // const url = `https://fakestoreapi.com/products/`;
  //   const url = `https://fakestoreapi.com/products`;
  //   const res = await fetch(url)
  //   const data = await res.json()
  //   setProducts(data)
  // },[])
  // console.log(products)

  return (
    <>
      <h1>Milestone-7-Conceptual-1:React</h1>

      <h3>State Count : {stateCount}</h3>
      <h3>Variable Count : {count}</h3>

      <button onClick={handleVariableCount}>Variable Count</button>
      <button onClick={handleStateCount}>State Count</button>

      {
        // products.map((singleProduct)=>'hello')
        // products.map((singleProduct)=><p>hello</p>)
        products.map((singleProduct)=><SingleProduct singleProduct={singleProduct}></SingleProduct>)
      }
    </>
  )
}

export default App
