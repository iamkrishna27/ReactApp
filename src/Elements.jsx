// Elements.jsx
import { Link } from "react-router-dom";
import { useCart } from "./CartContext"; // Import context

function Elements(props) {
  const { addToCart } = useCart(); // Get addToCart function

  return (
    props.id && (
      <div className="cards">
        {/* Link wrapping image to go to detail page */}
        <Link to={`/product/${props.id}`}>
            <img src={props.image} alt={props.name} />
        </Link>

        <button className="hideicon" onClick={() => props.Hide(props.id)}>👁️‍🗨️</button>
        
        {/* Link wrapping Title */}
        <Link to={`/product/${props.id}`} style={{textDecoration:'none', color:'black'}}>
            <h3 className="productName">{props.name}</h3>
        </Link>
        
        <p className="price"> From ₹{props.price}</p>
        <p>{props.rating}</p>
        <p className="description">{props.description}</p>
        
        {/* Update button to use Global Cart */}
        <button 
            className="orderbutton" 
            onClick={() => addToCart({id: props.id, name: props.name, price: props.price, image: props.image})}
        >
            Add to Cart
        </button>

        <p className='hotd'>|🛒|Limited time deal</p>
      </div>
    )
  );
}

export default Elements;