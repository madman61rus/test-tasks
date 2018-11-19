import {Platform, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20
  },
  titleText: {
    color: '#4e6077',
    fontSize: 17,
    fontWeight: '600',
    ...Platform.select({
      ios: {fontFamily: 'Arial'},
      android: {fontFamily: 'Roboto'}
    })
  }
});
