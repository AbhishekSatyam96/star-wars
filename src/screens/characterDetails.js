import React, { useEffect } from 'react';
import {
    Text, StyleSheet, ImageBackground
} from 'react-native';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { detailsCharacter } from '../redux/actions/Filmaction';

const imageURL = {
    uri: "https://i.pinimg.com/originals/56/90/dd/5690ddd3a618a2d213dec9e2c60c6a0f.jpg"
};


const CharacterDetails = (props) => {
    console.log("props in details", props);
    useEffect(() => {
        const callData = async () => {
            await props.detailsCharacter(props.route.params.url);
        }
        callData();
    })
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