// import React from 'react'

import { useState } from "react";
import Header from "../partials/Header";
import { Link } from "react-router-dom";

export default function Cart() {
    // Retrieve cart items from local storage
    const [cartPlantes,setCartPlantes] = useState(JSON.parse(localStorage.getItem('cartPlantes')).map((plant) => {
        if(plant.quantity === undefined)
            plant.quantity = 1;
        return plant;
    }) || []);

    const increasePlanteCart = (cartPlante) => {
        const updatedCartPlantes = cartPlantes.map((plante) => {
            if (plante.id === cartPlante.id) {
                return {...plante, quantity: plante.quantity + 1 };
            }
            return plante;
        });
        setCartPlantes(updatedCartPlantes);
        localStorage.setItem('cartPlantes', JSON.stringify(updatedCartPlantes));
    }
    const decreasePlanteCart = (cartPlante) => {
        if (cartPlante.quantity > 1) {
            const updatedCartPlantes = cartPlantes.map((plante) => {
                if (plante.id === cartPlante.id) {
                    return {...plante, quantity: plante.quantity-1 };
                }
                return plante;
            });
            setCartPlantes(updatedCartPlantes);
            localStorage.setItem('cartPlantes', JSON.stringify(updatedCartPlantes));
        }else{
            removePlantFromCart(cartPlante);
        }
    }
    const removePlantFromCart = (cartPlante) => {
        setCartPlantes(cartPlantes.filter(plante => plante.id != cartPlante.id));
        localStorage.setItem('cartPlantes', JSON.stringify(cartPlantes))
    };
    const checkout = ()=>{
        setCartPlantes([]);
        localStorage.removeItem('cartPlantes');
        alert("Completed successful checkout")
        location.href = "/coursera-shopping-site-react/plants";
    }

    return (
        <>
            <Header cartNumber={cartPlantes.length} />
            <div className="cart-container">
                <h1>Total Cart Amount : ${cartPlantes.reduce((total, plante) => total + plante.prix * (plante.quantity), 0)}</h1>
                {cartPlantes.length > 0? (
                    <ul className="cartList">
                        {cartPlantes.map((plante) => (
                            <li key={plante.id}>
                                <img src={plante.image} alt={plante.nom} />
                                <h2>{plante.nom}</h2>
                                <p>{plante.description}</p>
                                <p>Total : ${plante.prix * (plante.quantity)}</p>
                                <div className="flex">
                                    <button type='button' onClick={() => increasePlanteCart(plante)}>+</button>
                                    <p>{plante.quantity}</p>
                                    <button type='button' onClick={() => decreasePlanteCart(plante)}>-</button>
                                </div>
                                <button type='button' className="removeButton" onClick={() => removePlantFromCart(plante)}>Remove</button>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>Cart is empty</p>
                )}
                <div className="cart-total">
                    <Link to='/coursera-shopping-site-react/plants' className="backLink">Continue Shopping</Link>
                    {cartPlantes.length > 0? <button type='button' onClick={() => checkout()}>Checkout</button> : null}
                </div>
            </div>
        </>
    )
}
