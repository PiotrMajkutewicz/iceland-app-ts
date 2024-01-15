const getCurrentWindowSize = () => {
  const currentWidth = window.innerWidth;
  const currentHeight = window.innerHeight;

  return { currentWidth, currentHeight }
}
export const activeOnResize: (fn: any) => void = (cb) => {
  
  window.addEventListener("resize", () => cb(getCurrentWindowSize()));
};

export const deactiveOnResize: (fn: any) => void = (cb) => {
  window.removeEventListener("resize", () => cb(getCurrentWindowSize()));
};