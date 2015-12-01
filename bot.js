/**
 * Created by Kirschnkiller on 29.05.2015.
 */
var Twitter = require('twitter');
var fs = require("fs");
var client = new Twitter({
    consumer_key: '',
    consumer_secret: '',
    access_token_key: '',
    access_token_secret: ''
}),
    tweetinterval = 1800; //Tweetinterval in seconds, so 1800 = every 30 minutes
function tweet (text) {
    client.post('statuses/update', {status: text}, function (error, tweet, response) {
        if (error) throw error;
        console.log("[TWITTERBOT]: " +"Content: " + tweet);  // Tweet body.
        console.log("[TWITTERBOT]: " +"Response from Twitter: " + response);  // Raw response object.
    });
}

var last10dongs = ["","","","","","","","","",""];
function addlast10(text) {
    last10dongs[9] =last10dongs[8];
    last10dongs[8] =last10dongs[7];
    last10dongs[7] =last10dongs[6];
    last10dongs[6] =last10dongs[5];
    last10dongs[5] =last10dongs[4];
    last10dongs[4] =last10dongs[3];
    last10dongs[3] =last10dongs[2];
    last10dongs[2] =last10dongs[1];
    last10dongs[1] =last10dongs[0];
    last10dongs[0] = text;
}
function inlast10dongs(text) {
    return (last10dongs.indexOf(text) > -1);
}

var donger = String(fs.readFileSync("items.txt")).split("||||");
var min = 0;
var max = Object.keys(donger).length;

var random = Math.round(Math.random() * (max - min)) + min;
console.log("[TWITTERBOT]: " +"Using Donger number: " + random);
console.log("[TWITTERBOT]: " +"Donger: " + donger[random]);
var dong = donger[random];
while (inlast10dongs(dong)) {
    random = Math.round(Math.random() * (max - min)) + min;
    dong = donger[random];
}
addlast10(dong);
tweet(donger[random]);
console.log("[TWITTERBOT]: " +last10dongs);
setInterval(function () {
    var donger = String(fs.readFileSync("dongers.txt")).split("||||");
    var min = 0;
    var max = Object.keys(donger).length;

    var random = Math.round(Math.random() * (max - min)) + min;
    console.log("[TWITTERBOT]: " +"Using Donger number: " + random);
    console.log("[TWITTERBOT]: " +"Donger: " + donger[random]);
    var dong = donger[random];
    while (inlast10dongs(dong)) {
        random = Math.round(Math.random() * (max - min)) + min;
        dong = donger[random];
    }
    addlast10(dong);
    tweet(donger[random]);
    console.log("[TWITTERBOT]: " +last10dongs);
}, tweetinterval*1000);
