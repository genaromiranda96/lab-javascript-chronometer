class Chronometer {
    constructor() {
      this.currentTime = 0;
      this.intervalId = 0;
    // ... your code goes here
  }
  startClick(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      if (callback) {
          callback()
       };
    }, 1000)
    }
    // ... your code goes here
  
  getMinutes() {
        let minutes = Math.floor(this.currentTime / 60);
        if (minutes >=1) {
          return minutes
        } else {
          return minutes = 0;
        }
    // ... your code goes here
  }
  getSeconds() {
          if (this.currentTime === 0) return this.currentTime;
          return this.currentTime % 60;
    // ... your code goes here
  }
  twoDigitsNumber(number) {
      let newNumber = number.toString();
      if (newNumber.length === 1) {
        return `0${newNumber}`
      } else {
        return newNumber
      }
    // ... your code goes here
  }
  stopClick() {
    clearInterval(this.intervalId)
    // ... your code goes here
  }
  resetClick() {
    this.currentTime = 0;
 }
    // ... your code goes here

  splitClick() {
    let min = this.getMinutes();
    let sec = this.getSeconds();

    switch(true) {
      case (min < 10 && sec < 10):
        return `0${min}:${0}${sec}`;
      case (min < 10 && sec > 10):
        return `0${min}:${sec}`;
      case (min > 10 && sec < 10):
          return `${min}:0${sec}`;
      default:
          return `${min}:${sec}`
      }
      
    }
    // ... your code goes here
}

