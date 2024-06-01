import { createContext } from "react";

const AppContext = createContext({
  user: {
    role: "UserRole",
  },
});

export default AppContext;
