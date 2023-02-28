const RestaurantPageShimmer = () => {
    return (
        <div className="flex h-[70vh] gap-20 m-3 p-3 border border-black rounded-2xl shadow-md bg-gray-50">
            <div className="w-2/5 p-4 flex flex-col gap-3 rounded-xl bg-gray-200">
                <div className="h-10 w-full rounded-xl bg-gray-300"></div>
                <div className="h-8 w-full rounded-xl bg-gray-300"></div>
                <div className="h-6 w-full rounded-xl bg-gray-300"></div>
                <div className="h-1/2 w-full rounded-xl bg-gray-300"></div>
                <div className="h-6 w-full rounded-xl bg-gray-300"></div>
                <div className="h-6 w-full rounded-xl bg-gray-300"></div>
            </div>
            <div className="w-3/5 p-4 flex flex-col gap-3 rounded-xl bg-gray-200">
                <div className="h-8 w-full rounded-lg bg-gray-300"></div>
                <div className="h-5/6 w-full rounded-lg bg-gray-300"></div>
            </div>
        </div>
    );
};

export default RestaurantPageShimmer;