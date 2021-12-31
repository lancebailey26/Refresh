import React from "react";
import UsersList from "../components/UsersList";
const Users = () =>{
    const USERS = [{id: 'u1', name:"Lance Bailey", image:'https://wompampsupport.azureedge.net/fetchimage?siteId=7575&v=2&jpgQuality=100&width=700&url=https%3A%2F%2Fi.kym-cdn.com%2Fentries%2Ficons%2Foriginal%2F000%2F037%2F171%2Fcover2.jpg', places: 3}];

    return <UsersList items={USERS} />
}

export default Users;