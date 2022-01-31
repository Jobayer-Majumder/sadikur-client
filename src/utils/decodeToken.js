import jwt_decode from 'jwt-decode';

export const decodeToken = async token => {

    try {
        const decoded = await jwt_decode(token);

        return decoded;
    } catch (error) {
        return error
    }
};