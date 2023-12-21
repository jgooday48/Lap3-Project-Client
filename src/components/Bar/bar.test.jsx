import React from 'react'
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { screen, render, cleanup } from '@testing-library/react'

import { MemoryRouter } from 'react-router-dom'

import * as matchers from '@testing-library/jest-dom/matchers'
expect.extend(matchers)


import Bar from '.'

describe('bar', ()=> {
    beforeEach(() => {
        render(
            <MemoryRouter>
                <Bar />
            </MemoryRouter>
        );
    });

    afterEach(() => {
        cleanup()
    })

    it('is defined', () => {

        expect(Bar).toBeDefined()

    })


})
