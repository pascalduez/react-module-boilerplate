import React from 'react';
import { shallow } from 'enzyme';

import Header from './Header';
import styles from './Header.css';


describe('<Header>', () => {
  it('should render the default markup', () => {
    const wrapper = shallow(
      <Header title="test" />
    );

    expect(wrapper).toHaveTagName('header');
    expect(wrapper.childAt(0)).toHaveTagName('h1');
    expect(wrapper.childAt(0)).toHaveText('test');
  });

  it('should render the default classes', () => {
    const wrapper = shallow(
      <Header title="test" />
    );

    expect(wrapper).toHaveClassName(styles.root);
    expect(wrapper.childAt(0)).toHaveClassName(styles.title);
  });

  // Which is equivalent to:

  it('should render the default markup and classes [snapshot]', () => {
    const wrapper = shallow(
      <Header title="test" />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
