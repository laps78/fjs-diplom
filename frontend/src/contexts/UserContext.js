import { createContext } from "react";

export const defaultUser = {
  name: "Гость",
  role: "GuestRole",
  //role: "UserRole",
  //role: "ManagerRole",
};
export const UserContext = createContext(defaultUser);

export default UserContext;
