import React from 'react'
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { screen, render, cleanup, waitFor } from '@testing-library/react'

import { MemoryRouter } from 'react-router-dom'

import * as matchers from '@testing-library/jest-dom/matchers'
expect.extend(matchers)


import NoteSideBar from '.'

describe('NoteSideBar display', ()=> {
    beforeEach(() => {
        render(
            <MemoryRouter>
                <NoteSideBar />
            </MemoryRouter>
        );
    });

    afterEach(() => {
        cleanup()
    })

    it('is defined', () => {

        expect(NoteSideBar).toBeDefined()

    })

    it('renders a list of notes', () => {
    const testData = [
      { _id: '1', Name: 'Note 1', Content: 'Content 1' },
      { _id: '2', Name: 'Note 2', Content: 'Content 2' },
    ];

    render(
      <MemoryRouter>
        <NoteSideBar data={testData} />
      </MemoryRouter>
    );

    testData.forEach((note) => {
      expect(screen.getByText(note.Name)).toBeInTheDocument();
    });
  });

    

})
