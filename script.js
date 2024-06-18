let playerNames = ["Player 1", "Player 2", "Player 3", "Player 4"];
let cumulativeScores = [0, 0, 0, 0];
const BASE = 25000;

document.getElementById('nameForm').addEventListener('submit', function(event) {
    event.preventDefault();

    playerNames[0] = document.getElementById('player1').value;
    playerNames[1] = document.getElementById('player2').value;
    playerNames[2] = document.getElementById('player3').value;
    playerNames[3] = document.getElementById('player4').value;

    document.getElementById('label1').textContent = playerNames[0] + " Score:";
    document.getElementById('label2').textContent = playerNames[1] + " Score:";
    document.getElementById('label3').textContent = playerNames[2] + " Score:";
    document.getElementById('label4').textContent = playerNames[3] + " Score:";

    document.getElementById('nameForm').style.display = 'none';
    document.getElementById('scoreForm').style.display = 'block';

    // Play name setting audio
    document.getElementById('nameAudio').play();
});

document.getElementById('scoreForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let scores = [
        parseFloat(document.getElementById('score1').value),
        parseFloat(document.getElementById('score2').value),
        parseFloat(document.getElementById('score3').value),
        parseFloat(document.getElementById('score4').value)
    ];

    for (let i = 0; i < 4; i++) {
        scores[i] = (scores[i] - BASE) / 1000;
    }

    scores[3] -= 20;
    scores[2] -= 10;
    scores[1] += 10;
    scores[0] += 20;

    for (let i = 0; i < 4; i++) {
        cumulativeScores[i] += scores[i];
        document.getElementById('result' + (i + 1)).textContent = playerNames[i] + ": " + cumulativeScores[i];
    }

    // Reset the score input fields for the next round
    document.getElementById('score1').value = '';
    document.getElementById('score2').value = '';
    document.getElementById('score3').value = '';
    document.getElementById('score4').value = '';

    // Play score calculation audio
    document.getElementById('scoreAudio').play();
});
