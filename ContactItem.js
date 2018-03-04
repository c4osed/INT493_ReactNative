import React, { Component } from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   Image
// } from 'react-native';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base'
class ContactItem extends Component {
    render() {
        let {picsrc,imgurl,item} = this.props
        return (
            // <View style={styles.row}>
            //     <Image style={styles.picture} source={{url:imgurl}}/>
            //     <View style={{flexDirection:'column'}}>
            //         <View style={{flexDirection:'row'}}>
            //             <Text style={styles.label}>{item.prefix}</Text>
            //             <Text style={styles.label}>{item.firstname} </Text>
            //             <Text style={styles.label}>{item.lastname}</Text>
            //         </View>
            //         <Text style={styles.grey}>Tel : {item.phone}</Text>
            //     <Text style={styles.grey}>Email : {item.email}</Text>
            //     </View>
            // </View>
                <ListItem>
                    <Thumbnail square size={100} source={{ uri: imgurl }} />
                  <Body>
                    <Text>{item.prefix} {item.firstname} {item.lastname}</Text>
                    <Text note>{item.phone}</Text>
                    <Text note>{item.email}</Text>
                  </Body>
                </ListItem>
        );
    }
}

export default ContactItem;


// const styles = StyleSheet.create({
//     label:{
//       fontSize:16
//     },
//     grey:{
//       color:'grey'
//     },
//     picture:{
//         height:50,
//         width:50,
//         resizeMode:'contain'
//     },
//     row:{
//       flexDirection:'row',
//       alignItems:'center',
//       padding:5,
//       borderWidth:1,
//       borderColor:'#DDDDDD',
//     }
//   }) ;