var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',{
    phrase: "taco Cat",
    phraseEx: "Step On No Pets"
  });
});

router.post('/', function(req, res){
  res.render('index',{
    phrase: req.body.userText,
    message: getResultDescription(req.body.userText),
    phraseEx: req.body.exText,
    message2: getResultDescriptionEx(req.body.exText)
  })
})

function checkPalindrome(phrase){
  let temp = phrase.trim();
  temp = temp.split();
  temp = temp.reverse();
  temp = temp.join("")
  if (phrase.toLowerCase().replace("","") === temp.toLowerCase().replace("","")){
    return true
  }
  else {
    return false
  }
}

function checkPalindromeEx(phraseEx){
  let tempEx = phraseEx.trim();
  tempEx = tempEx.split();
  tempEx = tempEx.reverse();
  tempEx = tempEx.join("")
  if (phraseEx.toLowerCase().replace("","") === tempEx.toLowerCase().replace("","")){
    return true
  }
  else {
    return false
  }
}



function getResultDescription(phrase) {
  if (checkPalindrome(phrase)) {
    return `${phrase} is a palindrome`
  }
  return `${phrase} is not a palindrome`
}

function getResultDescriptionEx(phraseEx) {
  if (checkPalindromeEx(phraseEx)) {
    return `${phraseEx} is a palindrome`
  }
  return `${phraseEx} is not a palindrome`
}

module.exports = router;
