/* @flow */
/* eslint css-modules/no-unused-class: [2, { markAsUsed: ['secondary', 'danger'] }] */

import * as React from 'react';
import { shallow, mount } from 'enzyme';

import Button from './Button';
import styles from './Button.css';

describe('<Button>', () => {
  it('should render the default markup', () => {
    const wrapper = shallow(<Button>test</Button>);

    expect(wrapper).toHaveDisplayName('button');
    expect(wrapper).toHaveText('test');
  });

  it('should render the default classes', () => {
    const wrapper = shallow(<Button>test</Button>);

    expect(wrapper).toHaveClassName(styles.root);
    expect(wrapper).toHaveClassName(styles.primary);
  });

  // Which is equivalent to:

  it('should render the default markup and classes [snapshot]', () => {
    const wrapper = shallow(<Button>test</Button>);

    expect(wrapper).toMatchSnapshot();
  });

  // Event handlers.

  it('should trigger click event handlers', () => {
    const spy = jest.fn();
    const wrapper = mount(<Button onClick={spy}>test</Button>);

    wrapper.simulate('click');

    expect(spy).toHaveBeenCalled();
  });
});
