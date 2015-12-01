# TwitterKirsche
TwitterKirsche is a very simple twitter bot. It is completely written in Node.js and supports only plain text tweets in a preset interval.
The tweets are read from a file called items.txt and is everytime the bot sends a tweet reloaded, therefore changes on the fly are no problem

##Installing
Requirements:
 * Node.js
 * Node Twitter package (`npm install twitter`)
 * Node fs package (`npm install fs`)
 * Twitter API Application

Install:
 1. Clone Repository
 2. Edit bot.js:
 3. Insert your API Keys
 4. Set Tweetinterval
 5. Add at least 10 items to the items.txt, if not you'll run into some weird Twitter API issues. To seperate two items from each other use |||| (example file included!)

##Start:
`node bot.js`

Running example of this bot: [@DongerBot](http://twitter.com/DongerBot)