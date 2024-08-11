import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import LoginSignup from './Loginsignup';
import React from 'react';

describe('LoginSignup Component', () => {
  test('renders the signup form by default', () => {
    render(<LoginSignup />);
    expect(screen.getByPlaceholderText('Full Name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('password')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('confirm password')).toBeInTheDocument();
  });

  test('renders the login form when Login button is clicked', () => {
    render(<LoginSignup />);
    fireEvent.click(screen.getByText('Login'));
    expect(screen.queryByPlaceholderText('Full Name')).not.toBeInTheDocument();
    expect(screen.getByPlaceholderText('email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('password')).toBeInTheDocument();
    expect(screen.queryByPlaceholderText('confirm password')).not.toBeInTheDocument();
  });

  test('renders the signup form when Sign Up button is clicked', () => {
    render(<LoginSignup />);
    fireEvent.click(screen.getByText('Login')); 
    fireEvent.click(screen.getByText('Sign Up')); 
    expect(screen.getByPlaceholderText('Full Name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('password')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('confirm password')).toBeInTheDocument();
  });

  test('displays the forgot password link when in login mode', () => {
    render(<LoginSignup />);
    fireEvent.click(screen.getByText('Login'));
    expect(screen.getByText('Forgot Password?')).toBeInTheDocument();
  });

  test('does not display the forgot password link in signup mode', () => {
    render(<LoginSignup />);
    expect(screen.queryByText('Forgot Password?')).not.toBeInTheDocument();
  });
});

test('allows the user to type in the Full Name field', () => {
    render(<LoginSignup />);
    const fullNameInput = screen.getByPlaceholderText('Full Name');
    fireEvent.change(fullNameInput, { target: { value: 'John Doe' } });
    expect(fullNameInput).toHaveValue('John Doe');
  });
  
  test('allows the user to type in the Email field', () => {
    render(<LoginSignup />);
    const emailInput = screen.getByPlaceholderText('email');
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    expect(emailInput).toHaveValue('john@example.com');
  });
  
  test('allows the user to type in the Password field', () => {
    render(<LoginSignup />);
    const passwordInput = screen.getByPlaceholderText('password');
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    expect(passwordInput).toHaveValue('password123');
  });
  
  test('allows the user to type in the Confirm Password field', () => {
    render(<LoginSignup />);
    const confirmPasswordInput = screen.getByPlaceholderText('confirm password');
    fireEvent.change(confirmPasswordInput, { target: { value: 'password123' } });
    expect(confirmPasswordInput).toHaveValue('password123');
  });

  test('calls the signup function when Sign Up is clicked', () => {
    const mockSignup = jest.fn();
  
    const { getByText } = render(<LoginSignup />);
    
    const signUpButton = getByText('Sign Up');
    
    signUpButton.onclick = mockSignup;
  
    fireEvent.click(signUpButton);
    
    expect(mockSignup).toHaveBeenCalled();
  });
  
  test('calls the login function when Login is clicked', () => {
    const mockLogin = jest.fn();
  
    const { getByText } = render(<LoginSignup />);
    
    const loginButton = getByText('Login');
    
    loginButton.onclick = mockLogin;
  
    fireEvent.click(loginButton);
    
    expect(mockLogin).toHaveBeenCalled();
  });
  


  test('correctly switches between Login and Sign Up forms multiple times', () => {
    render(<LoginSignup />);
    
    fireEvent.click(screen.getByText('Login'));
    expect(screen.queryByPlaceholderText('Full Name')).not.toBeInTheDocument();
    
    fireEvent.click(screen.getByText('Sign Up'));
    expect(screen.getByPlaceholderText('Full Name')).toBeInTheDocument();
    
    fireEvent.click(screen.getByText('Login'));
    expect(screen.queryByPlaceholderText('Full Name')).not.toBeInTheDocument();
  });


  
  
