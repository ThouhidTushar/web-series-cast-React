/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import "./Hearder.css"

const Header = () => {
	return (
		<div >
			<nav className="navbar-light bg-primary mb-5 pt-3 ">
				<div className="display">
					<a className="navbar-brand" href="#"><h1>Make A Web Series Team  <br />
						Budget: $200 Million</h1>
						<p className="fs-3">We Need To Create A Web Series Better Than Netflix Does</p></a>

				</div>
			</nav>
		</div>
	);
};

export default Header;