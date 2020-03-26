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
let i = 0;
function showQuiz(quiz) {
    let str = '';
    str += `${quiz.question}`;
    document.getElementById("question").innerHTML = str; // show cau hoi

    let str1 = '';
    for (i = 0; i <= 3; i++) {
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
//let totalScore = 0;
let score = 0;
showQuiz(arrQuiz[count - 1]);

function correct(id) {

    if (arrQuiz[count - 1].isCorrect(id)) {
        alert("Chúc mừng bạn đã trả lời đúng, mời bạn qua câu tiếp theo!");
        count++;
        score += 1000;
       // totalScore += score;
        document.getElementById("score").innerHTML = "Score: " + score;
        showQuiz(arrQuiz[count - 1])

    } else {
        alert("Oh no, bạn trả lời sai mất rồi :(");
        alert("Điểm bạn nhận được: "+ score);
    }
}

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
    for (let j = 0; j < arr.length; j++) {
                // $("#arr[j]").hide();
        console.log(arr[j]);
        document.getElementById(arr[j].toString()).style.display = "none";

       document.getElementById("btn").disabled = true;
       // document.getElementById(arr[j].toString()).disabled = true;
      // $("#arr[i]").prop('disable',true);

    }
}
//console.log(divine5050(20));
function rule() {
    alert("Luật chơi: " +
        "Người chơi phải trả lời 10 câu hỏi với cấp độ từ dễ đến khó, " +
        "thời gian suy nghĩ không hạn chế. Quan trọng bạn phải biết search. Mỗi câu hỏi có một mức tiền thưởng, " +
        "tăng dần theo thứ tự. Có hai mốc quan trọng là câu số 5 và câu số 10 " +
        "(mốc \"TỶ PHÚ\"). Khi vượt qua các mốc này, bạn sẽ có được số tiền thưởng tương" +
        " ứng của các câu hỏi đó. "+"Bạn đã sẵn sàng để chơi với chúng tôi?")
}
