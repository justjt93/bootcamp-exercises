class Timer {
  constructor(time, color) {
    this.time = time;
    this.timerFnc;
    this.timerRunning = false;
  }

  toggleStartStop() {
    const startStop = this.element.querySelector("#startStop");
    if (this.timerRunning === false) {
      startStop.textContent = "STOP";
      this.timerRunning = true;
    } else {
      this.timerRunning = false;
      startStop.textContent = "START";
    }
  }

  increment() {
    this.time++;
    this.update();
  }

  decrement() {
    if (this.time > 0) {
      this.time--;
      this.update();
    } else {
      clearInterval(this.timerFnc);
      alert("Time is up");
      this.toggleStartStop()
    }
  }

  startStop() {
    if (this.timerRunning === false) {
      this.toggleStartStop()
      this.timerFnc = setInterval(() => {
        this.decrement();
      }, 1000);
    } else {
      clearInterval(this.timerFnc);
      this.toggleStartStop();
    }
  }



  reset() {
    this.time = 5;
    this.update();
    clearInterval(this.timerFnc);
  }

  render() {
    this.element = document.createElement("div");
    this.element.className = "timerWindow";
    this.element.innerHTML = `<button id="upArrow" class="upArrow">↑↑↑</button>
      <div class="midSection">
        <button id="reset" class="resetBtn">RESET</button>
        <div id="timerDigit" class="timerDigit" >30</div>
        <button id="startStop" class="startStopBtn">START</button>
      </div>
      <button id="downArrow" class="downArrow">↓↓↓</button>`;

    const upArrow = this.element.querySelector("#upArrow");
    upArrow.addEventListener("click", () => {
      this.increment();
    });

    const downArrow = this.element.querySelector("#downArrow");
    downArrow.addEventListener("click", () => {
      this.decrement();
    });

    const resetBtn = this.element.querySelector("#reset");
    resetBtn.addEventListener("click", () => {
      this.reset();
    });

    const startStop = this.element.querySelector("#startStop");
    startStop.addEventListener("click", () => {
      this.startStop();
    });

    this.update();
  }

  mount(parent) {
    this.render();
    parent.appendChild(this.element);
  }

  update() {
    const timerDigit = this.element.querySelector("#timerDigit");
    timerDigit.textContent = `${this.time}`;
  }
}
