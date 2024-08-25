console.log('score-board');

/**
 *  Player Class as a blueprint for creating player objects, Own name, date and score
 */
class Player {
    constructor(name, date, score) {
        this.name = name;
        this.date = new Date(date);
        this.score = score;
    }

    getFormattedDate() {
        return this.date.toLocaleDateString();
    }
}

/**
 *  Player Array, showing past players and scores on this quiz
 */
const players = [
    new Player('Cheshire', '6/11/2024', 10),
    new Player('Alice', '6/15/2024', 5),
    new Player('Violet', '6/23/2024', 8),
];


/**
 * Generating a table, sorted by player scores, in desending order, each player has their own row
 */
export function displayLeaderboard() {
    let leaderboardHTML = "<table><tr><th>Name</th><th>Score</th><th>Date</th></tr>";
    players.sort((aPlayer, bPlayer) => bPlayer.score - aPlayer.score);
    players.forEach(player => {
        leaderboardHTML += `<tr>
            <td>${escapeHTML(player.name)}</td>
            <td>${player.score}</td>
            <td>${player.getFormattedDate()}</td>
        </tr>`;
    });
    leaderboardHTML += "</table>";
    document.getElementById("leaderboard").innerHTML = leaderboardHTML;
}

/**
 * Function to add a new player to the leaderboard
 */
export function addPlayer(name, date, score) {
    if (name && date && !isNaN(score)) {
        players.push(new Player(name, date, score));
        displayLeaderboard();
    } else {
        console.error("Invalid player data. Name, date, and score are required.");
    }
}

/**
 * Utility function to escape HTML
 */
function escapeHTML(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}