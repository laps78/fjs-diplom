import { createContext } from "react";

const AppContext = createContext({
  user: {
    name: "Гость",
    role: "GuestRole",
  },
});

export default AppContext;
