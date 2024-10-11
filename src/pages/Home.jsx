import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ApiProducts from "../api/productApi";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("userToken");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    ApiProducts()
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const handleCart = (id, count) => {
    if (!isLoggedIn) {
      if (window.confirm("Please login first")) {
        navigate("/login");
      }
    } else {
      const newCart = { ...cart };
      if (newCart[id]) {
        newCart[id]++;
      } else {
        newCart[id] = 1;
      }
      setCart(newCart);
      setCartCount(count);
      localStorage.setItem("cart", JSON.stringify(newCart));
    }
  };

  if (loading) {
    return (
      <div className="container px-4 px-lg-5 mt-5">
        <h1 className="title pb-4">List Products</h1>
        <button className="btn btn-primary" type="button" disabled>
          <span
            className="spinner-border spinner-border-sm"
            aria-hidden="true"
          ></span>
          <span role="status">Loading Products...</span>
        </button>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container px-4 px-lg-5 mt-5">
        <h1 className="title pb-4">Error</h1>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        <h1 className="title pb-4">List Products</h1>
        <div className="kartu row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              handleCart={handleCart}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
