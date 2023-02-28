import { render } from '@testing-library/react';
import Footer from '../Footer';
import { Provider } from 'react-redux';
import store from '../../Utils/store';
import { StaticRouter } from 'react-router-dom/server';

test('Footer should be present when the page is loaded', () => {
    const footer = render(
        <StaticRouter>
            <Provider store={store}>
                <Footer />
            </Provider>
        </StaticRouter>
    );
    const developer = footer.getByTestId('developer');
    expect(developer.innerHTML).toBe('© Keshav Rathi');
});