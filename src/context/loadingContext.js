import { createContext, useState } from "react";
export const loadingContext = createContext();
export default function LoadingProvider(props) {
  const [isLoading, setIsLoading] = useState(false);
  const loaderToggler = (state) => setIsLoading(state);
  return (
    <loadingContext.Provider value={{ isLoading, loaderToggler }}>
      {props.children}
    </loadingContext.Provider>
  );
}
