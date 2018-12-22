// ------------------ Dom ready function ----------------\\
$(document).ready(function () {

$('#next').hide();
$('.myTimer').hide();
// ------------------ Questions & answers ----------------\\

    var myQuestions = [
        {
            question: "Where are you?",
            answers: {
                a: "Fine",
                b: "Amazing",
                c: "good",
                d: "bad",
            },
            correctAnswer: "Fine"
        },
        {
            question: "How are you?",
            answers: {
                a: "Fine",
                b: "Amazing",
                c: "good",
                d: "bad",
            },
            correctAnswer: "Fine"
        },
        {
            question: "Where are you?",
            answers: {
                a: "Fine",
                b: "Amazing",
                c: "good",
                d: "bad",
            },
            correctAnswer: "Fine"
        },
        {
            question: "Where are you?",
            answers: {
                a: "Fine",
                b: "Amazing",
                c: "good",
                d: "bad",
            },
            correctAnswer: "Fine"
        },
        {
            question: "Where are you?",
            answers: {
                a: "Fine",
                b: "Amazing",
                c: "good",
                d: "bad",
            },
            correctAnswer: "Fine"
        },
        {
            question: "Where are you?",
            answers: {
                a: "Fine",
                b: "Amazing",
                c: "good",
                d: "bad",
            },
            correctAnswer: "Fine"
        },
    ];

// ------------------ Global Variables ----------------\\

    var correctAnswers = 0;
    var incorrectAnswers = 0;
    var unanswered = 0;
    var number = 5;
    var currentQuestion;
    var intervalId;
    var userGuess;
 


// function nextQnA() {
//     $('#next').on('click', function(){
    
//     for (var i=0; i < myQuestions.length; i++) {
//         $('#q1').text(myQuestions[i].question);
//         $('#a1').html('<p>' + myQuestions[i].answers.a + '</p>');
//         $('#a2').html('<p>' + myQuestions[i].answers.b + '</p>');
//         $('#a3').html('<p>' + myQuestions[i].answers.c + '</p>');
//         $('#a4').html('<p>' + myQuestions[i].answers.d + '</p>');
//   }
// })
// }

// ------------------ A question with four answers will show ----------------\\

function showQnA(the) {
    $('#q1').text(myQuestions[0].question);
    $('#a1').html('<input type="radio">' + myQuestions[0].answers.a + '</button>');
    $('#a2').html('<input type="radio">' + myQuestions[0].answers.b + '</button>');
    $('#a3').html('<input type="radio">' + myQuestions[0].answers.c + '</button>');
    $('#a4').html('<input type="radio">' + myQuestions[0].answers.d + '</button>');

    if( the === myQuestions.correctAnswer) {
        console.log('This is correct');
        correctAnswers++
        console.log(correctAnswers);
    } else if($('#connecting-rod').is(':checked') ) {
        console.log('This is correct');
        correctAnswers++;
        console.log(correctAnswers);
    } else if($('#exhaust-gas').is(':checked')) {
        console.log('This is correct');
        correctAnswers++
        console.log(correctAnswers);
    }
};

        

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
        countDown();
        showQnA();   
        
    });



// ------------------ Time Stop Function ----------------\\

    function stop() {
        clearInterval(intervalId);
    }


    
    
});






    // ------------------  ----------------\\



    // - There will be a timer on top
    // - If you click an answer, it will either say right or wrong.
    // - If incorrect it will give the right answer
    // - click next and it will move on to the next question
    // - If you don't click an answer and timer runs out and shows right answer and then it moves on.
    // - At the end, It will show you the correct answers, incorrect answers and unanaswered.
    // - There will be a start over button and it will reset the game


    // $('.choice').on('click',function () {
    //     if($('#honda').is(':checked')) {
    //         console.log('This is correct');
    //         correctAnswers++
    //         console.log(correctAnswers);
    //     } else if($('#connecting-rod').is('checked') ) {
    //         console.log('This is correct');
    //         correctAnswers++;
    //         console.log(correctAnswers);
    //     } else if($('#exhaust-gas').is(':checked')) {
    //         console.log('This is correct');
    //         correctAnswers++
    //         console.log(correctAnswers);
    //     }
    // })






