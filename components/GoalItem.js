import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const GoalItem = props => {
    return (
        <TouchableOpacity activeOpacity = {0.8} onLongPress = {props.deleteGoal}>
            <View>
                <Text style = {styles.listItem}>{props.content}</Text>
            </View>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    listItem: {
        padding: 10, 
        backgroundColor: '#ccc',
        borderColor: 'black', 
        borderWidth: 1,
        marginVertical: 10
      }
})
export default GoalItem