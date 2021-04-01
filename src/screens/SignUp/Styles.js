import {StyleSheet, Dimensions} from 'react-native';

const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9686ef',
  },
  scrollView: {
    backgroundColor: '#9686ef',
    alignItems: 'center',
  },
  formContainer: {
    paddingTop: height * 0.04,
  },
  footerView: {
    marginTop: height * 0.025,
    alignItems: 'center',
  },
});

export default styles;
