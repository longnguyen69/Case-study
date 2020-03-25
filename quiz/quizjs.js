class Quiz {
    constructor(question, answer, correct) {
        this.question = question;
        this.answer = answer;
        this.correct = correct;
    }

    isCorrect(index) {
        if (index === this.correct) {
            return true;
        }
        return false;
    }
}

function showQuiz(quiz) {
    let str = '';
    let i = 0;
    str += "<tr>";
    str += `<td id="question" colspan="4">${quiz.question}</td>`;
    str += "</tr>";

    for (i = 0; i <= 3; i++) {
        str += "<tr>";
        str += `<td id="${i}" onclick="correct(${i})">${quiz.answer[i]}</td>`;
        str += "</tr>";
    }
    document.getElementById("tables").innerHTML = str;
}
let quiz1 = new Quiz("question 1?", ["abc", "syz", "123", "abc"], 2);
let quiz2 = new Quiz("hom nay la thu may", ["2", "3", "4", "5"], 3);
let quiz3 = new Quiz("trua nay an gi", ["tao", "cam", "dua hau", "xoai"], 2);

let arrQuiz = [quiz1,quiz2,quiz3];
let count = 1;
showQuiz(arrQuiz[count-1]);
function correct(id) {
    if (arrQuiz[count-1].isCorrect(id)) {
        alert("say yes");
        count++;
        showQuiz(arrQuiz[count-1])
    } else {
        alert("say no");
    }
}

// 50:50
function user5050() {
let arr = [arrQuiz[count-1].answer[this.correct]];
let arrAnswer = arrQuiz[count-1].answer.splice(this.correct,1);
arr.push(arrAnswer[Math.floor(Math.random() * 3)]);
console.log(arr);
}
user5050();

