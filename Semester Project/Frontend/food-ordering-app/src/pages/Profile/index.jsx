import React from "react";
import { useSelector } from "react-redux";

import { getUser } from "../../stores/auth/authSlice";

const Profile = () => {
  const user = useSelector(getUser);

//   {user.cookie ? (
//     <Link
//       to="/profile"
//       className="text-xl text-white flex justify-center items-center"
//     >
//       {user.username}
//       <img src={userIcon} alt={user.username} className="w-8 m-2" />
//     </Link>
//   ) : (
//     <div className="flex items-center justify-center space-x-4">
//       <Link to="/login">Log In</Link>
//       <Link to="/register">Sign Up</Link>
//     </div>
//   )}

  return (
    <div>
      <h1 className="text-white">Profile</h1>
    </div>
  );
};

export default Profile;
