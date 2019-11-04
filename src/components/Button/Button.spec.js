/* @flow */
/* eslint css-modules/no-unused-class: [2, { markAsUsed: ['secondary', 'danger'] }] */

import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Button from './Button';
import styles from './Button.css';

describe('<Button>', () => {
  it('should render the default markup', () => {
    const { getByText } = render(<Button>Test</Button>);

    const button = getByText('Test');

    expect(button.tagName).toBe('BUTTON');
  });

  it('should render the default classes', () => {
    const { getByText } = render(<Button>Test</Button>);

    const button = getByText('Test');

    expect(button).toHaveClass(styles.root);
    expect(button).toHaveClass(styles.primary);
  });

  // Which is equivalent to:

  it('should render the default markup and classes [snapshot]', () => {
    const { container } = render(<Button>Test</Button>);

    expect(container.firstChild).toMatchSnapshot();
  });

  // Event handlers.

  it('should trigger click event handlers', () => {
    const spy = jest.fn();
    const { getByText } = render(<Button onClick={spy}>Test</Button>);

    const button = getByText('Test');

    fireEvent.click(button);

    expect(spy).toHaveBeenCalled();
  });
});
