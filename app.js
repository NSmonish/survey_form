import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-analytics.js";
const firebaseConfig = {
  apiKey: "AIzaSyBDLscQZGgcIqxF4k5BgXIUuoOEpkTdVT4",
  authDomain: "newsurveyform.firebaseapp.com",
  projectId: "newsurveyform",
  storageBucket: "newsurveyform.appspot.com",
  messagingSenderId: "426447578121",
  appId: "1:426447578121:web:ee5b189cec81ebcdcd84d8",
  measurementId: "G-WG5SKZLFFE"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore();
const colRef = collection(db, "formData");

const form = document.querySelector(".input-fields");
const name = document.querySelector("#name");
const dob = document.querySelector("#dob");
const gen = document.querySelector(".gen");
const email = document.querySelector("#email");
const countries = document.querySelector("#countries");
const cb = document.querySelector(".cb");
const curKnowledge = document.querySelector("#curKnowledge");
const aim = document.querySelector("#aim");
const dreamProject = document.querySelector("#dreamProject");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    addDoc(colRef, {
        name: name.value,
        dob: dob.value,
        gen: gen.value,
        email: email.value,
        countries: countries.value,
        cb: cb.value,
        curKnowledge: curKnowledge.value,
        aim: aim.value,
        dreamProject: dreamProject.value,
    })
    .then((result) => {
        form.reset()
        alert("your data was sucessfully stored to the database");
    })
    .catch((err) => {
        alert(err)
    });
});