/**
 * @format
 */

import 'react-native';
import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jsdom-global/register';
import CheckBoxWithText from '../src/ui_components/CheckBoxWithText';

configure({adapter: new Adapter()});

const handleCheckBox = jest.fn();

it('CheckBoxWithText selection and deselection works correctly', () => {
  const wrapper = shallow(
    <CheckBoxWithText
      label="I agree with the terms and conditions and the privacy policy"
      handleCheckBox={handleCheckBox}
    />,
  );

  // Check whether empty checkbox is displayed by default
  expect(wrapper.props().children[0].props.children.props.name).toEqual(
    'check-box-outline-blank',
  );

  // Simulate checkbox selection
  wrapper.props().children[0].props.onPress();

  // Check whether the checkbox is selected
  expect(wrapper.props().children[0].props.children.props.name).toEqual(
    'check-box',
  );

  // Simulate checkbox deselection
  wrapper.props().children[0].props.onPress();

  // Check whether the checkbox is deselected
  expect(wrapper.props().children[0].props.children.props.name).toEqual(
    'check-box-outline-blank',
  );
});

it('CheckBoxWithText displays the description text correctly', () => {
  const wrapper = shallow(
    <CheckBoxWithText
      label="I agree with the terms and conditions and the privacy policy"
      handleCheckBox={handleCheckBox}
    />,
  );

  expect(wrapper.props().children[1].props.children).toEqual(
    'I agree with the terms and conditions and the privacy policy',
  );
});
