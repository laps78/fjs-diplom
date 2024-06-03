export const AccessController = ({ element, allowedRoles, userRole }) => {
  //
  console.log("AccessController userRole:", userRole);
  console.log("AccessController element:", element);
  console.log("AccessController allowedRolesFromProps:", allowedRoles);
  console.log(
    "check the if",
    allowedRoles.findIndex((allowedRole) => allowedRole === userRole) !== -1
  );
  //
  if (
    allowedRoles.findIndex((allowedRole) => allowedRole === userRole) !== -1
  ) {
    //
    console.log("show element: ", element);
    //
    return <>{element}</>;
  }
};

export default AccessController;
