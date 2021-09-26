
import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

const Shop = () => {

	const [products, setProducts] = useState([])
	const [cart, setCart] = useState([])


	const handleAddToCart = (product) => {
		// console.log(product);
		const newCart = [...cart, product]
		setCart(newCart)
		console.log(newCart);
	}


	//  ডাটা কল করলাম 
	useEffect(() => {
		fetch("./dramaSeries.JSON")
			.then(res => res.json())
			.then(data => setProducts(data));
	}, [])


	return (
		<div className="container">
			<div className="row">
				<div className="col-md-9">
					{/* এখানে প্রোডাক্ট লোড করবো*/}

					<div className="row">
						{
							products.map(product =>
								<Product
									product={product}
									handleAddToCart={handleAddToCart}>
								</Product>)
						}

					</div>

				</div>

				<div className="col-md-3">
					{/* এইখানে কার্ট হবে */}
					<Cart
						cart={cart}

					>

					</Cart>

				</div>
			</div>
		</div>
	)
};

export default Shop;