/**
 * Homitag Test React Native
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Text, View, Image} from 'react-native';
import PropTypes from 'prop-types';

import Styles from './Styles';
import logo from '../../assets/logo.png';

const CardWithLogo = props => {
  return (
    <View style={Styles.container}>
      <Image source={logo} style={Styles.logo} />
      <Text style={Styles.title}>{props.title}</Text>
      <Text style={Styles.description}>{props.description}</Text>
    </View>
  );
};

export default CardWithLogo;

CardWithLogo.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
