// @flow

import { render, screen } from '@testing-library/react';

import Header from './Header';
import styles from './Header.css';

describe('<Header>', () => {
  it('should render the default markup', () => {
    const { container } = render(<Header title="Test" />);

    const title = screen.getByText('Test');

    expect((container.firstChild: any).tagName).toBe('HEADER');
    expect(title.tagName).toBe('H1');
  });

  it('should render the default classes', () => {
    const { container } = render(<Header title="Test" />);

    const title = screen.getByText('Test');

    expect(container.firstChild).toHaveClass(styles.root);
    expect(title).toHaveClass(styles.title);
  });

  // Which is equivalent to:

  it('should render the default markup and classes [snapshot]', () => {
    const { asFragment } = render(<Header title="Test" />);

    expect(asFragment()).toMatchSnapshot();
  });
});
