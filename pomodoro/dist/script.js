// script.ts
var PomodoroTimer = /** @class */ (function () {
    function PomodoroTimer(duration) {
        this.duration = duration;
        this.timer = document.getElementById("timer");
        this.interval = null;
        this.init();
    }
    PomodoroTimer.prototype.init = function () {
        var _a, _b, _c;
        this.updateTimerDisplay();
        (_a = document
            .getElementById("start")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", this.start.bind(this));
        (_b = document
            .getElementById("pause")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", this.pause.bind(this));
        (_c = document
            .getElementById("reset")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", this.reset.bind(this));
    };
    PomodoroTimer.prototype.updateTimerDisplay = function () {
        var minutes = Math.floor(this.duration / 60);
        var seconds = this.duration % 60;
        var display = "".concat(minutes.toString().padStart(2, "0"), ":").concat(seconds
            .toString()
            .padStart(2, "0"));
        if (this.timer) {
            this.timer.textContent = display;
        }
    };
    PomodoroTimer.prototype.start = function () {
        var _this = this;
        if (!this.interval) {
            this.interval = setInterval(function () {
                _this.duration--;
                if (_this.duration <= 0) {
                    _this.pause();
                    alert("Time is up!");
                }
                _this.updateTimerDisplay();
            }, 1000);
        }
    };
    PomodoroTimer.prototype.pause = function () {
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
        }
    };
    PomodoroTimer.prototype.reset = function () {
        this.pause();
        this.duration = 25 * 60; // Reset to 25 minutes
        this.updateTimerDisplay();
    };
    return PomodoroTimer;
}());
var timer = new PomodoroTimer(25 * 60); // 25 minutes
