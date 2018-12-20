// ------------------ Dom ready function ----------------\\
$(document).ready(function () {


// ------------------ Questions & Answers ----------------\\

    var questions = [
        {
            question: "How are you?",
            choices: ["a", "b", "c", "d"],
            Answer: "Fine",
        },
        {
            question: "Where are you?",
            asnwer1: "Fine",
            answer2: "Amazing",
            answer3: "good",
            answer4: "bad",
            Answer: "Fine",
        },
    ];


    var correctAnswers = 0;
    var incorrectAanswers = 0;
    var unAnswered = 0;
    var number = 30;
    
    function decrement() {
        number--;
        $('#timer').text(number);
        console.log(number);
    }

    function countDown() {
    setInterval(decrement, 1000);
}

    
    // ------------------  Start to start the game ----------------\\
    $('#startButton').on('click', function () {
        $("#startButton").hide();
        countDown();

     // ------------------  Function To Count Down ----------------\\    
        
    });


    // ------------------ A question with four answers will show ----------------\\
    function questions() {
       
    }

    
    
    
    








    // ------------------  ----------------\\



    // - There will be a timer on top
    // - If you click an answer, it will either say right or wrong.
    // - If incorrect it will give the right answer
    // - click next and it will move on to the next question
    // - If you don't click an answer and timer runs out and shows right answer and then it moves on.
    // - At the end, It will show you the correct answers, incorrect answers and unanaswered.
    // - There will be a start over button and it will reset the game





})



