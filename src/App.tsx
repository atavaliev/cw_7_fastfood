import React, {useState} from 'react';
import './App.css';
import MenuList from "./components/MenuList/MenuList";
import OrderList from "./components/OrderList/OrderList";
import {IOrderList} from "./type";
import TotalPrice from "./components/TotalPrice/TotalPrice";

const App = () => {

    const [orderList, setOrderList] = useState<IOrderList[]>([
        {name: 'Hamburger', price: 150, count: 0},
        {name: 'Cola', price: 50, count: 0},
        {name: 'Corndog', price: 45, count: 0},
        {name: 'Water', price: 35, count: 0},
        {name: 'Hotdog', price: 100, count: 0},
        {name: 'Tea', price: 45, count: 0},
        {name: 'Fries', price: 100, count: 0},
        {name: 'Coffee', price: 120, count: 0},
        {name: 'Kebab', price: 150, count: 0},
        {name: 'Bubble tea', price: 140, count: 0}
    ])

    //Add Meal to Order List
    const addOrder = (i: number) => {
        const orderListCopy = [...orderList];
        orderListCopy[i].count += 1;
        setOrderList(orderListCopy)
    }

    //Get total price of order
    const totalPrice = (): number => {
        return orderList.reduce((acc, i) => {
            acc += i.price * i.count
            return acc;
        }, 0)
    }

    //Get total item count to show "empty placeholder"
    const totalItemsCount = (): number => {
        return orderList.reduce((acc, i) => {
            acc += i.count
            return acc;
        }, 0)
    }

    // Remove item from order
    const removeOrder = (i: number) => {
        const orderListCopy = [...orderList];
        orderListCopy[i].count = 0;
        setOrderList(orderListCopy);
    };

    return (
        <div className="wrapper">
            <div className="main-block">
                <div className="order-block">
                    <OrderList
                        orderList={orderList}
                        totalItemsCount={totalItemsCount}
                        removeOrder={removeOrder}
                    />
                    <TotalPrice totalPrice={totalPrice}/>
                </div>
                <div className="menu-block">
                    <MenuList addOrder={addOrder}/>
                </div>
            </div>
        </div>
    );
}

export default App;
