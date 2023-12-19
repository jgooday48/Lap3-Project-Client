import React from 'react'
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { screen, render, cleanup, fireEvent, waitFor } from '@testing-library/react'
import store from "../../store.js"
import { Provider } from "react-redux"
import { MemoryRouter } from 'react-router-dom'

import * as matchers from '@testing-library/jest-dom/matchers'
expect.extend(matchers)


import Login from '.'


describe('Login display', ()=> {
    beforeEach(() => {
        render(
            <MemoryRouter>
                <Provider store={store}>
                <Login />
                </Provider>
            </MemoryRouter>
        );
    });

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


})

