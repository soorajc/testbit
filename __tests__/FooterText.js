/**
 * @format
 */

import 'react-native';
import React from 'react';
import FooterText from '../src/ui_components/FooterText';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

const handleLabelPress = jest.fn();

it('FooterText renders correctly', () => {
  const wrapper = renderer.create(
    <FooterText
      title="Already have an account?"
      highlightedLabel="Login"
      onPressHandler={handleLabelPress}
    />,
  ).root;
  expect(wrapper).toBeDefined();
});

it('FooterText displays the title and highlighted label correctly', () => {
  const wrapper = renderer.create(
    <FooterText
      title="Already have an account?"
      highlightedLabel="Login"
      onPressHandler={handleLabelPress}
    />,
  ).root;
  expect(wrapper.props.title).toEqual('Already have an account?');
  expect(wrapper.props.highlightedLabel).toEqual('Login');
});

it('FooterText handlepress function get called on pressing footer label', () => {
  const wrapper = renderer
    .create(
      <FooterText
        title="Already have an account?"
        highlightedLabel="Login"
        onPressHandler={handleLabelPress}
      />,
    )
    .toJSON();
  wrapper.children[1].props.onPress();
  expect(handleLabelPress).toBeCalled();
});
