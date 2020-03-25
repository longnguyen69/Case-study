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
    str += `${quiz.question}`;
    document.getElementById("question").innerHTML = str; // show cau hoi

    let str1 = '';
    for (let i = 0; i <= 3; i++) {
        str1 += `<div id='${i}' onclick="correct(${i})" style="display: block; text-align: center; color: white; border-radius: 30px; background-color: brown; height: 50px; border: 1px solid brown; margin-bottom: 10px;">`;
        str1 += `${quiz.answer[i]}`;
        str1 += "</div>";
    }
    document.getElementById("tables").innerHTML = str1; //show cau tra loi
}

let quiz1 = new Quiz("question 1?", ["abc", "syz", "123", "abc"], 2);
let quiz2 = new Quiz("hom nay la thu may", ["2", "3", "4", "5"], 3);
let quiz3 = new Quiz("trua nay an gi", ["tao", "cam", "dua hau", "xoai"], 2);

let arrQuiz = [quiz1, quiz2, quiz3];
let count = 1;
let score = 0;
showQuiz(arrQuiz[count - 1]);

function correct(id) {
    if (arrQuiz[count - 1].isCorrect(id)) {
        alert("say yes");
        count++;
        score += 1000;
        document.getElementById("score").innerHTML = "Score: " + score;
        showQuiz(arrQuiz[count - 1])

    } else {
        alert("say no");
    }
}

// 50:50
// function random5050() {
//     let random1 = Math.floor(Math.random()*4); //random id
//     let random2 = Math.floor(Math.random()*4); //random id
//
//     if (random1 === arrQuiz[count-1].correct){
//         random1++;
//     }
//     if ( random2 === arrQuiz[count-1].correct){
//         random2++;
//     }
//     if (random1 === random2){
//         random1++;
//     }
//     console.log(random1);
//     console.log(random2);
//     if (random1 !== arrQuiz[count-1].correct){
//         document.getElementById(`${random1}`).style.display = "none";
//     }
//     if (random2 !== arrQuiz[count-1].correct){
//         document.getElementById(`"${random2}"`).style.display = "none";
//     }
// }



function divine5050(number) {
    let exArr = [];
    for (let i = 0; i < number/2; i++) {
        let ran = Math.floor(Math.random()*number);
        if(ran === arrQuiz[count-1].correct || exArr.includes(ran)){
            i--;
        }else {
            exArr.push(ran);
        }
    }
    return exArr;
}

function disable5050(){
    let arr = divine5050(4);
    console.log(arr);
    for (let i = 0; i < arr.length-1; i++) {
        $("#arr[i]").prop('disable',true);
    }
}
//console.log(divine5050(20));

