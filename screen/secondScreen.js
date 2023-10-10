import React from "react";
import {View, Text, TouchableOpacity, StyleSheet,Image} from 'react-native'

export default function SecondScreen({route,navigation}){
    console.log(navigation);
    console.log(route);
    var [img,setImage] = React.useState(route.params)
    return(
        <View style={styles.container}>
            <View style={styles.containerHeader}>
                <Image
                    style={{height:135, width:110 }}
                    source={require(`../img/${img}.jpg`)}
                />
                <View style={styles.viewInfo}>
                    <Text style={{fontWeight:"600",fontSize:19, width:200}}>Điệm thoại Vsmart Joy 3 Hàng chính hãng</Text>
                    <Text style={{fontWeight:"600",fontSize:15}} >Màu: {img}</Text>
                    <View style={{fontWeight:"600",flexDirection:"row"}}>
                        <Text style={{fontWeight:"600",fontSize:15}}>Cũng cấp bởi: </Text>
                        <Text style={{fontWeight:"bold", fontSize:15}}>Tiki Tradding</Text>
                    </View>
                    <Text style={{fontWeight:"bold", fontSize:23}}>1.790.000 đ</Text>
                </View>
            </View>
            <View style={styles.containerBody}>
                <Text style={{margin:10,fontSize:20, fontWeight:"500", width:"100%"}}>Chọn một màu bên dưới:</Text>
                <View style={{alignItems:"center"}}>
                    <TouchableOpacity style={{height:90,width:90,marginBottom:10, backgroundColor:"#C5F1FB"}} onPress={()=> {setImage("white")}} ></TouchableOpacity>
                    <TouchableOpacity style={{height:90,width:90,marginBottom:10, backgroundColor:"red"}} onPress={()=> {setImage("red")}} ></TouchableOpacity>
                    <TouchableOpacity style={{height:90,width:90,marginBottom:10, backgroundColor:"black"}} onPress={()=> {setImage("black")}} ></TouchableOpacity>
                    <TouchableOpacity style={{height:90,width:90,marginBottom:10, backgroundColor:"blue"}} onPress={()=> {setImage("blue")}} ></TouchableOpacity>
                </View>
                <TouchableOpacity
                    style={{height:50,
                            width:"80%",
                            backgroundColor:"#4D6DC1",
                            borderRadius:10,
                            justifyContent:"center",
                            marginTop:20
                        }}
                        onPress={()=>{ navigation.navigate('firstScreen',img)}}
                >
                    <Text style={{fontSize:25, fontWeight:"bold", textAlign:"center", color:"white"}}>Xong</Text>
                </TouchableOpacity>
            </View>
            
        </View>
    );
}

let styles = StyleSheet.create({
    container:{
        flex:1,

    },containerHeader:{
        flex:2,
        flexDirection:"row",
        alignItems:"center",
        padding:5,
        marginLeft:10
        
    },
    containerBody:{
        flex:6,
        marginTop:10,
        backgroundColor:"#C4C4C4",
        alignItems:"center"
    },
    viewInfo:{
        marginLeft:10,
        height:"100%",
        justifyContent:"space-between"

    }

})