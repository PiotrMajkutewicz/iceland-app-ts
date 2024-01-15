import {
  Card,
  CardActionArea,
  CardContent,
  Icon,
  Typography,
} from "@mui/material";
import { WelcomeCardItemProps } from "interfaces";
import { Link } from "react-router-dom";
import { IconService } from "services/";
export default function WelcomeCardItem({
  name,
  to,
  iconName,
  colors: { color = "#000", backgroundColor = "#fff" },
}: WelcomeCardItemProps) {
  const IconComponent = IconService.getIcon(iconName);

  return (
    <Card sx={{ width: 150, height: 150 }} style={{ backgroundColor, color }}>
      <Link to={to} style={{ textDecoration: 'none', color: 'inherit' }}>
        <CardActionArea sx={{ height: "100%", width: "100%" }}>
          <CardContent
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Icon fontSize="large">
              <IconComponent fontSize="large" />
            </Icon>
            <Typography variant="body2">{name}</Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
}
