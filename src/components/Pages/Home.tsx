import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./Home.css";
import NavScrollExample from "../navbar";
import Button from 'react-bootstrap/Button';
import { CartContext } from './CartContext';
import product1Image from "../Assests/product-1.png";
import product2Image from "../Assests/product-2.png";
import product3Image from "../Assests/product-3.png";
import product4Image from "../Assests/product-4.png";
import product5Image from "../Assests/product-5.jpg";
import product6Image from "../Assests/product-6.png";


interface Product {
  id: number;
  name: string;
  rating: number;
  description: string;
  price: number;
  image: string;
}

interface CartItem extends Product {
  quantity: number;
}

const products: Product[] = [
	{
		id: 1,
		name: "Samsung Galaxy S24",
		rating: 4.3,
		description: "Experience the future with Samsung Galaxy S24, featuring a stunning display, powerful performance, and an all-day battery life.",
		price: 999,
		image: product1Image,
	  },
	  {
		id: 2,
		name: "Iphone 15 Pro Max",
		rating: 4.8,
		description: "The Apple iPhone 15 Pro Max brings the ultimate in smartphone technology with an advanced A15 Bionic chip, ProMotion display, and exceptional camera system.",
		price: 1299,
		image: product2Image,
	  },
	  {
		id: 3,
		name: "Apple Watch Series 9",
		rating: 4.7,
		description: "Stay connected, healthy, and active with the Apple Watch Series 9, featuring advanced health monitoring, fitness tracking, and seamless integration with your Apple devices.",
		price: 499,
		image: product3Image,
	  },
	  {
		id: 4,
		name: "Mi Watch",
		rating: 4.2,
		description: "The Mi Watch offers comprehensive fitness tracking, long battery life, and a sleek design at an affordable price.",
		price: 199,
		image: product4Image,
	  },
	  {
		id: 5,
		name: "Generic Mobile Phone",
		rating: 3.9,
		description: "A reliable and affordable mobile phone that covers all the basics, including a decent camera, long battery life, and smooth performance.",
		price: 299,
		image: product5Image,
	  },
	  {
		id: 6,
		name: "Bluetooth Headset",
		rating: 4.5,
		description: "Enjoy crystal-clear sound and hands-free calls with this lightweight Bluetooth headset, perfect for on-the-go communication.",
		price: 149,
		image: product6Image,
	  },
];

const Home: React.FC = () => {
  const cartContext = useContext(CartContext);
  const navigate = useNavigate();

  if (!cartContext) {
    throw new Error("CartContext must be used within a CartProvider");
  }

  const { addToCart } = cartContext;

  const handleAddToCart = (product: Product) => {
    const cartItem: CartItem = { ...product, quantity: 1 }; 
    addToCart(cartItem);
    navigate('/cart'); 
  };

  return (
    <div>
      <NavScrollExample />
      <div className="products">
        {products.map((product) => (
          <div className="product" key={product.id}>
            <img className="product-image" src={product.image} alt={product.name} />
            <h4 className="product-name">{product.name}</h4>
            <p>{product.description}</p>
            <div className="price-and-cart">
              <span className="product-price">${product.price}</span>
              <Button variant="primary" className='rounded-pill add-to-cart-btn' onClick={() => handleAddToCart(product)}>
                Add to Cart
              </Button>
            </div>
            <div className="buttons">
              <Link to={`/product/${product.id}`}>
                <Button variant="primary" className='rounded-pill'>
                  Details
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
