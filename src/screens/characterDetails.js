import React from 'react';
import {
    Text, SafeAreaView, FlatList, View, StyleSheet, TouchableOpacity, TextInput, ImageBackground
} from 'react-native';

const imageURL = {
    uri: "https://i.pinimg.com/originals/56/90/dd/5690ddd3a618a2d213dec9e2c60c6a0f.jpg"
};


const CharacterDetails = () => {
    return (
        <ImageBackground
            source={imageURL}
            style={styles.backImage}
        >
            <Text>ada</Text>
        </ImageBackground>
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


export default CharacterDetails;