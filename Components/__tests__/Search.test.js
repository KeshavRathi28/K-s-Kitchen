import { render, waitFor, fireEvent } from '@testing-library/react';
import Body from '../Body';
import { Provider } from 'react-redux';
import store from '../../Utils/store';
import { StaticRouter } from 'react-router-dom/server';
import RESTAURANTS_DATA from '../../mocks/restaurantsData';
import '@testing-library/jest-dom';

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => Promise.resolve(RESTAURANTS_DATA)
    });
});

test("Shimmer should load on Homepage", () => {
    const body = render(
        <StaticRouter>
            <Provider store={store}>
                <Body />
            </Provider>
        </StaticRouter>
    );
    const shimmer = body.getByTestId('shimmer');
    expect(shimmer.children.length).toBe(15);
});

test("Restaurants should load on Homepage", async () => {
    const body = render(
        <StaticRouter>
            <Provider store={store}>
                <Body />
            </Provider>
        </StaticRouter>
    );
    await waitFor(() => expect(body.getByTestId('restaurant-list')));
    const resList = body.getByTestId('restaurant-list');
    expect(resList.children.length).toBe(15);
});

test("List of restaurants should match the search text on Homepage", async () => {
    const body = render(
        <StaticRouter>
            <Provider store={store}>
                <Body />
            </Provider>
        </StaticRouter>
    );
    await waitFor(() => expect(body.getByTestId('restaurant-list')));
    const input = body.getByTestId('search-input');
    fireEvent.change(input, {
        target: {
            value: 'pizza'
        }
    });
    const searchBtn = body.getByTestId('search-btn');
    fireEvent.click(searchBtn);
    const resList = body.getByTestId('restaurant-list');
    expect(resList.children.length).toBe(2);
});