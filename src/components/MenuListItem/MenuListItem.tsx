import React from 'react';
import { IIngredient } from "../../type";

interface IProps {
    ingredient: IIngredient;
    index: number;
    addOrder: (index: number) => void;
}

const MenuListItem: React.FC<IProps> = ({ ingredient, index, addOrder }) => {
    return (
        <li className="menu-item" onClick={() => addOrder(index)}>
            <div className="menu-item--img">
                <img src={ingredient.imgSrc} alt="Burger" />
            </div>
            <div>
                <div>{ingredient.name}</div>
                <div>{ingredient.price} KGS</div>
            </div>
        </li>
    );
};

export default MenuListItem;
