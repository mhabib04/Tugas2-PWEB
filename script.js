const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "x", "/", "+", "-"];
let output = "";

const calculate = (btnValue) => {
    display.focus();
    if (btnValue === "=" && output !== "") {
        try {
            output = eval(output.replace(/x/g, "*").replace(/%/g, "/100"));
        } catch (e) {
            output = "Error";
        }
    } else if (btnValue === "AC") {
        output = "";
    } else if (btnValue === "DEL") {
        output = output.toString().slice(0, -1);
    } else {
        if (output === "" && specialChars.includes(btnValue)) return;
        output += btnValue;
    }
    display.value = output;
};

buttons.forEach((button) => {
    button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});
