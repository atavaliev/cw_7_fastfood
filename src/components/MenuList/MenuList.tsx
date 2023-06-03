import React from 'react';
import {INGREDIENTS} from "../../data";
import MenuListItem from "../MenuListItem/MenuListItem";
import {IIngredient} from "../../type";



const MenuList:React.FC = () => {
    return (
        <ul className="menu">
            {
                INGREDIENTS.map((ing, index) => (
                <MenuListItem  key={Date.now()+index} ingredient={ing} index={index}/>
            ))
            }
        </ul>
    );
};

export default MenuList;