import Loading from "components/Loading/Loading";
import { useFetch } from "hooks";
import EarthquakeLegend from "./EarthquakeLegend";
import EarthquakeItems from "./EarthquakeItems";
import NotFound from "components/NotFound/NotFound";
import SelectForm from "./SelectForm";
import { useEffect, useState } from "react";
import { EarthquakeType } from "interfaces";
import { useSearchParams } from "react-router-dom";

export default function Earthquakes() {
  const { data, loading, error } = useFetch("http://apis.is/earthquake/is");

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const size = searchParams.get("size") as EarthquakeType;
    if (size) setSelectedSize(size);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const sizeItems: any = {
    all: {
      name: "All",
      backgroundColor: "white",
      get: (size: number) => size > 0,
    },
    minor: {
      name: "Minor",
      backgroundColor: "green",
      get: (size: number) => size < 1,
    },
    moderate: {
      name: "Moderate",
      backgroundColor: "orange",
      get: (size: number) => size > 1 && size < 4,
    },
    major: {
      name: "Major",
      backgroundColor: "red",
      get: (size: number) => size > 4,
    },
  };

  const getSizeColor = (size: number) => {
    if (size < 1) return sizeItems.minor.backgroundColor;
    else if (size > 1 && size < 5) return sizeItems.moderate.backgroundColor;
    else if (size > 5) return sizeItems.major.backgroundColor;
    else return sizeItems.all.backgroundColor;
  };

  const [selectedSize, setSelectedSize] = useState<EarthquakeType>("all");

  const { results: earthquakes = [] }: any = data || {};

  const filterDependsOnSize = (eq: any) => {
    if (!Object.keys(sizeItems).includes(selectedSize)) return [];

    return sizeItems[selectedSize].get?.(eq.size);
  };

  const filteredEarthquakes = earthquakes.filter(filterDependsOnSize);

  if (loading) return <Loading />;

  if (!loading && error) return <NotFound message={error} />;

  return (
    // <EarthquakeProvider>
    <>
      <EarthquakeLegend legend={sizeItems} />
      <SelectForm
        selectedSize={selectedSize}
        setSelectedSize={(size) => {
          setSearchParams({ size: size as string });
          setSelectedSize(size);
        }}
        items={sizeItems}
      />
      <EarthquakeItems
        selectedSize={selectedSize}
        earthquakes={filteredEarthquakes}
        getSizeColor={getSizeColor}
      />
    </>
    // </EarthquakeProvider>
  );
}
