import React from "react";

const User = ({ userData }) => {
  return (
    <div>
      <div className="user">
        <h2>{userData.name}</h2>
        <p>Email: {userData.email}</p>
        <p>Phone: {userData.phone}</p>
        <p>Website: {userData.website}</p>
        <address>
          Address: {userData.address.street}, {userData.address.suite},{" "}
          {userData.address.city}, {userData.address.zipcode}
        </address>
        <p>Company: {userData.company.name}</p>
      </div>
    </div>
  );
};
export default User;
