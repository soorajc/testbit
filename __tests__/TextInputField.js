/**
 * @format
 */

import 'react-native';
import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jsdom-global/register';
import TextInputField from '../src/ui_components/TextInputField';
import {passwordPattern, emailPattern} from '../src/constants';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

configure({adapter: new Adapter()});

const handleFormInput = jest.fn();

it('TextInputField displays the passed props correctly', () => {
  const wrapper = renderer.create(
    <TextInputField
      label="Confirm Password"
      placeholder="Confirm your password"
      validationExpression={passwordPattern}
      secureTextEntry
      handleTextInput={handleFormInput}
    />,
  ).root;
  expect(wrapper.props.label).toEqual('Confirm Password');
  expect(wrapper.props.placeholder).toEqual('Confirm your password');
  expect(wrapper.props.validationExpression).toEqual(passwordPattern);
  expect(wrapper.props.secureTextEntry).toEqual(true);
});

it('TextInputField displays value correctly with inputCallBack', () => {
  const wrapper = shallow(
    <TextInputField
      label="Confirm Password"
      placeholder="Confirm your password"
      validationExpression={passwordPattern}
      secureTextEntry
      handleTextInput={handleFormInput}
    />,
  );
  expect(wrapper).toBeDefined();
  wrapper.props().children[1].props.onChangeText('testValue');
  expect(handleFormInput).toBeCalled();
});

it('TextInputField input validation is working successfully', () => {
  const wrapper = shallow(
    <TextInputField
      label="Enter Email"
      placeholder="Enter your email address"
      validationExpression={emailPattern}
      secureTextEntry
      handleTextInput={handleFormInput}
    />,
  );
  expect(wrapper).toBeDefined();

  //Simulating validation of an invalid email

  wrapper.props().children[1].props.onChangeText('testValue@12');
  expect(wrapper.props().children[1].props.style[1].borderColor).toEqual('red');

  //Simulating validation of an valid email

  wrapper.props().children[1].props.onChangeText('testValue@12.com');
  expect(wrapper.props().children[1].props.style[1].borderColor).toEqual(
    'white',
  );
});

it('TextInputField calls onsubmit editing successfully ', () => {
  const wrapper = shallow(
    <TextInputField
      label="Confirm Password"
      placeholder="Confirm your password"
      validationExpression={emailPattern}
      secureTextEntry
      handleTextInput={handleFormInput}
    />,
  );
  expect(wrapper).toBeDefined();
  wrapper.props().children[1].props.onChangeText('testValue@12');
  wrapper.props().children[1].props.onSubmitEditing();
});
