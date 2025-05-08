const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  if (
    height == "" ||
    height < 0 ||
    isNaN(height) ||
    weight === "" ||
    weight < 0 ||
    isNaN(weight)
  ) {
    results.innerHTML = `Please enter valid input <br/>height: ${height} <br/> weight: ${weight}`;
  } else {
    const bmi = (weight / (height ** 2 / 10000)).toFixed(2);
    const results = document.querySelector("#results");
    results.innerHTML =
      bmi <= 18.6
        ? `<span>
    Under Weight:
    ${bmi}</span>`
        : bmi >= 18.6 && bmi < 24.9
        ? `<span>
        Normal Range:
    ${bmi}</span>`
        : `<span>
        Overweight:
    ${bmi}</span>`;

    if (bmi < 18.5) {
      category = "Underweight";
    } else if (bmi < 25) {
      category = "Normal";
    } else if (bmi < 30) {
      category = "Overweight";
    } else {
      category = "Obese";
    }
    results.innerHTML = `Your BMI is ${bmi} (${category})`;
  }
});

// document.addEventListener("DOMContentLoaded", () => {
//   const form = document.getElementById("bmi-form");
//   const result = document.getElementById("result");
//   const bmiSvg = document.getElementById("bmi-svg");
//   const toggle = document.getElementById("toggle");
//   const body = document.body;

//   // Theme toggle
//   toggle.addEventListener("change", () => {
//     body.classList.toggle("dark-mode");
//     body.classList.toggle("light-mode");
//   });

//   // BMI calculation
//   form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     const height = parseFloat(document.getElementById("height").value);
//     const weight = parseFloat(document.getElementById("weight").value);

//     if (height > 0 && weight > 0) {
//       const bmi = (weight / (height / 100) ** 2).toFixed(1);
//       let category = "";
//       let color = "";

//       if (bmi < 18.5) {
//         category = "Underweight";
//       } else if (bmi < 25) {
//         category = "Normal";
//       } else if (bmi < 30) {
//         category = "Overweight";
//       } else {
//         category = "Obese";
//       }

//       result.textContent = `Your BMI is ${bmi} (${category})`;

//       // Update SVG
//       bmiSvg.innerHTML = `
//           <circle cx="50" cy="50" r="40" fill="${color}" />
//         `;
//     } else {
//       result.textContent = "Please enter valid height and weight.";
//       bmiSvg.innerHTML = "";
//     }
//   });
// });
