import { useState, useEffect } from 'react';
import { yelp } from "../utils";

const useResults = () => 
{
    const [ errMsg, setErrMsg ] = useState( "" );
    const [ results, setResults ] = useState( [] );

    const searchApi = async ( term = "pizza" ) =>
    {
        const resp = await yelp( `search?term=${ term }&location="New York"` );
        if ( resp.error )
        {
            setErrMsg( resp.error );
        }
        else
        {
            setResults( resp.data.businesses );
        }

    };

    useEffect( () =>
    {
        searchApi();
    }, [] );


    return [ results, errMsg, searchApi ];
};

export default useResults;
