var quizGamePoints = 0;
var k = 0;

//questions used in the quiz
var allQuestions = [{
    question: "The Beatles wrote 'Let It Be' inspired by ___________.",
    answers: ["A dream where Paul saw his mother", "Paul's daughter was born", "'Mother Mary' was a biblical reference"],
    correctAnswer: "0"
}, {
    question: "Sesame Street used 'Let It Be' with the title changed to __________",
    answers: ["Love the Bees", "Can't You See?", "Letter B"],
    correctAnswer: "2"
},{
    question: "The Beatles weren't the first to release 'Let It Be'. ______ recorded it in December 1969, 2 months before The Beatles version.",
    answers: ["Aerosmith", "Aretha Franklin", "Bee Gees"],
    correctAnswer: "1"
},{
    question: "The track 'Let It Be' the title of the album, was also released as a single. Is the single version the same as the album version?",
    answers: ["Yes", "No", "N/A"],
    correctAnswer: "1"
},{question: "For though they may be parted_____ .",
    answers: ["There is still a chance that they will see", "There is still a chance that light can be", "There is still a chance for us to be free"],
    correctAnswer: "0"
}];




$("#quiz-game-btn").on("click", function () {
    $('#game').show("slow");
    createQuizBoard();

});


function createQuizBoard() {
    $('#game').html('<div id="question-game"></div><button id="questions-submit">Submit <i class="fa fa-angle-right" aria-hidden="true"></i></button>');

    //create quiz questions based on the allQuestions object
    $.each(allQuestions, function (i) {
        $('#question-game').append('<h3>' + allQuestions[i].question + '</h3>');
        $.each(this.answers, function (j) {
            currentAnswer = allQuestions[i].answers[j];
            $('#question-game').append('<div class="radio"><input type="radio" value="' + j + '" name="answer' + i + '" id="ans' + k + '" /><label for="ans' + k + '" class="label">' + currentAnswer + '</label></div>');
            k++;
        });

    });


    $("#questions-submit").on("click", function () {

        $.each(allQuestions, function (i) {

            //if marked answer is same as the correct one increase number of points
            if ($("input[name='answer" + i + "']:checked").val() == allQuestions[i].correctAnswer) {
                quizGamePoints++;
            }
        });
        createPointSummary();

    });


}

function createPointSummary() {
    $('#game').append('<div id="gameSummaryBox"><p>Points gained: ' + quizGamePoints + '<p></div>');

    $("#gameSummaryBox").addClass("showPointsAnim");
    $('#game').delay(2000).hide("slow");

    //reset quiz points so quiz can be taken again
    quizGamePoints = 0;

}