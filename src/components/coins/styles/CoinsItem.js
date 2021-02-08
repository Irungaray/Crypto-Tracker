import { StyleSheet, Platform } from 'react-native';
import Colors from '../../../res/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    marginLeft: Platform.OS === 'ios' ? 16 : 0,
    borderBottomColor: Colors.zircon,
    borderBottomWidth: 1,
  },
  row: {
    flexDirection: 'row',
  },
  symbolText: {
    color: '#fff',
    marginRight: 12,
    fontWeight: 'bold',
    fontSize: 17,
  },
  nameText: {
    color: '#fff',
    marginRight: 16,
    fontSize: 12,
  },
  priceText: {
    color: '#fff',
    fontSize: 15,
  },
  percentText: {
    color: '#fff',
    marginRight: 8,
    fontSize: 15,
  },
  imgIcon: {
    width: 22,
    height: 22,
  },
});

export default styles;
