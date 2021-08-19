import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Task = (props) => {
    return (
        <View style={styles.item}>
            <View  style={styles.itemLeft}>
                <TouchableOpacity style={styles.square}></TouchableOpacity>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
            <View style = {styles.cirlce}>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    item:{
        backgroundColor: "white",
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20

    },
    itemText:{
        maxWidth: '80%'
    },
    itemLeft:{
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    cirlce: {
        height: 12,
        width: 12,
        backgroundColor: "lightblue",
        borderWidth: 2,
        borderRadius: 5,
        borderColor: '#c0c0c0',
    },
    square:{
        width: 25,
        height: 25,
        backgroundColor: "#00BFFF",
        opacity: 0.5,
        borderRadius: 5,
        marginRight: 15,
        borderWidth: 0.3,
        borderColor: '#c0c0c0',
    }

})

export default Task;