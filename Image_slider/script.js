const images = [
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800",
    "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800",
    "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=800"
];

let index = 0;

let image = document.getElementById("slide");
let prev = document.getElementById("prev");
let next = document.getElementById("next");

next.addEventListener("click", () => {
    index++;

    if(index > images.length){
        index = 0;
    }

    image.src = images[index];
})

prev.addEventListener("click", () => {
    index--;

    if(index < 0){
        index = images.length - 1;
    }

    image.src = images[index];
})