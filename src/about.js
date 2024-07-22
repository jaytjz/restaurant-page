import image1 from "./food.jpg"

export function about() {
    console.log("about module");

    const content = document.getElementById("content");
    content.innerHTML ="";

    const about = document.createElement("div");
    about.classList.add("about");
    about.innerHTML = `
        <div id="text">
            <p>Situated in the Westbourne Grove neighbourhood. <br> CHOJO is a cosy Chinese restaurant, cocktails and tea house. We serve authentic oriental small plates, dessert and cocktails.</p>
            <p>Chinese dining etiquette is about sharing, not only food, <br> but sharing the atmosphere, sharing a nice conversation, and most importantly sharing time together. </p>
            <p>We hope that our restaurant will become a piece of pleasant memory for our customers, <br> that is something money can not buy .</p>
            <p>We look forward to seeing you in our little restaurant !</p>
            <p>Kind regards,</p>
            <p>Cho & Jo</p>
        </div>
    `
    const myImage1 = new Image();
    myImage1.src = image1; 
    about.appendChild(myImage1);

    content.appendChild(about);
}