import { StyleSheet,Dimensions } from "react-native";

const deviceSize = Dimensions.get('window');
export default StyleSheet.create({

    container :{
        flex:1,
    },
    body_container :{
        padding:5
    },

    image:{
        width:deviceSize.width,
        height:deviceSize.height/3,
        resizeMode:'contain',
        backgroundColor:'white',

    },
    title:{
        fontWeight:'bold',fontSize:27,textAlign:'center'
    },
    desc:{fontStyle:'italic',marginVertical:5,fontSize:18},
    price:{fontWeight:'bold',fontSize:24,textAlign:'right'},


});