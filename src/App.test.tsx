import React from 'react';
import { getByTestId, render } from '@testing-library/react';
import { App } from './App';

describe('tests the app root component', function () {
    it('should render the awesome text', function () {
        render(<App />);
        // expect(getByTestId('awesom')).toBeInTheDocument();
        expect(getByTestId(document.documentElement, 'awesome-again')).toBeInTheDocument();
    });
});
