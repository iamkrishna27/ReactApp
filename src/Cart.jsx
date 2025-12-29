import { useCart } from "./CartContext";
import { Link } from "react-router-dom";

function Cart() {
  const { cart, removeFromCart } = useCart();


  const total = cart.reduce((sum, item) => sum + Number(item.price), 0);

  return (
    <div className="amazon-container" style={{ display: 'block', backgroundColor: '#eaeded', minHeight: '100vh', color:'black' }}>

        <div className="amazon-container">
                {/* Logo links back to Home/App */}
                <Link className="home_button" to="/App">
                    <img
                        src="./assets/Amazontxt.png"
                        alt="amazon"
                        className="amazon-logo"
                    />
                </Link>

                <div className="nav-links">
                    <Link className="home_button" to="/">Sign in</Link>
                    <Link className="home_button" to="/App">About</Link>
                    <Link className="home_button" to="/App">Contact</Link>
                </div>
                </div>

      <div style={{ padding: '20px' }}>
        <h2>Shopping Cart</h2>
        {cart.length === 0 ? (
          <h3>Your Amazon Cart is empty. <Link to="/App">Shop now</Link></h3>
        ) : (
          <div>
            {cart.map((item, index) => (
              <div key={index} style={{ borderBottom: '1px solid #ddd', padding: '10px', display:'flex', backgroundColor:'white', margin:'10px 0' }}>
                <img src={item.image} alt={item.name} style={{ width: '100px', marginRight:'20px' }} />
                <div>
                  <h3>{item.name}</h3>
                  <p className="price">₹{item.price}</p>
                  <button onClick={() => removeFromCart(item.id)} className="btn btn-danger" style={{backgroundColor:'#d9534f', color:'white', border:'none', padding:'5px 10px', borderRadius:'3px', cursor:'pointer'}}>Remove</button>
                </div>
              </div>
            ))}
            <div style={{ textAlign: 'right', fontSize: '24px', fontWeight: 'bold' }}>
              Subtotal ({cart.length} items): ₹{total}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;