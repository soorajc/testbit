/**
 * Homitag Test React Native
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {View, Text, TextInput, Keyboard} from 'react-native';
import PropTypes from 'prop-types';

import Styles from './Styles';

const TextInputField = props => {
  const [validInputFlag, setValidInputFlag] = useState(true);

  const handleTextChange = input => {
    if (props.validationExpression.test(input)) {
      setValidInputFlag(true);
      props.handleTextInput(input, props.label, true);
    } else {
      setValidInputFlag(false);
      props.handleTextInput(input, props.label, false);
    }
  };
  return (
    <View style={Styles.container}>
      <Text style={Styles.label}>{props.label}</Text>
      <TextInput
        style={[
          Styles.textInput,
          {borderColor: validInputFlag ? 'white' : 'red'},
        ]}
        onChangeText={text => handleTextChange(text)}
        placeholder={props.placeholder}
        placeholderTextColor="white"
        secureTextEntry={props.secureTextEntry}
        keyboardType={props.keyboardType}
        blurOnSubmit={false}
        onSubmitEditing={() => Keyboard.dismiss()}
      />
    </View>
  );
};

export default TextInputField;

TextInputField.propTypes = {
  label: PropTypes.string.isRequired,
  keyboardType: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  placeholder: PropTypes.string.isRequired,
  handleTextInput: PropTypes.func.isRequired,
};
