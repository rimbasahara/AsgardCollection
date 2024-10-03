import { Link } from "react-router-dom";
import "../styles/ProductCard.css";

const ProductCard = ({ product }) => {
  const uppercaseHandle = product.category.toUpperCase();

  return (
    <div className="product-card">
      <div className="badge rounded-pill text-bg-primary">
        Qty: {product.rating.count}
      </div>
      <div className="product-tumb">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="product-details">
        <span className="product-catagory">{uppercaseHandle}</span>
        <div className="product-title">
          <h4>
            <a href="">{product.title}</a>
          </h4>
        </div>

        <p>{product.description}</p>
        <div className="product-bottom-details">
          <div className="product-price">
            <small>${(product.price * 2).toFixed(2)}</small>$
            {product.price.toFixed(2)}
          </div>
          <div className="product-links">
            <a href="">
              <i className="fa fa-heart"></i>
            </a>
            <a href="">
              <i className="fa fa-shopping-cart"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
