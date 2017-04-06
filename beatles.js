'use strict';
function johnLennonFacts(facts){
  var excitingFacts = []
  var i = 0
  while (i < facts.length){
    excitingFacts.push(facts[i] + "!!!")
    i = i+1
  }
  return excitingFacts
}

function theBeatlesPlay(musicians, instruments){
  var inTheBand = [];
  for(var i=0; i<musicians.length; i=i+1){
    inTheBand = inTheBand + musicians[i] + " plays " + instruments[i]
  }
  return inTheBand
}

function iLovetheBeatles(number){
  var howMuch = []
  if(number <= 10 && number > 0);
  var i = 0;
  do {
    howMuch.push("I love the Beatles!");
    i = i+1;
  } while(i < number){
    return howMuch
  }
}
