export function home() {
    console.log("home module");

    const content = document.getElementById("content");
    content.innerHTML ="";

    const home = document.createElement("div");
    home.classList.add("home");
    home.textContent = "Contemporary independent brunch café with a singular focus on quality"

    content.appendChild(home);
}