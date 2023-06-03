import React from 'react';
import {IOrderList} from "../../type";
import OrderListItem from "./OrderListItem/OrderListItem";

interface IProps {
    orderList: IOrderList[];
    totalItemsCount: () => number;
    removeOrder:(index:number) => void;
}

const OrderList: React.FC<IProps> = ({orderList,totalItemsCount, removeOrder}) => {
    return (
        <div>
            {totalItemsCount() > 0
               ? orderList.map((order, index) => {
                    return order.count !== 0
                        ? <OrderListItem key={index} order={order} removeOrder={() => removeOrder(index)}/>
                        : null;
                })
                : <div>
                    <p><strong>Order is Empty!</strong></p>
                    <p><strong>Please ass some items</strong></p>
                </div>
            }
        </div>
    );
};


export default OrderList;