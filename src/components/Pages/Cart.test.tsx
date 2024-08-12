import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { CartProvider, CartContext } from './CartContext';
import Cart from './Cart';

// Mock the CartContext for the test
const mockCartContextValue = {
  cartItems: [
    {
      id: 1,
      name: 'Test Product',
      rating: 5,
      description: 'A test product',
      price: 100,
      image: 'test-image.png',
      quantity: 1,
    },
  ],
  addToCart: jest.fn(),
  updateItemQuantity: jest.fn(),
  removeItem: jest.fn(),
  cartCount: 1,
};

const renderCartWithProvider = () =>
  render(
    <MemoryRouter>
      <CartContext.Provider value={mockCartContextValue}>
        <Cart />
      </CartContext.Provider>
    </MemoryRouter>
  );

describe('Cart Component', () => {
  test('renders cart items correctly', () => {
    renderCartWithProvider();
    expect(screen.getByText(/Test Product/i)).toBeInTheDocument();
    expect(screen.getByText('$100')).toBeInTheDocument();
  });

  test('calls updateItemQuantity when "+" button is clicked', () => {
    renderCartWithProvider();
    fireEvent.click(screen.getByText('+'));
    expect(mockCartContextValue.updateItemQuantity).toHaveBeenCalledWith(1, 1);
  });

  test('calls updateItemQuantity when "-" button is clicked', () => {
    renderCartWithProvider();
    fireEvent.click(screen.getByText('-'));
    expect(mockCartContextValue.updateItemQuantity).toHaveBeenCalledWith(1, -1);
  });

  test('calls removeItem when "Remove" button is clicked', () => {
    renderCartWithProvider();
    fireEvent.click(screen.getByText('Remove'));
    expect(mockCartContextValue.removeItem).toHaveBeenCalledWith(1);
  });

  test('displays the correct total price', () => {
    renderCartWithProvider();
    expect(screen.getByText(/total: \$100/i)).toBeInTheDocument();
  });
});
