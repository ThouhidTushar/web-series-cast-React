import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faDollarSign, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Cart = (props) => {

	const { cart } = props || {};
	const user = <FontAwesomeIcon icon={faUser} />
	const doller = <FontAwesomeIcon icon={faDollarSign} />
	const shoppingCart = <FontAwesomeIcon icon={faShoppingCart} />

	return (
		<div>

			<h2> {shoppingCart} Actor Added:{cart.length} </h2>
			<h2> {doller} Total Cost: </h2>
			<ul>
				{
					cart.map(product => <li className="fs-3">{product.name}</li>)
				}
			</ul>


		</div>
	);
};

export default Cart;