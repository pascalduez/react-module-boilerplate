import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import Button from './Button';
import styles from './Button.css';


describe('<Button>', () => {
  it('should render the default markup', () => {
    const wrapper = shallow(
      <Button label="test" />
    );

    expect(wrapper).toHaveTagName('button');
    expect(wrapper).toHaveText('test');
  });

  it('should render the default classes', () => {
    const wrapper = shallow(
      <Button label="test" />
    );

    expect(wrapper).toHaveClassName(styles.root);
    expect(wrapper).toHaveClassName(styles.primary);
  });

  // Which is equivalent to:

  it('should render the default markup and classes [snapshot]', () => {
    const wrapper = shallow(
      <Button label="test" />
    );

    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
