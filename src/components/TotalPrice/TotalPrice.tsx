import React from 'react';

interface IProps {
    totalPrice: () => number;
}

const TotalPrice:React.FC<IProps> = ({totalPrice}) => {
    return (
        <div className="total-price">
            Total price: <strong>{totalPrice()} KGS</strong>
        </div>
    );
};

export default TotalPrice;