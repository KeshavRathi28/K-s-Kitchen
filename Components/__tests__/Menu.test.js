import { render, waitFor, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom/server';
import store from '../../Utils/store';
import Header from '../Header';
import RestaurantPage from '../RestaurantPage';
import Cart from '../Cart';
import RESTAURANT_MENU_DATA from '../../mocks/restaurantMenuData';

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => Promise.resolve(RESTAURANT_MENU_DATA)
    })
});

const menuItemsCount = Object.keys(RESTAURANT_MENU_DATA.data.menu.items).length;

test('Add Items to Cart', async () => {
    const body = render(
        <StaticRouter>
            <Provider store={store}>
                <Header />
                <RestaurantPage />
                <Cart />
            </Provider>
        </StaticRouter>
    );
    await waitFor(() => body.getByTestId('restaurant-menu'));
    const addItemButtons = body.getAllByTestId('add-item');
    addItemButtons.map(button => fireEvent.click(button));
    const cart = body.getByTestId('cart');
    expect(cart.innerHTML).toBe(String(menuItemsCount));
    const cartPageItems = body.getByTestId('cartpage-items');
    expect(cartPageItems.innerHTML).toBe(`Cart - ${menuItemsCount} items`);
});