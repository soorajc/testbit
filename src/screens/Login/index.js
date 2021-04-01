/**
 * Homitag Test React Native
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {SafeAreaView, Text, View, Alert} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import Styles from './Styles';
import CardWithLogo from '../../ui_components/CardWithLogo';
import FooterText from '../../ui_components/FooterText';
import TextInputField from '../../ui_components/TextInputField';
import Button from '../../ui_components/Button';
import {emailPattern, passwordPattern} from '../../constants';
import getData from '../../utils/helper';

const LoginScreen = props => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [formValidity, setFormValidity] = useState({
    validEmail: false,
    validPassword: false,
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
    }
  };

  const handleSignInButton = () => {
    if (!formValidity.validEmail) {
      Alert.alert('Validation Error', 'Please enter a valid email address');
    } else if (!formValidity.validPassword) {
      Alert.alert('Validation Error', 'Password not in valid format');
    } else {
      signIn();
    }
  };

  const signIn = async () => {
    const currentData = await getData();
    if (currentData) {
      const checkExistingEmailIndex = currentData.findIndex(
        user => user.email === formData.email,
      );
      if (checkExistingEmailIndex > -1) {
        const userPassword = currentData[checkExistingEmailIndex].password;
        if (userPassword === formData.password) {
          Alert.alert('Welcome', 'SignIn Success! Welcome to our app.');
        } else {
          Alert.alert('Error', 'Wrong password try again');
        }
      } else {
        Alert.alert('Sign In Error', 'Email is not registered');
      }
    } else {
      Alert.alert('Sign In Error', 'Email is not registered');
    }
  };

  return (
    <SafeAreaView style={Styles.container}>
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        bounces={false}
        contentContainerStyle={Styles.scrollView}>
        <CardWithLogo title="LOG IN !" description="Happy to see you again !" />
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
        </View>
        <View style={Styles.footerView}>
          <Button label="Sign In" handlePress={handleSignInButton} />
          <Text style={Styles.forgotPasswordLabel}>Forgot Password ?</Text>
          <FooterText
            title="Don't have account"
            highlightedLabel="Sign up here"
            onPressHandler={() => props.navigation.navigate('SignUp')}
          />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;
