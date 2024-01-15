import { CircularProgress } from "@mui/material";
import { StaticMapComponentProps } from "interfaces";
import React, { useState } from "react";

const StaticMapComponent: React.FC<StaticMapComponentProps> = ({
  lat,
  lng,
  width = 400,
  height = 225,
  zoom = 9,
}) => {
  const [loading, setLoading] = useState(true);
  const fakeTimeout = Math.floor(Math.random() * 3) + 1;
  const onLoad = () => {
    setTimeout(() => {
      setLoading(false);
    }, fakeTimeout * 1000);
  };
  const apiKey =
    "pk.eyJ1IjoicC1tYWprdXRld2ljeiIsImEiOiJjbHFxd2tvOG00NWtkMmptZWN6a254ZXkxIn0.M-FrJYMUJvk7K1VMZAhNsQ";

  const markerCharacter = encodeURIComponent("pin-s-e+FF0000");
  const imageUrl = `https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/${markerCharacter}(${lng},${lat})/${lng},${lat},${zoom}/${width}x${height}?access_token=${apiKey}`;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height,
      }}
    >
      {loading && <CircularProgress sx={{ position: "absolute" }} />}
      <img
        onLoad={onLoad}
        src={imageUrl}
        alt="Map"
        style={{
          maxWidth: "100%",
          opacity: loading ? "0" : "1",
          transition: "opacity .5s",
        }}
      />
    </div>
  );
};

export default StaticMapComponent;
