var friends = require("../data/friends");

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
    var bestMatch;
    var lowestDifference= 100;


    for (var i= 0; i<friends.length; i++){
      var totalDifference= 0;
      for(var k= 0; k<friends[i].scores.length; k++){

       totalDifference += Math.abs(req.body.scores[k]- friends[i].scores[k]);
      }
console.log(totalDifference);
if (totalDifference < lowestDifference) {
  bestMatch= friends[i];
}
    }
    
    
    
    friends.push(req.body);
    console.log(friends);

      
    
    res.json(bestMatch);
  });

  app.post("/api/clear", function() {
    friends = "";

    
  });
};
