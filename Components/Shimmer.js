const Shimmer = () => {
    return (
        <div data-testid="shimmer" className="flex flex-wrap justify-between">
            {
                Array(15).fill('').map((e, index) => (
                    <div className="w-64 m-3 p-3 border border-black rounded-xl shadow-md bg-gray-100 content-between" key={index}>
                        <div className="w-full h-36 rounded-xl bg-gray-300"></div>
                        <div className="h-8 my-2 rounded-xl bg-gray-300"></div>
                        <div className="h-5 my-2 rounded-xl bg-gray-300"></div>
                        <ul className="my-4 pl-0 text-center flex list-none justify-between">
                            <li className="w-full mx-2 bg-gray-300 rounded-xl"></li>
                            <li>•</li>
                            <li className="w-full mx-2 bg-gray-300 rounded-xl"></li>
                            <li>•</li>
                            <li className="w-full mx-2 bg-gray-300 rounded-xl"></li>
                        </ul>
                    </div>
                ))
            }
        </div>
    );
}

export default Shimmer;