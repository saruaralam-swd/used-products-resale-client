import { useEffect, useState } from "react";

const UseUserRole = email => {
  const [isUserRole, setIsUserRole] = useState(false);
  const [isUserRoleLoading, setIsUserRoleLoading] = useState(true)

  useEffect(() => {
    if (email) {
      fetch(`http://localhost:5000/user/role/${email}`)
        .then(res => res.json())
        .then(data => {
          console.log(data);
          setIsUserRole(data?.userRole);
          setIsUserRoleLoading(false)
        })
    }
  }, [email]);

  return [isUserRole, isUserRoleLoading];
};

export default UseUserRole;