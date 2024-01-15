import { Box, Grid, ToggleButton, ToggleButtonGroup } from "@mui/material";
import PetrolItem from "./PetrolItem";
import React, { useState } from "react";
import { Petrol } from "interfaces";

const PetrolList: React.FC<{ items: Petrol[]; onItemClick: (item: Petrol) => void }> = ({
  items,
  onItemClick,
}) => {
  const [fuelType, setFuelType] = useState("petrol");

  return (
    <Box
      component="div"
      sx={{
        pr: "2%",
        width: "100%",
        maxWidth: "400px",
        maxHeight: "100%",
        overflowY: "auto",
      }}
    >
      <ToggleButtonGroup
        color="secondary"
        value={fuelType}
        exclusive
        onChange={(e: any) => {
          setFuelType(e.target.value);
        }}
        aria-label="Fuel Type"
      >
        <ToggleButton value="petrol">Petrol</ToggleButton>
        <ToggleButton value="diesel">Diesel</ToggleButton>
      </ToggleButtonGroup>
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        {items.map((item) => (
          <PetrolItem
            onItemClick={onItemClick}
            fuelType={fuelType}
            item={item}
            key={item.key}
          />
        ))}
      </Grid>
    </Box>
  );
};

export default PetrolList;
