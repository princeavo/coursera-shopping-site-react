import React, { useState, useEffect } from 'react';
import plantesData from '../../data/plantes.json';
import '../css/plants.css'
import { Link } from 'react-router-dom';
import Header from '../partials/Header';

const Plants = () => {
    const [plantes, setPlantes] = useState([]);
    const [cartPlantes, setCartPlantes] = useState(
        JSON.parse(localStorage.getItem('cartPlantes')) || []
    );
    useEffect(() => {
        setPlantes(plantesData);
    }, []);

    const addToCart = (plante) => {
        const newCartPlantes = [...cartPlantes, plante];
        setCartPlantes(newCartPlantes);
        localStorage.setItem('cartPlantes', JSON.stringify(newCartPlantes));
    };
    const planteIsAddedToCart = (plante) => {
        return cartPlantes.some((cartPlante) => cartPlante.id === plante.id);
    };

    return (
        <>
            <Header cartNumber={cartPlantes.length} />
            <div className="plantes-container">
                <h1>Liste des Plantes</h1>
                <div className="plantes-list">
                    {plantes.map((plante) => (
                        <Plant plante={plante} key={plante.id} addToCart={addToCart} planteIsAddedToCart={planteIsAddedToCart} />
                ))}
                </div>
            </div>
        </>
    );
};


const Plant = ({plante,addToCart,planteIsAddedToCart}) => {
    return (
        <div className="plante-card">
            <img src={plante.image} alt={plante.nom} className="plante-image" />
            <h2>{plante.nom}</h2>
            <p>{plante.description}</p>
            <p>Prix : ${plante.prix}</p>
            {planteIsAddedToCart(plante)? <button disabled type='button'>Added to cart</button> : <button type='button' onClick={() => addToCart(plante)}>Add to cart</button>}
            <span>
                SALE
            </span>
        </div>
    )
}



export default Plants;
