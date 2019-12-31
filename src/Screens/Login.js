import React from 'react'
import {StyleSheet, View, Text, Button } from 'react-native'
import firebase from '../Config/Config/firebase'
import Icon from 'react-native-vector-icons/FontAwesome';


export default class Login extends React.Component {
    async loginWithFacebook() {
        try {
            const {
                type,
                token,
            } = await Facebook.logInWithReadPermissionsAsync('985477941795758');
            if (type === 'success' && token) {
                var credential = await firebase.auth.FacebookAuthProvider.credential(token);
                await firebase.auth().signInAndRetrieveDataWithCredential(credential)
                    .then((result) => {
                        console.log("Result==>", result)
                    })
                    .catch((err) => {
                        console.log('Error==>', err)
                    })

            } else {
                // type === 'cancel'
            }
        } catch ({ message }) {
            console.log(`Facebook Login Error: ${message}`);
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <Icon.Button
                    name="facebook"
                    backgroundColor="#3b5998"
                    onPress={this.loginWithFacebook}
                >Login with Facebook</Icon.Button>
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
  });