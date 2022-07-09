//   }
// })
  sleepButton.addEventListener("click", function () {
  boardValue.sleep--
    sleepScore.innerHTML = sleep
})
//
  feedButton.addEventListener("click", function () {
  boardValue.food--
    foodScore.innerHTML = food
})
// 
  playButton.addEventListener("click", function () {
  boardValue.boredom--
    boredomScore.innerHTML = boredom
})
//
startButton.addEventListener("click", function () {
boardValue.name = prompt('what is your pet name')
// the line of code below adds 1 to the scoreboard that is exhausting
// there is also an if statement that will send an alert if sleep reaches 10
setInterval( () => {
  let sleep = boardValue.sleep += 1;
  sleepScore.innerHTML = sleep
  if (sleep === 11){
      alert("Your Turtle Has Died :(")
  }
}, 1000);
// the lines below at one to food every second on the scoreboard
// there is also an if statement that will send an alert if food reaches 10
const foodAdd = setInterval( () => {
  let food = boardValue.food += 1;
  foodScore.innerHTML = food
  if (food === 11){
      alert("Your Turtle Has Died :(")
    
   const noAdd = () => { 
     clearInterval(foodAdd)}
  }
}, 1000);
// the lines below add 1 to boredom every second on the scoreboard
// there is also an if statement that will send an alert if boredom reaches 10
const boredomAdd = setInterval( () => {
    let boredom = boardValue.boredom += 1;
  boredomScore.innerHTML = boredom
  if (boredom === 11){
      alert("Your Turtle Has Died :(")
  }
 }, 1000)
// 
// 
const turtleAdd = setInterval( () => {
    let turtleAge = boardValue.age += 1;
  turtleAgeAdd.innerHTML = turtleAge
  if (turtleAge === 8){
       alert("your turtle is an adult")
  }
 }, 1000)
  end
//
const older = () => {
  if (turtleAdd === 6) {
    div.class = ("turtle")// this needs work
  }
}
// playWithPet.addEventListener('click', function (add){
//     if (add === 'click'){
//         return 
//     }
// })
})

console.log()

// console.log(playWithPet)