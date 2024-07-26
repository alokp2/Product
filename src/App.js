import React, { useState } from 'react';
import './App.css';


function App() {
  const [customerName, setCustomerName] = useState('');
  const[phone,setPhone]=useState('');
  const [address, setAddress] = useState('');
  const [Quantity, setQuantity] = useState(0);
  const[price,setPrice]=useState(0);
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);
  const[selectedProduct,setSelectedProduct]=useState("iphone 11");
  const [products, setProducts] = useState([]);


  
  const handleQuantityChange = (e) => {
    const quantity = parseInt(e.target.value);
    setQuantity(quantity);
    setSubtotal(price*quantity);
  };

  const handlePriceChange = (e) => {
    const price = parseFloat(e.target.value);
    setPrice(price);
    setSubtotal(price * Quantity);
  };

  const handleAddProduct = () => {
    const product = {
      name: selectedProduct,
      quantity: Quantity,
      total: subtotal,
    };
    setProducts([...products, product]);
    setTotal(total + subtotal);
  };

  const handleSave=(e)=>
  {
    e.preventDefault();

    const Information=
    {
      customerName,
      phone,
      address,
      products,
      total,
    };
    console.log(Information);
    
    setCustomerName('');
    setPhone('');
    setAddress('');
    setSelectedProduct('iphone 11');
    
    setSubtotal(0);
    setQuantity(0);
    setPrice(0);
  }
  return (
    <div className="App">
     
     
      <form>
        <div className="details">

       
        <div className="form-group ">
          <label>Customer Name:</label>
          <input
            type="text"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>
           Phone no. 
          </label>
          <input
          type="text"
          value={phone}
          onChange={(e)=>setPhone(e.target.value)}
          pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"

          required

          />
          
          </div>
          
        

        <div className="form-group">
          <label>Address:</label>
          <input
          
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        
        <div className="product">

      
        <div className="form-group ">
          <label>Product:</label>
          <select
           value={selectedProduct}
           onChange={(e) => setSelectedProduct(e.target.value)}
          
          
          >
            <option>iphone 11</option>
            <option>iphone 12</option>
            <option>iphone 13</option>
            <option>iphone 14</option>
            <option>iphone 15</option>




          </select>
        </div>
       
        <div className="form-group">
          <label>Quantity:</label>
          <input
            type="number"
           
            value={Quantity}
            onChange={handleQuantityChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Price:</label>
          <input
            type=""
           
            value={price}
            onChange={handlePriceChange}
            required
          />
        </div>
        <button type="button" className="btn-color"  onClick={handleAddProduct}> Add

        </button>
        </div>
        </div>
       
         <table className="table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{product.name}</td>
              <td>{product.quantity}</td>
              <td>{product.total}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="2">Total</td>
            <td>${total}</td>
          </tr>
        </tfoot>
      </table>
      <button className='btn btn-primary save' onClick={handleSave}>
        Save

      </button>
      </form>
     
    </div>
  );
}

export default App;
