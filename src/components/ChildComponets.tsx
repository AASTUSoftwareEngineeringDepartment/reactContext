"use client"
import { useContext } from "react"
import { UserContext } from "./MainComponets"


export default function ChildComponets() {
const  userInfo = useContext(UserContext)
  return (
    <div>{userInfo.age} - {userInfo.name}</div>
  )
}
