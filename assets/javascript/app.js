// ------------------ Dom ready function ----------------\\
$(document).ready(function () {

    $('.myTimer').hide();
    $('.contents').hide();
    // ------------------ Questions & answers ----------------\\

    var myQuestions = [
        {
            question: '1) Who sang this? "She say, "Do you love me? I tell her, "Only partly" I only love my bed and my momma, Im sorry"',


        },
        {
            question: '2) Who sang this "Who am I? Someone thats afraid to let go, uh You decide, if you are ever gonna let me know, yeah"',


        },
        {
            question: '3) Who sang this? "Sun is down, freezin" cold Thats how we already know winters here"',


        },
        {
            question: '4) Who sang this? "She taught me love (love) She taught me patience (patience) How she handles pain (pain) That shits amazing (yeah, shes amazing)"',


        },
        {
            question: '5) Who sang this? "See you had a lot of crooks try to steal your heart Never really had luck, couldnt never figure out"',


        },
        {
            question: '6) Who sang this? "You’re sayin those words like you hate me now (Wo-oah) Our house is burning when youre raisin Hell (Wo-oah)"',


        },
    ];

    // ------------------ Global Variables ----------------\\
    var unanswered = 0;
    var number = 60;
    var currentQuestion;
    var intervalId;
    var correctAnswers = 0;
    var incorrectAnswers = 0;

    // ------------------ A question with four answers will show ----------------\\

    function showQnA(the) {

        // Questions \\
        $('#q1').text(myQuestions[0].question);
        $('#q2').text(myQuestions[1].question);
        $('#q3').text(myQuestions[2].question);
        $('#q4').text(myQuestions[3].question);
        $('#q5').text(myQuestions[4].question);
        $('#q6').text(myQuestions[5].question);


    }

    // ------------------ Function for CountDown ----------------\\

    function decrement() {
        number--;
        $('#timer').text(number);

        if (number === 0) {
            alert("Times Up!");
            stop();

        }
    }

    function countDown() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);

    }

    // ------------------  Start to start the game ----------------\\

    $('#startButton').on('click', function () {
        $("#startButton").hide();
        $('#next').show();
        $('.myTimer').show();
        $('.contents').show();
        countDown();
        showQnA();

    });

    // ------------------ Time Stop Function ----------------\\

    function stop() {
        clearInterval(intervalId);
    }
    // var answers = ['c', 'd', 'a', 'c', 'b', 'b'];
    // If and Else statements for the winning and losing conditions \\
    $(document).on('change', 'input[name="a1"]',
        function () {
            console.log(this);
            if ($('#a1c').is(':checked') && $(this).val()) {
                correctAnswers++;
                console.log(correctAnswers);
                alert('hi');
            } else {
                incorrectAnswers++;
                console.log(incorrectAnswers);
            }
        });

    $(document).on('change', 'input[name="a2"]',
        function () {
            console.log(this);
            if ($('#a2d').is(':checked') && $(this).val()) {
                correctAnswers++;
                console.log(correctAnswers);
                alert('hi2');
            } else {
                incorrectAnswers++;
                console.log(incorrectAnswers);
            }
        });

    $(document).on('change', 'input[name="a3"]',
        function () {
            console.log(this);
            if ($('#a3a').is(':checked') && $(this).val()) {
                correctAnswers++;
                console.log(correctAnswers);
                alert('hi3');
            } else {
                incorrectAnswers++;
                console.log(incorrectAnswers);
            }
        });

    $(document).on('change', 'input[name="a4"]',
        function () {
            console.log(this);
            if ($('#a4c').is(':checked') && $(this).val()) {
                correctAnswers++;
                console.log(correctAnswers);
                alert('hi4');
            } else {
                incorrectAnswers++;
                console.log(incorrectAnswers);
            }
        });

    $(document).on('change', 'input[name="a5"]',
        function () {
            console.log(this);
            if ($('#a5b').is(':checked') && $(this).val()) {
                correctAnswers++;
                console.log(correctAnswers);
                alert('hi5');
            } else {
                incorrectAnswers++;
                console.log(incorrectAnswers);
            }
        });
    $(document).on('change', 'input[name="a6"]',
        function () {
            console.log(this);
            if ($('#a6b').is(':checked') && $(this).val()) {
                correctAnswers++;
                console.log(correctAnswers);
                alert('hi6');
            } else {
                incorrectAnswers++;
                console.log(incorrectAnswers);
            }
        });

    $("#submitButton").click(function () {
        $('.contents').hide();
        $('#corAns').html('<p> Correct Answer : ' + correctAnswers + '</p>')
        $('#incAns').html('<p> Incorrect Answer :' + incorrectAnswers + '</p>')
        
    })

    });