import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';

const Cart = (props) => {

	const { cart } = props || {};

	// reduce method 
	const totalCost = (previousValue, currentValue) => previousValue + currentValue.salary,
		total = cart.reduce(totalCost, 0)


	// icons 
	const doller = <FontAwesomeIcon icon={faDollarSign} />
	const user = <FontAwesomeIcon icon={faUser} />

	return (
		<div>

			<h2> {user} Actor Added:{cart.length} </h2>
			<h2> {doller} Total Cost:{total} </h2>
			<ul>
				{
					cart.map(product => <li className="fs-3">{product.name}</li>)
				}
			</ul>


		</div>
	);
};

export default Cart;