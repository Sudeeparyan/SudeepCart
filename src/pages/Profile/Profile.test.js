import { screen} from "@testing-library/react"
import React from "react";
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import Profile from './Profile';
import { AuthProvider } from '../../auth';
import Categories from "../../components/Categories/Categories";
import userEvent from "@testing-library/user-event";

const handleClick=jest.fn();

describe('Profile test functionality',()=>{
    test('Profile renders correctly',()=>{
        render(<Profile handleClick={handleClick}/>)
    })
})


test('renders Profile component without errors', () => {
  render(<Profile />);
});

test('displays the user\'s name correctly', () => {
  const user = 'Sudeep';

  const { getByText } = render(
    <AuthProvider>
      <Profile />
    </AuthProvider>
  );

  expect(screen.getByText(`Welcome ${user} !`)).toBeInTheDocument();
});

test('calls handleLogout function when "Logout" button is clicked', () => {
  const handleLogout = jest.fn();

  render(
    <AuthProvider>
      <MemoryRouter>
        <Profile />
      </MemoryRouter>
    </AuthProvider>
  );

  const logoutButton = screen.getByText('Logout');
  fireEvent.click(logoutButton);

  expect(handleLogout).toHaveBeenCalledTimes(1);
});
test("Shopping Button on pressing tab four times", async () => {
  render(
    <BrowserRouter>
      <Categories/>
    </BrowserRouter>
  );
  await userEvent.tab();
  await userEvent.tab();
  await userEvent.tab();
  await userEvent.tab();
  await userEvent.tab();
  await userEvent.tab();
  fireEvent.click( screen.getByTestId('profile'));
  expect(window.location.pathname).toBe("/profile");
});
