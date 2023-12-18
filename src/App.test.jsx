import React from 'react'
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { screen, render, cleanup } from '@testing-library/react'

import { MemoryRouter } from 'react-router-dom'

import * as matchers from '@testing-library/jest-dom/matchers'
expect.extend(matchers);


import App from './App'


describe('App', ()=> {
    beforeEach(() => {
        render(
            <MemoryRouter>
                <App />
            </MemoryRouter>
        )
    })
    
    afterEach(() => {
        cleanup()
    })

    it('is defined', () => {


        expect(App).toBeDefined()

    })



})
