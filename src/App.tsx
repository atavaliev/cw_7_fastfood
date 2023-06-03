import React from 'react';
import './App.css';
import MenuList from "./components/MenuList/MenuList";


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
                <MenuList />
            </div>
        </div>
    );
}

export default App;
