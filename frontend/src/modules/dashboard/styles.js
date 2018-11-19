import {Dimensions, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#122134'
  },
  topPanel: {
    flex: 1,
    marginTop: 20,
    paddingHorizontal: 10
  },
  button: {
    width: Dimensions.get('window').width / 3 - 20,
    height: Dimensions.get('window').width / 3 - 20,
    backgroundColor: '#1b293e',
    borderRadius: 5,
    marginVertical: 1,
    marginHorizontal: 1
  }
});
