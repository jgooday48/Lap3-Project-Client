import React from 'react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';
import store from "../../store.js"
import { Provider } from "react-redux"
import * as matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);


import Loader from '.';

describe('Private route Component', ()=> {

    beforeEach(() => {
        render(
            <MemoryRouter>
                <Provider store={store}>
                <Loader />
                </Provider>
            </MemoryRouter>
        );
    });

    it('is defined', () => {
        expect(Loader).toBeDefined()
    })

    


})
