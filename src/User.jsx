import React from 'react';
import UserCard from './UserCard';
import widthLoader from './HOC/withLoaderFunction';

const User = ({users}) => {
    return <div className="grid-4 grid">
            {
                users.map(u => (
                    <UserCard key={u.id}
                        name={u.username}
                        email={u.email}
                        phone={u.phone}
                    />
                ))
            }
            </div>
}

export default widthLoader("users")(User);
