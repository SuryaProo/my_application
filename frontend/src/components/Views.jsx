import React, { useState, useEffect } from "react";
import axios from "axios";

const UserListComponent = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/users");
        setUsers(response.data);
      } catch (error) {
        setError("Error fetching users");
        console.error("Error fetching users", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h2 className="text-center">All user-enquiry:</h2>
      <hr />
      {error && <p>{error}</p>}
      <ul className="ml-5">
        {users.map((user) => (
          <li key={user.id}>
            {user.id}. {user.name} - {user.email}- {user.number}
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserListComponent;
