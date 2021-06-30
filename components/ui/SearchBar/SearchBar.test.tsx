/* eslint-disable @typescript-eslint/ban-types */
import React from 'react';
import SearchBar from './SearchBar';
import 'jest-styled-components';
import { fireEvent, render, screen } from '@testing-library/react';

describe('<SearchBar /> component Unit Test', () => {
  beforeEach(() => {
    render(<SearchBar find={jest.fn().mockName('mockedFunction')} />);
  });

  it('should render Searchbar', () => {
    const { container } = render(
      <SearchBar find={jest.fn().mockName('mockedFunction')} />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render 1 <SearchBar /> component', () => {
    expect(screen.queryByRole('searchbox')).toBeInTheDocument();
  });

  it('should not show clear button if input is empty', () => {
    const searchInput = screen.queryByPlaceholderText(
      'Search article by name'
    ) as HTMLInputElement;
    expect(searchInput.value).toBe('');
    expect(
      screen.getByLabelText('Click to clear search').style.visibility
    ).toBe('hidden');
  });

  it('should show clear button if input is not empty', () => {
    const searchInput = screen.queryByPlaceholderText(
      'Search article by name'
    ) as HTMLInputElement;
    fireEvent.change(searchInput, { target: { value: 'test' } });
    expect(searchInput.value).toBe('test');
    expect(
      screen.getByLabelText('Click to clear search').style.visibility
    ).toBe('initial');
  });

  it('should hide the clear button on click', () => {
    const clearBtn = screen.getByLabelText('Click to clear search');
    expect(clearBtn.style.visibility).toBe('hidden');

    const searchInput = screen.queryByPlaceholderText(
      'Search article by name'
    ) as HTMLInputElement;
    fireEvent.change(searchInput, { target: { value: 'test' } });
    expect(clearBtn.style.visibility).toBe('initial');

    fireEvent.click(clearBtn);

    expect(clearBtn.style.visibility).toBe('hidden');
  });

  it('should render an input of type text and allows at max 50 char', () => {
    const searchInput = screen.queryByPlaceholderText(
      'Search article by name'
    ) as HTMLInputElement;
    expect(searchInput.type).toBe('text');
    expect(searchInput.maxLength).toBe(50);

    const validInput = 'ygevhodxbvbaqzpflfkoylzhkbcerwmkavypauvvdwpeunagmq';
    fireEvent.change(searchInput, { target: { value: validInput } });

    expect(validInput.length).toBe(50);
    expect(searchInput.value).toBe(validInput);

    fireEvent.keyDown(searchInput, { key: 'a' });
    expect(searchInput.value).toBe(validInput);
  });
});
