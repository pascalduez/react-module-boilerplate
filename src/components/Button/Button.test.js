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
  });

  it('should render the default markup [snapshot]', () => {
    const wrapper = shallow(
      <Button label="test" />
    );

    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
