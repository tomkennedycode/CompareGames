const express = require('express')
const app = express();
const port = 8000;

const SteamAPI = require('steamapi');
const steam = new SteamAPI('');

app.get('/', (req, res) => {
  res.send('Hello World!')

});

function Start() {
    let names = ['KhaleesiTOM', 'sproedebamser'];
    let arrayOfGames = [];
    console.log(names);

    // for(let i = 0; names.length < i; i++){

    // }

    names.forEach(function(name) {
        console.log(name);
        let id = GetSteamUserID(name);
        console.log(id + 'test');
        let listOfGames = GetUserGames(id)
        arrayOfGames.push(listOfGames);
    })
}



function GetSteamUserID(username) {
    steam.resolve(`https://steamcommunity.com/id/${username}/`).then(id => {
        return id;
    })
}

function GetUserGames(id) {
    steam.getUserOwnedGames(id).then(games => {
        return games;
    })
}

Start();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});
