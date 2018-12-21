// ------------------ Dom ready function ----------------\\
$(document).ready(function () {

$('#next').hide();

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
            correctAnswer: "a",
        },
        {
            question: "Where are you?",
            answers: {
                a: "Fine",
                b: "Amazing",
                c: "good",
                d: "bad",
            },
            correctAnswer: "a",
        },
        {
            question: "Where are you?",
            answers: {
                a: "Fine",
                b: "Amazing",
                c: "good",
                d: "bad",
            },
            correctAnswer: "a",
        },
        {
            question: "Where are you?",
            answers: {
                a: "Fine",
                b: "Amazing",
                c: "good",
                d: "bad",
            },
            correctAnswer: "a",
        },
        {
            question: "Where are you?",
            answers: {
                a: "Fine",
                b: "Amazing",
                c: "good",
                d: "bad",
            },
            correctAnswer: "a",
        },
        {
            question: "Where are you?",
            answers: {
                a: "Fine",
                b: "Amazing",
                c: "good",
                d: "bad",
            },
            correctAnswer: "a",
        },
    ];

// ------------------ Global Variables ----------------\\

    var correctanswers = 0;
    var incorrectAanswers = 0;
    var unanswered = 0;
    var number = 30;
    var currentQuestion;
    var intervalId;
 
// ------------------ A question with four answers will show ----------------\\

function nextQnA() {
    $('#next').on('click', function(){
    for (var i=0; i < myQuestions.length; i++) {
        $('#q1').text(myQuestions[i].question);
        $('#a1').html('<p>' + myQuestions[i].answers.a + '</p>');
        $('#a2').html('<p>' + myQuestions[i].answers.b + '</p>');
        $('#a3').html('<p>' + myQuestions[i].answers.c + '</p>');
        $('#a4').html('<p>' + myQuestions[i].answers.d + '</p>');
  }
})
}



function showQnA() {
    $('#q1').text(myQuestions[0].question);
    $('#a1').html('<p>' + myQuestions[0].answers.a + '</p>');
    $('#a2').html('<p>' + myQuestions[0].answers.b + '</p>');
    $('#a3').html('<p>' + myQuestions[0].answers.c + '</p>');
    $('#a4').html('<p>' + myQuestions[0].answers.d + '</p>'); 
};

        

// ------------------ Function for CountDown ----------------\\

    function decrement() {
        number--;
        $('#timer').text(number);
        console.log(number);
    }

    function countDown() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}
    
// ------------------  Start to start the game ----------------\\


    $('#startButton').on('click', function () {
        $("#startButton").hide();
        $('#next').show();
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









