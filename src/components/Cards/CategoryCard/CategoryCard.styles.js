import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'white',
        flexDirection:'row',
        borderWidth:1,
        borderTopLeftRadius:50,
        borderBottomLeftRadius:50,
        marginVertical:5,
        marginHorizontal:6,
        alignItems:'center',
    },
    image: {
        width:100,
        height:100,
        resizeMode:'contain',
        marginLeft:10,
        marginRight:15,
        borderRadius:50,
        backgroundColor:'white'
        
    },

    title:{
        fontSize:20,
        fontWeight:'bold',
    }
})