import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Components/Header';
import Body from './Components/Body';
import Footer from './Components/Footer';
import Error from './Components/Error';
import RestaurantPage from './Components/RestaurantPage';
import Profile from './Components/Profile';
import Shimmer from './Components/Shimmer';
import { createHashRouter, RouterProvider, Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Utils/store';
import Cart from './Components/Cart';

const About = lazy(() => import('./Components/About'));
const Contact = lazy(() => import('./Components/Contact'));
const FarmFresh = lazy(() => import('./Components/FarmFresh'));

const AppLayout = () => {
    return (
        <Provider store={store}>
            <Header />
            <Outlet />
            <Footer />
        </Provider>
    );
};

const appRouter = createHashRouter([
    {
        path: '/',
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: '',
                element: <Body />
            },
            {
                path: 'about',
                element: <Suspense fallback=<Shimmer />><About /></Suspense>,
                children: [
                    {
                        path: 'profile',
                        element: <Profile />
                    }
                ]
            },
            {
                path: 'contact',
                element: <Suspense fallback=<Shimmer />><Contact /></Suspense>
            },
            {
                path: 'restaurant/:restaurantId',
                element: <RestaurantPage />
            },
            {
                path: 'farm-fresh',
                element: <Suspense fallback=<Shimmer />><FarmFresh /></Suspense>
            },
            {
                path: 'cart',
                element: <Cart />
            }
        ]
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);