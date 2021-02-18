import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';
import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'

export default function App() {

  const [userGoals, setUserGoals] = useState([])
  const [isAddMode, setAddMode] = useState(false)

  const addGoalHandler = (userGoal) =>{
    setUserGoals(currentGoals => [...currentGoals, {key: Math.random().toString(), val: userGoal}])
    setAddMode(false) 
  }

  const deleteGoal = (goalKey) => {
    setUserGoals(currentGoals => {
      //return state to setUserGoals
      return currentGoals.filter((goal)=>goalKey !== goal.key)
    })
  }

  const cancelModal = () => {
    setAddMode(false)
  } 
  return ( 
    <View style={styles.screen}>
      <Button title = "ADD GOAL" onPress={()=>setAddMode(true)}/>
      <GoalInput onCancel = {cancelModal} addGoalHandler = {addGoalHandler} visible = {isAddMode}/>
      <FlatList
        data= {userGoals}
        // function to run once each item is rendered
        renderItem = {itemData => ( <GoalItem content = {itemData.item.val} deleteGoal = {deleteGoal.bind(this, itemData.item.key)}/>
         )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
     padding: 60
  },
  

});
 