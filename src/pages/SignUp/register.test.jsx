import React from 'react'
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { screen, render, cleanup } from '@testing-library/react'
import store from "../../store.js"
import { Provider } from "react-redux"
import { MemoryRouter } from 'react-router-dom'

import * as matchers from '@testing-library/jest-dom/matchers'
expect.extend(matchers);


import SignUp from '.'


describe('Register display', ()=> {
    beforeEach(() => {
        render(
            <MemoryRouter>
                <Provider store={store}>
                    <SignUp />
                </Provider>
            </MemoryRouter>
        )
    })
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


})
