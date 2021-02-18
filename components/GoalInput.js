import React, { useState } from 'react'
import { StyleSheet , View, TextInput, Button, Modal } from 'react-native'

const GoalInput = props => {
    const [userGoal, setUserGoal] = useState('')
    return (
    <Modal visible = {props.visible} animated = "slide">
        <View style = {styles.inputContainer}>
            <TextInput placeholder = "Goal for today"
                    style = {styles.input}
                    onChangeText = {(goal)=>setUserGoal(goal)}
                    value = {userGoal}/>
            <View style = {styles.buttonContainer}>
                <Button title = "ADD" onPress = {()=>{
                    props.addGoalHandler(userGoal)
                    setUserGoal('')
                }}/>
                <Button
                title = "Cancel" color = "red" onPress = {props.onCancel}/>
            </View>
           
        </View>
    </Modal>

    )
}

const styles = StyleSheet.create({
    inputContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      },    
    input:{
        borderColor: "black", 
        borderWidth: 1,
        padding: 10,
        width: '80%', 
        margin: 20
      },
    buttonContainer:{
        flexDirection: 'row',
        justifyContent:'space-between',
        width: '40%'

    }
})
export default GoalInput
