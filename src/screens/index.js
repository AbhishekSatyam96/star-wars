import React, { useEffect, useState } from 'react';
import {
    Text, SafeAreaView, FlatList, View, StyleSheet, TouchableOpacity, TextInput
} from 'react-native';
import { getCharacters } from '../redux/actions/Filmaction';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";


const Screens = (props) => {

    const [characterData, setCharacterData] = useState([]);

    console.log("props here", props);
    useEffect(() => {
        const callData = async () => {
            await props.getCharacters();
        }
        callData();
    }, [])

    useEffect(() => {
        setCharacterData(props.allCharacter);
    }, [props?.allCharacter])
    // console.log("characterData", characterData);

    const Item = ({ name }) => (
        <TouchableOpacity
            style={styles.button}
        >
            <Text style={{ backgroundColor: "#DDDDDD", color: 'green', fontSize: 16 }}>{name}</Text>
        </TouchableOpacity>
    )

    const renderList = ({ item }) => (
        <Item
            name={item.name}
        />
    )

    const handleFilter = async(event) => {
        await props.getCharacters(event);
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text
                style={styles.headerTitle}
            >Get the details of Star-wars Movie</Text>
            <TextInput
                style={styles.input}
                placeholder="Type to search..."
                onChangeText={handleFilter}
            />
            <Text
                style={{
                    backgroundColor: '#fff',
                    color: 'red',
                }}
            >Some of the top Characters</Text>
            <FlatList
                data={characterData}
                renderItem={renderList}
            />
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        alignItems: "center",
        // backgroundColor: "#DDDDDD",
        padding: 10
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
    },
    headerTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'red',
        backgroundColor: '#fff',
        textDecorationLine: 'underline',
        marginTop: '3%',
        marginBottom: '5%'
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        width: '100%',
        color: 'red',
        borderRadius: 10,
        backgroundColor: '#fff',
    },
})

const mapStateToProps = state => {
    return {
        allCharacter: state.FilmState.filmRecord
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            getCharacters
        },
        dispatch
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Screens);