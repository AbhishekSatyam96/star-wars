import React, { useEffect, useState } from 'react';
import {
    Text, SafeAreaView, FlatList, View, StyleSheet, TouchableOpacity, TextInput, ImageBackground
} from 'react-native';
import { getCharacters } from '../redux/actions/Filmaction';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const imageURL = {
    uri: "https://lumiere-a.akamaihd.net/v1/images/star-wars-the-rise-of-skywalker-theatrical-poster-1000_ebc74357.jpeg?region=0%2C0%2C891%2C1372"
};

const Screens = (props) => {

    const [characterData, setCharacterData] = useState([]);
    const [flag, setFlag] = useState(false);

    useEffect(() => {
        const callData = async () => {
            await props.getCharacters();
        }
        callData();
    }, [])

    useEffect(() => {
        setCharacterData(props.allCharacter);
    }, [props?.allCharacter])

    const details = (url) => {
        console.log("url", url);
        setFlag(true)
    }

    const Item = ({ data }) => {
        return (
            <TouchableOpacity
                style={styles.button}
                onPress={() => details(data.url)}
            >
                <Text style={{ backgroundColor: "#DDDDDD", color: 'green', fontSize: 16 }}>{data.name}</Text>
            </TouchableOpacity>)
    }

    const renderList = ({ item }) => {
        return (
            <Item
                data={item}
            />
        )
    }

    const handleFilter = async (event) => {
        await props.getCharacters(event);
    }

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground
                source={imageURL}
                style={styles.backImage}
            >
                <Text
                    style={styles.headerTitle}
                >Get the details of Star-wars Movie</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Type to search character..."
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
                // keyExtractor={item => item.id}
                />
            </ImageBackground>
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
    backImage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        resizeMode: 'cover',
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