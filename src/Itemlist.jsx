import { Link } from "react-router-dom";
import Elements from './Elements';
import useFetch from './useFetch';
import { useState } from "react";
// Import the custom hook we created in Step 1
import { useCart } from './CartContext';

function Itemlist() {

    // 1. Get the 'cart' array from our global state to count items
    const { cart } = useCart(); 

    // Existing Fetch Logic
    const [Items, error, setItemlist] = useFetch('http://localhost:3000/Items');
    const [searchTerm, setSearchTerm] = useState("");

    // Search Filter Logic
    const filteredItems = Items.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Hide Item Logic
    function Notintressted(id) {
        const Hideitems = Items.filter((elements) => elements.id !== id);
        setItemlist(Hideitems);
    }

    // Loading State
    if (Items.length === 0 && !error) {
        return (
            <>
                <img src="assets/cat.gif" alt="loading"></img>
                <h3>Loading products...</h3>
            </>
        );
    }

    // Map Items to Element Components
    const ItemlistMapped = filteredItems.map((elements) => (
        <Elements
            key={elements.id}
            name={elements.name}
            image={elements.image}
            price={elements.price}
            rating={elements.rating}
            description={elements.description}
            Hide={Notintressted}
            id={elements.id}
        />
    ));

    return (
        <>
            <div className="amazon-container">
                {}
                <Link className="home_button" to="/App">
                    <img
                        src="./assets/Amazontxt.png"
                        alt="amazon"
                        className="amazon-logo"
                    />
                </Link>

                <input
                    type="text"
                    placeholder="Search Amazon"
                    className="search-input"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />

                <div className="nav-links">
                    <Link className="home_button" to="/">Sign in</Link>

                    {}
                    <Link className="home_button" to="/cart" style={{ display: 'flex', alignItems: 'center' }}>
                        Cart
                        {cart.length > 0 && (
                            <span style={{
                                marginLeft: '5px',
                                backgroundColor: '#f08804',
                                color: '#111',
                                borderRadius: '50%',
                                padding: '2px 8px',
                                fontSize: '14px',
                                fontWeight: 'bold'
                            }}>
                                {cart.length}
                            </span>
                        )}
                    </Link>

                    <Link className="home_button" to="/App">About</Link>
                    <Link className="home_button" to="/App">Contact</Link>
                </div>
            </div>

            <div className="product-container">
                {ItemlistMapped}
            </div>
        </>
    );
}

export default Itemlist;