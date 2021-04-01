import {StyleSheet, Dimensions} from 'react-native';
const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    height: 80,
    width: width * 0.8,
    //backgroundColor: 'red',
    marginTop: '2%',
  },
  label: {
    marginBottom: '2%',
    color: 'white',
    fontSize: height * 0.014,
    fontFamily: 'Montserrat-Bold',
  },
  textInput: {
    height: 40,
    borderBottomWidth: 1,
    fontSize: height * 0.014,
    borderColor: 'white',
    color: 'white',
    fontFamily: 'Montserrat-Regular',
  },
});

export default styles;
