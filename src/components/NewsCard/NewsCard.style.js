/* eslint-disable prettier/prettier */
import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    margin: 10,
    backgroundColor: 'white',
    borderRadius:10,
  },
  image: {height: Dimensions.get('window').height / 4, borderTopLeftRadius:10, borderTopRightRadius:10},
  title: {fontWeight:'bold',color:'black', fontSize: 18},
  description: {marginTop: 3},
  author: {fontStyle: 'italic',
textAlign: 'right'},
  inner_container: {padding: 10},
  scrollView: {horizontal: true, vertical: true,  showHorizontalIndicator: false},
});
