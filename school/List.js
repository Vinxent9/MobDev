import React from 'react';
import { StyleSheet, Text, View, Button,ScrollView } from 'react-native';

class List extends React.Component{
    constructor(){
        super()
        this.state = {
            students : [
                {
                    id:'1',
                    name:'John',
                    faculty:'Computer Science'
                },
                {
                    id:'2',
                    name:'John',
                    faculty:'Computer Science'
                },
                {
                    id:'3',
                    name:'John',
                    faculty:'Computer Science'
                },
                {
                    id:'4',
                    name:'John',
                    faculty:'Computer Science'
                }
            ]
        }
    }

    render(){
    const listStudents = this.state.students.map(student => <Text>{students.name}</Text>)
        return(
            <View>
                <Text>List Student</Text>
            </View>
        )
    }
}

export default List