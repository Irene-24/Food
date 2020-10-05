import React, { useState } from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';
import useResults from "../hooks/useResults";
import SearchBar from "../components/SearchBar";
import ResultsList from '../components/ResultsList';

const HomeScreen = () =>
{
    const [ term, setTerm ] = useState( "" );
    const [ results, errMsg, searchApi ] = useResults();

    const changeHandler = ( text ) =>
    {
        setTerm( text );
    };

    const onTermSubmit = () =>
    {
        searchApi( term );
    };

    const filterResults = price =>
    {
        return results.filter( res => res.price === price );
    };


    return (
        <>
            <SearchBar
                term={ term }
                onTermChange={ changeHandler }
                onTermSubmit={ onTermSubmit }
            />

            <ScrollView>
                <ResultsList
                    title="Cost Effective"
                    items={ filterResults( "$" ) }
                />
                <ResultsList
                    title="Bit Pricier"
                    items={ filterResults( "$$" ) }
                />
                <ResultsList
                    title="Big Spender"
                    items={ filterResults( "$$$" ) }
                />
            </ScrollView>

        </>
    );
};

export default HomeScreen;

const styles = StyleSheet.create( {} );
