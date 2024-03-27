class PomodoroTimer {
  private duration: number;
  private timer: HTMLDivElement | null;
  private interval: number | null;

  constructor(duration: number) {
    this.duration = duration;
    this.timer = document.getElementById("timer") as HTMLDivElement;
    this.interval = null;
    this.init();
  }

  private init(): void {
    this.updateTimerDisplay();
    document
      .getElementById("start")
      ?.addEventListener("click", this.start.bind(this));
    document
      .getElementById("pause")
      ?.addEventListener("click", this.pause.bind(this));
    document
      .getElementById("reset")
      ?.addEventListener("click", this.reset.bind(this));
  }

  private updateTimerDisplay(): void {
    const minutes = Math.floor(this.duration / 60);
    const seconds = this.duration % 60;
    const display = `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
    if (this.timer) {
      this.timer.textContent = display;
    }
  }

  private start(): void {
    if (!this.interval) {
      this.interval = setInterval(() => {
        this.duration--;
        if (this.duration <= 0) {
          this.pause();
          alert("Time is up!");
        }
        this.updateTimerDisplay();
      }, 1000);
    }
  }

  private pause(): void {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
  }

  private reset(): void {
    this.pause();
    this.duration = 25 * 60; // Reset to 25 minutes
    this.updateTimerDisplay();
  }
}

const timer = new PomodoroTimer(25 * 60); // 25 minutes
