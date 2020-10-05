import React, { useLayoutEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const DetailsScreen = ( { route, navigation } ) => 
{
    useLayoutEffect( () =>
    {
        navigation.setOptions( {
            title: route.params.title
        } );
    }, [ navigation, route ] );


    return (
        <View>
            <Text>kk</Text>
        </View>
    );
};

export default DetailsScreen;

const styles = StyleSheet.create( {} );
