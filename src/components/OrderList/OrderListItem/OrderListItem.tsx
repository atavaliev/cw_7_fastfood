import React from 'react';
import {IOrderList} from "../../../type";
import Remove from '../../../assets/clear.png';

interface IProps {
    order: IOrderList;
    removeOrder: () => void;
}

const OrderListItem: React.FC<IProps> = ({order, removeOrder}) => {
    return (
        <div className="order-item">
            <div className="order-name"><strong>{order.name}</strong></div>
            <div className="order-count">x {order.count}</div>
            <div className="order-price"><strong>{order.price} KGS</strong></div>
            <img src={Remove} alt="remove order" className="remove-order" onClick={removeOrder} />
        </div>
    );
};

export default OrderListItem;