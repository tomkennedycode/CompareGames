const express = require('express')
const app = express();
const port = 8000;

const SteamAPI = require('steamapi');
const steam = new SteamAPI('');

app.get('/', (req, res) => {
  res.send('Hello World!')

});

async function Start() {
    let names = ['KhaleesiTOM', 'sproedebamser'];
    let arrayOfGames = [];
    console.log(names);

    // for(let i = 0; names.length < i; i++){

    // }

    names.forEach(function(name) {
        console.log(name);
        let id = steamID(name);
        id.then(function(result) {
            console.log(result);
        })
        console.log(id + 'test');
        let listOfGames = GetUserGames(id)
        arrayOfGames.push(listOfGames);
    })
}

let steamID = function(name) {
    return steam.resolve(`https://steamcommunity.com/id/${username}/`).then(id => {
        return id;
    })
}


async function GetSteamUserID(username) {
    steam.resolve(`https://steamcommunity.com/id/${username}/`).then(id => {
        return id;
    }).catch(err => {
        console.log('error', err);
    })
}

function GetUserGames(id) {
    steam.getUserOwnedGames(id).then(games => {
        return games;
    })
}

(async() => {
    await Start();
})();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});
