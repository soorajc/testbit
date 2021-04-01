/**
 * @format
 */

import 'react-native';
import React from 'react';
import Button from '../src/ui_components/Button';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

const buttonHandler = jest.fn();

it('Button renders correctly', () => {
  const wrapper = renderer.create(
    <Button label="Sign In" handlePress={jest.fn()} />,
  ).root;
  expect(wrapper).toBeDefined();
});

it('Button displays the passed label correctly', () => {
  const wrapper = renderer.create(
    <Button label="Sign In" handlePress={jest.fn()} />,
  ).root;
  expect(wrapper.props.label).toEqual('Sign In');
});

it('Button onPress handler function is working successfully', () => {
  const wrapper = renderer
    .create(<Button label="Sign In" handlePress={buttonHandler} />)
    .toJSON();
  wrapper.props.onClick();
  expect(buttonHandler).toBeCalled();
});
