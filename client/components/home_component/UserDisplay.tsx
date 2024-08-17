import React, { useEffect, useState } from "react";
import { currentUser } from "@clerk/nextjs/server";
import axios from "axios";

const UserDisplay = async () => {
  let user;

  try {
    user = await currentUser();
  } catch (error) {
    console.error("Error fetching user:", error);
    user = null;
  }

  if (user) {
    try {
      const backendUrl = process.env.NEXT_PUBLIC_BACKEND_ENDPOINT; // Define your backend URL
      await axios.post(`${backendUrl}/api/updateuser`, {
        id: user.id, // Assuming user object has an id property
        username: user.firstName, // Assuming you want to pass firstName as username
      });
    } catch (error) {
      console.error("Error updating user:", error);
    }
  }

  return (
    <div className="lg:text-center">
      {user ? (
        <h1 className="text-2xl md:text-3xl xl:text-4xl font-medium mt-3">
          Hi, {user.firstName}
        </h1>
      ) : (
        <h1 className="text-2xl md:text-3xl xl:text-4xl font-medium mt-3">
          Hi, Guest
        </h1>
      )}
    </div>
  );
};

export default UserDisplay;
