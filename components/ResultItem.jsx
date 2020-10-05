import React from 'react';
import 
{
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

const ResultItem = ( { item } ) =>
{
    return (
        <View style={ styles.Result }>
            <Image
                style={ styles.Image }
                source={ { uri: item.image_url } }
            />
            <Text style={ styles.Name } >{ item.name }</Text>
            <Text style={ styles.Reviews } >
                { item.rating } stars, { item.review_count } reviews
            </Text>
        </View>
    );
};

export default ResultItem;

const styles = StyleSheet.create(
    {
        Result:
        {
            marginHorizontal: 8
        },
        Image:
        {
            borderRadius: 5,
            width: 220,
            height: 150
        },
        Name:
        {
            fontWeight: "bold",
            fontSize: 16,
            marginVertical: 3
        },
        Reviews:
        {
            color: "#aaa"
        }

    } );
