import React, { useState } from 'react';
import './App.css';
import TimeFormat from 'hh-mm-ss'

function App () {
  const [time,setTime]=useState(0);
  const [isActive,setIsActive]=useState(false);
  const [intervalID,setID]=useState(0);

function startTimer () {
  setIsActive(true);
  setID(setInterval (() => {setTime(time+1)},1000)); /* le problème vient d'ici: intervalID n'est pas visible pour les autres fonctions */
};

function stopTimer(){
  setIsActive(false);
  clearInterval(intervalID);
};

function resetTimer () {
  clearInterval(intervalID);
  setTime(0);
  setIsActive(false);
};
  return (
          <div className="App">
              <header className="App-header">
                <div>
                  <div className="time">
                    {TimeFormat.fromS(time, 'hh:mm:ss')}
                  </div>
                  <div className="title">
                    <span>Hour</span>
                    <span>Minute</span>
                    <span>Second</span>
                  </div>
                </div>
                <div className="btn">{(!this.state.isActive)?
                  <button type="button" class="btn btn-outline-primary" 
<<<<<<< HEAD
                    onClick={this.startTimer}>Start
                  </button>:<button type="button" class="btn btn-outline-primary" 
                    onClick={this.stopTimer}>Pause
                  </button>}
=======
                    onClick={(!isActive)?
                    startTimer:stopTimer}>Start
                  </button>
>>>>>>> first
                  <button type="button" class="btn btn-outline-dark"
                    onClick={resetTimer}>Reset</button>
                </div>
              </header>
        </div>
        )
}
export default App
