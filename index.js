const box = document.getElementById("box");

function changetext(event){
        console.log(event);
}
    
box.addEventListener("click", event => {
    event.target.textContent = "hello";
});