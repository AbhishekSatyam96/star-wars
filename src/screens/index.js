import React, { useEffect, useState } from 'react';
import { Button, Text, SafeAreaView, FlatList, View, StyleSheet, TouchableOpacity } from 'react-native';
import { getCharacters } from '../redux/actions/Filmaction';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";


const Screens = (props) => {

    const [characterData, setCharacterData] = useState([]);

    // console.log("props here", props);
    useEffect(() => {
        const callData = async () => {
            const res = await props.getCharacters();
        }
        callData();
    }, [])

    useEffect(() => {
        setCharacterData(props.allCharacter[0]);
    }, [props?.allCharacter])
    // console.log("characterData", characterData);

    const Item = ({ name }) => (
        <TouchableOpacity
            style={styles.button}
        >
            <Text>{name}</Text>
        </TouchableOpacity>
    )

    const renderList = ({ item }) => (
        <Item
            name={item.name}
        />
    )

    return (
        <SafeAreaView style={styles.container}>
            <Text>Get the details of Star-wars Movie</Text>
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
        backgroundColor: "#DDDDDD",
        padding: 10
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
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