// import { Card, CardTitle } from '@heroui/react';
// import React from 'react';

// const page = async () => {

//     const usersData = await fetch('http://localhost:8000/users/');

//     const users = await usersData.json()
//     console.log(users);

//     return (
//         <div>



//             <h1>This is Users Page:</h1>
//             <h2>Users: {users.length}</h2>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto max-w-6xl">
//                 {
//                 users.map(user  => <Card cla key={user.id} className='shadow-gray-600-50 shadow-2xl p-18 rounded-3xl'>
                
                
//                 <CardTitle>Name: {user.name}</CardTitle>
//                 <h1>Email: {user.email}</h1>
//                 <h1>Age: {user.age}</h1>
//                 <h1>City: {user.city}</h1>


                
//                 </Card>)
//             }
//         </div>
//         </div>
//     );
// };

// export default page;

import React from 'react';

const userPage = () => {
    return (
        <div>
            <h1>This is usres page</h1>
        </div>
    );
};

export default userPage;