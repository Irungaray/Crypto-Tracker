import { StyleSheet } from 'react-native';
import Colors from '../../../res/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.charade,
  },
  titleText: {
    textAlign: 'center',
  },
  loader: {
    marginTop: 60,
  },
  btn: {
    padding: 8,
    backgroundColor: 'black',
    borderRadius: 8,
    margin: 16,
  },
  btnText: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default styles;