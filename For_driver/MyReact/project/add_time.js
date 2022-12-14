import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Button, Text, Alert } from 'react-native';
import fetch from './fetchWithTimeout.js'

export default function New({ navigation, route }) {

    const [date, setDate] = useState('');
    const onChangeDate = (date) => {
        setDate(date);
    };
    const [time, setTime] = useState('');
    const onChangeTime = (time) => {
        setTime(time);
    };
    const [comment, setComment] = useState('');
    const onChangeComm = (comment) => {
        setComment(comment);
    };
    const [address1, setadr1] = useState('');
    const onChangeAddress1 = (address1) => {
        setadr1(address1);
    };
    const [address2, setadr2] = useState('');
    const onChangeAddress2 = (address2) => {
        setadr2(address2);
    };

    const tel_number = route.params.text;

    const send_to_db = () => {
        fetch('https://haxi2.bacek97.repl.co/api/order?date=' + date + time + '&addr1=' + address1 + '&addr2=' + address2 + '&inform=' + comment + '&phone_driver=' + tel_number, 5000)
            .then(res => res.json())
            .then(
                (result) => {
                    navigation.navigate("Main", { text: tel_number });
                },
                (error) => {
                    Alert.alert("Timeout Error")
                }
            )
            .catch((e) => {
                Alert.alert("Error!")
            })
    }


    return (
        <View style={styles.box}>
            <View style={styles.bloks}>
                <Text style={styles.text}>
                    Дата</Text>
                <TextInput style={styles.input}
                    onChangeText={onChangeDate}
                    placeholder='Дата'
                    fontWeight='bold'
                    textAlign='center'
                />
            </View>
            <View>
                <Text style={styles.text}>
                    Время(От/до)</Text>
                <TextInput style={styles.input}
                    onChangeText={onChangeTime}
                    placeholder='Время(От/до)'
                    fontWeight='bold'
                    textAlign='center'
                />
                <Text style={styles.text}>
                    Комментарий</Text>
                <TextInput style={styles.input}
                    onChangeText={onChangeComm}
                    placeholder='Все, что хочешь'
                    fontWeight='bold'
                    textAlign='center'
                />
            </View>
            <View style={styles.butt_input}>
                <Button
                    title='Создать поездку'
                    color={'green'}
                    onPress={() => send_to_db()}
                />
            </View>
        </View>
    )
}



const styles = StyleSheet.create({
    butt_input: {
        marginHorizontal: 50,
        marginTop: 150,
    },
    input: {
        borderBottomColor: 'blue',
        padding: 10,  // сдвиг между контрукциями
        borderBottomWidth: 3,  // полоска
        width: '80%',  // ширина элемента
        marginLeft: '10%',
        // backgroundColor: '#d0e3f7'
        textAlign: 'center',
    },
    text: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        paddingTop: 10,
    },
    box: {
        flex: 1,
        backgroundColor: '#d0e3f7',
    },
})