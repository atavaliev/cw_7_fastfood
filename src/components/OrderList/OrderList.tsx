import React from 'react';
import {IOrderList} from "../../type";

interface IProps {
    orderList:IOrderList[];
}

const OrderList:React.FC<IProps> = ({orderList}) => {
    return (
        <div>
            {
                orderList.map((order, index) => {
                    return <li key={index} style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: '5px 10px',
                            border: '1px solid #000',
                            margin: '2px'
                        }}>
                            {order.name} {order.count} x {order.price}
                            <span>delete</span>
                        </li>
                })
            }
        </div>
    );
};

export default OrderList;