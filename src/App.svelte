<script>
  let rock = false;
  let paper = false;
  let scissors = false;
  let victoryText = "Choose your move";
  let victoryTextClass = "victory-text";
  let signal = "win";
  let restarted = true;
  function generateRandomNumber(start, end){
    return Math.floor((Math.random() * end) + start);
  }
  function generateRandomBooleanValue() { 
    let value = Math.random();
    if (value >= 0.5) {
      let booleanValue = true;
      return booleanValue;
    }
    else {
      let booleanValue = false;
      return booleanValue;
    }
  }
  function chooseRock() {
    // Checks if someone already pressed the paper button or the scissors button
    if (paper === true || scissors === true || restarted === false) {
      console.log(restarted)
      return
    }
    rock = true;
    victoryText = "User chooses rock. Calculating...";
    let timeUntilWin = generateRandomNumber(1000, 3000);
    setTimeout(() => {
      if (signal === "win") {
        victoryText = "User chooses rock. Computer chooses paper. Computer Wins.";
        victoryTextClass = "victory-text-red";
      }
      else if (signal === "tie") {
        victoryText = "User chooses rock. Computer chooses rock. TIE";
      }
      else if (signal === "lose") {
        victoryText = "User chooses rock. Computer chooses scissors. User wins. Don't tell anyone you won.";
        victoryTextClass = "victory-text-green";
      }
      rock = false;
      restarted = false;
    }, timeUntilWin);
    
    

  };

  function chooseScissors() {
    // Checks if someone already pressed the rock button or the paper button
    if (rock === true || paper === true || restarted === false) {
      return
    }
    scissors = true;
    victoryText = "User chooses scisssors. Calculating...";
    let timeUntilWin = generateRandomNumber(1000, 3000);
    setTimeout(() => {
      if (signal === "win") {
        victoryText = "User chooses scissors. Computer chooses rock. Computer Wins.";
        victoryTextClass = "victory-text-red";
      }
      else if (signal === "tie") {
        victoryText = "User chooses scissors. Computer chooses scissors. TIE";
      }
      else if (signal === "lose") {
        victoryText = "User chooses scissors. Computer chooses paper. User wins.";
        victoryTextClass = "victory-text-green";
      }
      scissors = false;
      restarted = false;
    }, timeUntilWin);
    
  };

  function choosePaper() {
    // Checks if someone already pressed the rock button or the scissors button
    if (rock === true || scissors === true || restarted === false) {
      return
    }
    paper = true;
    victoryText = "User chooses paper. Calculating...";
    // Generates random amount of time to wait
    let timeUntilWin = generateRandomNumber(1000, 4000);
    setTimeout(() => {
      if (signal === "win") {
        victoryText = "User chooses paper. Computer chooses scissors. Computer Wins.";
        victoryTextClass = "victory-text-red";
      }
      else if (signal === "tie") {
        victoryText = "User chooses paper. Computer chooses paper. TIE";
      }
      else if (signal === "lose") {
        victoryText = "User chooses paper. Computer chooses rock. User wins.";
        victoryTextClass = "victory-text-green";
      }
      paper = false;
      restarted = false;
    }, timeUntilWin);
    
      
    
  };

  function possibleTie(event) {
    if (event.key === ' ') {
      if (rock === true || paper === true || scissors === true) {
        let randomBool = generateRandomBooleanValue();
        if (randomBool === true) {
          if (generateRandomNumber(1, 1000) === 1000) {
            signal = "lose";
          }
          else {
            signal = "tie";
          }
        }

      }
      
    }
    else {
      console.log("faliure")
    }
    
  }

  function restartGame() {
    // handles resetting all the variables post game so that styles and text from
    // the old game won't carry over to the new game
    if (rock == true || paper == true || scissors == true) {
      return
    };
    victoryText = "Choose your move";
    victoryTextClass = "victory-text";
    restarted = true;
    signal = "win";
  };
</script>

<svelte:window on:keydown={possibleTie}/>

<div id="grid">
  <h1>Rock Paper Scissors Bot</h1>
    <div id="opening-text-container">
      <p id="opening-text">This bot can beat anyone in rock paper scissors. The technology of the
        modern era has all come down to this. This bot can beat you in any rock paper
        scissors tournament. </p>
    </div>
    <div id="rock-paper-scissors-interface">
      <span id="{victoryTextClass}">{victoryText}</span>
      <div id="rock-paper-scissors-game-buttons">
        <button id="rock-button" class="button-text-img" type="button" on:click={chooseRock}>
          <span>🪨 Rock</span>
        </button>
        <button id="paper-button" class="button-text-img" type="button" on:click={choosePaper}>
          <span>📝 Paper</span> 
        </button>
        <button id="scissors-button" class="button-text-img" type="button" on:click={chooseScissors}>
          <span>✂️ Scissors</span>
        </button>
      </div>
      <div id="restart-button-container">
        <button id="restart-button" class="button-text-img" type="button" on:click={restartGame}>
        <img 
        src="restart-icon.svg" 
        class="button-text-img-item" 
        alt="" 
        width="20px" 
        height="20px">
        <span class="button-text-img-item">Restart</span>
      </button>
    </div>
      
  </div>
</div>
<p id="attribution">
  restart by Alice Design from the Noun Project 
</p>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@600&family=Roboto+Condensed:wght@300&family=Roboto:wght@300;400&display=swap');
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }

  #grid {
    display: grid;
    grid-template-columns: 1fr 3.3fr 1fr;
    grid-template-rows: 1fr 120px 100px 100px;
    grid-gap: 10px;
    justify-content: center;
  }
  button {
    border: solid 2px rgb(228, 228, 228);
    background-color: rgb(228, 228, 228);
    border-radius: 10px;
    width: 75px;
    height: 30px;
    margin: 3px;
    font-family: 'Roboto', sans-serif;
    font-weight: 100;
  }
  h1 {
    justify-self: center;
    align-self: center;
    grid-column: 1 / -1;
    font-size: min(5vw, 30px);
    font-family: 'Outfit', sans-serif;
  }

  #opening-text-container {
    justify-self: center;
    align-self: center;
    grid-row: 2;
    text-align: center;
    grid-column: 1 / -1;
  }

  #opening-text {
    width: 60vw;
    font-size: 17px;
    font-family: 'Roboto', sans-serif;
  }
  #rock-paper-scissors-interface {
    justify-self: center;
    grid-row: 3;
    grid-column: 1 / -1;
  }

  #rock-paper-scissors-game-buttons {
    /* Now, you'll see that some of these rulesets have display: flex in them.
    This is for centering. Most of those flex containers only center some elements*/
    display: flex;
    justify-content: center;
    width: 250px;
    height: 35px;
  }

  #victory-text {
    display: flex;
    justify-content: center;
    font-size: 0.5rem;
    text-align: center;
    font-family: 'Roboto Condensed', sans-serif;
  }

  #victory-text-red {
    display: flex;
    justify-content: center;
    font-size: 0.5rem;
    text-align: center;
    font-family: 'Roboto Condensed', sans-serif;
    color: red;
  }

  .button-text-img {
    /* This ruleset applies to all buttons that have text AND an image in them.*/
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .button-text-img-item {
    /* This ruleset is for the items inside of those buttons with text AND an image
    inside them. */
    margin: 2px;
  }

  #restart-button-container {
    display: flex;
    justify-content: center;
    width: 250px;
  }

  #restart-button {
    width: 238px;
  }

  #attribution {
    display: flex;
    justify-content: center;
    font-size: 0.7rem;
    font-family: 'Roboto Condensed', sans-serif;
  }
  
  #dark-mode-button {
    border-radius: 30px;
    width: 30px;
    position: fixed;
    bottom: 2px;
    background-color: black;
    border: 1px solid gray;
  }
  @media screen and (min-width: 360px) {
    #rock-paper-scissors-interface {
      grid-column: 2;
    }
  }
  @media screen and (max-width: 550px) {
    #opening-text {
      font-size: min(4vw, 12px)
    }
  }
  
</style>
