import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchBar from "../components/SearchBar";

const HomeScreen = () =>
{
    return (
        <View>
            <SearchBar />
            <Text>Home</Text>
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create( {} );
