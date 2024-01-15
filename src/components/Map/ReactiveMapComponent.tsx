import { ReactiveMapComponentProps } from "interfaces";
import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";

const ReactiveMapComponent: React.FC<ReactiveMapComponentProps> = ({
  mapStatus = true,
  center = [51.505, -0.09],
  marker = [],
  zoom = 6,
  scrollWheelZoom = false,
  station,
}) => {
  const MapEffects = ({
    mapStatus,
    center,
  }: {
    mapStatus: boolean;
    center: [number, number];
  }) => {
    const map = useMap();

    useEffect(() => {
      if (mapStatus && marker.length) {
        map.flyTo(center, 16, { animate: true, duration: 3 });
      }
    }, [center, map, mapStatus]);

    return null;
  };

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: mapStatus ? "block" : "none",
      }}
    >
      <MapContainer
        center={center}
        zoom={zoom}
        scrollWheelZoom={scrollWheelZoom}
        style={{ height: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {marker.length && station && (
          <Marker position={marker}>
            <Popup>{`${station.name} (${station.company})`}</Popup>
          </Marker>
        )}
        {mapStatus && <MapEffects center={center} mapStatus={mapStatus} />}
      </MapContainer>
    </div>
  );
};

export default ReactiveMapComponent;
