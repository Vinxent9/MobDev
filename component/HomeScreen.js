import React from 'react';
import { StyleSheet, Text, View, Button,ScrollView } from 'react-native';
import {Header} from 'react-native-elements'
import { StackActions } from '@react-navigation/native';

const HomeScreen = ({navigation}) => {
    return(
        <View>
            <Header
                leftComponent={{ icon: 'menu', color: '#fff',onPress:() => navigation.openDrawer() }}
                centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
                rightComponent={{ icon: 'home', color: '#fff' }}
            />
           
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default HomeScreen