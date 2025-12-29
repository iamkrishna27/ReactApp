# 🛒 Amazon Clone (React)

A fully functional e-commerce frontend application built with **React**, designed to replicate the core shopping experience of Amazon. This project demonstrates modern web development practices including global state management, client-side routing, and custom hooks.

![Amazon Clone Banner](https://via.placeholder.com/1000x300?text=Amazon+Clone+Project+Preview) 
*(Replace this link with a screenshot of your actual project)*

## 🚀 Features

* **Product Browsing:** View a list of products with dynamic data fetching.
* **Search Functionality:** Real-time filtering of products by name.
* **Dynamic Product Details:** Click on any product to view a dedicated details page.
* **Shopping Cart System:** * Add items to the cart from the home page or details page.
    * View total price and subtotal.
    * Remove items from the cart.
    * Cart count updates instantly in the Navigation Bar.
* **Authentication UI:** Responsive Login and Sign-up pages.
* **Mock Backend:** Uses `json-server` to simulate a real REST API.

## 🛠️ Tech Stack

* **Frontend:** [React.js](https://react.dev/) (Vite)
* **Routing:** [React Router DOM](https://reactrouter.com/) (v6)
* **State Management:** React Context API (for global Cart state)
* **Styling:** CSS3 (Flexbox & Grid)
* **Backend:** JSON Server (Mock API)

## 📂 Key React Concepts Demonstrated

This project was built to master the following React concepts:

1.  **Context API:** Used to manage the global `Cart` state, avoiding prop-drilling and making cart data accessible to the Navbar, Product Pages, and Cart Page simultaneously.
2.  **Custom Hooks (`useFetch`):** Created a reusable hook to abstract API logic, making the code DRY (Don't Repeat Yourself) and cleaner.
3.  **React Router:** implemented dynamic routing (`/product/:id`) to render unique data for individual products without reloading the page.
4.  **`useEffect` & `useState`:** Used for handling side effects (data fetching) and managing local UI state (search inputs, loading states).

## ⚙️ Installation & Setup

Follow these steps to run the project locally.

### 1. Clone the repository
```bash
git clone [https://github.com/your-username/amazon-clone.git](https://github.com/your-username/amazon-clone.git)
cd amazon-clone