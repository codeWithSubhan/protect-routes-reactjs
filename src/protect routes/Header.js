import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { logout } from "./features/AuthSlice";

function Header() {
  const dispatch = useDispatch();
  function hanldeLogout() {
    dispatch(logout());
  }

  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "30px" }}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink
        style={{ position: "absolute", right: "20px" }}
        onClick={hanldeLogout}
      >
        LogOut
      </NavLink>
    </div>
  );
}

export default Header;
