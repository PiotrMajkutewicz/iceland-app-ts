import { Box } from "@mui/material";
import { EarthquakeType } from "interfaces";
import React from "react";

const EarthquakeLegend: React.FC<{
  legend: Map<Omit<EarthquakeType, 'all'>, { name: string; backgroundColor: string }>;
}> = ({ legend }) => {
  return (
    <Box
      className="legend"
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        alignContent: "center",
        mb: "2em",
      }}
    >
      {Object.values(legend).map(({ name, backgroundColor }) => {
        if (name === "All") return null;
        return (
          <div className="legend-item" key={name}>
            <Box
              component="span"
              sx={{
                display: "inline-block",
                backgroundColor,
                minWidth: "50px",
                minHeight: "12px",
                borderRadius: "15px",
                mr: "7px",
              }}
            ></Box>
            <Box component="span">{name}</Box>
          </div>
        );
      })}
    </Box>
  );
};

export default EarthquakeLegend;
