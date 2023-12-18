import React from 'react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import * as matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);


import NavBar from '.';

describe('NavBar Component', ()=> {

    beforeEach(() => {
        render(
            <MemoryRouter>
                <NavBar />
            </MemoryRouter>
        );
    });

    it('displays a navbar with 3 children', () => {
        const nav = screen.getByRole('navigation')
        expect(nav).toBeInTheDocument()
        expect(nav.childNodes.length).toBe(1)
    })
})
