import { initialPage } from "./initialPage-load";
import{menuPage} from "./menuPage-load"
import { contactPage } from "./contactPage-load";
import './style.css';

console.log("Hello people! ");

const homeBtn = document.querySelector(".home");
homeBtn.addEventListener("click",initialPage)

const menuBtn = document.querySelector(".menu");
menuBtn.addEventListener("click",menuPage);

const contactBtn = document.querySelector(".contact");
contactBtn.addEventListener("click",contactPage);

/* const contactBtn=document.querySelector(".contact");
contactBtn.addEventListener("click",) */