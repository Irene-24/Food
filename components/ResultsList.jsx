import React from 'react';
import { withNavigation } from '@react-navigation/compat';
import
{
    StyleSheet, Text, View, FlatList,
    TouchableOpacity
} from 'react-native';

import ResultItem from "../components/ResultItem";

const ResultsList = ( { title, items, navigation } ) =>
{
    const keyExtractor = item => item.id;
    const getItem = ( { item } ) =>
    {
        const goToDetails = ( name ) => 
        {
            navigation.navigate( 'Details', {
                title: name,
            } );
        };

        return (
            <TouchableOpacity
                onPress={ () => goToDetails( item.name ) }>
                <ResultItem item={ item } />
            </TouchableOpacity>
        );
    };

    return (
        <View style={ styles.Container }>
            <Text style={ styles.Header } >{ title }</Text>
            <FlatList
                horizontal
                data={ items }
                key={ keyExtractor }
                renderItem={ getItem }
                showsHorizontalScrollIndicator={ false }

            />
        </View>
    );
};

const styles = StyleSheet.create(
    {
        Container:
        {
            marginBottom: 10
        },
        Header:
        {
            fontSize: 20,
            fontWeight: "bold",
            marginVertical: 5,
            marginLeft: 10
        }
    } );


export default withNavigation( ResultsList );
