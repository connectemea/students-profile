import { createContext, useState } from 'react';
export const profileContext = createContext();
export default function ProfileProvider(props) {
  const [profile, setProfile] = useState();
  return (
    <profileContext.Provider value={{ profile, setProfile }}>
      {props.children}
    </profileContext.Provider>
  );
}