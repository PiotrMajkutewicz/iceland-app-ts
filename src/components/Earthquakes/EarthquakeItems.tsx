import { Grid } from "@mui/material";
import EarthquakeItem from "./EarthquakeItem";
import { Earthquake, EarthquakeType } from "interfaces";

export default function EarthquakeItems({
  selectedSize,
  earthquakes,
  getSizeColor = () => "white",
}: { selectedSize: EarthquakeType, earthquakes: Earthquake[], getSizeColor: (size: number) => any }) {
  return (
    <>
      {!earthquakes.length && (
        <h2 style={{ textAlign: "center" }}>
          No {selectedSize} earthquakes found
        </h2>
      )}
      <Grid container spacing={4} sx={{ py: "5%" }}>
        {earthquakes.map(
          ({ latitude, longitude, timestamp, size, humanReadableLocation }) => {
            const color = getSizeColor(size);
            const props = {
              latitude,
              longitude,
              timestamp,
              size,
              humanReadableLocation,
              color,
            };
            return <EarthquakeItem {...props} key={timestamp} />;
          }
        )}
      </Grid>
    </>
  );
}
