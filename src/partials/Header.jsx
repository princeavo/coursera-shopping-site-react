// import React from 'react'
import { Link } from 'react-router-dom'

export default function Header({cartNumber}) {
    return (
        <header>
            <h1>Paradise Nursery</h1>
            <div className="cart">
                <Link to="/coursera-shopping-site-react" id='home-link'>Retour à l&apos;accueil</Link>
                <Link to="/cart" id='cart-box'>
                    <div>
                        <img src="https://img.icons8.com/ios-filled/50/000000/shopping-cart.png" alt="Panier" />
                        <span>{cartNumber}</span>
                    </div>
                </Link>
            </div>
        </header>
    )
}
