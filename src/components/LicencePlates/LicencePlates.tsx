import { Button, TextField } from "@mui/material";
// import { useFetch } from "hooks";
import { useState } from "react";

export default function LicencePlates() {
  const [plateNumber, setPlateNumber] = useState("");

  // const { data, loading, error } = useFetch("http://apis.is/earthquake/is");

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  const handleInputChange = (e: any) => {
    const { value } = e.target;
    setPlateNumber(value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Car's Plate"
          type="text"
          name="number"
          value={plateNumber}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />

        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </>
  );
}
