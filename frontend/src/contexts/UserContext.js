import { createContext } from "react";

export const defaultUser = {
  name: "Гость",
  role: "GuestRole",
};
export const UserContext = createContext(defaultUser);

export default UserContext;
