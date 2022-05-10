import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "formatSeconds",
  pure: false,
})
export class FormatSecondsPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    if (value) {
      return this.formatSecondsAsTime(value);
    } else {
      return null;
    }
  }

  formatSecondsAsTime(secs) {
    const min = Math.floor(secs / 60);
    const sec = Math.floor(secs - min * 60);

    let minn = "";
    let secc = "";
    if (min < 10) {
      minn = `0${min}`;
    } else {
      minn = `${min}`;
    }
    if (sec < 10) {
      secc = `0${sec}`;
    } else {
      secc = `${sec}`;
    }

    return `${minn}:${secc}`;
  }
}
