const API_KEY = "21ldgPuQV01mWaIJftXbRBC5MnqHTAqqoMyHGeKhIykl-WLt0pGf247vol2jVTcb0jq5rnKwwCeZY23IKCuBOlTMM_VoPtePv4c1kTP5Y_kkg1Y15GnzI3CQCwNdX3Yx";


const yelp = async ( endpoint ) =>
{
    const BASE_URL = "https://api.yelp.com/v3/businesses";
    const headers =
    {
        Authorization: `Bearer ${ API_KEY }`
    };

    try 
    {
        const response = await fetch( `${ BASE_URL }/${ endpoint }`,
            {
                headers
            } );

        if ( response.ok )
        {
            return { data: await response.json() };
        }
        else
        {
            return {
                code: response.status,
                error: await response.json()
            };
        }
    }
    catch ( error ) 
    {
        return {
            code: error.statusCode,
            error: error.message
        };
    }
};

export { yelp };
