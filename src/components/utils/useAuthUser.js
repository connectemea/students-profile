import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { profileContext } from "../../context/profileContext";
import USER_TYPE from "../../constants/USER_TYPE";
export default function useAuthUser(type = "person", level = "high") {
  const { profile } = useContext(profileContext);
  const navigate = useNavigate();
  //To user presidence
  const checkUserHavePermission = (permitedUser, givenUser) =>
    Object.keys(USER_TYPE).includes(givenUser) &&
    USER_TYPE[givenUser] >= USER_TYPE[permitedUser]
      ? true
      : false;

  //To check user permitted or not
  if (profile && checkUserHavePermission(type, profile.userType)) {
    if (
      (level === "high" && profile.status === "filled") ||
      (level === "low" && profile.status === "registered")
    ) {
      return true;
    } else {
      navigate("/user/login");
      return false;
    }
  } else {
    navigate("/user/login");
    return false;
  }
}
