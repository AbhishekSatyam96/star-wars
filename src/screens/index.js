import React, { useEffect } from 'react';
import { Button, Text } from 'react-native';
import { getCharacters } from '../redux/actions/Filmaction';
// import axios from 'react-native-axios';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const Screens = (props) => {
    console.log("props here",props);
    // useEffect(() => {
    //     const callData = async () => {
    //         const res = await props.getCharacters();
    //     }
    //     callData();
    // }, [])
    return (
        <>
            <Text

            >I am screen page</Text>
            <Button
                title="czxcz"
                onPress={() => console.log("hey")}
            />
        </>
    )
};

const mapStateToProps = state => {
    return {
        filmData: state
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