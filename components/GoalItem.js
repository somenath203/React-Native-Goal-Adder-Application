import { View, Text, StyleSheet, Pressable } from "react-native";

const GoalItem = ({ id, text, onDeleteItem }) => {
    return (
        <View style={styles.goalItem}>
            <Pressable
                onPress={onDeleteItem.bind(this, id)}
                android_ripple={{ color: '#dddddd' }}
                style={({ pressed }) => pressed && styles.pressedItem} 
            >
                <Text style={styles.goalItemText}>{text}</Text>
            </Pressable>
        </View>
    )
};


const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
    },
    pressedItem: {
        opacity: 0.5
    },
    goalItemText: {
        color: '#ffffff',
        padding: 8
    }
});


export default GoalItem; 