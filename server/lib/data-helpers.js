"use strict";

// Simulates the kind of delay we see with network or filesystem operations
const simulateDelay = require("./util/simulate-delay");

// Defines helper functions for saving and getting tweets, using the database `db`
module.exports = function makeDataHelpers(db) {
  return {

    // Saves a tweet to `db`
    saveTweet: function(newTweet, callback) {
        //Here we insert the new tweet to the database and call a function on it. SaveTweet function is gonna be called in tweets.js
        db.collection("tweets").insertOne(newTweet,callback );
    },

    // Get all tweets in `db`, sorted by newest first
    getTweets: function(callback) {
      //console.log(db.collection("tweets"));
      //const sortNewestFirst = (a, b) => a.created_at - b.created_at;
      db.collection("tweets").find().toArray(callback);
    }
  };
}

//Given this architecture, we now know that server/lib/data-helpers.js is the only package that actually deals with a database.
//We could take out the in-memory database, and swap in a different one, and the rest of the code won't even notice.