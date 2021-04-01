import {StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: height * 0.01,
    marginBottom: height * 0.03,
  },
  label: {
    marginLeft: '3%',
    width: width * 0.6,
    textAlign: 'left',
    color: 'white',
    fontFamily: 'Montserrat-Regular',
    fontSize: height * 0.02,
  },
});

export default styles;
