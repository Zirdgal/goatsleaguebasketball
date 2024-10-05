// import Data Tables
import { teamData } from "../../data/teamData.js";
import { playerData } from "../../data/playerData.js";

// Fetch the score Element
const scoreElem = document.getElementById("score-score");
const timeElem = document.getElementById("score-date");
const placeElem = document.getElementById("score-place");

// General function to update a team's display info
function updateTeamDisplay(teamElement, teamInfo) {
    if (teamElement && teamInfo) {
        teamElement.img.src = teamInfo.img || ''; // Check if img exists
        teamElement.name.innerHTML = teamInfo.name || 'Unknown'; // Fallback if name is missing
    }
}

function updatePlayerDisplay(playerElement, playerInfo, playerStats) {
    if (playerElement && playerInfo) {
        playerElement.name.innerHTML = playerInfo.name || 'Err'; 
        playerElement.img.querySelector('img').src = playerInfo.img || ''; // Check if img exists
        playerElement.nr.innerHTML = playerInfo.nr || ''; // Player number

        // Update player stats, ensure stats exist in gameObj
        if (playerStats) {
            playerElement.statName.innerHTML = `${playerInfo.name} ${playerInfo.nr || ''}`;
            playerElement.statPoints.innerHTML = playerStats.points || '0'; // Default to '0' if no stats
            playerElement.statAssists.innerHTML = playerStats.assists || '0';
            playerElement.statRebounds.innerHTML = playerStats.rebounds || '0';
            playerElement.statBlocks.innerHTML = playerStats.blocks || '0';
            playerElement.statTurnovers.innerHTML = playerStats.turnovers || '0';
            playerElement.statSteals.innerHTML = playerStats.steals || '0';
            playerElement.statFouls.innerHTML = playerStats.fouls || '0';
        }
    }
}

export function displayMatchStatistics(gameObj) {
    // Update the score
    scoreElem.innerHTML = `${gameObj.team1.points} - ${gameObj.team2.points}`;
    timeElem.innerHTML = gameObj.time;
    placeElem.innerHTML = gameObj.place;

    // Team 1 update
    if (teamData[gameObj.team1.id]) {
        const team1Elem = {
            img: document.getElementById("team1-img"),
            name: document.getElementById("team1-name")
        };
        updateTeamDisplay(team1Elem, teamData[gameObj.team1.id]);
    }

    if (playerData[gameObj.team1.player1.id]) {
        const player1Elem = {
            img: document.getElementById("player-img-1"),
            name: document.getElementById("player-name-1"),
            nr: document.getElementById("player-nr-1"),
            statName: document.getElementById("stats-player-1-name"),
            statPoints: document.getElementById("stats-player-1-points"),
            statAssists: document.getElementById("stats-player-1-assists"),
            statRebounds: document.getElementById("stats-player-1-rebounds"),
            statBlocks: document.getElementById("stats-player-1-blocks"),
            statTurnovers: document.getElementById("stats-player-1-turnovers"),
            statSteals: document.getElementById("stats-player-1-steals"),
            statFouls: document.getElementById("stats-player-1-fouls"),
        }
        const player1Stats = gameObj.team1.player1; // Get player1 stats from gameObj
        updatePlayerDisplay(player1Elem, playerData[gameObj.team1.player1.id], player1Stats);
    };

    if (playerData[gameObj.team1.player2.id]) {
        const player2Elem = {
            img: document.getElementById("player-img-2"),
            name: document.getElementById("player-name-2"),
            nr: document.getElementById("player-nr-2"),
            statName: document.getElementById("stats-player-2-name"),
            statPoints: document.getElementById("stats-player-2-points"),
            statAssists: document.getElementById("stats-player-2-assists"),
            statRebounds: document.getElementById("stats-player-2-rebounds"),
            statBlocks: document.getElementById("stats-player-2-blocks"),
            statTurnovers: document.getElementById("stats-player-2-turnovers"),
            statSteals: document.getElementById("stats-player-2-steals"),
            statFouls: document.getElementById("stats-player-2-fouls"),
        }
        const player2Stats = gameObj.team1.player2; // Get player1 stats from gameObj
        updatePlayerDisplay(player2Elem, playerData[gameObj.team1.player2.id], player2Stats);
    };

    if (playerData[gameObj.team1.player3.id]) {
        const player3Elem = {
            img: document.getElementById("player-img-3"),
            name: document.getElementById("player-name-3"),
            nr: document.getElementById("player-nr-3"),
            statName: document.getElementById("stats-player-3-name"),
            statPoints: document.getElementById("stats-player-3-points"),
            statAssists: document.getElementById("stats-player-3-assists"),
            statRebounds: document.getElementById("stats-player-3-rebounds"),
            statBlocks: document.getElementById("stats-player-3-blocks"),
            statTurnovers: document.getElementById("stats-player-3-turnovers"),
            statSteals: document.getElementById("stats-player-3-steals"),
            statFouls: document.getElementById("stats-player-3-fouls"),
        }
        const player3Stats = gameObj.team1.player3; // Get player1 stats from gameObj
        updatePlayerDisplay(player3Elem, playerData[gameObj.team1.player3.id], player3Stats);
    };


    // Team 2 update (similar to team 1)
    if (teamData[gameObj.team2.id]) {
        const team2Elem = {
            img: document.getElementById("team2-img"),
            name: document.getElementById("team2-name")
        };
        updateTeamDisplay(team2Elem, teamData[gameObj.team2.id]);
    };

    if (playerData[gameObj.team2.player1.id]) {
        const player4Elem = {
            img: document.getElementById("player-img-4"),
            name: document.getElementById("player-name-4"),
            nr: document.getElementById("player-nr-4"),
            statName: document.getElementById("stats-player-4-name"),
            statPoints: document.getElementById("stats-player-4-points"),
            statAssists: document.getElementById("stats-player-4-assists"),
            statRebounds: document.getElementById("stats-player-4-rebounds"),
            statBlocks: document.getElementById("stats-player-4-blocks"),
            statTurnovers: document.getElementById("stats-player-4-turnovers"),
            statSteals: document.getElementById("stats-player-4-steals"),
            statFouls: document.getElementById("stats-player-4-fouls"),
        }
        const player4Stats = gameObj.team2.player1; // Get player4 stats from gameObj
        updatePlayerDisplay(player4Elem, playerData[gameObj.team2.player1.id], player4Stats);
    };

    if (playerData[gameObj.team2.player2.id]) {
        const player5Elem = {
            img: document.getElementById("player-img-5"),
            name: document.getElementById("player-name-5"),
            nr: document.getElementById("player-nr-5"),
            statName: document.getElementById("stats-player-5-name"),
            statPoints: document.getElementById("stats-player-5-points"),
            statAssists: document.getElementById("stats-player-5-assists"),
            statRebounds: document.getElementById("stats-player-5-rebounds"),
            statBlocks: document.getElementById("stats-player-5-blocks"),
            statTurnovers: document.getElementById("stats-player-5-turnovers"),
            statSteals: document.getElementById("stats-player-5-steals"),
            statFouls: document.getElementById("stats-player-5-fouls"),
        }
        const player5Stats = gameObj.team2.player2; // Get player5 stats from gameObj
        updatePlayerDisplay(player5Elem, playerData[gameObj.team2.player2.id], player5Stats);
    };

    if (playerData[gameObj.team2.player3.id]) {
        const player6Elem = {
            img: document.getElementById("player-img-6"),
            name: document.getElementById("player-name-6"),
            nr: document.getElementById("player-nr-6"),
            statName: document.getElementById("stats-player-6-name"),
            statPoints: document.getElementById("stats-player-6-points"),
            statAssists: document.getElementById("stats-player-6-assists"),
            statRebounds: document.getElementById("stats-player-6-rebounds"),
            statBlocks: document.getElementById("stats-player-6-blocks"),
            statTurnovers: document.getElementById("stats-player-6-turnovers"),
            statSteals: document.getElementById("stats-player-6-steals"),
            statFouls: document.getElementById("stats-player-6-fouls"),
        }
        const player6Stats = gameObj.team2.player3; // Get player6 stats from gameObj
        updatePlayerDisplay(player6Elem, playerData[gameObj.team2.player3.id], player6Stats);
    };
};
