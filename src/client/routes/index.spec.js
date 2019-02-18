import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../store/reducers';
import { NotFoundPage, RecordsList } from '../containers';
import Routes from './index';

describe('Routes', () => {
  let store;

  beforeEach(() => {
    store = createStore(rootReducer);
  });

  it('invalid path should redirect to 404', () => {
    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/random']}>
          { renderRoutes(Routes) }
        </MemoryRouter>
      </Provider>,
    );
    expect(wrapper.find(RecordsList)).toHaveLength(0);
    expect(wrapper.find(NotFoundPage)).toHaveLength(1);
  });

  /**
   * Test fails due to React.memo
   * See: https://github.com/airbnb/enzyme/issues/1875
   */
  xit('valid path should not redirect to 404', () => {
    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/']}>
          { renderRoutes(Routes) }
        </MemoryRouter>
      </Provider>,
    );
    expect(wrapper.find(RecordsList)).toHaveLength(1);
    expect(wrapper.find(NotFoundPage)).toHaveLength(0);
  });
});
