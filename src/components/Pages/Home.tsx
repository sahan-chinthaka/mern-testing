
import "./Home.css";
import NavScrollExample from "../navbar";
import product1Image from "../Assests/product-1.png";
import product2Image from "../Assests/product-2.png";
import product3Image from "../Assests/product-3.png";
import product4Image from "../Assests/product-4.png";
import product5Image from "../Assests/product-5.jpg";
import product6Image from "../Assests/product-6.png";
const products = [
	{
	  id: 1,
	  name: "Samsung Galaxy S24",
	  rating: 4.3,
	  description:
		"Experience the future with Samsung Galaxy S24, featuring a stunning display, powerful performance, and an all-day battery life.",
	  price: 999,
	  image: product1Image,
	},
	{
	  id: 2,
	  name: "Apple iPhone 15 Pro Max",
	  rating: 4.8,
	  description:
		"The Apple iPhone 15 Pro Max brings the ultimate in smartphone technology with an advanced A15 Bionic chip, ProMotion display, and exceptional camera system.",
	  price: 1299,
	  image: product2Image,
	},
	{
	  id: 3,
	  name: "Apple Watch Series 9",
	  rating: 4.7,
	  description:
		"Stay connected, healthy, and active with the Apple Watch Series 9, featuring advanced health monitoring, fitness tracking, and seamless integration with your Apple devices.",
	  price: 499,
	  image: product3Image,
	},
	{
	  id: 4,
	  name: "Mi Watch",
	  rating: 4.2,
	  description:
		"The Mi Watch offers comprehensive fitness tracking, long battery life, and a sleek design at an affordable price.",
	  price: 199,
	  image: product4Image,
	},
	{
	  id: 5,
	  name: "Generic Mobile Phone",
	  rating: 3.9,
	  description:
		"A reliable and affordable mobile phone that covers all the basics, including a decent camera, long battery life, and smooth performance.",
	  price: 299,
	  image: product5Image,
	},
	{
	  id: 6,
	  name: "Bluetooth Headset",
	  rating: 4.5,
	  description:
		"Enjoy crystal-clear sound and hands-free calls with this lightweight Bluetooth headset, perfect for on-the-go communication.",
	  price: 149,
	  image: product6Image,
	},
  ];
  
function Home() {
	return (
		<div>
			<NavScrollExample />
			<div className="products">
					{products.map((product) => (
						<div
							className="product"
							key={product.id}>
							<img
								className="product-image"
								src={
									product.image
								}
								alt={
									product.image
								}
							/>
							<h4 className="product-name">
								{product.name}
							</h4>
							{/* <RatingStars
								rating={
									product.rating
								}
							/> */}
							<p>
								{
									product.description
								}
							</p>
							<span className="product-price">
								{product.price}$
							</span>
							<div className="buttons">
							<button className="btn">
									Add To Cart
								</button>
								<button className="btn">
									Detail
								</button>
								{/* <button
									className="btn"
									onClick={() =>
										addProductToCart(
											product
										)
									}>
									Add to cart
								</button> */}
							</div>
						</div>
					))}
				</div>

		</div>
	);
}

export default Home;
