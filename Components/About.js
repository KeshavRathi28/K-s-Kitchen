import { Outlet } from 'react-router-dom';

const About = () => {
    return (
        <div className="m-3 p-3 border border-black rounded-2xl shadow-md bg-lime-50">
            <h1 className="text-2xl font-bold">About Us</h1>
            <Outlet />
        </div>
    );
};

export default About;