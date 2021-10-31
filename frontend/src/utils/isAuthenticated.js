import useUser from "../hooks/useUser";

function IsAuthenticated() {
  const [{ token }] = useUser();
  if (token) {
    return true;
  }
}

export default IsAuthenticated;
