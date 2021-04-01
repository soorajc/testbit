/**
 * Homitag Test React Native
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {Text, View, TouchableOpacity, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

import Styles from './Styles';

const {width} = Dimensions.get('window');

const CheckBoxWithText = props => {
  const [checked, setCheckBoxValue] = useState(false);

  const handleCheckBox = () => {
    if (checked) {
      setCheckBoxValue(false);
      props.handleCheckBox(false);
    } else {
      setCheckBoxValue(true);
      props.handleCheckBox(true);
    }
  };

  return (
    <View style={Styles.row}>
      <TouchableOpacity onPress={() => handleCheckBox()}>
        <Icon
          name={checked ? 'check-box' : 'check-box-outline-blank'}
          color="white"
          size={width * 0.07}
        />
      </TouchableOpacity>
      <Text style={Styles.label}>{props.label}</Text>
    </View>
  );
};

export default CheckBoxWithText;

CheckBoxWithText.propTypes = {
  label: PropTypes.string.isRequired,
  handleCheckBox: PropTypes.func.isRequired,
};
