var q = 0;

//change the title (question) text
function setTitle(newTitle) {
    document.getElementById('quizTitle').innerHTML = newTitle;
}

//move on to the next question
function nextQuestion(n=1) {
    q += n;

    if (q < questions.length) {
        setTitle(questions[q][0]);

    //after all questions are finished: ask to finish
    } else if (q < questions.length + 1) {
        setTitle('Choose any answer to finish, or "Back" to return to the previous question.');

    //finish the quiz
    } else {
        finish();
    }
}

//submit an answer
function answer(value) {
    if (q < questions.length) {
        questions[q][1] = value;
    }
    nextQuestion();
}

//undo an answer
function undo() {
    if (q > 0) {
        if (q < questions.length + 1) {
            questions[q - 1][1] = null;
        }
        nextQuestion(-1);
    }
}

//end the quiz by hiding the div
function finish() {
    //switch the quiz and results containers
    document.getElementById('quizCntnr').style.display = 'none';
    document.getElementById('resCntnr').style.display = 'block';
    var resCntnr = document.getElementById('resCntnr');

    //calculate the results for each party
    for (let p = 0; p < parties.length; p++) {
        //get the agreement
        for (let i = 0; i < questions.length; i++) {
            //4 is the max outcome, thus is used to invert the function
            parties[p]['agreement'] += 4 - Math.abs(questions[i][1] - parties[p]['answers'][i]);
        }

        //take the agreement as a percent
        var score = Math.round(parties[p]['agreement'] / (questions.length * 4) * 100);

        //create the container
        var cntnr = document.createElement('div');
        cntnr.id = 'results-' + parties[p]['name'].toLowerCase();

        //add the header
        var header = document.createElement('h3');
        header.appendChild(document.createTextNode(parties[p]['name'] + ': ' + score + '%'));
        cntnr.appendChild(header);

        //add the description
        var desc = document.createElement('p');
        desc.appendChild(document.createTextNode(parties[p]['desc']));
        cntnr.appendChild(desc);

        //add the container
        resCntnr.appendChild(cntnr);
    }
}