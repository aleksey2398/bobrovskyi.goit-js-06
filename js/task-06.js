const textInput = document.querySelector("#validation-input");
const requiredLength = Number(textInput.dataset.length);

textInput.addEventListener("blur", () => {
    if (textInput.value.length !== requiredLength) {
        textInput.classList.add("invalid")
    }
        else{
        textInput.classList.add("valid");
    }
})