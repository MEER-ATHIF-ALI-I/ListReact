import { useState } from 'react'
import './App.css'

function App() {

  const products=[{product:"Samsung", category:"Electronics"},
    {product:"Nike Shoes", category:"Footwear"},
    {product:"Apple iPhone", category:"Electronics"},
    {product:"Adidas T-shirt", category:"Apparel"},
    {product:"Dell Laptop", category:"Electronics"}
  ];

  const [userInput,setUserInput]=useState('');
  const [filteredProducts, setFilteredProducts]=useState([]);
  
  

  const handleSearch = () => {
    const result = products.filter((item) =>
      item.product.toLowerCase().includes(userInput.toLowerCase())
    );
    setFilteredProducts(result);
  };

  return (
    <div className="App">
      <input 
      type='text'
      value={userInput}
      onChange={(e)=>setUserInput(e.target.value)}
      
      placeholder='Enter Product Name'
      />
      <button onClick={handleSearch}>Click me</button>
     {/* Table to display product list */}
     <table border='1'>
      <thead>
        <tr>
          <th>Product</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
      {filteredProducts.length > 0 ? (
            filteredProducts.map((item, index) => (
              <tr key={index}>
                <td>{item.product}</td>
                <td>{item.category}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="2">No products found</td>
            </tr>
          )}
       
      </tbody>
     </table>
    </div>
  )
}

export default App
