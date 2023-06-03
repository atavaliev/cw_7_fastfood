import BurgerImg from './assets/burger.png';
import Corndog from './assets/corndog.png';
import Hotdog from './assets/hotdog.png';
import FrenchFries from './assets/french-fries.png';
import Coffee from './assets/coffee-cup.png';
import Tea from './assets/tea-cup.png';
import Cola from './assets/cola.png';
import {IIngredient} from "./type";

export const INGREDIENTS:IIngredient[] = [
    {name: 'Hamburger', price: 80, count: 0, imgSrc: BurgerImg},
    {name: 'Corndog', price: 90, count: 0, imgSrc: Corndog},
    {name: 'Hotdog', price: 90, count: 0, imgSrc: Hotdog},
    {name: 'Fries', price: 45, count: 0, imgSrc: FrenchFries},
    {name: 'Coffee', price: 70, count: 0, imgSrc: Coffee},
    {name: 'Tea', price: 50, count: 0, imgSrc: Tea},
    {name: 'Cola', price: 40, count: 0, imgSrc: Cola},
];