import React from 'react'
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { screen, render, cleanup, waitFor } from '@testing-library/react'

import { MemoryRouter } from 'react-router-dom'

import * as matchers from '@testing-library/jest-dom/matchers'
expect.extend(matchers)



import NoteSection from '.'

describe('Folder Page display', ()=> {
    beforeEach(() => {
        render(
            <MemoryRouter>
                <NoteSection/>
            </MemoryRouter>
        );
    });

    afterEach(() => {
        cleanup()
    })

    it.skip('is defined', () => {

        expect(NoteSection).toBeDefined()

    })

    

})
