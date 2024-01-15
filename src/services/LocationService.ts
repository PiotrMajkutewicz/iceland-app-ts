export class LocationService {
  static getLocationNameFromReadableLocation(readableLocation = "") {
    return readableLocation.split("af ").pop();
  }
}
