import React from 'react';
import './App.css';

function App() {
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
                    <li className="menu-item">
                        <div className="menu-item--img">
                            <img src="" alt=""/>
                        </div>
                        <div>
                            <div>Name</div>
                            <div>Price KGS</div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default App;
