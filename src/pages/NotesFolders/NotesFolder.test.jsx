import React from 'react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { screen, render, cleanup, fireEvent, waitFor, getByLabelText, getByText } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';
import store from "../../store.js"
import { Provider } from "react-redux"
import * as matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);


import NotesFolder from '.';

describe('Notes Folder Component', ()=> {

    beforeEach(() => {
        render(
            <MemoryRouter>
                <Provider store={store}>
                <NotesFolder />
                </Provider>
            </MemoryRouter>
        );
    });

    it('is defined', () => {
        expect(NotesFolder).toBeDefined()
    })


})
