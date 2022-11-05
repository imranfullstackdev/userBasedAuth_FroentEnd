import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "./Context";

const UserRoles = () => {
  const { state, dispatch } = useContext(UserContext);
  const { role } = state;
  console.log(state);
  console.log("role for the header", role);
  if (role == 1) {
    return (
      <div>
        <NavLink className="m-5" to="/">
          Login
        </NavLink>
        <NavLink className="m-5" to="/AddEmployee">
          AddEmployee
        </NavLink>
        <NavLink className="m-5" to="/View">
          View
        </NavLink>
        <NavLink className="m-5" to="/User">
          User
        </NavLink>
        <NavLink className="m-5" to="/LogOut">
          LogOut
        </NavLink>
      </div>
    );
  } else {
    return (
      <div>
        <NavLink className="m-5" to="/">
          Login
        </NavLink>
        <NavLink className="m-5" to="/AddEmployee">
          AddEmployee
        </NavLink>
      
        <NavLink className="m-5" to="/User">
          User
        </NavLink>
        <NavLink className="m-5" to="/LogOut">
          LogOut
        </NavLink>
      </div>
    );
  }
};
const Header = () => {
  return <UserRoles />;
};

export default Header;
