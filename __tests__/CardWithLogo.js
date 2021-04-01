/**
 * @format
 */

import 'react-native';
import React from 'react';
import CardWithLogo from '../src/ui_components/CardWithLogo';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('CardWithLogo renders correctly', () => {
  const wrapper = renderer.create(
    <CardWithLogo
      title="Test Case !"
      description="I am the test description"
    />,
  ).root;
  expect(wrapper).toBeDefined();
});

it('CardWithLogo displays the title and description values correctly', () => {
  const wrapper = renderer.create(
    <CardWithLogo
      title="Test Case !"
      description="I am the test description"
    />,
  ).root;
  expect(wrapper.props.title).toEqual('Test Case !');
  expect(wrapper.props.description).toEqual('I am the test description');
});
