import { createContext, useState } from "react";
export const studentContext = createContext();
export default function StudentProvider(props) {
  const [student, setStudent] = useState();
  return (
    <studentContext.Provider value={{ student, setStudent }}>
      {props.children}
    </studentContext.Provider>
  );
}
