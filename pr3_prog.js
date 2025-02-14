function calculate() {
    let g = document.getElementById("gnd").value;
    let hFeet = parseFloat(document.getElementById("htf").value) || 0;
    let hInches = parseFloat(document.getElementById("hti").value) || 0;
    let w = parseFloat(document.getElementById("wt").value) || 0;

    // Validate inputs
    if (hFeet <= 0 && hInches <= 0) {
        alert("Please enter a valid height.");
        return;
    }
    if (w <= 0) {
        alert("Please enter a valid weight.");
        return;
    }

    let h = (hFeet * 12) + hInches;
    let b = 703 * w / (h * h);
    let m = "";

    if (g === "Male") {
        if (b <= 17.50) {
            m = "Anorexia";
        } else if (b <= 19.10) {
            m = "Underweight";
        } else if (b < 25.80) {
            m = "Ideal Range";
        } else if (b < 27.30) {
            m = "Marginally Overweight";
        } else if (b < 32.30) {
            m = "Overweight";
        } else {
            m = "Obese";
        }
    } else {
        if (b <= 17.50) {
            m = "Anorexia";
        } else if (b <= 20.70) {
            m = "Underweight";
        } else if (b < 26.40) {
            m = "Ideal Range";
        } else if (b < 27.80) {
            m = "Marginally Overweight";
        } else if (b < 31.10) {
            m = "Overweight";
        } else {
            m = "Obese";
        }
    }

    alert(m);
    document.getElementById("out").value = b.toFixed(2);
}
