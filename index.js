"use strict";
let firstname = window.prompt("Enter your first name");
let lastname= window.prompt("Enter your last name");
let height = window.prompt("Enter your height (for example 179)");
let weight = window.prompt("Enter your weight (for example 78)");
let age = window.prompt("Enter your age");
let gender = window.prompt("Enter your gender (male or female)");


const LINE = "-----------------------------------------------------";


let bmr;
let bmi;
let normal;
let danger;

// geschlecht abfragen
while (gender.toLowerCase() != "male" && gender.toLowerCase() != "female") { // eingegebenes text wird klein gemacht
    gender = window.prompt("Male or female?");                      // wird so lange angezeigt bis man male oder female schreibt egal in groß oder klein buchstaben
}

// bmr berechnen
if (gender.toLowerCase() == "female") {
    bmr = 655 + (10 * weight) + (2 * height) - (6 * age);   // Rechnung für die Frauen
} else {
    bmr = 66 + (14 * weight) + (5 * height) - (7 * age);    // Rechnung für die Männer
}

// bmi berechnen
bmi = (10000 * weight) / (height ** 2);

// nromales gewicht
if (bmi >= 18 && bmi <= 25) {
    normal = "Yes";
} else {
    normal = "No";
}
// gefaht
if (bmi < 16 || bmi >= 30) {
    danger = "Yes";
} else {
    danger = "No";
}

// Größe in Meter umrechnen (mit Null für einstellige cm, z.B. 1,05m)   !!!! KI als hilfe eingesetzt !!!!
let m = (height - (height % 100)) / 100;
let cm = height % 100;
let cmText = (cm < 10) ? "0" + cm : cm;

// Ergebnis
console.log(LINE);
console.log("Name:                " + lastname.toUpperCase() + ", " + firstname);
console.log(LINE);
console.log("Age:                  " + age + " Years");
console.log("Height:              " + m + "," + cmText + "m");
console.log("Weight:               " + weight + " kg");
console.log("Basal Metabolic Rate: " + bmr + " kcal");
console.log("Body Mass Index:      " + bmi);
console.log("Normal Weight:        " + normal);
console.log("Danger:              " + danger);
console.log(LINE);