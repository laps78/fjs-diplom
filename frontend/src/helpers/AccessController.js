const AccessController = (props) => {
  const { element, allowedRoles, user } = props;
  console.log(element);
  if (
    allowedRoles.findIndex((allowedRole) => allowedRole === user.role) !== -1
  ) {
    return element;
  }
};

export default AccessController;
