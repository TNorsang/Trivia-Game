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
    var userGuess;
    var answers = ['c','d','a','c','b','b'];
    // ------------------ A question with four answers will show ----------------\\

    function showQnA(the) {

        // Questions \\
        $('#q1').text(myQuestions[0].question);
        $('#q2').text(myQuestions[1].question);
        $('#q3').text(myQuestions[2].question);
        $('#q4').text(myQuestions[3].question);
        $('#q5').text(myQuestions[4].question);
        $('#q6').text(myQuestions[5].question);

        // if (the === myQuestions.correctAnswer) {
        //     console.log('This is correct');
        //     correctAnswers++
        //     console.log(correctAnswers);
        // } else if ($('#connecting-rod').is(':checked')) {
        //     console.log('This is correct');
        //     correctAnswers++;
        //     console.log(correctAnswers);
        // } else if ($('#exhaust-gas').is(':checked')) {
        //     console.log('This is correct');
        //     correctAnswers++
        //     console.log(correctAnswers);
        // }
    }

    function submitAnswers() {
        var correctAnswers = 0;
        var incorrectAnswers = 0;
        
        var a1 = $( "input[type=radio][name=a1]:checked" ).val();
        alert(input);
        // if () {

        // }

        

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


});