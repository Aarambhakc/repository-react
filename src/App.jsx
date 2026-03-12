import { Route, Routes } from "react-router";
import Home from "./pages/home";
import Profile from "./pages/profile";
import About from "./pages/about";
import Navbar from "./pages/navbar";
import PageNotFound from "./pages/pagenotfound";
import Change from "./pages/profilepages/change";
import Setting from "./pages/profilepages/settings";
import EditProfile from "./pages/profilepages/editprofile";
import User from "./pages/profilepages/user";
import UserDetails from "./pages/profilepages/userdetails";
import AddUser from "./pages/profilepages/AddUser";
import EditUser from "./pages/profilepages/EditUser";
import Product from "./pages/profilepages/product";
import Cart from "./pages/profilepages/cart";


const App = () => {
  return ( <>
      <Routes>
        <Route element={<Navbar />}>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/user" element={<User />} />
        <Route path="/addUser" element={<AddUser />} />
        <Route path="/EditUser/:id" element={<EditUser />} />
        <Route path="/cart" element={<Cart />} />
        </Route>

        <Route path="/profile/:id" element={<UserDetails />} />
        

        <Route path="/profile" element={<Profile />}>
          <Route path="EditProfile" element={<EditProfile />} />
          <Route path="change" element={<Change />} />
          <Route path="setting" element={<Setting />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default App;