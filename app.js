"use strict";

let scoresData = {
    names: [],
    score: [],
    mult: [],
    gpa: [],
};

const courseTitle = document.querySelector(".title");
const courseScore = document.querySelector(".score");
const courseMult = document.querySelector(".multiply");
const btnSubmit = document.querySelector(".btn_submit");
const btnCalc = document.querySelector(".btn_calc");
const message = document.querySelector(".message");
const list = document.querySelector(".list");
const finalGPA = document.querySelector(".finalGPA");
const container = document.querySelector(".container");

btnSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    if (courseTitle.value && courseMult.value && courseScore.value) {
        scoresData.names.push(courseTitle.value);
        scoresData.score.push(courseScore.value);
        scoresData.mult.push(+courseMult.value);
        let convertedGPA;
        if (courseScore.value >= 16 && courseScore.value <= 20) {
            convertedGPA = 4;
        } else if (courseScore.value >= 14 && courseScore.value < 16) {
            convertedGPA = 3;
        } else if (courseScore.value >= 12 && courseScore.value < 14) {
            convertedGPA = 2;
        } else if (courseScore.value >= 10 && courseScore.value < 12) {
            convertedGPA = 1;
        } else {
            convertedGPA = 0;
        }
        scoresData.gpa.push(convertedGPA);
        const html = `<span class="one_score">${courseTitle.value} : ${courseScore.value}</span>`;

        document
            .querySelector("#scoresContainer")
            .insertAdjacentHTML("beforeend", html);

        message.textContent = `نمره درس ${courseTitle.value} با موفقیت اضافه شد !`;
        message.style.display = "inline-block";

        courseTitle.value = "";
        courseScore.value = "";
        courseMult.value = "";
        console.log(`*************************`);
        for (let i = 0; i < scoresData.names.length; i++) {
            console.log(`${scoresData.names[i]} = ${scoresData.score[i]}`);
        }
        console.log(`*************************`);

        courseTitle.focus();
    }
});

btnCalc.addEventListener("click", (e) => {
    e.preventDefault();
    let sumGPA = 0;
    let sumUNITS = 0;
    for (let i = 0; i < scoresData.gpa.length; i++) {
        sumGPA += scoresData.gpa[i] * scoresData.mult[i];
        sumUNITS += scoresData.mult[i];
    }

    finalGPA.textContent = sumGPA / sumUNITS;
});
