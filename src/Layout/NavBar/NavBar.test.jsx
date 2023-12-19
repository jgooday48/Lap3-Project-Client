import React from 'react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { screen, render, cleanup, fireEvent, waitFor, getByLabelText, getByText } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';
import store from "../../store.js"
import { Provider } from "react-redux"
import * as matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);


import NavBar from '.';

describe('NavBar Component', ()=> {

    beforeEach(() => {
        render(
            <MemoryRouter>
                <Provider store={store}>
                <NavBar />
                </Provider>
            </MemoryRouter>
        );
    });

    it('displays a navbar with 3 children', () => {
        const nav = screen.getByRole('navigation')
        expect(nav).toBeInTheDocument()
        expect(nav.childNodes.length).toBe(1)
    })

    it('is defined', () => {
        expect(NavBar).toBeDefined()
    })


})
