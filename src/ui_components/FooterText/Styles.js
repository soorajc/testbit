import {StyleSheet, Dimensions} from 'react-native';

const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: height * 0.06,
    marginBottom: height * 0.07,
  },
  footerLabel: {
    color: '#ededed',
    fontFamily: 'Montserrat-Regular',
  },
  footerLabelHighlighted: {
    marginLeft: '2%',
    color: 'white',
    fontFamily: 'Montserrat-Bold',
  },
});

export default styles;
