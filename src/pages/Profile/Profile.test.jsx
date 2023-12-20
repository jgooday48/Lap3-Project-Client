import React from 'react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';
import store from "../../store.js"
import { Provider } from "react-redux"
import * as matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);


import Profile from '.';

describe('Profile Component', ()=> {

    beforeEach(() => {
        render(
            <MemoryRouter>
                <Provider store={store}>
                <Profile />
                </Provider>
            </MemoryRouter>
        );
    });


    it.skip('is defined', () => {
        expect(Profile).toBeDefined()
    })

 
    


})

