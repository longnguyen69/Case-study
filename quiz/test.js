Array.prototype.clone = function () {
    return this.slice(0);
};


$(document).ready(function () {

    Millionaire = (function () {
        function Millionaire() {

            this._questionArray = [];
            this._questionContent = [];
            this._answerArray = [];
            this._selectArray = [];
            this._color = '#3498db';
            this._boardPage = 0;
            this.hide($('#next-question'));
            this.hide($('#restart-game'));
            this.hide($("#survey-region"));
            this._number5050 = 0;
            this._keep = 0;
            _this = this;

        }

        Millionaire.prototype.startGame = function () {
            this._use5050 = false;
            this._useSurvey = false;
            this.hide($("#question-form"));
            this.hide($("#button"));
            this.show($("#board-button"));
            this.show($('#each-question'));
            this.hide($("#submit-answer"));
            this.hide($('#next-question'));
            this.hide($("#restart-game"));
            this.hide($("#alert"));
            this._boardPage = 0;
        };

        Millionaire.prototype.setMaxCharacter = function () {
            var maxABCD = 40;
            $("#a").attr('maxlength', maxABCD);
            $("#b").attr('maxlength', maxABCD);
            $("#c").attr('maxlength', maxABCD);
            $("#d").attr('maxlength', maxABCD);
            $("#inputQ").attr('maxlength', '255');
        };


        Millionaire.prototype.showBoard = function () {
            var index = this._boardPage * 5;
            this.show($("#withdraw-button"));
            this.showEditButton();
            $("#question-number").html(this._boardPage + 1);
            $("#display-question").html(this._questionContent[this._boardPage]);
            $("#boxA").append("<span class='char'>A</span>" + this._questionArray[index]);
            $("#boxB").append("<span class='char'>B</span>" + this._questionArray[index + 1]);
            $("#boxC").append("<span class='char'>C</span>" + this._questionArray[index + 2]);
            $("#boxD").append("<span class='char'>D</span>" + this._questionArray[index + 3]);
            var answerID = "#" + _this._answerArray[this._boardPage];
            $(answerID).attr('class', 'answerBox');
            this.show($("#reward"));
            this.hide($("#survey-region"));
            this.show5050();
            this.showSurvey();
        };

        Millionaire.prototype.restartGame = function () {
            this._boardPage = 0;
            $("#question-number").html(this._boardPage + 1);
            $("#display-question").html(this._questionContent[this._boardPage]);
            ($("#reward")).empty();
            this.show($('#board-button'));
            this.hide($("#submit-answer"));
            this.hide($('#restart-game'));
            this.hide($('#next-question'));
            this.hide($('#alert'));
            this._use5050 = false;
            this._useSurvey = false;
            this._number5050 = 0;
            this.showBoard();


        };


        Millionaire.prototype.drawMap = function () {
            var countQuestion = this._answerArray.length;

            for (var i = 1; i <= countQuestion; i++) {
                if (i % 5 !== 0) {
                    $("#reward").append("<div class='rewardStep' id='" + i + "'><p class='number'>" + i + "</p></div>")
                } else {
                    $("#reward").append("<div class='specialRewardStep' id='" + i + "'><p class='specialNumber'>" + i + "</p></div>")
                }
            }

        };

        Millionaire.prototype.changeStepColor = function () {
            var currentStep = this._boardPage + 1;
            for (var i = 1; i < currentStep; i++) {
                var id = "#" + i;
                $(id).css('background-color', '#2ecc71');
            }
            currentStep = "#" + currentStep;
            $(currentStep).css('background-color', '#f39c12');


        };


        Millionaire.prototype.nextQ = function () {
            this._boardPage++;
            var step = this._boardPage + 1;
            this.hide($('#submit-answer'));
            this.hide($('#restart-game'));
            this.hide($('#next-question'));
            this.show($('#board-button'));
            this.hide($('#alert'));

            $("#question-number").html(this._boardPage + 1);
            if (step % 5 == 0) {
                $("#question-number").css("background-color", "yellow");
                $("#display-question").css("color", "yellow");
            } else {
                $("#question-number").css("background-color", "#ffffff");
                $("#display-question").css("color", "#ffffff");
            }

            $("#display-question").html(this._questionContent[this._boardPage]);


        };


        Millionaire.prototype.validate = function () {

            if ($("#a").val() == "" || $("#b").val() == "" || $("#c").val() == "" || $("#d").val() == "" || $("#input-letter").val() == "" || $("#inputQ").val() == ""

            ) {

                if (alert("Please fill all blanks before save and continue, Press Create Game to skip this question"));
                return false
            }
            return true;

        };


        Millionaire.prototype.updateValue = function () {
            var index = (this._boardPage) * 5;

            _this._questionContent[this._boardPage] = $("#inputQ").val().charAt(0).toUpperCase() + $("#inputQ").val().slice(1);
            _this._answerArray[this._boardPage] = "box" + $("#input-letter").val();
            this._questionArray[index] = $("#a").val().charAt(0).toUpperCase() + $("#a").val().slice(1);
            this._questionArray[index + 1] = $("#b").val().charAt(0).toUpperCase() + $("#b").val().slice(1);
            this._questionArray[index + 2] = $("#c").val().charAt(0).toUpperCase() + $("#c").val().slice(1);
            this._questionArray[index + 3] = $("#d").val().charAt(0).toUpperCase() + $("#d").val().slice(1);
            this._questionArray[index + 4] = $("#input-letter").val();
        };


        Millionaire.prototype.showForm = function () {

            var index = (this._boardPage) * 5;
            this.show($("#question-form"));
            this.show($("#button"));
            this.hide($('#each-question'));
            this.hide($('#survey-region'));
            $("#inputQ").val(_this._questionContent[this._boardPage]);
            $("#a").val(this._questionArray[index]);
            $("#b").val(this._questionArray[index + 1]);
            $("#c").val(this._questionArray[index + 2]);
            $("#d").val(this._questionArray[index + 3]);

            if (_this._questionArray[index + 4]) {
                $("#input-letter").val(_this._questionArray[index + 4]);
            } else {
                $("#input-letter").val("A");
            }


            if (this._boardPage === 0) {
                document.getElementById("prev-button").disabled = true;
            } else {
                document.getElementById("prev-button").disabled = false;
            }
            if (this._boardPage === 14) {
                document.getElementById("next-button").disabled = true;
            } else {
                document.getElementById("next-button").disabled = false;
            }
            ($("#reward")).empty();
        };

        Millionaire.prototype.hide = function (elementDom) {
            this._elementDom = elementDom;
            this._elementDom.css('display', 'none');

        };

        Millionaire.prototype.show = function (elementDom) {
            this._elementDom = elementDom;
            this._elementDom.css('display', 'block');
        };

        Millionaire.prototype.resetForm = function () {
            var index = (this._boardPage) * 5;
            $("#inputQ").val(_this._questionContent[this._page - 1]);
            $("#a").val(this._questionArray[index]);
            $("#b").val(this._questionArray[index + 1]);
            $("#c").val(this._questionArray[index + 2]);
            $("#d").val(this._questionArray[index + 3]);
            $("#input-letter").val(this._questionArray[index + 4]);


        };

        Millionaire.prototype.showCreateButton = function () {
            this.show($("#create-game-button"));
            this.hide($("#edit-button"));

        };

        Millionaire.prototype.showEditButton = function () {
            this.hide($("#create-game-button"));
            this.show($("#edit-button"));

        };

        Millionaire.prototype.changeSubmitAnswerButton = function () {
            !this.checkResult(this._boardPage) ? this.show($("#restart-game")) : this.show($("#next-question"));

        };

        Millionaire.prototype.withdraw = function () {
            this.show($('#alert'));
            this.hide($("#submit-answer"));
            this.hide($("#withdraw-button"));
            this.show($("#restart-game"));
            var message = "You've already withdraw and keep the reward for Question " + this._boardPage;
            $("#alert").attr("class", "alert alert-info");
            $("#alert").html(message);

        };

        Millionaire.prototype.resetBoardStatus = function () {
            $("#boxA").css('background-color', '#3498db');
            $("#boxB").css('background-color', '#3498db');
            $("#boxC").css('background-color', '#3498db');
            $("#boxD").css('background-color', '#3498db');
            $("#boxA").empty();
            $("#boxB").empty();
            $("#boxC").empty();
            $("#boxD").empty();
            $("#chartA").empty();
            $("#chartB").empty();
            $("#chartC").empty();
            $("#chartD").empty();

            $('.answerBox').css('pointer-events', 'auto');
            $('.boxWrong').css('pointer-events', 'auto');
            $('#sellector').css('pointer-events', 'auto');
            $('.box').css('pointer-events', 'auto');
            $('.answerBox').attr('class', 'box');
            $('.boxWrong').attr('class', 'box');



            this._color = '#3498db';
            clearInterval(this._interval);
            this._number5050 = 0;

        };

        Millionaire.prototype.selectBox = function (boxID) {
            var id = "#" + boxID;


            if (boxID == "boxA" || boxID == "boxB" || boxID == "boxC" || boxID == "boxD") {

                $("#boxA").css('background-color', '#3498db');
                $("#boxB").css('background-color', '#3498db');
                $("#boxC").css('background-color', '#3498db');
                $("#boxD").css('background-color', '#3498db');

                $(id).css('background-color', '#f1c40f');
                this.show($('#submit-answer'));
                this._selectArray[this._boardPage] = boxID;
            }

        };


        Millionaire.prototype.nextPage = function () {
            this._boardPage++;
            var page = this._boardPage + 1;
            $("#number").html("Question " + page);
        };

        Millionaire.prototype.prevPage = function () {
            this._boardPage--;
            var page = this._boardPage + 1;
            $("#number").html("Question " + page);
        };


        Millionaire.prototype.checkResult = function (number) {
            if (this._answerArray[number] === this._selectArray[number]) {
                return true;
            } else {
                return false
            }
        };

        Millionaire.prototype.nextOrStop = function () {
            var page = this._boardPage;
            if (this.checkResult(this._boardPage)) {
                console.log(page);
                console.log(_this._answerArray.length);
                $("#alert").attr("class", "alert alert-success");
                $("#alert").html("Congratulation! Your Answer is alright!");
                _this._color = '#f1c40f';
                if (page + 1 == _this._answerArray.length) {
                    $("#alert").attr("class", "alert alert-success");
                    $("#alert").html("Congratulation! You passed all the " + _this._answerArray.length + " questions of this Game");
                    this.show($('#restart-game'));
                    this.hide($('#next-question'));

                }

            } else {
                var message = "";
                $("#alert").attr("class", "alert alert-danger");
                if (page >= 10) {
                    message = "Your reward is for question 10"
                } else if (page >= 5) {
                    message = "Your reward is for question 5"
                } else {
                    message = "You have no reward"
                }


                $("#alert").html(message);

            }

            this.hide($("#submit-answer"))

        };

        Millionaire.prototype.congrats = function () {
            this._interval = setInterval(function () {
                if (_this._hover) {
                    $('.answerBox').css('background-color', '#2ecc71');
                    $('.answerBox').css('pointer-events', 'none');
                    $('#sellector').css('pointer-events', 'none');
                    $('.box').css('pointer-events', 'none');
                } else {
                    $('.answerBox').css('background-color', _this._color);
                    $('.answerBox').css('pointer-events', 'none');
                    $('#sellector').css('pointer-events', 'none');
                    $('.box').css('pointer-events', 'none');
                }
                _this._hover = !_this._hover;

            }, 150);
        };

        Millionaire.prototype.random = function (min, max) {
            this._use5050 = true;
            return Math.floor(Math.random() * (max - min + 1)) + min;

        };

        Millionaire.prototype.NumberBoxNameChanger = function (value) {

            if (value == "boxA") {
                return 1;
            } else if (value == "boxB") {
                return 2;
            } else if (value == "boxC") {
                return 3;
            } else if (value == "boxD") {
                return 4;
            } else if (value == 1) {
                return "boxA"
            } else if (value == 2) {
                return "boxB"
            } else if (value == 3) {
                return "boxC"
            } else {
                return "boxD"
            }

        };

        Millionaire.prototype.clearWrong = function (boxName1, boxName2) {

            boxName1 = "#" + boxName1;
            boxName2 = "#" + boxName2;
            $(boxName1).attr('class', 'boxWrong');
            $(boxName2).attr('class', 'boxWrong');
            $(boxName1).css('pointer-events', 'none');
            $(boxName2).css('pointer-events', 'none');
            $(boxName1).css('background-color', '#3498db');
            $(boxName2).css('background-color', '#3498db');

        };

        Millionaire.prototype.boxWrong = function (boxName, random1, random2) {
            var boxID = this.NumberBoxNameChanger(boxName);

            if (random1 == random2) {
                if (random1 !== 1) {
                    random1--
                } else {
                    random1++
                }
            }

            var number1 = (boxID + random1) % 4;
            if (number1 == 0)(number1 = 4);
            var number2 = (boxID + random2) % 4;
            if (number2 == 0)(number2 = 4);
            var boxWrong1 = this.NumberBoxNameChanger(number1);
            var boxWrong2 = this.NumberBoxNameChanger(number2);

            for (var i = 1; i <= 4; i++) {
                if (i !== number1 && i !== number2 && i !== boxID) _this._keep = i;
            }


            this.clearWrong(boxWrong1, boxWrong2);

        };

        Millionaire.prototype.help5050 = function () {
            var answerBox = this._answerArray[this._boardPage];


            var random1 = this.random(1, 3);
            var random2 = this.random(1, 3);
            this.boxWrong(answerBox, random1, random2);
            this._use5050 = true;
            this._number5050 = this._boardPage + 1;
            console.log(_this._keep);
            console.log(answerBox);
        };

        Millionaire.prototype.show5050 = function () {
            if (!this._use5050) {
                this.show($("#help5050-button"))
            } else {
                this.hide($("#help5050-button"))
            }
        };

        Millionaire.prototype.showSurvey = function () {
            if (!this._useSurvey) {
                this.show($("#helpSurvey-button"))
            } else {
                this.hide($("#helpSurvey-button"))
            }
        };

        Millionaire.prototype.helpSurvey = function () {
            var answerBox = this._answerArray[this._boardPage];


            var sum = 76;
            var value1 = this.random(0, sum);
            var value2 = this.random(0, sum - value1);
            var value3 = this.random(0, sum - value1 - value2);
            var value4 = sum - value1 - value2 - value3;
            var valueA = this.random(1, 4);
            var valueB = 0;
            var valueC = 0;
            var valueD = 0;


            if (valueA === 1) {
                valueA = value1;
                valueB = value2;
                valueC = value3;
                valueD = value4;
            } else if (valueA === 2) {
                valueA = value2;
                valueB = value3;
                valueC = value4;
                valueD = value1;
            } else if (valueA === 3) {
                valueA = value3;
                valueB = value4;
                valueC = value1;
                valueD = value2;
            } else {
                valueA = value4;
                valueB = value1;
                valueC = value2;
                valueD = value3;
            }


            if (answerBox === "boxA") {
                valueA = valueA + 24;

            } else if (answerBox === "boxB") {
                valueB = valueB + 24;

            } else if (answerBox === "boxC") {
                valueC = valueC + 24;
            } else {
                valueD = valueD + 24;
            }


            if (this._number5050 == this._boardPage + 1) {

                var sumRemove = 0;


                if (_this._keep !== 1 || answerBox !== "boxA") {

                    sumRemove += valueA;
                    valueA = 0;
                }
                if (_this._keep !== 2 && answerBox !== "boxB") {
                    sumRemove += valueB;
                    valueB = 0;

                }
                if (_this._keep !== 3 && answerBox !== "boxC") {
                    sumRemove += valueC;
                    valueC = 0;

                }
                if (_this._keep !== 4 && answerBox !== "boxD") {
                    sumRemove += valueD;
                    valueD = 0;

                }


                if (answerBox === "boxA") {
                    valueA = valueA + sumRemove;

                } else if (answerBox === "boxB") {
                    valueB = valueB + sumRemove;

                } else if (answerBox === "boxC") {
                    valueC = valueC + sumRemove;
                } else {
                    valueD = valueD + sumRemove;
                }


            }


            this.drawChart(valueA, valueB, valueC, valueD);
            this._useSurvey = true;


        };


        Millionaire.prototype.drawChart = function (valueA, valueB, valueC, valueD) {
            this.hide($("#reward"));
            this.show($("#survey-region"));
            var i = 0;

            $("#chartA").append("<span class='ABCD'>A</span><span class='startPercent'></span>");
            $("#chartB").append("<span class='ABCD'>B</span><span class='startPercent'></span>");
            $("#chartC").append("<span class='ABCD'>C</span><span class='startPercent'></span>");
            $("#chartD").append("<span class='ABCD'>D</span><span class='startPercent'></span>");

            for (i = 1; i <= valueA; i++) {
                setTimeout(function () {
                    $("#chartA").append("<span class='percent'></span>")
                }, 100)
            }
            for (i = 1; i <= valueB; i++) {
                setTimeout(function () {
                    $("#chartB").append("<span class='percent'></span>")

                }, 100)
            }
            for (i = 1; i <= valueC; i++) {
                setTimeout(function () {
                    $("#chartC").append("<span class='percent'></span>")

                }, 100)
            }
            for (i = 1; i <= valueD; i++) {
                setTimeout(function () {
                    $("#chartD").append("<span class='percent'></span>")

                }, 100)
            }

            setTimeout(function () {
                $("#chartA").append("<span class='percentNumber'> " + valueA + "%</span>")

            }, 900);

            setTimeout(function () {
                $("#chartB").append("<span class='percentNumber'> " + valueB + "%</span>")

            }, 900);

            setTimeout(function () {
                $("#chartC").append("<span class='percentNumber'> " + valueC + "%</span>")

            }, 900);

            setTimeout(function () {
                $("#chartD").append("<span class='percentNumber'> " + valueD + "%</span>")

            }, 900)

        };


        Millionaire.prototype.constructor = Millionaire;

        return Millionaire;


    })();


    $("#sellector").click(function (e) {
        var Millionaire = window.Millionaire;
        if (e.target.id !== "characterBox" && e.target.id !== "sellector") {
            _this.targetID = e.target.id;
            Millionaire.selectBox(_this.targetID);
        }

    });

    $("#help5050-button").click(function (e) {
        var Millionaire = window.Millionaire;
        Millionaire.help5050();
        Millionaire.show5050();
    });

    $("#helpSurvey-button").click(function (e) {
        var Millionaire = window.Millionaire;
        Millionaire.helpSurvey();
        Millionaire.showSurvey();


    });

    $("#next-button").click(function (e) {
        var Millionaire = window.Millionaire;
        if (Millionaire.validate()) {
            Millionaire.updateValue();
            Millionaire.nextPage();
            Millionaire.showForm();
        }


    });


    $("#prev-button").click(function (e) {
        var Millionaire = window.Millionaire;
        if (Millionaire.validate()) {
            Millionaire.updateValue();
            Millionaire.prevPage();
            Millionaire.showForm();
        }

    });

    $("#next-question").click(function (e) {
        var Millionaire = window.Millionaire;
        Millionaire.resetBoardStatus();
        Millionaire.nextQ();
        Millionaire.showBoard();
        Millionaire.changeStepColor();
    });

    $("#reset-button").click(function () {
        var Millionaire = window.Millionaire;
        Millionaire.resetForm();
    });


    $("#restart-game").click(function (e) {
        e.preventDefault();
        var Millionaire = window.Millionaire;

        Millionaire.resetBoardStatus();

        Millionaire.restartGame();
        Millionaire.drawMap();
        Millionaire.changeStepColor();

    });


    $("#create-game-button").click(function (e) {
        e.preventDefault();
        var Millionaire = window.Millionaire;
        if (Millionaire.validate()) {

            Millionaire.resetBoardStatus();
            Millionaire.updateValue();
            Millionaire.startGame();
            Millionaire.showBoard();
            Millionaire.drawMap();
            Millionaire.changeStepColor();
        }

    });

    $("#edit-button").click(function (e) {
        e.preventDefault();
        var Millionaire = window.Millionaire;


        Millionaire.showForm();
        Millionaire.showCreateButton();


    });

    $("#submit-answer").click(function (e) {
        e.preventDefault();
        var Millionaire = window.Millionaire;
        Millionaire.changeSubmitAnswerButton();
        Millionaire.nextOrStop();
        Millionaire.congrats();
        Millionaire.hide($('#board-button'));
        Millionaire.show($('#alert'));

    });

    $("#withdraw-button").click(function (e) {
        e.preventDefault();
        var Millionaire = window.Millionaire;
        Millionaire.congrats();
        Millionaire.withdraw();
        Millionaire.show5050();
        Millionaire.showSurvey();

    });

    var Millionaire = new Millionaire();
    window.Millionaire = Millionaire;
    Millionaire.show($('#question-form'));
    Millionaire.hide($('#each-question'));
    Millionaire.hide($('#edit-button'));
    Millionaire.setMaxCharacter();
    document.getElementById("prev-button").disabled = true;


});