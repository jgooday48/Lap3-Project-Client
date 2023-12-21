import React from 'react'
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { screen, render, cleanup } from '@testing-library/react'
import store from "../src/store"
import { MemoryRouter } from 'react-router-dom'
import { Provider } from "react-redux"

import * as matchers from '@testing-library/jest-dom/matchers'
expect.extend(matchers);


import App from './App'


describe('App', ()=> {
    beforeEach(() => {
        render(
            <MemoryRouter>
                <Provider store={store}>
                <App />
                </Provider>
            </MemoryRouter>
        )
    })
    
    afterEach(() => {
        cleanup()
    })

    it('is defined', () => {


        expect(App).toBeDefined()

    })

    it('renders the Home page by default', () => {
        const { getByText } = render(

            <div>
                <h1>Notes App</h1>
                <p>Welcome to the notes app. Please log in or register to view and post notes</p>
            </div>
          )
    });

    



})
