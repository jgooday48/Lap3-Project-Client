import React from 'react'
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { screen, render, cleanup } from '@testing-library/react'

import { MemoryRouter } from 'react-router-dom'

import * as matchers from '@testing-library/jest-dom/matchers'
expect.extend(matchers)


import RichTextEditor from '.'

describe('Rich text editor display', ()=> {
    beforeEach(() => {
        render(
            <MemoryRouter>
                <RichTextEditor />
            </MemoryRouter>
        );
    });

    afterEach(() => {
        cleanup()
    })

    it.skip('is defined', () => {

        expect(RichTextEditor).toBeDefined()

    })
})
