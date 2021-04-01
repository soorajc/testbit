/**
 * Homitag Test React Native
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Text, TouchableOpacity, ImageBackground} from 'react-native';
import PropTypes from 'prop-types';

import Styles from './Styles';
import buttonBackground from '../../assets/buttonbg.png';

const Button = props => {
  return (
    <TouchableOpacity style={Styles.button} onPress={() => props.handlePress()}>
      <ImageBackground
        style={Styles.buttonBackground}
        resizeMode="cover"
        borderRadius={20}
        source={buttonBackground}>
        <Text style={Styles.label}>{props.label}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default Button;

Button.propTypes = {
  label: PropTypes.string.isRequired,
  handlePress: PropTypes.func.isRequired,
};
