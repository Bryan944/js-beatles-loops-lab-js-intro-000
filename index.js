// add solution here
const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
var array1 = [];
function theBeatlesPlay(){

    for (var i = 0; i < musicians.length; i++) {
          for (var i = 0; i < instruments.length; i++) {
                    array1.push(musicians[i]+' '+ 'plays' +' ' +instruments[i])
}
}return array1;
}



const facts = ["He was the last Beatle to learn to drive",
      "He was never a vegetarian",
      "He was a choir boy and boy scout",
      "He hated the sound of his own voice"];

const facts2 = ["While on tour, he enjoyed playing Monopoly",
      "Harmonica was the first instrument Lennon learned to play"
    ];

    var i = 0;
    var n = 0;
    var array2 = [];
    //var array3 = [];


        function johnLennonFacts()    {
            while (i < facts.length )   {
                  array2.push(facts[i++] + '!!!');
}
        return array2 ;
}











var newarr1 = [];
var n = 0 ;
function iLoveTheBeatles(n){
      do{
        n++;
  newarr1.push(`I love the Beatles!`)
}
while (n < 15);
if(n > 17){
return `I love the Beatles!`;
}
  return newarr1;
}
