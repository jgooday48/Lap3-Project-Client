import React from 'react'
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { screen, render, cleanup, waitFor } from '@testing-library/react'

import { MemoryRouter } from 'react-router-dom'

import * as matchers from '@testing-library/jest-dom/matchers'
expect.extend(matchers)



import NoteTemplate from '.'

describe('Note Template display', ()=> {
    beforeEach(() => {
        render(
            <MemoryRouter>
                <NoteTemplate />
            </MemoryRouter>
        );
    });

    afterEach(() => {
        cleanup()
    })

    it.skip('is defined', () => {

        expect(NoteTemplate).toBeDefined()

    })


    

})
