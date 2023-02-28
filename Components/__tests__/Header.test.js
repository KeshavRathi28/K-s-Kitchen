import { render } from '@testing-library/react';
import Header from '../Header';
import { Provider } from 'react-redux';
import store from '../../Utils/store';
import { StaticRouter } from 'react-router-dom/server';

test('Logo should load on rendering Header', () => {
    const header = render(
        <StaticRouter>
            <Provider store={store}>
                <Header />
            </Provider>
        </StaticRouter>
    );
    const logo = header.getByTestId('logo');
    expect(logo.src).toBe('http://localhost/dummyLogo.jpeg');
});

test('Status should be online on rendering Header', () => {
    const header = render(
        <StaticRouter>
            <Provider store={store}>
                <Header />
            </Provider>
        </StaticRouter>
    );
    const onlineStatus = header.getByTestId('online-status');
    expect(onlineStatus.innerHTML).toBe('🟢');
});

test('Cart should have 0 items on rendering Header', () => {
    const header = render(
        <StaticRouter>
            <Provider store={store}>
                <Header />
            </Provider>
        </StaticRouter>
    );
    const cart = header.getByTestId('cart');
    expect(cart.innerHTML).toBe('0');
});