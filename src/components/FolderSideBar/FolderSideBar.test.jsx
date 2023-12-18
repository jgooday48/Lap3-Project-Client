import React from 'react'
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { screen, render, cleanup } from '@testing-library/react'

import { MemoryRouter } from 'react-router-dom'

import * as matchers from '@testing-library/jest-dom/matchers'
expect.extend(matchers)


import FolderSideBar from '.'

describe('Sidebar', ()=> {
    beforeEach(() => {
        render(
            <MemoryRouter>
                <FolderSideBar />
            </MemoryRouter>
        );
    });

    afterEach(() => {
        cleanup()
    })

    it('is defined', () => {

        expect(FolderSideBar).toBeDefined()

    })

      it('renders the header when isFolder is true', () => {
    const headerElement = screen.getByText('La Fosse');
    expect(headerElement).toBeInTheDocument();
  });
})
