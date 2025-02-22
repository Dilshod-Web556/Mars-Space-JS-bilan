
const phoneInput = document.getElementById("phone")
const passwordInput = document.getElementById("password");
const submitBtn = document.getElementById("submitBtn");
const togglePassword = document.getElementById("togglePassword");

function updateButtonState() {
    if (phoneInput.value.trim() !== "" && passwordInput.value.trim() !== "") {
        submitBtn.classList.remove("bg-gray-300", "cursor-not-allowed");
        submitBtn.classList.add("bg-orange-500");
        submitBtn.removeAttribute("disabled");
    } else {
        submitBtn.classList.add("bg-gray-300", "cursor-not-allowed");
        submitBtn.classList.remove("bg-orange-500");
        submitBtn.setAttribute("disabled", "true");
    }
}

phoneInput.addEventListener("input", updateButtonState);
passwordInput.addEventListener("input", updateButtonState);

togglePassword.addEventListener("mousedown", () => {
    passwordInput.type = "text";
});

togglePassword.addEventListener("mouseup", () => {
    passwordInput.type = "password";
});

togglePassword.addEventListener("click", () => {
    passwordInput.type = "password";
});

submitBtn.addEventListener("click", () => {
    if (phoneInput.value == "123" && passwordInput.value == "123") {
        window.location.href = './main.html'
    }else{
        alert("Invalid phone number or password!")
    }
    
});
