import { useQuery } from '@apollo/client';


export const useQueriesApi = query => {
    const { loading, data, error } = useQuery(query);

    return {
        loading,
        data,
        error
    }
};


export const useQueriesApiByParams = (query, params) => {

    const { loading, data, error } = useQuery(query, 
    {
        variables: {bred: params} 
    });

    return {
        loading,
        data,
        error
    }

}
