document.querySelector("#toggle-switch").addEventListener("change", (e) => {
    console.log(`Switch está ${e.target.checked ? "ON" : "OFF"}`);
});


const toggleSwitch = document.querySelector('#toggle-switch');
const htmlElement = document.documentElement;

// Alternar tema ao mudar o estado do switch
toggleSwitch.addEventListener("change", () => {
    if (toggleSwitch.checked) {
        htmlElement.classList.add("dark-theme");
    } else {
        htmlElement.classList.remove("dark-theme");
    }
});