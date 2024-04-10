import { pageLoad } from "./initialPage-load";
import{menuLoad} from "./menuPage-load"
import './style.css';

console.log("Hello people! ");

const homeBtn = document.querySelector(".home");
homeBtn.addEventListener("click",pageLoad)

const menuBtn = document.querySelector(".menu");
menuBtn.addEventListener("click",menuLoad);

/* const contactBtn=document.querySelector(".contact");
contactBtn.addEventListener("click",) */