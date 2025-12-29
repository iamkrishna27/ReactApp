// ProductDetails.jsx
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useCart } from "./CartContext";
import './index.css'; // Assuming your CSS is here

function ProductDetails() {
  const { id } = useParams(); // Get the ID from the URL
  // Fetch only the specific item using the ID
  const [item, error] = useFetch(`http://localhost:3000/Items/${id}`);
  const { addToCart } = useCart();

  if (!item) return <h2>Loading...</h2>;
  
  // useFetch usually returns an array/object. If your API returns an object for single ID:
  // We handle the data directly.

  return (
    <div className="amazon-container" style={{display:'block', backgroundColor:'white', height:'100vh'}}>
      <div className="detail-wrapper" style={{display:'flex', padding:'50px', gap:'50px'}}>
          <div className="image-section">
             <img src={item.image} alt={item.name} style={{width:'400px'}} />
          </div>
          <div className="info-section">
             <h1>{item.name}</h1>
             <p className="description">{item.description}</p>
             <h2 className="price">₹{item.price}</h2>
             <p>Rating: {item.rating} ⭐</p>
             
             <button 
                className="orderbutton" 
                onClick={() => addToCart(item)}
             >
                Add to Cart
             </button>
          </div>
      </div>
    </div>
  );
}

export default ProductDetails;