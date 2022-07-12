// these are the scoreboard elements
let addToButton = 0;
const sleepScore = document.querySelector('.score1')
const foodScore = document.querySelector('.score2')
const boredomScore = document.querySelector('.score3')
const turtleAgeAdd = document.querySelector('.score4')
// these are the button elements
const sleepButton = document.querySelector(".b1")
const feedButton = document.querySelector(".b2")
const playButton = document.querySelector(".b3")
const buttonB4 = document.querySelector(".b4")
const startButton = document.querySelector(".b5")
// These are all image elements in the Dom
const img = document.querySelector(".day")
const shell = document.querySelector(".she")
// 
const boardValue = {
  sleep: 0,
  food: 0,
  boredom: 0,
  age: 0,
  name: ""
}
// 
buttonB4.addEventListener("click", function () { console.log(img.src,"help1")
  if (img.src.includes ("steamuserimages")){console.log(img.src,"help2")
    img.src = "https://innov8n.coach/wp-content/uploads/2020/07/2244-1024x585.jpg";
    // If the first if statement is true it will change the background image to a darker picture
  }else if (img.src.match("https://innov8n.coach/wp-content/uploads/2020/07/2244-1024x585.jpg")){console.log(img.src,"help3")
    img.src = "https://steamuserimages-a.akamaihd.net/ugc/1663482854872343980/CF13A29753269D054200052AC5B70B99881CD1E8/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false"
  }else{console.log(img.src,"help4")}
});
// From line 40 to line 53 Or clickable buttons that will lower sleep, food and boredom on click
  sleepButton.addEventListener("click", function () {
  boardValue.sleep--
    sleepScore.innerHTML = boardValue.sleep
})
//
  feedButton.addEventListener("click", function () {
  boardValue.food--
    foodScore.innerHTML = boardValue.food
})
// 
  playButton.addEventListener("click", function () {
  boardValue.boredom--
    boredomScore.innerHTML = boredom
})
//
startButton.addEventListener("click", function () {
boardValue.name = prompt('what is your pet name');
shell.classList.remove("shel")
    shell.className = "shell"
    // img.src = "C:\Users\James\Pictures\Project folder\My project (1.5).png";
// the line of code below adds 1 to the scoreboard that is exhausting
// there is also an if & if else statement that will send an alert if sleep reaches 10 or stop interval
const sleepAdd = setInterval( () => {
  let sleep = boardValue.sleep += 1;
  sleepScore.innerHTML = sleep
  if (sleep === 10){
      alert("Your Turtle Has Died :(")
     clearInterval(sleepAdd)
  } else if (boardValue.food === 10){
    clearInterval(sleepAdd)
  } else if (boardValue.boredom === 10){
    clearInterval(sleepAdd)
  }
}, 1000);
// the lines below at one to food every second on the scoreboard
// there is also an if &else statement that will send an alert if food reaches 10 or stops interval
const foodAdd = setInterval( () => {
  let food = boardValue.food += 1;
  foodScore.innerHTML = food
  if (food === 10){
      alert("Your Turtle Has Died :(") 
        clearInterval(foodAdd)
     } else if (boardValue.boredom === 10){
        clearInterval(foodAdd)
      } else if (boardValue.sleep === 10){
        clearInterval(foodAdd)
      }
}, 1000);
// the lines below add 1 to boredom every second on the scoreboard
// there is also an if & if else statement that will send an alert if boredom reaches 10 or stops interval
const boredomAdd = setInterval( () => {
    let boredom = boardValue.boredom += 1;
  boredomScore.innerHTML = boredom
  if (boredom === 10){
      alert("Your Turtle Has Died :(")
     clearInterval(boredomAdd)
  } else if (boardValue.sleep === 10){
    clearInterval(boredomAdd)
  } else if (boardValue.food === 10){
    clearInterval(boredomAdd)
  }
 }, 1000)
// the lines below add 1 to boredom every second on the scoreboard
// there is also an if & if else statement that will send an alert if turtleAge reaches 10 or stops interval
// I have also added a few lines that will change the image sat a certain age
const turtleAdd = setInterval( () => {
    let turtleAge = boardValue.age += 1;
  turtleAgeAdd.innerHTML = turtleAge
  if (turtleAge === 8)
   {shell.classList.remove("shell")
    shell.className = "smallturtle";
    // shell.src = "C:\Users\James\Pictures\Project folder\My project (3).png";
    //alert("your turtle is an adult")
  } else if (turtleAge === 8)
  {shell.classList.remove("smallturtle")
   shell.className = "bigturtle";
//    shell.src = "C:\Users\James\Pictures\Project folder\My project (4).png"
  } else if (boardValue.boredom === 10){
    clearInterval(turtleAdd)
  } else if (boardValue.sleep === 10){
    clearInterval(turtleAdd)
  } else if (boardValue.food === 10){
    clearInterval(turtleAdd)
  }
}, 500)
})