import { Stack, Typography } from "@mui/material";
import WelcomeCards from "./WelcomeCards";

export default function Welcome() {
  return (
    <Stack justifyContent="center" alignItems="center">
      <Typography variant="h3" sx={{ py: 3 }}>
        Welcome
      </Typography>
      <Typography variant="subtitle1">
        This is my very first application in React. Enjoy!
      </Typography>

      <WelcomeCards />
    </Stack>
  );
}
