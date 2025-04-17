import { useEffect, useState } from "react";
interface User {
    id: number,
    name: string,
    email: string
}
function UserMap () {
    const [users, setUsers] = useState<User[]>([])
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/`)
        .then((res) => res.json())
        .then((data) => setUsers(data))
    }, []);

    return(
        <>
            <p>User data will be listed here..</p>
            {users.map(user => {
                return (
                    <li key={user.id}>{user.name} ({user.email})</li>
                )
            })}
        </>
    )
}
export default UserMap;