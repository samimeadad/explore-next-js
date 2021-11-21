import React from 'react';
import Link from 'next/link';

const index = ( { users } ) => {
    return (
        <div>
            <h2>This is Users Page. Total Users: { users.length }</h2>
            {
                users.map( user => <p key={ user.id }>
                    { user.name } <button><Link href={ `users/${ user.id }` }><a>Explore the User</a></Link></button>
                </p> )
            }
        </div >
    );
};

export default index;

export async function getStaticProps () {
    const res = await fetch( 'https://jsonplaceholder.typicode.com/users' );
    const users = await res.json();
    return {
        props: { users }
    }
}