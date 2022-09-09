import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Item = ({ product }) => {
  const { id, img, name, description, price, stock } = product;
  const navegar = useNavigate();
  return (
    <div
      class="card text-center"
      style={{ width: '23rem', height: '23rem', padding: "1rem", margin: 180
     }}
    >
      <div class="card-header">RentUs!</div>
      <div class="card-body">
        <h5 class="card-title">{name}</h5>

        <img src={img} className="card-img-top" alt={name} />

        <p class="card-text">{description}</p>
        <p className="card-text">stock: {stock}</p>
        <button
          className="btn btn-primary"
          onClick={() => navegar(`/detalle/${id}`)}
        >
          detalle
        </button>
      </div>
      <div class="card-footer text-muted">$ {price}</div>
    </div>
  );
};

export default Item;
