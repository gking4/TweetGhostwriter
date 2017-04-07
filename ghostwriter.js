function writeTweet()
{
  var randomIndex;
  var sentence;
  var intro = ["Whats up with ", "How does ", "Where did you get ", "When did "];
  var body = ["that rock ", "that hat ", "the dining hall food ", "those bathrooms ", "the government "];
  var end = ["learn how to drive a car?", "tame wild animals?"];
  randIndex = randomUpTo(intro.length-1);
  sentence = intro[randIndex];
  randIndex = randomUpTo(body.length-1);
  sentence += body[randIndex];
  randIndex = randomUpTo(end.length-1);
  sentence += end[randIndex];
  document.getElementById("tweet").innerHTML = sentence;

}

//Generates a random whole number between 0 and max (inclusive)
function randomUpTo(max)
{
  return Math.floor(Math.random() * (max+1));
}
