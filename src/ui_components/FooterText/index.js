/**
 * Homitag Test React Native
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Text, View} from 'react-native';
import PropTypes from 'prop-types';

import Styles from './Styles';

const FooterText = props => {
  return (
    <View style={Styles.row}>
      <Text style={Styles.footerLabel}>{props.title}</Text>
      <Text
        onPress={() => props.onPressHandler()}
        style={Styles.footerLabelHighlighted}>
        {props.highlightedLabel}
      </Text>
    </View>
  );
};

export default FooterText;

FooterText.propTypes = {
  title: PropTypes.string.isRequired,
  highlightedLabel: PropTypes.string.isRequired,
};
