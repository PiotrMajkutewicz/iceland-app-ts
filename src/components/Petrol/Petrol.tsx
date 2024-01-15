import ReactiveMapComponent from "components/Map/ReactiveMapComponent";
import { useFetch } from "hooks";
import PetrolList from "./PetrolList";
import NotFound from "components/NotFound/NotFound";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { activeOnResize, deactiveOnResize } from "services";
import { Petrol as IPetrol } from "interfaces";
import Loading from "components/Loading/Loading";

const Petrol = () => {
  const { data, loading } = useFetch<{ results: IPetrol[] }>(
    "http://apis.is/petrol"
  );

  const [mapStatus, setMapStatus] = useState(true);
  const [station, setStation] = useState<IPetrol>();
  const [mapPoint, setMapPoint] = useState<[number, number]>();
  const defaultMapPoint: [number, number] = [64.9581587, -18.8554384];

  const onItemClick = (item: IPetrol) => {
    setStation(item);
    const [lat, long] = Object.values(item.geo);
    setMapPoint([lat, long]);
  };

  const hideMap = ({ currentWidth }: { currentWidth: number }) => {
    setMapStatus((prevMapStatus) => {
      const isMobile = currentWidth < 720;

      if (isMobile && prevMapStatus) return false;
      else if (!isMobile && !prevMapStatus) return true;

      return prevMapStatus;
    });
  };

  useEffect(() => {
    activeOnResize(hideMap);

    return () => deactiveOnResize(hideMap);
  }, []);

  if (loading) return <Loading isLoading />;

  const petrolList = data?.results || [];

  if (!loading && !petrolList.length)
    return <NotFound message="Petrol couldn't be found" />;

  return (
    <Box component="div" sx={{ height: "100%", display: "flex" }}>
      <PetrolList onItemClick={onItemClick} items={petrolList} />
      <ReactiveMapComponent
        mapStatus={mapStatus}
        center={mapPoint?.length ? mapPoint : defaultMapPoint}
        marker={mapPoint}
        station={station}
      ></ReactiveMapComponent>
    </Box>
  );
};

export default Petrol;
