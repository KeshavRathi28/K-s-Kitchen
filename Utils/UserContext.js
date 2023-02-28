import { createContext } from 'react';

const UserContext = createContext({
    user: {
        name: 'Keshav Rathi',
        email: 'keshav.rathi1998@gmail.com'
    }
});

export default UserContext;