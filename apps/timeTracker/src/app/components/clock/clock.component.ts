import { Component } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss'],
})
export class ClockComponent {
  public displayTimmerText: boolean = false;

  public startStopButtonText: string = 'Start';
  public runTimerValue: number = 0;
  public timerValue: number = 0;
  public interval: any;

  public onTimerButtonClick(): void {
    this.displayTimmerText = true;
  }
  public onStopperButtonClick(): void {
    this.displayTimmerText = false;
  }

  public onStartStopButtonClick(): void {
    if (this.startStopButtonText === 'Start') {
      this.startStopButtonText = 'Stop';
      this.startTimer();
    } else {
      this.startStopButtonText = 'Start';
      this.stopTimer();
    }
  }

  public onResetButtonClick(): void {
    this.runTimerValue = this.timerValue;
  }

  public onInputChange(event: any): void {
    this.timerValue = event.target.value;
    this.runTimerValue = event.target.value;
  }

  public startTimer(): void {
    this.interval = setInterval(() => {
      if (this.runTimerValue > 0) {
        this.runTimerValue--;
      } else {
        this.runTimerValue = 0;
      }
    }, 1000);
  }

  public stopTimer(): void {
    clearInterval(this.interval);
  }
}
