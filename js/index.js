let nav = document.querySelector("#nav-icon");
let img = document.querySelector("#nav_items .common_box_size section img");
let list = document.querySelector("#nav_items .common_box_size #list");

nav.addEventListener("click", (e) => {
    if (img.style.display === "none" && list.style.display === "none" ) {
        img.style.display = "block"; 
        list.style.display = "block";
    } else {
        img.style.display = "none";   // Hide the image if it's visible
        list.style.display = "none";  // Hide the link if it's visible
    }
});
