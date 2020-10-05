import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const SearchBar = ( { term, onTermChange, onTermSubmit } ) =>
{
    return (
        <View style={ styles.Wrapper }>
            <FontAwesome
                styles={ styles.Icon }
                name="search"
                size={ 24 }
                color="white" />
            <TextInput
                style={ styles.Input }
                placeholder="Enter search term..."
                clearButtonMode="always"
                returnKeyType="search"
                autoCapitalize="none"
                autoCorrect={ false }
                placeholderTextColor="#fff"
                value={ term }
                onChangeText={ newTerm => onTermChange( newTerm ) }
                onEndEditing={ onTermSubmit }
            />
        </View>
    );
};

export default SearchBar;

const styles = StyleSheet.create(
    {
        Wrapper:
        {
            backgroundColor: "coral",
            height: 40,
            borderRadius: 5,
            marginHorizontal: 20,
            marginVertical: 5,
            padding: 5,
            flexDirection: "row",
        },
        Input:
        {
            flex: 1,
            color: "#fff",
            marginLeft: 10,
            fontSize: 18,
        },
        Icon:
        {
            alignSelf: "center"
        }
    } );
