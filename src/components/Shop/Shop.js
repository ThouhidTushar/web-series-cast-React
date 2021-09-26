import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Shop = () => {

	const [products, setProducts] = useState([])

	useEffect(() => {
		fetch("/dramaSeries.JSON")
			.then(response => response.json())
			.then(data => setProducts(data));
	}, [])



	return (
		<div className="container">
			<div className="row">
				<div className="col-md-9">
					{/* product gulo load korbo */}

					<div className="row">
						{
							products.map(product => <Product product={product}>
							</Product>)
						}

					</div>

				</div>

				<div className="col-md-3">
					{/* এইখানে কার্ট হবে */}
					<h1 className="text-success">eikhane cart er calculation</h1>

				</div>
			</div>
		</div>
	)
};

export default Shop;