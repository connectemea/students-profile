import useAuthUser from "./components/utils/useAuthUser";
export default function PrivateRoute({
  type = "person",
  level = "high",
  children,
}) {
  const isPermitted = useAuthUser(type, level);
  return isPermitted && children;
}
