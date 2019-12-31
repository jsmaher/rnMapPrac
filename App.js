import React from 'react';
import { StyleSheet, Text, View, Button, Image, Dimensions } from 'react-native';
import CameraExample from './src/Component/Camera'
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import MapView from 'react-native-maps';
import * as Permissions from 'expo-permissions';
import * as DocumentPicker from 'expo-document-picker';
import * as Contacts from 'expo-contacts';
import * as Facebook from 'expo-facebook';
import firebase from './src/Config/Config/firebase'
import * as Location from 'expo-location';





export default class App extends React.Component{
  state={
    camera: false,
      location: null,
      errorMessage: null,
  }
  async componentDidMount(){
    let  status  = await Permissions.askAsync(Permissions.LOCATION);
    if (status.status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
  }
}
  _getLocationAsync = async () => {
    let location = await Location.getCurrentPositionAsync({});
    this.setState({ location });
  }
  render(){
    console.log(this.state)
    return(
      <View style={styles.container}>
          <MapView style={styles.mapStyle} />
          <Button style={{position:'absolute',zIndex:-1}} title='Location Picker ' onPress={this._getLocationAsync} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },  
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});







// export default class App extends React.Component {
//   state = {
//     camera: false
//   }
//   render() {
//     return (
//       this.state.camera ? <CameraExample /> :
//         <View style={styles.container}>
//          <Text>Open Camera</Text>
//           {/* <Image source={require('./src/Images/cameraIcon.png')} style={{ width: 50, Height: 50 }} /> */}
//           <Button title='Open Camera' onPress={() => this.setState({ camera: true })} />
//         </View>
//     );
//   }
// }


// export default class App extends React.Component {
//   state = {
//     camera: false,
//       location: null,
//       errorMessage: null,
//   }
//   async componentDidMount() {
//     // getPermissionAsync = async () => {
//     //   if (Constants.platform.ios) {
//     //     const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL,Permissions.CONTACTS);
//     //     if (status !== 'granted') {
//     //       alert('Sorry, we need camera roll permissions to make this work!');
//     //     }
//     //   }
//     // }
//     // const { status } = await Permissions.askAsync(Permissions.CONTACTS, Permissions.Facebook);
//     let { status } = await Permissions.askAsync(Permissions.LOCATION);
//     if (status !== 'granted') {
//       this.setState({
//         errorMessage: 'Permission to access location was denied',
//       });
//     }


//   }

//   //   contact = async () => {
// //     const { data } = await Contacts.getContactsAsync({
// //       fields: [
// //         Contacts.Fields.FirstName,
// //         Contacts.Fields.PhoneNumbers,

// //       ]
// //     });

// //     if (data.length > 0) {
// //       const contact = data;
// //       console.log(contact);
// //     }
// //   }
// //   documentPicker = async () => {
// //     let result = await DocumentPicker.getDocumentAsync();
// //     console.log("Docunemtm", result)
// //   }
// //   _pickImage = async () => {
// //     let result = await ImagePicker.launchImageLibraryAsync({
// //       mediaTypes: ImagePicker.MediaTypeOptions.All,
// //       allowsEditing: true,
// //       aspect: [4, 3],
// //     });

// //     console.log('result==>', result);

// //     if (!result.cancelled) {
// //       this.setState({ image: result.uri });
// //     }
// //   };

// //   async loginWithFacebook() {
// //     try {
// //         const {
// //             type,
// //             token,
// //         } = await Facebook.logInWithReadPermissionsAsync('985477941795758');
// //         if (type === 'success' && token) {
// //             var credential = await firebase.auth.FacebookAuthProvider.credential(token);
// //             await firebase.auth().signInAndRetrieveDataWithCredential(credential)
// //                 .then((result) => {
// //                     console.log("Result==>", result)
// //                 })
// //                 .catch((err) => {
// //                     console.log('Error==>', err)
// //                 })

// //         } else {
// //             // type === 'cancel'
// //         }
// //     } catch ({ message }) {
// //         console.log(`Facebook Login Error: ${message}`);
// //     }
// // }
//   render() {
//     return (
//       <View style={styles.container}>
//       {/* <CameraExample />  */}
//           <Button style={{marginTop:'15%'}} title='Location Picker ' onPress={this._getLocationAsync} />
//           <MapView style={styles.mapStyle} />
//           {/* <Image source={require('./src/Images/cameraIcon.png')} style={{ width: 50, Height: 50 }} /> */}
//           {/* <Button style={{marginLeft:'5%'}} title='Image Picker' onPress={this._pickImage} />
//           <Button style={{marginLeft:'5%'}} title='document Picker ' onPress={this.documentPicker} />
//           <Button style={{marginLeft:'5%'}} title='contact Picker ' onPress={this.contact} />
//         <Button style={{marginLeft:'5%'}} title='Facebook Login ' onPress={this.loginWithFacebook} /> */}
        
//         </View>
        
        
//     );
//   }
// }


