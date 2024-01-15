// import { createContext, useState, useContext } from 'react';
// const EarthquakeContext = createContext();

// export const EarthquakeProvider = ({ children }) => {
//   const [selectedSize, setSelectedSize] = useState("all");

//   const contextValue = { selectedSize, setSelectedSize };

//   return (
//     <EarthquakeContext.Provider value={contextValue}>
//       {children}
//     </EarthquakeContext.Provider>
//   );
// };
// export const useEarthquakeContext = () => {
//   const context = useContext(EarthquakeContext);
//   if (!context) {
//     throw new Error(
//       "useEarthquakeContext must be used within an EarthquakeProvider"
//     );
//   }

//   return context;
// };

export {}