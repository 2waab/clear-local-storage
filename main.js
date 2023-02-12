let button = document.querySelector("button"),
btnText = button.querySelector("span"),
btnIcon = button.querySelector("i");

button.onclick = () => {
    window.localStorage.clear();
    button.classList.add("done");
    btnText.textContent = "حذفت";
    btnIcon.className = "bx bx-check";
};