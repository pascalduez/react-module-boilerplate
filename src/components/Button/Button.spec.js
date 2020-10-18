/* @flow */
/* eslint css-modules/no-unused-class: [2, { markAsUsed: ['secondary', 'danger'] }] */

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

import Button from './Button';
import styles from './Button.css';

describe('<Button>', () => {
  it('should render the default markup', () => {
    render(<Button>Test</Button>);

    const button = screen.getByText('Test');

    expect(button.tagName).toBe('BUTTON');
  });

  it('should render the default classes', () => {
    render(<Button>Test</Button>);

    const button = screen.getByText('Test');

    expect(button).toHaveClass(styles.root);
    expect(button).toHaveClass(styles.primary);
  });

  // Which is equivalent to:

  it('should render the default markup and classes [snapshot]', () => {
    const { asFragment } = render(<Button>Test</Button>);

    expect(asFragment()).toMatchSnapshot();
  });

  // Event handlers.

  it('should trigger click event handlers', () => {
    const spy = jest.fn();
    render(<Button onClick={spy}>Test</Button>);

    const button = screen.getByText('Test');

    userEvent.click(button);

    expect(spy).toHaveBeenCalled();
  });
});
