import React, { useContext } from 'react';
import { useAlert } from 'react-alert';
import { gql, useMutation } from '@apollo/client';
import useForm from '../../hooks/useForm';
import SpinLoader from '../../components/common/SpinLoader';
import { UserContext } from '../../App';
import useAuth from '../../hooks/useAuth';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';




const LOGIN_MUTATION = gql`
  # Increments a back-end counter and gets its resulting value
  mutation findUser($email: String, $password: String,) {
    findUser(input: {email: $email, password: $password}){
        token
    }
  }
`;

const Authentication = () => {
    const alert = useAlert();
    const { getToken } = useAuth();
    const [isUserLoggedIn, setIsUserLoggedIn] = useContext(UserContext);
    const { loginData, handleForm, setLoginData } = useForm();

    const [findUser, { data, loading, error }] = useMutation(LOGIN_MUTATION);


    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };


    React.useEffect(() => {
        if (data) {
            sessionStorage.setItem('token', data.findUser.token)
            alert.success('Login Successful!')

        }
    }, [alert, data])

    console.log(isUserLoggedIn, 'from context');

    const handleLogin = async e => {
        e.preventDefault();

        try {
            await findUser({
                variables: {
                    email: loginData?.email,
                    password: loginData?.password,
                }
            });
            const user = await getToken();
            setIsUserLoggedIn(user)
            setLoginData({ email: '', password: '' })
            history.replace(from);

        } catch (error) {
            if (error) {
                alert.error('Something wrong with finding you!')
            }
        }


    };


    console.log(data, error, 'from graphql mutation')


    return (
        <section className="min-h-screen flex flex-col bg-gray-100">
            <div className="flex flex-1 items-center justify-center py-12">
                <div className="rounded-lg bg-white shadow px-4 lg:px-24 py-16 lg:max-w-xl sm:max-w-md w-full text-center">
                    <form className="text-center" onSubmit={e => handleLogin(e)}>
                        <div className="flex flex-col justify-center items-center">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Oikya_Front_Logo.png/480px-Oikya_Front_Logo.png" alt="" className="h-32" />
                            <h1 className="font-bold tracking-wider text-3xl mb-8 w-full text-brand">
                                Sign in
                            </h1>

                        </div>
                        <div className="py-2 text-left">
                            <input onChange={e => handleForm(e)} value={loginData?.email} type="email" name='email' className="bg-gray-200 border border-gray-100 focus:outline-none block w-full py-2 px-4 rounded-lg focus:border-brand focus:bg-white" placeholder="Email" required />
                        </div>
                        <div className="py-2 text-left">
                            <input onChange={e => handleForm(e)} value={loginData?.password} type="password" name='password' className="bg-gray-200 border border-gray-100 focus:outline-none block w-full py-2 px-4 rounded-lg focus:border-brand focus:bg-white" placeholder="Password" required />
                        </div>
                        <div className="py-2 relative">
                            <button type="submit" className="relative focus:outline-none focus:ring-2 bg-brand text-white font-bold tracking-wider block w-full p-2 rounded-lg">
                                {
                                    loading ? <SpinLoader /> : null
                                }
                                {/* <SpinLoader /> */}
                                Sign In
                            </button>
                        </div>
                    </form>
                    <div className="text-center">
                        <a href="/" className="hover:underline">Forgot password?</a>
                    </div>
                    <div className="text-center mt-12">
                        <span>
                            Don't have an account?
                        </span> {``}
                        <a href="/" className="text-md text-indigo-600 underline font-semibold hover:text-indigo-800">Create One</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Authentication;