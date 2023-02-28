import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="m-3 p-3 border border-black rounded-2xl flex flex-col shadow-md bg-lime-50">
            <div className="list-none flex justify-between items-center pl-0">
                <ul>
                    <li className="p-3 hover:font-semibold  hover:overline"><Link to="/farm-fresh">K's Farm Fresh</Link></li>
                </ul>
            </div>
            <div className="self-center">
                <h3 className="text-gray-600 hover:text-black font-bold hover:cursor-pointer"><a data-testid="developer" href="https://www.linkedin.com/in/KeshavRathi" target="_blank">© Keshav Rathi</a></h3>
            </div>
        </div>
    );
};

export default Footer;