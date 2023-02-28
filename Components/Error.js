import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    return (
        <div className="m-3 p-3 border border-black rounded-2xl shadow-md bg-lime-50">
            <h1>Oops!!</h1>
            <h2>Something went wrong</h2>
            <h3>{err?.status + ': ' + err?.statusText}</h3>
        </div>
    );
};

export default Error;