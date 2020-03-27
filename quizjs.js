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
        str1 += `<button id='${i}' onclick="checkCorrect(${i})" style="display: block; text-align: center; color: white; 
border-radius: 30px; font-size: 20px; height: 50px; border: 1px solid cyan; padding-top: 10px; margin-bottom: 10px;">`;
        str1 += `${quiz.answer[i]}`;
        str1 += "</button>";
    }
    document.getElementById("tables").innerHTML = str1; //show cau tra loi
}

let quiz1 = new Quiz("Câu 1: Hình nộm người đứng ở cánh đồng mà nông dân dựng lên được gọi là gi?", ["A: Bù xù", "B: Bù nhìn", "C: Bù đầu", "D: Bù trừ"], 1);
let quiz2 = new Quiz("Câu 2: Cầu thủ nào ở đội tuyển Bra-xin được mệnh danh là Pê-lê trắng?", ["A: Zico", "B: Ronaldo", "C: Romario", "D: Ronaldinho"], 0);
let quiz3 = new Quiz("Câu 3: Từ nào dùng để chỉ người phụ nữ đẹp?", ["A: Giai điệu", "B: Giai nhân", "C: Giai đoạn", "D: Giai cấp"], 1);
let quiz4 = new Quiz("Câu 4: \"Con có cha như nhà có ...\" gì?", ["A: Cửa", "B: Sân", "C: Tù", "D: Nóc"], 3);
let quiz5 = new Quiz("Câu 5: Mùa nào được nhắc đến trong đoạn thơ sau: \"Cuối trời mây trắng bay/ Lá vàng thưa thớt quá/ Phải chăng lá về rừng/ ... đi cùng lá/ ... ra biển cả\"?", ["A: Mùa xuân", "B: Mùa hạ", "C: Mùa thu", "D: Mùa đông"], 2);
let quiz6 = new Quiz("Câu 6: Quả ớt có nguồn gốc từ châu lục nào?", ["A: Châu Á", "B: Châu Âu", "C: Châu Mỹ", "D: Châu Phi"], 2);
let quiz7 = new Quiz("Câu 7: Điền từ còn thiếu vào câu thành ngữ sau: \"Vắng chủ nhà, gà...\"", ["A: Mọc đuôi tôm", "B: Vọc niêu tôm", "C: Ăn trộm tôm", "D: Mổ chết tôm"], 1);
let quiz8 = new Quiz("Câu 8: Loại củ nào giúp vết thương mau lành, không để lại sẹo?", ["A: Gừng", "B: Giềng", "C: Hành", "D: Nghệ"], 3);
let quiz9 = new Quiz("Câu 9: World Cup 2022 sẽ được tổ chức ở quốc gia nào?", ["A: Uruguay", "B: Argentina", "C: Quatar", "D: Brazil"], 2);
let quiz10 = new Quiz("Câu 10: Theo một câu ca dao xưa thì \"Một chục quả hồng nuốt…\" ai?", ["A: Lão chín mươi", "B: Lão tám mươi", "C: Lão bảy mươi", "D: Lão sáu mươi"], 1);

let arrQuiz = [quiz1, quiz2, quiz3, quiz4, quiz5, quiz6, quiz7, quiz8, quiz9, quiz10];
let count = 1;
let score = 0;
showQuiz(arrQuiz[count - 1]);

function correct(id) {
    let currItem = document.getElementById(id);
    if (currItem.disabled)
        return;
    if (arrQuiz[count - 1].isCorrect(id)) {
        return true;
    } else {
        return false;
    }
}

function checkCorrect(id) {
    if (correct(id)) {
        alert("Chúc mừng bạn đã trả lời đúng, mời bạn qua câu tiếp theo!");
        count++;
        score += 1000;
        checkWin();
        document.getElementById("score").innerHTML = "Score: " + score;
        showQuiz(arrQuiz[count - 1]);
    } else {
        alert("Oh no, bạn trả lời sai mất rồi");
        alert("Điểm bạn nhận được: " + score);
        count = 1;
        score = 0;
        document.getElementById("score").innerHTML = "Score: " + score;
        showQuiz(arrQuiz[count - 1]);
    }
}

function checkWin() {
    if (score === 10000) {
        alert("Xin chúc mừng bạn là người chiến thắng, số tiền bạn nhận được sau phần chơi là: 10.000.000 đồng");
        confirm('Bạn có muốn chơi lại không?');
        console.log(confirm());
        if (confirm() === true) {
            count = 1;
            score = 0;
            showQuiz(arrQuiz[count - 1]);
        }
    }
}

// function callBack() {
//     if (checkWin() === true ){
//         count = 1;
//         score = 0;
//         showQuiz(arrQuiz[count - 1]);
//     }
// }
// callBack();
function divine5050(number) {
    let exArr = [];
    for (let i = 0; i < number / 2; i++) {
        let ran = Math.floor(Math.random() * number);
        if (ran === arrQuiz[count - 1].correct || exArr.includes(ran)) {
            i--;
        } else {
            exArr.push(ran);
        }
    }
    return exArr;
}

function disable5050() {
    let arr = divine5050(4);
    for (let j = 0; j < arr.length; j++) {
        document.getElementById(arr[j].toString()).disabled = true;
        document.getElementById(arr[j].toString()).style.backgroundColor = "white";
        document.getElementById("btn").disabled = true;
        document.getElementById("imgBtn").src = "gachcheo.png";
    }
}

//hoi y kien laptop
function initHelpComputer() {
    //random id 0
    let a = Math.floor(Math.random() * 101);
    let b = Math.floor(Math.random() * 101);
    let c = Math.floor(Math.random() * 101);
    let d = 0;
    let arrHelp = [a, b, c];
    if (a + b + c <= 100) {
        d = 100 - a - b - c;
        arrHelp.push(d);
    } else {
        return initHelpComputer();
    }
    return arrHelp;
}

function showHelp() {
    let arrShow = initHelpComputer();
    document.getElementById("help").src = "gachcheo.png";
    alert('trợ giúp của khán giả: ' + arrShow[0] + '% chọn A, ' + arrShow[1] + '% chọn B,' + arrShow[2] + '% chọn C,' + arrShow[3] + '% chọn D');
}

// function checkWin() {
//     let idQuiz = arrQuiz[arrQuiz.length - 1].correct;
//     if (arrQuiz[arrQuiz.length - 1].isCorrect(idQuiz)){
//         alert('Bạn đã trả lời hết các câu hỏi!');
//         confirm('Bạn có muốn chơi lại không');
//         if (confirm(true)){
//             count = 1;
//             score = 0;
//             showQuiz(arrQuiz[count - 1]);
//         }
//     }
// }


// function rule() {
//     alert("Luật chơi: " +
//         "Người chơi phải trả lời 10 câu hỏi với cấp độ từ dễ đến khó, " +
//         "thời gian suy nghĩ không hạn chế. Quan trọng bạn phải biết search. Mỗi câu hỏi có một mức tiền thưởng, " +
//         "tăng dần theo thứ tự. Có hai mốc quan trọng là câu số 5 và câu số 10 " +
//         "(mốc \"TỶ PHÚ\"). Khi vượt qua các mốc này, bạn sẽ có được số tiền thưởng tương" +
//         " ứng của các câu hỏi đó. Bạn sẽ nhận được hai sự trợ giúp là 50/50 và hỏi ý kiến laptop. " + "Bạn đã sẵn sàng để chơi với chúng tôi?")
// }
function hideMess() {
    document.getElementById('log').style.display = 'none';
    play();
}

function play() {
    let audio = new Audio('AiLaTrieuPhu-VA_43vp2.mp3');
    audio.play();
    // audio.loop = true;
    // audio.load();
}




class Clock {
    constructor() {
    }
}