import { decodeToken } from "../utils/decodeToken"


const useAuth = () => {
    
    const getToken = async () => {
        const token = await window.sessionStorage.getItem('token')

        try {
            if(token){
                const decoded = decodeToken(token)
                
                return {
                    isAuthorized: true,
                    value: decoded
                }
            }else{
                return {
                    isAuthorized: false,
                    value: null
                }
            }
        } catch (error) {
            console.log(error)
        }

    }

    return {
        getToken
    }

}


export default useAuth;