const AccessController = (props) => {
  const { element, allowedRoles, user } = props;
  console.log(user.role);
  if (
    allowedRoles.findIndex((allowedRole) => allowedRole === user.role) !== -1
  ) {
    return element;
  }
};

export default AccessController;
