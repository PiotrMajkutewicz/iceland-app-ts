import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { EarthquakeType } from "interfaces";
import React from "react";

export default function SelectForm({
  items,
  selectedSize,
  setSelectedSize,
}: {
  items: Map<EarthquakeType, { name: string }>;
  selectedSize: EarthquakeType;
  setSelectedSize: React.Dispatch<React.SetStateAction<EarthquakeType>>;
}) {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="size-label">Size</InputLabel>
        <Select
          labelId="size-label"
          id="size"
          value={selectedSize}
          label="Size"
          onChange={(e) => {
            setSelectedSize(e.target.value as EarthquakeType);
          }}
        >
          {Object.entries(items).map(([value, { name }]) => {
            return (
              <MenuItem value={value} key={name}>
                {name}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
}
