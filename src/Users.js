import { func } from "prop-types";
import React, { useState } from "react";
import User from "./User";

function Users() {
    const initUsers = [
        {id: 1, name: 'user1', surname: 'surn1', age: 30, ban: false, isEdit: false},
        {id: 2, name: 'user2', surname: 'surn2', age: 31, ban: false, isEdit: false},
        {id: 3, name: 'user3', surname: 'surn3', age: 32, ban: false, isEdit: false},
    ];

    const [users, setUsers] = useState(initUsers);

    const result = users.map(user => {
        return <User key={user.id}
                    id={user.id}
                    name={user.name}
                    surname={user.surname}
                    age={user.age}
                    ban={user.ban}
                    isEdit={user.isEdit}
                    addBlock={addBlock}
                    toggleMode={toggleMode}
                    editProd={editProd}
                />
    })


    function toggleMode(id) {
        setUsers(users.map(user => {
            if(user.id === id) {
                user.isEdit = !user.isEdit;
            }

            return user;
        }))
    }

    function editProd(id, field, event) {
        setUsers(users.map(user => {
            if(user.id === id) {
                user[field] = event.target.value;
            }

            return user;
        }))
    }

    function addBlock(id) {
        setUsers(users.map(user => {
            if(user.id === id) {
                return {...user, ban:true}
            } else {
                return user;
            }
        }))
    }

    return <div>
        {result}
    </div>
}

export default Users;