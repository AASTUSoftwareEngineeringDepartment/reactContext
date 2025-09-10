"use client"
import React from "react";
import ChildComponets from "./ChildComponets";

export const UserContext = React.createContext({ name: "", age: 0 });

export default function () {
  return (
    <div>
      <UserContext.Provider value={{ age: 30, name: "kbed" }}>
        <ChildComponets />
      </UserContext.Provider>
    </div>
  );
}
