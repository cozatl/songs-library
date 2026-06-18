import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom';
import React from 'react';
import Header from '../Header';

describe('Header component', () => {
    it('should display the title in header', () => {
        const title = 'Artist Songs';

        render(<Header appName= {title} />);

        const headerTitle = screen.getByText(`${title}`); //Validate title is displayed
        expect(headerTitle).toBeInTheDocument();
    })
})