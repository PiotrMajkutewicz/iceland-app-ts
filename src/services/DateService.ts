export class DataService {
  static parseTimeStamp(dateString: string) {
    const d = new Date(dateString);

    if (isNaN(d.getTime())) {
      return dateString;
    }
    return `${d.toLocaleDateString()} ${d.toLocaleTimeString()}`;
  }
}
