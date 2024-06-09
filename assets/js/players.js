console.log('score-board');

/**
 *  Player Class as a blueprint for creating player objects, Own name, date and score
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
let player = [
    new Player('Cheshire', '2024-06-11', 10),
    new Player('Alice', '2024-06-08', 5),
    new Player('Violet', '2024-06-25', 8),
];


/**
 * Generating a table, sorted by player scores, in desending order, each player has their own row
 */
export function displayLeaderboard() {
    let leaderboardHTML = "<table><tr><th>Name</th><th>Score</th></tr>";
    player.sort((aPlayer, bPlayer) => bPlayer.score - aPlayer.score);
    player.forEach(player => {
        leaderboardHTML += `<tr><td>${player.name}</td><td>${player.score}</td></tr>`;
    });
    leaderboardHTML += "</table>";
    document.getElementById("leaderboard").innerHTML = leaderboardHTML;
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