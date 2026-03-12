
import React from "react";
import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router";

const Navbar = () => {
  // const cartItem=useSelector((state)=>state.cart.value);
  const cartItem=useSelector((state)=>state.cart.items);
  console.log(cartItem);
  
  return (
    <>
      <div style={navbarStyles.navbar}>
        <div>
          <Link to={""} style={navbarStyles.logo}>
            logo
          </Link>
        </div>
        <div style={navbarStyles.menu}>
          <ul style={navbarStyles.list}>
            <li>
              <Link to={"/"} style={navbarStyles.link}>
                Home
              </Link>
            </li>
            <li>
              <Link to={"/product"} style={navbarStyles.link}>
                Product
                </Link>
            </li>
            <li>
              <Link to={"/profile"} style={navbarStyles.link}>
                Profile
              </Link>
            </li>
            <li>
              <Link to={"/about"} style={navbarStyles.link}>
                About
              </Link>
            </li>
            <li>
              <Link to={"/user"} style={navbarStyles.link}>
                User
              </Link>
            </li>
            <li>
            <Link to={"/cart"} style={styles.cartWrapper}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/1413/1413908.png"
                style={{ height: "20px", width: "20px" }}
              />
              <span style={styles.cartBadge}>{cartItem.length}</span>
            </Link>
          </li>
          </ul>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;

const navbarStyles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px 24px",
    backgroundColor: "#282623",
    boxShadow: "0px 4px 12px rgba(108, 138, 28, 0.1)",
  },
  logo: {
    textDecoration: "none",
    color: "#ffffff",
    fontSize: "22px",
    fontWeight: "bold",
  },
  menu: {
    display: "flex",
    gap: "20px",
  },
  list: {
    listStyle: "none",
    display: "flex",
    gap: "20px",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "16px",
    cursor: "pointer",
  },
};

const styles = {
  cartWrapper: {
    position: "relative",
    fontSize: "22px",
    textDecoration: "none",
    color: "black",
    padding: "6px",
  },
  
  cartBadge: {
    position: "absolute",
    top: "-4px",
    right: "-6px",
    backgroundColor: "red",
    color: "white",
    borderRadius: "50%",
    fontSize: "12px",
    padding: "2px 6px",
    fontWeight: "bold",
  },
};