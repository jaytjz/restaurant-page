import './style.css';
import { home } from "./home";
import { about } from "./about";
import { menu } from "./menu";

about();

const homeBtn = document.getElementById("home");
const menuBtn = document.getElementById("menu");
const aboutBtn = document.getElementById("about");

homeBtn.addEventListener("click", () => {
    home();
})

menuBtn.addEventListener("click", () => {
    menu();
})

aboutBtn.addEventListener("click", () => {
    about();
})