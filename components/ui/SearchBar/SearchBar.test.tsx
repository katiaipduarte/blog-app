/* eslint-disable @typescript-eslint/ban-types */
import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import SearchBar from './SearchBar';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

describe('<SearchBar /> component Unit Test', () => {
  let component: ReactWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;

  beforeEach(() => {
    component = mount(
      <SearchBar find={jest.fn().mockName('mockedFunction')} />
    );
  });

  it('should render Searchbar', () => {
    const tree = renderer
      .create(<SearchBar find={jest.fn().mockName('mockedFunction')} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render 1 <SearchBar /> component', () => {
    expect(component).toHaveLength(1);
    expect(component.find('form')).toHaveLength(1);
  });

  it('should not show clear button if input is empty', () => {
    expect(component.find('input').get(0).props.value).toBe('');
    expect(
      component.find('#clear-search-term-btn').get(0).props.style.visibility
    ).toBe('hidden');
  });

  it('should show clear button if input is not empty', () => {
    const input = component.find('input');
    input.simulate('change', { target: { value: 'Hello' } });
    expect(
      component.find('#clear-search-term-btn').get(0).props.style.visibility
    ).toBe('initial');
  });

  it('should clear input on click clear button', () => {
    const input = component.find('input');
    input.simulate('change', { target: { value: 'Hello' } });

    const clearBtn = component.find('#clear-search-term-btn');
    clearBtn.simulate('click');

    expect(component.find('input').get(0).props.value).toBe('');
    expect(
      component.find('#clear-search-term-btn').get(0).props.style.visibility
    ).toBe('hidden');
  });

  it('should render an input of type text and allows at max 50 char', () => {
    const input = component.find('input');
    expect(input.get(0).props.type).toBe('text');
    expect(input.get(0).props.maxLength).toBe(50);
  });
});
