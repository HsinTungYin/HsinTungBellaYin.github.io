// SCTM-2005 Final Project
// Typing Game: Catch the Words!

// "SETTING UP THE GAME" from here

// Create the main game container
const game = document.createElement("div")

// Background Image
document.body.style.backgroundImage = "url('Earth.PNG')"
document.body.style.backgroundSize = "cover"
document.body.style.backgroundPosition = "center"
document.body.style.backgroundRepeat = "no-repeat"
let colorIndex = 0

// Game container style
game.style.position = "relative"
game.style.width = "100vw"
game.style.height = "100vh"
document.body.appendChild(game)

// Bottom Line Indicator
const bottomLine = document.createElement("div")
bottomLine.style.position = "absolute"
bottomLine.style.bottom = "100px"
bottomLine.style.left = "0"
bottomLine.style.width = "100%"
bottomLine.style.height = "10px"
bottomLine.style.backgroundColor = "white"
game.appendChild(bottomLine)

// Score Text
const scoreText = document.createElement("div")
scoreText.style.position = "absolute"
scoreText.style.top = "10px"
scoreText.style.left = "10px"
scoreText.style.color = "white"
scoreText.style.fontSize = "30px"
scoreText.innerText = "Score: 0"
game.appendChild(scoreText)

// Game Over Text
const gameOverText = document.createElement("div")
gameOverText.style.position = "absolute"
gameOverText.style.top = "50%"
gameOverText.style.left = "50%"
gameOverText.style.transform = "translate(-50%, -50%)"
gameOverText.style.fontSize = "100px"
gameOverText.style.color = "red"
gameOverText.style.display = "none"
gameOverText.innerText = "Game Over!"
game.appendChild(gameOverText)

// Game Variables
let score = 0
let missed = 0
let speed = 2
let letters = []
function randomWord() {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let length = 1
  
    if (score >= 30) {
      length = 4} 
     else if (score >= 20) {
    length = 3}
    else if (score >= 10) {
      length = 2
    }
    let word = ""
    for (let i = 0; i < length; i++) {
      word += chars[Math.floor(Math.random() * chars.length)]
    }
  
    return word
  }  

  // Create a New Falling Letter/Word
  function createLetter() {
    const rock = document.createElement("div")
    rock.innerText = randomWord()
    rock.style.position = "absolute"
    rock.style.width = "70px"
    rock.style.height = "70px"
    rock.style.backgroundImage = "url('rockk.png')"
    rock.style.backgroundSize = "cover"
    rock.style.backgroundRepeat = "no-repeat"
    rock.style.color = "black"
    rock.style.fontWeight = "bold"
    rock.style.fontSize = "20px"
    rock.style.display = "flex"
    rock.style.alignItems = "center"
    rock.style.justifyContent = "center"
    rock.style.userSelect = "none"
    rock.style.left = Math.random() * (window.innerWidth - 100) + "px"
    rock.style.top = "0px"
    rock.dataset.angle = Math.random() * 360
    rock.dataset.rotateSpeed = (Math.random() * 2) * (Math.random() < 0.5 ? 1 : -1)
    game.appendChild(rock)
    letters.push(rock)
  }  

  // Move Letters Downward and Rotate
  function moveLetters() {
    const lineY = window.innerHeight - 98
  
    for (let i = letters.length - 1; i >= 0; i--) {
      let letter = letters[i]
      let top = parseFloat(letter.style.top)
      top += speed
      letter.style.top = top + "px"

      // Rotate the letter as it falls
      let angle = parseFloat(letter.dataset.angle)
      let rotateSpeed = parseFloat(letter.dataset.rotateSpeed)
      angle += rotateSpeed
      letter.dataset.angle = angle
      letter.style.transform = `rotate(${angle}deg)`
  
      // Check if the letter hits the bottom line
      if (top + 80 >= lineY) {
        letter.remove()
        letters.splice(i, 1)
        missed++;
        lifeText.innerText = "❤️".repeat(5 - missed)
        if (missed >= 5) endGame()
      }
    }
  }
  
// Display Remaining Lives (Hearts)
const lifeText = document.createElement("div")
lifeText.style.position = "absolute"
lifeText.style.top = "10px"
lifeText.style.right = "10px"
lifeText.style.color = "white"
lifeText.style.fontSize = "40px"
lifeText.innerText = "❤️❤️❤️❤️❤️"
game.appendChild(lifeText);

// End the Game, when player misses too many hearts
function endGame() {
  clearInterval(spawnTimer)
  clearInterval(moveTimer)
  gameOverText.style.display = "block"
  document.removeEventListener("keydown", handleKey)
}

//Handle Key Presses
function handleKey(e) {
    let typed = e.key.toUpperCase()
  
    for (let i = 0; i < letters.length; i++) {
      let word = letters[i].innerText
      // If typed letter matches the word(s)
      if (word.startsWith(typed)) {
        word = word.slice(1)
        if (word.length === 0) {
          
          // Word Completed, remove it & update score  
          letters[i].remove()
          letters.splice(i, 1)
          score++;
          scoreText.innerText = "Score: " + score

          // Increase Speed, every 5 points
          if (score % 5 === 0) speed += 0.5
        } else {

          // Update Word, after removing typing letter  
          letters[i].innerText = word
        }
        break;
      }
    }
  }

// Start the Game!!
// Listen for Key Presses
document.addEventListener("keydown", handleKey)

// Create New Letters, every second
const spawnTimer = setInterval(createLetter, 1000)

// Move Letters Down the Screen, every 30ms
const moveTimer = setInterval(moveLetters, 30)

// That's it for the game!!