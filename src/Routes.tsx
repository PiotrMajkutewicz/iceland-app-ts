import Earthquakes from "components/Earthquakes/Earthquakes";
import LicencePlates from "components/LicencePlates/LicencePlates";
import NotFound from "components/NotFound/NotFound";
import Petrol from "components/Petrol/Petrol";
import Welcome from "components/Welcome/Welcome";
import { Route, RouteProps, Routes } from "react-router-dom";

const getRoutes = (): RouteProps[] => {
  return [
    {
      path: "/",
      element: <Welcome />,
    },
    {
      path: "/licence-plates",
      element: <LicencePlates />,
    },
    {
      path: "/earthquakes",
      element: <Earthquakes />,
    },
    {
      path: "/petrol",
      element: <Petrol />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ];
};

export default function AppRoutes() {
  const routes = getRoutes();

  return (
    <Routes>
      {routes.map((r) => (
        <Route {...r} key={r.path} />
      ))}
    </Routes>
  );
}
