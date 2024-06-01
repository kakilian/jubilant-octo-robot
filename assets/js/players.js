
console.log('score-board');

class Player {
    constructor(name, date, score) {
    this.name = name;
    this.date = date;
    this.score = score;
    }
}

//Create new players
let players = [
    new Player('Violet', '2024-06-11', 9),
    new Player('Charly', '2024-06-08', 10),
    new Player('Kate', '2024-06-25', 8),
    new Player('Andre', '2024-06-01', 0)
];

//let players =[play1, play2, play3, play4];

export function displayLeaderboard() {
    let leaderboardHTML = "<table><tr><th>Name</th><th>Score</th></tr>";
    players.sort((aPlayer, bPlayer) => bPlayer.score - aPlayer.score);
    players.forEach(player => {
        leaderboardHTML += '<tr><td>' + player.name + '</td><td>' + player.score + '</td></tr>';
    });
    leaderboardHTML += "</table>";
    document.getElementById("leaderboard").innerHTML = leaderboardHTML;
}

export function addPlayer(name, date, score) {
    players.push(new Player(name, date, score));
    displayLeaderboard();
}