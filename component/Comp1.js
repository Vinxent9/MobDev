import React from 'react'
import {StyleSheet,Text,ScrollView,View,Button} from 'react-native'

const Comp1 = ({navigation}) => {

    return (
        <View>
            <Text>This is Comp1</Text>
            <Button
                title="Go to Home"
                onPress={() => navigation.navigate('Home')}
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

  
  export default Comp1