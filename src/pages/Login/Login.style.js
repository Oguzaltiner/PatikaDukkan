import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../styles/colors';

export default StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
  logo: {
    height: Dimensions.get('window').height / 4,
    width: Dimensions.get('window').width * 0.9,
    resizeMode: 'contain',
    alignSelf: 'center',
    tintColor: 'white',
  },
  logo_container: {
    flex: 1,
    justifyContent: 'center',
  },
  body_container: {
    flex: 1,
  },
  header:{
        color:colors.darkgreen,
        margin:5,
        fontSize:160,
  },
});
