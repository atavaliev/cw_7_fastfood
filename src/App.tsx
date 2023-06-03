import React from 'react';
import './App.css';
import {INGREDIENTS} from "./data";


const App = () => {
    return (
        <div className="main-block">
            <div className="order-block">
                <div className="order-block--item">
                    Order Item x 1 <span>delete</span>
                </div>
                <div>
                    Total price: 0 GKS
                </div>
            </div>
            <div className="menu-block">
                <ul className="menu">
                    {INGREDIENTS.map((ing, index) => (
                        <li className="menu-item" key={index}>
                            <div className="menu-item--img">
                                <img src={ing.imgSrc} alt="Burger"/>
                            </div>
                            <div>
                                <div>{ing.name}</div>
                                <div>{ing.price} KGS</div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default App;
