export function menu() {
    console.log("menu module")

    const content = document.getElementById("content");
    content.innerHTML ="";

    const menu = document.createElement("div");
    menu.classList.add("menu");
    content.appendChild(menu);

    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
    <h1>Restaurant Name</h1>
    <ul>
        <li>EDAMAME IN HIMALAYAN PINK SALT &nbsp; 6.5</li>
        <li>CRUSHED CUCUMBER SALAD &nbsp; 7</li>
        <li>LITTLE SPICY NOODLES &nbsp; 7</li>
        <li>SALTED EGG PRAWN &nbsp; 12.5</li>
        <li>STEAMED JASMINE RICE &nbsp; 3.5</li>
        <li>SHACHA BEEF WOK FRIED NOODLES &nbsp; 10</li>
    </ul>
`;

    menu.appendChild(card);
}