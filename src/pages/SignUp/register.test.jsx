import React from 'react'
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { screen, render, cleanup, fireEvent,waitFor } from '@testing-library/react'
import store from "../../store.js"
import { Provider } from "react-redux"
import { MemoryRouter } from 'react-router-dom'

import * as matchers from '@testing-library/jest-dom/matchers'
expect.extend(matchers);


import SignUp from '.'


describe('Register display', ()=> {
    beforeEach(() => {
        render(
            <MemoryRouter>
                <Provider store={store}>
                    <SignUp />
                </Provider>
            </MemoryRouter>
        )
    })
    afterEach(() => {
        cleanup()
    })

    it('only displays one h1', () => {
        const h1s = screen.queryAllByRole('heading', {
            level:1
        })

        expect(h1s.length).not.toBeGreaterThan(1)

    })

    it('only displays one form', () => {
        const form = screen.queryAllByRole('form')

        expect(form.length).not.toBeGreaterThan(1)

    })

    it('is defined', () => {
        expect(SignUp).toBeDefined()
    })
    it('should handle name inputs', () => {

        const nameInput = screen.getByPlaceholderText('name');
        fireEvent.change(nameInput, { target: { value: 'John' } });
        expect(nameInput.value).toBe('John');
      });
    
      it('should handle email inputs', () => {

        const emailInput = screen.getByPlaceholderText('email');
        fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
        expect(emailInput.value).toBe('john@example.com');
      });
    
      it('should handle password inputs', () => {

        const passwordInput = screen.getByPlaceholderText('password');
        fireEvent.change(passwordInput, { target: { value: 'password123' } });
        expect(passwordInput.value).toBe('password123');
      });
    
      it('should handle confirm password', () => {

        const confirmPasswordInput = screen.getByPlaceholderText('confirm password');
        fireEvent.change(confirmPasswordInput, { target: { value: 'password123' } });
        expect(confirmPasswordInput.value).toBe('password123');
      });


    
      it('should submit the form', async () => {

        const nameInput = screen.getByPlaceholderText('name');
        const emailInput = screen.getByPlaceholderText('email');
        const passwordInput = screen.getByPlaceholderText('password');
        const confirmPasswordInput = screen.getByPlaceholderText('confirm password');
        const submitButton = screen.getByText('Sign Up');
    
        fireEvent.change(nameInput, { target: { value: 'John' } });
        fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
        fireEvent.change(passwordInput, { target: { value: 'password123' } });
        fireEvent.change(confirmPasswordInput, { target: { value: 'password123' } });
    
        fireEvent.click(submitButton);
    
 
        await waitFor(() => {
        });

    })
})
