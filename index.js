const box = document.getElementById("box");
const atas = document.getElementById("atas");
box.addEventListener("contextmenu", event => {
    event.target.textContent = "jangan mager belajarnya >:(";

});

box.addEventListener("click", event => {
    event.target.textContent = "semangat uas nya nad";
        
});
box.addEventListener("dblclick", event => {
    event.target.textContent = "you're the best so don't give up 😤";
        
});
