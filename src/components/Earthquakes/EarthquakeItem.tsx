import { Box, Grid, Typography } from "@mui/material";
import StaticMapComponent from "components/Map/StaticMapComponent";
import { EarthquakeItemProps } from "interfaces";
import React from "react";
import { LocationService, DataService } from "services";

const EarthquakeItem: React.FC<EarthquakeItemProps> = ({
  timestamp,
  humanReadableLocation,
  latitude,
  longitude,
  size,
  color,
}) => {
  const getParsedTimestamp = () => DataService.parseTimeStamp(timestamp);

  return (
    <Grid item xs={12} sm={6} md={4} lg={4} textAlign="center">
      <Box>
        <Typography variant="h5">
          {LocationService.getLocationNameFromReadableLocation(humanReadableLocation)}
        </Typography>
        <StaticMapComponent lat={latitude} lng={longitude}></StaticMapComponent>
        <Box component="div" sx={{ borderLeft: `15px solid ${color}` }}>
          <Typography variant="body1">
            Time:{" "}
            <span style={{ fontWeight: "bold" }}>{getParsedTimestamp()}</span>
          </Typography>
          <Typography variant="body1">
            Size: <span style={{ fontWeight: "bold" }}>{size}</span>
          </Typography>
        </Box>
      </Box>
    </Grid>
  );
}

export default EarthquakeItem;