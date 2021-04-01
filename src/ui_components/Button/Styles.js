import {StyleSheet, Dimensions} from 'react-native';
const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  button: {
    height: 40,
    width: width * 0.4,
    borderRadius: 20,
  },
  buttonBackground: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    color: 'white',
    fontFamily: 'Montserrat-Regular',
  },
});

export default styles;
