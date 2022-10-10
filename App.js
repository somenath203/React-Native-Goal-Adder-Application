import { Button, StyleSheet, View, ScrollView, FlatList, Alert } from 'react-native';
import { StatusBar } from 'react-native';
import { useState } from 'react';

import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';


export default App = () => {


  const [courseGoals, setCourseGoals] = useState([]);

  const [modalIsVisible, setModalIsVisible] = useState(false);


  const endAddGoalModalHandler = () => {

    setModalIsVisible(false);

  }


  const startAddGoalModalHandler = () => {

    setModalIsVisible(true);


  };


  const addGoalHandler = (enteredGoalText) => {

    if(enteredGoalText.trim().length === 0) {
      return Alert.alert('Invalid Input', 'Input Field cannot be empty');
    }

    setCourseGoals((currentCourseGoals) => {
      return [...currentCourseGoals, { text: enteredGoalText, id: Math.random().toString() }];
    });

    endAddGoalModalHandler();

  };


  const deleteGoalHandler = (id) => {

    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((currentCourseGoal) => (
        currentCourseGoal.id !== id
      ));
    });

  };


  return (
    <>

      <StatusBar style='light' />

      <View style={styles.appContainer}>

        <Button title='Add Your Goals' color='#a065ac' onPress={startAddGoalModalHandler} />


        {modalIsVisible && <GoalInput
          onAddGoal={addGoalHandler}
          modalIsVisible={modalIsVisible}
          onCancelModal={endAddGoalModalHandler}
        />}


        <View style={styles.goalsContainer}>

          <FlatList
            keyExtractor={(courseGoal, index) => {
              return courseGoal.id
            }}
            data={courseGoals}
            renderItem={(courseGoal) => {
              return (
                <GoalItem
                  id={courseGoal.item.id}
                  text={courseGoal.item.text}
                  onDeleteItem={deleteGoalHandler}
                />
              )
            }}
          />

        </View>


      </View>

    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16, 
    backgroundColor: '#1e085a'
  },
  goalsContainer: {
    flex: 4
  }
});


