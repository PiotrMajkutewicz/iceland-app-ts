export interface ReactiveMapComponentProps {
  mapStatus?: boolean;
  center?: [number, number];
  marker?: [number, number];
  zoom?: number;
  scrollWheelZoom?: boolean;
  station?: {
    name: string;
    company: string;
  };
}
