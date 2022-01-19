import { useEffect, useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { profileContext } from "./context/profileContext";
import userService from "./services/userService";
import STORAGE_KEY from "./constants/LOCAL_KEY";
import Loader from "./components/utils/Loader";

export default function PrivateWrapper() {
  const token = localStorage.getItem(STORAGE_KEY.AUTH_TOKEN);
  const { profile, setProfile } = useContext(profileContext);
  useEffect(() => {
    async function getUserProfile() {
      try {
        const profile = await userService.getProfile();
        setProfile(profile);
      } catch (err) {
        console.error(err?.response?.data?.message);
      }
    }
    if ((token || token === "undefined") && !profile) getUserProfile();
  }, [token, profile, setProfile]);
  return token && token !== "undefined" ? (
    <>
      <Loader />
      <Outlet />
    </>
  ) : (
    <Navigate to="/user/login" />
  );
}
