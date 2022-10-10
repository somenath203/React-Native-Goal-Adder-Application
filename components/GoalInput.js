import { View, TextInput, Button, StyleSheet, Modal, Image } from "react-native";
import { useState } from "react";

const GoalInput = ({ onAddGoal, modalIsVisible, onCancelModal }) => {

    const [enteredGoalText, setEnteredGoalText] = useState('');


    const goalInputHandler = (enteredText) => {

        setEnteredGoalText(enteredText);

    };


    const settingTheGoal = () => {

        onAddGoal(enteredGoalText)

        setEnteredGoalText('');

    };

    return (
        <Modal visible={modalIsVisible} animationType="slide">

            <View style={styles.inputContainer}>

                <Image style={styles.image} source={require('./../assets/images/goal.png')} />

                <TextInput
                    style={styles.textInput}
                    placeholder='add the goal you want to achieve'
                    onChangeText={goalInputHandler}
                    value={enteredGoalText}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.indivudualBtnStyle}>
                        <Button title='ADD GOAL' onPress={settingTheGoal} color='#b180f0' />
                    </View>
                    <View style={styles.indivudualBtnStyle}>
                        <Button title='CANCEL' onPress={onCancelModal} color='#f31282' />
                    </View>
                </View>
            </View>
        </Modal>
    )
};

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#311b6b'
    },
    textInput: {
        borderWidth: 1, 
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        color: '#120438',
        borderRadius: 6,
        width: '100%',
        padding: 10
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 30
    },
    indivudualBtnStyle: {
        width: 100,
        marginHorizontal: 8
    },
    image: {
        width: 100,
        height: 100,
        margin: 20
    }
});


export default GoalInput;