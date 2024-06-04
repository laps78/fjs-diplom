import PropTypes from "prop-types";

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

AccessController.propTypes = {
  element: PropTypes.element,
  allowedRoles: PropTypes.array,
  userRole: PropTypes.string,
};

export default AccessController;
