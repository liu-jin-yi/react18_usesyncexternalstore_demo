import { useEffect, useState, useSyncExternalStore } from "react";

// function useScrollY() {
//   const [state, setState] = useState(0);

//   const onScroll = () => {
//     setState(window.scrollY);
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return state;
// }

function subscribe(onStateChange) {
  window.addEventListener("scroll", onStateChange);
  return () => window.removeEventListener("scroll", onStateChange);
}

function useScrollY(selector) {
  return useSyncExternalStore(subscribe, () => selector(window.scrollY));
}
