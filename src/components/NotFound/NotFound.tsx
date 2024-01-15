import { Error } from "@mui/icons-material";
import { Box } from "@mui/material";

export default function NotFound({ message = "Resource couldn't be found" }) {
  return (
    <Box
      component="div"
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Error
        color="error"
        fontSize="large"
        sx={{ display: "inline-block", mr: "1em" }}
      />
      <Box component="span" fontSize="large">
        {message}
      </Box>
    </Box>
  );
}
