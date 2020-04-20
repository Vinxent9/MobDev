import React from 'react';
import { StyleSheet, Text, View, Button,ScrollView } from 'react-native';

const Layout = () =>{
    return(
        <View>
            <Text styles={styles.textStyle}>Layout Component</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize:22,
        fontWeight:'bold'
    }
  });

export default Layout