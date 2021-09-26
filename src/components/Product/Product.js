
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { SocialIcon } from 'react-social-icons';




const Product = (props) => {

  const { name, role, age, country, salary, img } = props.product || {}
  const cart = <FontAwesomeIcon icon={faCartPlus} />

  return (
    <div className="col-md-4">
      <div className="card mb-4" style={{ "maxWidth": "auto" }} >
        <div className="row g-0">
          <div className="card">
            <img className="img-fluid" src={img} class="card-img-top" alt="" />
          </div>

          <div className="col-md-12">
            <div className="card-body">
              <h5 className="card-title fs-2"><small>{name}</small></h5>
              <p className="card-text fw-bold"> Role: {role}</p>
              <p className="card-text fw-bold"> Age: {age}</p>
              <p className="card-text fw-bold"> Country: {country}</p>
              <p className="card-text fw-bold"> Salary: {salary}</p>
              <button
                onClick={() => props.handleAddToCart(props.product)}
                type="button"
                className="btn btn-success">{cart} Add To Cart</button>
            </div>

            <div className="col-md-12">

              <div className="m-2">
                <SocialIcon className="m-2" url="https://facebook.com" />
                <SocialIcon className="m-2" url="https://whatsapp.com" />
                <SocialIcon className="m-2" url="https://twitter.com" />

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;