import { useState, useEffect } from "react";

export default function UserList() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((data) => setUsers(data));
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 flex justify-center " >
            <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
                <h1 className="text-2xl font-bold text-center mb-6">User List</h1>                
            
        {users.map((user) => (
            
                <div key={user.id} 
                className="p-3 mb-4 border rounded-lg ">
                    <p className="font-semibold">{user.name}</p>
                    <p className="text-gray-600">{user.email}</p>
                </div>
        ))}

        </div>
        </div>
    );
}