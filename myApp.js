// let arrQuestion = ["question 1","question 2","question 3","question 4","question 5","question 6","question 7","question 8","question 9","question 10"];
// let arrAnswer = ["Asdf","Bfdf","Cfdfs","Bgfd","Dfsdf","Cdsgfsdf","Dsgfsdf","Aagfsdf","Coosdf","Bfeff"];
// let arrFalseAnswer = ["t","m","o","p","u","t","y",]
//
// //show cau hoi
// function initQuestion(question) {
//     document.getElementById("question").innerHTML = question;
// }
// function showQuestion(number) {
//     initQuestion(arrQuestion[number]);
// }
// // show cau tra loi
// function initAnswer(answer) {
//     answer = Math.floor(Math.random()*10);
//     // document.getElementById("answer-box-A").innerHTML = answer;
//     // document.getElementById("answer-box-B").innerHTML = answer;
//     // document.getElementById("answer-box-C").innerHTML = answer;
//     // document.getElementById("answer-box-D").innerHTML = answer;
// }
// function showAnswer() {
//
// }
//
// class Quiz {
//     constructor(question,answer,correct) {
//         this.question = question;
//         this.answer = [];
//         this.correct = correct;
//     }
//
//     isCorrect(index){
//         if(this.answer[index] === this.correct){
//             return true;
//         }
//         return false;
//     }
//
// }
// let quiz1 = new Quiz("")
class Quiz {
    constructor(question, answer, correct) {
        this.question = question;
        this.answer = answer;
        this.correct = correct;
    }
    isCorrect(index){
        if (this.answer[index] === this.correct){
            return true;
        }
        return false;
    }
}

let quizs=
    [
        ["qes0",
        [1,2,3,4],
            3
        ],
        ["qes1",
            [4,5,6,7],
            7
        ],
        ["qes2",
            [7,8,9,10],
            8
        ]
    ];

for (let i = 0; i < quizs.length; i++) {
    let quiz = new Quiz(quizs[i][0],quizs[i][1],quizs[i][2]);
    console.log(quiz);
    console.log(quiz.question);
    console.log(quiz.answer[0]);
}