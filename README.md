# Tweeter Project

This project is a back to front project which uses mongodb for its database. 
User interacts whith one page that has an inpurt text area for the new tweet to be written, and tweet button which submits the tweet.
Tweets should be valid text between 1 and 140 character to be accepted. There is a number on the left bottom side of the text bar that shows 140 by default and as the user starts adding characters, it shows the number of remained characters. The number turns to negative and red color if the text exceeds 140 characters.
If the text is empty the user recieves an alert message that reminds her that text can't be empty.
If the text is bigger than 140 characters the user recieves an alert message that reminds her that the text can't be bigger than 140 character.
This is an asynchronous webpage, so it doesn't refresh the whole page after the new tweet gets submitted. The new tweet shows up at the top of tweets without refereshing the page.
To give user option to get rid of input text area in her page, there is a compose button implemented on the right top of the page that slides tweets over the text area.
When the user hovers over each tweet, it's opacity increases and user can see the options for liking, retweeting and reporting the tweet.
However the features for liking, retweeting and reporting the tweet are shown on the page, clicking on them wouldn't make any difference since the code for those tasks is not added yet.
The page shows the date that each tweet was sent accurately.
However users can't login separately and everybody can send tweets and see all the tweets, the webpage has a potential for adding this feature. For now a random username gets generated and shown for each tweet.

## ScreenShots
- !["The openning view"](https://github.com/hajinasiri/tweetr/blob/master/docs/Openning%20view.png?raw=true)
- !["When the tweets slide up and cover the text input area"](https://github.com/hajinasiri/tweetr/blob/master/docs/Slided%20up%20view.png?raw=true)
 - !["When user hovers over a tweet"](https://github.com/hajinasiri/tweetr/blob/master/docs/Hover%20view.png?raw=true)
 - !["When user tries to submit an empty text"](https://github.com/hajinasiri/tweetr/blob/master/docs/When%20the%20text%20is%20empty.png?raw=true)
 - !["When user tries to tweet a text bigger than 140 characters"](https://github.com/hajinasiri/tweetr/blob/master/docs/When%20the%20text%20is%20too%20big.png?raw=true)

## Dependencies

- Body-parser 1.15.2,
- Chance 1.0.2
- Express 4.15.4
- md5 2.1.0
- Mongodb 2.2.31

## Getting started
- Install all the dependendencies(using npm install command)
- To start the server enter "npm start" in the command line.
