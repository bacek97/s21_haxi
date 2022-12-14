import React, { Component, useState } from 'react';
import { StyleSheet, TextInput, View, Button, Modal, Text, Alert } from 'react-native';



export default function App() {

    const [modalWindow, setModalWindow] = useState(-1);
    const From_where = ['Новоселов, 16  --  добрая, 3, 11.09, 15:00\n', 'Природная 7(аптека) -- Волгоградская 9, 13:00\n', 'Горизонт, 5 -- Заря 3, 13.09, 12:00\n'];
    const information = ['C 14:00, забрать два мешка картошки за шоколадку\n', 'Доставить лекарства из аптеки\n', 'Доставить хомяка к доктору\n'];
    const contacts = ['Белов Александр - 89012374632', 'Холмогоров Космос Юрьевич - 89638571263', 'Анна Васильыевна - 89008765432'];
    const ListItems = From_where.map((From_wheres, index) =>
        <Text onPress={() => setModalWindow(index)}
            style={styles.text}>
            {From_wheres}
        </Text>
    );


    return (
        <View>
            <View>
                <Text style={styles.hh}>Выберите заявку </Text>
                <View>
                    {ListItems}{() => { }}
                </View>
            </View>
            <View>
                <Modal visible={modalWindow > -1}>
                    <View >
                        <Text style={styles.text}> Комментарий: {information[modalWindow]} Контакты: {contacts[modalWindow]}</Text>
                    </View>
                    <View style={{ top: 100 }}>
                        <Button title='Принять'
                            color="green"
                            onPress={() => setModalWindow(-1)} />
                        <View style={{ top: 15 }}>
                            <Button title='Скрыть'
                                onPress={() => setModalWindow(-1)} />
                        </View>
                    </View>
                </Modal>

            </View>
        </View>
    )
}





const styles = StyleSheet.create({
    container: {
        flex: 3,
        Color: 'black',
        flexDirection: 'column'
    },
    text: {
        color: 'black',
        fontSize: 17,
        padding: 8,
        margin: 2,
        borderWidth: 3,
        textAlign: 'left',
    },
    hh: {
        color: 'red',
        fontWeight: 'bold',
        fontSize: 25,
        marginLeft: 20,
        paddingTop: 20,
        textAlign: 'center',
    },
});
