import React from 'react';
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import * as matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

import NotFoundPage from '.';


describe('Login display', ()=> {
    beforeEach(() => {
        render(
            <MemoryRouter>
                <NotFoundPage />
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




})
