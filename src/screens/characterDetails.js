import React, { useEffect, useState } from 'react';
import {
    Text, StyleSheet, ImageBackground, View
} from 'react-native';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { detailsCharacter } from '../redux/actions/Filmaction';

const imageURL = {
    uri: "https://i.pinimg.com/originals/56/90/dd/5690ddd3a618a2d213dec9e2c60c6a0f.jpg"
};

const CharacterDetails = (props) => {

    const [record, setRecord] = useState([]);

    useEffect(() => {
        const callData = async () => {
            await props.detailsCharacter(props.route.params.url);
        }
        callData();
    }, [])

    useEffect(() => {
        setRecord(props.details);
    }, [props.details])


    return (
        <ImageBackground
            source={imageURL}
            style={styles.backImage}
        >
            <View
                style={{
                    display: 'flex',
                    justifyContent: 'center'
                }}
            >
                <Text style={styles.text}>Name: {record?.name}</Text>
                <Text style={styles.text}>Height: {record?.height}</Text>
                <Text style={styles.text}>Mass: {record?.mass}</Text>
                <Text style={styles.text}>Eye Color: {record?.eye_color}</Text>
                <Text style={styles.text}>Hair Color: {record?.hair_color}</Text>
                <Text style={styles.text}>Skin Color: {record?.skin_color}</Text>
                <Text style={styles.text}>Gender: {record?.gender}</Text>
            </View>
        </ImageBackground>
    )
};

const styles = StyleSheet.create({
    backImage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        resizeMode: 'cover',
    },
    text: {
        color: 'red',
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        fontWeight: 'bold',
        fontSize: 16
    }
})

const mapStateToProps = state => {
    return {
        details: state.FilmState.charDetails
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            detailsCharacter
        },
        dispatch
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(CharacterDetails);