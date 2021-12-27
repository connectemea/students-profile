import { createContext, useState } from "react";
export const studentContext = createContext();
export default function StudentProvider(props) {
  const [profile, setProfile] = useState();
  return (
    <studentContext.Provider value={{ profile, setProfile }}>
      {props.children}
    </studentContext.Provider>
  );
}
