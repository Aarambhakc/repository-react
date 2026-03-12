import { Link, Outlet } from "react-router";
const Profile = () => {
    return (
        <div>
            <h1>Profile Page</h1>

            <div style={{ display:"flex", gap:"30px"}}>
                <Link to="EditProfile">Edit</Link>
                <Link to="setting">Setting</Link>
                <Link to="change">Change</Link>
            </div>
            <Outlet />
        </div>
    )
}

export default Profile;