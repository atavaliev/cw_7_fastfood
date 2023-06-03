import React from 'react';
import {INGREDIENTS} from "../../data";
import MenuListItem from "../MenuListItem/MenuListItem";

interface IProps {
    addOrder: (index: number) => void;
}

const MenuList: React.FC<IProps> = ({addOrder}) => {
    return (
        <ul className="menu">
            {
                INGREDIENTS.map((ing, index) => (
                    <MenuListItem
                        key={Date.now() + index}
                        ingredient={ing}
                        index={index}
                        addOrder={addOrder}
                    />
                ))
            }
        </ul>
    );
};

export default MenuList;