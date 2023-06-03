import BurgerImg from './assets/burger.png';
import Corndog from './assets/corndog.png';
import Hotdog from './assets/hotdog.png';
import FrenchFries from './assets/french-fries.png';
import Coffee from './assets/coffee-cup.png';
import Tea from './assets/tea-cup.png';
import Cola from './assets/cola.png';
import Water from './assets/water.png';
import Kebab from './assets/kebab.png';
import BubbleTea from './assets/bubble-tea.png';
import {IIngredient} from "./type";

export const INGREDIENTS:IIngredient[] = [
    {name: 'Hamburger', price: 150, count: 0, imgSrc: BurgerImg},
    {name: 'Cola', price: 50, count: 0, imgSrc: Cola},
    {name: 'Corndog', price: 45, count: 0, imgSrc: Corndog},
    {name: 'Water', price: 35, count: 0, imgSrc: Water},
    {name: 'Hotdog', price: 100, count: 0, imgSrc: Hotdog},
    {name: 'Tea', price: 45, count: 0, imgSrc: Tea},
    {name: 'Fries', price: 100, count: 0, imgSrc: FrenchFries},
    {name: 'Coffee', price: 120, count: 0, imgSrc: Coffee},
    {name: 'Kebab', price: 150, count: 0, imgSrc: Kebab},
    {name: 'Bubble tea', price: 140, count: 0, imgSrc: BubbleTea},
];