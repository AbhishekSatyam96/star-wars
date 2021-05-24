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
    const [isFilter, setIsFilter] = useState(false);

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
        props.navigation.navigate('Character details', {
            url
        })
    }

    const Item = ({ data }) => (
        <TouchableOpacity
            style={styles.button}
            onPress={() => details(data.url)}
        >
            <Text style={styles.nameText}>{data.name}</Text>
        </TouchableOpacity>
    )

    const renderList = ({ item }) => {
        return (
            <Item
                data={item}
            />
        )
    }

    const handleFilter = async (event) => {
        if (event.length > 0) {
            setIsFilter(true)
        } else {
            setIsFilter(false)
        }
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
                        fontWeight: 'bold',
                        fontSize: 16
                    }}
                >{isFilter ? `Filter result` : `Get the details of Star-wars Movie`}</Text>
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
        backgroundColor: "rgba(221, 221, 221, 0.3)",
        padding: 10,
        marginBottom: 10,

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
    nameText: {
        backgroundColor: "#DDDDDD",
        color: 'green',
        fontSize: 16,
        borderRadius: 10,
        fontWeight: 'bold'
    }
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