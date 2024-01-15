import { Avatar, Box, CircularProgress, Grid, Typography } from "@mui/material";
import { Petrol } from "interfaces";
import React, { useState } from "react";

const PetrolItem: React.FC<{ fuelType: string, item: Petrol, onItemClick: (item: Petrol) => void }> = ({
  onItemClick,
  fuelType,
  item,
}) => {
  function normalizeText(text: string) {
    if (!text) return;

    const [companyName] = text.split(" ");

    return companyName
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  }

  const rawPrice = fuelType === "petrol" ? item["bensin95"] : item["diesel"];
  const price = Number(rawPrice).toFixed(2);

  const [avatar, setAvatar] = useState(undefined);
  const avatarName = normalizeText(item.company);

  if (!avatar && avatarName)
    import(`assets/companies/${avatarName}.png`).then((res) => {
      setAvatar(res.default);
    });

  return (
    <Grid
      onClick={() => onItemClick(item)}
      item
      sx={{
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px",
        transition: ".3s",
        cursor: "pointer",
        boxShadow: "0px 1px 1px black",
        ":hover": {
          background: "rgba(156, 39, 176, 0.3)",
        },
      }}
    >
      {!avatar && <CircularProgress />}
      {avatar && (
        <Avatar
          src={avatar}
          alt={item.name + " avatar"}
          title={item.name + " avatar"}
        />
      )}

      <Typography variant="subtitle1">{item.name}</Typography>
      <Box component="div">{price} ISK</Box>
    </Grid>
  );
};

export default PetrolItem;
