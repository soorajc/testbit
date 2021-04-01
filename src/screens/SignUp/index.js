/**
 * Homitag Test React Native
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {SafeAreaView, View, Alert} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import AsyncStorage from '@react-native-community/async-storage';

import Styles from './Styles';
import CardWithLogo from '../../ui_components/CardWithLogo';
import FooterText from '../../ui_components/FooterText';
import TextInputField from '../../ui_components/TextInputField';
import Button from '../../ui_components/Button';
import CheckBoxWithText from '../../ui_components/CheckBoxWithText';
import {emailPattern, passwordPattern} from '../../constants';
import getData from '../../utils/helper';

const SignUpScreen = props => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [formValidity, setFormValidity] = useState({
    validEmail: false,
    validPassword: false,
    termsAccepted: false,
  });

  const handleFormInput = (value, label, validity) => {
    if (label === 'Email:') {
      setFormData({
        ...formData,
        email: value,
      });
      setFormValidity({
        ...formValidity,
        validEmail: validity,
      });
    } else if (label === 'Password') {
      setFormData({
        ...formData,
        password: value,
      });
      setFormValidity({
        ...formValidity,
        validPassword: validity,
      });
    } else {
      setFormData({
        ...formData,
        confirmPassword: value,
      });
    }
  };

  const handleCheckBox = value => {
    setFormValidity({
      ...formValidity,
      termsAccepted: value,
    });
  };

  const handleSignUpButton = () => {
    if (!formValidity.validEmail) {
      Alert.alert('Validation Error', 'Please enter a valid email address');
    } else if (!formValidity.validPassword) {
      Alert.alert(
        'Validation Error',
        'Password should contain min 8 characters with at least one uppercase, one number and one special character',
      );
    } else if (!formValidity.termsAccepted) {
      Alert.alert('Validation Error', 'Please accept the terms and conditions');
    } else {
      if (formData.confirmPassword !== formData.password) {
        Alert.alert(
          'Validation Error',
          'Passwords are not matching. Enter same password for confirm password and password',
        );
      } else {
        registerAccount();
      }
    }
  };

  const registerAccount = async () => {
    let currentData = [];
    const oldData = await getData();
    if (oldData) {
      currentData = oldData;
      const checkExistingEmailIndex = oldData.findIndex(
        user => user.email === formData.email,
      );
      if (checkExistingEmailIndex > -1) {
        Alert.alert('Warning', 'Email already in use. Try with another email');
      } else {
        currentData.push(formData);
        saveData(currentData);
      }
    } else {
      currentData.push(formData);
      saveData(currentData);
    }
  };

  const saveData = async data => {
    try {
      const jsonData = JSON.stringify(data);
      await AsyncStorage.setItem('userList', jsonData);
      Alert.alert('Success', 'Registration Successfull');
      props.navigation.goBack();
    } catch (e) {
      console.log('Error while saving data');
      Alert.alert(
        'Error',
        'Some error occured while registering. Please try again',
      );
    }
  };

  return (
    <SafeAreaView style={Styles.container}>
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        bounces={false}
        contentContainerStyle={Styles.scrollView}>
        <CardWithLogo
          title="REGISTER"
          description="You and your friends always connected"
        />
        <View style={Styles.formContainer}>
          <TextInputField
            label="Email:"
            keyboardType="email-address"
            placeholder="Enter your email address"
            validationExpression={emailPattern}
            handleTextInput={handleFormInput}
          />
          <TextInputField
            label="Password"
            placeholder="Enter your password"
            validationExpression={passwordPattern}
            secureTextEntry
            handleTextInput={handleFormInput}
          />
          <TextInputField
            label="Confirm Password"
            placeholder="Confirm your password"
            validationExpression={passwordPattern}
            secureTextEntry
            handleTextInput={handleFormInput}
          />
          <CheckBoxWithText
            handleCheckBox={handleCheckBox}
            label="I agree with the terms and conditions and the privacy policy"
          />
        </View>
        <View style={Styles.footerView}>
          <Button label="Sign Up" handlePress={handleSignUpButton} />
          <FooterText
            title="Already have an account?"
            highlightedLabel="Login"
            onPressHandler={() => props.navigation.replace('Login')}
          />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default SignUpScreen;
