export class DateDoctor {

  public static padTo2Digits(num: number) {
    return num.toString().padStart(2, "0");
  };

  public static formatDate(date: any) {
    return (
      [
        date.getFullYear(),
        DateDoctor.padTo2Digits(date.getUTCMonth() + 1),
        DateDoctor.padTo2Digits(date.getUTCDate()),
      ].join("-") +
      " " +
      [
        DateDoctor.padTo2Digits(date.getUTCHours()),
        DateDoctor.padTo2Digits(date.getUTCMinutes()),
        DateDoctor.padTo2Digits(date.getUTCSeconds()),
      ].join(":")
    );
  };


}