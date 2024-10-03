import ProductCard from "../components/ProductCard";
// import GetUsers from "../api/userApi";
// import ApiUsers from "../api/loginUsers";
import ApiProducts from "../api/productApi";
import { useState, useEffect } from "react";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    ApiProducts().then((data) => {
      setProducts(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="container px-4 px-lg-5 mt-5">
        <h1 className="title pb-4">List Products</h1>
        <button className="btn btn-primary" type="button" disabled>
          <span
            className="spinner-border spinner-border-sm"
            aria-hidden="true"
          ></span>
          <span role="status"> Loading Product</span>
        </button>
      </div>
    );
  }

  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        <h1 className="title pb-4">List Products</h1>
        <div className="kartu row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
