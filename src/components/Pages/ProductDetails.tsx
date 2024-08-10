
import { useParams } from 'react-router-dom';
import products from './productList';
import './ProductDetails.css'; 

function ProductDetails() {
  const { id } = useParams(); 
  const product = products.find(p => p.id === parseInt(id)); 

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div className="product-details">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-info">
        <h1 className="product-name">{product.name}</h1>
        <p className="product-description">{product.description}</p>
        <p className="product-price">${product.price}</p>
        <button className="btn-add-to-Cart">Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductDetails;
