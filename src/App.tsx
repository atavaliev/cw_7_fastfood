import React, {useState} from 'react';
import './App.css';
import MenuList from "./components/MenuList/MenuList";
import OrderList from "./components/OrderList/OrderList";
import {IOrderList} from "./type";

const App = () => {

    const [orderList, setOrderList] = useState<IOrderList[]>([
        {name: 'Hamburger', price: 80, count: 0},
        {name: 'Corndog', price: 90, count: 0},
        {name: 'Hotdog', price: 90, count: 0},
        {name: 'Cheeseburger', price: 90, count: 0},
        {name: 'Fries', price: 45, count: 0},
        {name: 'Coffee', price: 70, count: 0},
        {name: 'Tea', price: 50, count: 0},
        {name: 'Cola', price: 40, count: 0},
    ])

    return (
        <div className="main-block">
            <div className="order-block">

                <OrderList orderList={orderList}/>
                <div>

                    Total price: 0 GKS
                </div>
            </div>
            <div className="menu-block">
                <MenuList/>
            </div>
        </div>
    );
}

export default App;
