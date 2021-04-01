import {StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  logo: {
    marginTop: height * 0.1,
    height: height * 0.12,
    width: height * 0.12,
    resizeMode: 'contain',
  },
  title: {
    fontFamily: 'Montserrat-ExtraBold',
    color: 'white',
    fontSize: height * 0.05,
    marginTop: height * 0.03,
  },
  description: {
    fontFamily: 'Montserrat-Regular',
    color: 'white',
    fontSize: height * 0.022,
    marginTop: height * 0.02,
    textAlign: 'center',
    width: width * 0.8,
  },
});

export default styles;
