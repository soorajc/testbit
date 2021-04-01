import {StyleSheet, Dimensions} from 'react-native';

const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9686ef',
  },
  scrollView: {
    alignItems: 'center',
  },
  formContainer: {
    paddingTop: height * 0.04,
  },
  footerView: {
    marginTop: height * 0.025,
    alignItems: 'center',
  },
  forgotPasswordLabel: {
    marginTop: height * 0.05,
    color: 'white',
    fontFamily: 'Montserrat-Regular',
    textAlign: 'center',
  },
});

export default styles;
