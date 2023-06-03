import React from 'react';
import {IIngredient} from "../../type";

interface IProps {
    ingredient: IIngredient;
    index: number
}

const MenuListItem: React.FC<IProps> = ({ingredient}) => {
    return (
        <li className="menu-item">
            <div className="menu-item--img">
                <img src={ingredient.imgSrc} alt="Burger"/>
            </div>
            <div>
                <div>{ingredient.name}</div>
                <div>{ingredient.price} KGS</div>
            </div>
        </li>
    );
};

export default MenuListItem;