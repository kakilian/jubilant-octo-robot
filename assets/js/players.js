console.log('score-board');

/**
 *  Player Class as a blueprint for creating payer objects, etc having own name, date and score
 */

class Player {
    constructor(name, date, score) {
        this.name = name;
        this.date = date;
        this.score = score;
    }
}

/**
 *  Player Array, showing past players and scores on this quiz
 */

let players = [
    new Player('Violet', '2024-06-11', 9),
    new Player('Charly', '2024-06-08', 10),
    new Player('Kate', '2024-06-25', 8),
    new Player('Andre', '2024-06-01', 0)
];


/**
 * Generating a table, sorted by player scores, in desending order, each player has their own row
 */

let player = [`play1, play2, play3, play4`];

export function displayLeaderboard() {
    let leaderboardHTML = "<table><tr><th>Name</th><th>Score</th></tr>";
    player.sort((aPlayer, bPlayer) => bPlayer.score - aPlayer.score);
    player.forEach(player => {
        leaderboardHTML += `<tr><td>${player.name}</td><td>${player.score}</td></tr>`;
    });
    leaderboardHTML += "</table>";
    document.getElementById("spieler").innerHTML = leaderboardHTML;
}
/**
 * Function of the parameters
 * @param {*} name 
 * @param {*} date 
 * @param {*} score 
 */

export function addPlayer(name, date, score) {
    player.push(new Player(name, date, score));
    displayLeaderboard();
}