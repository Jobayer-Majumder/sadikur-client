import React, { useContext } from 'react';
import { useAlert } from 'react-alert';
import { useMutation } from '@apollo/client';
import useForm from '../../hooks/useForm';
// import SpinLoader from '../../components/common/SpinLoader';
import { UserContext } from '../../App';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { decodeToken } from '../../utils/decodeToken';
import { LOGIN_MUTATION } from '../../graphql/mutations/mutations';




const Authentication = () => {
    const alert = useAlert();
    const [isUserLoggedIn, setIsUserLoggedIn] = useContext(UserContext);
    const { formData, handleForm, setLoginData } = useForm();

    const [findUser, { data, loading, error }] = useMutation(LOGIN_MUTATION);


    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };


    React.useEffect(() => {
        if (data) {
            sessionStorage.setItem('token', data.findUser.token);
            decodeToken().then(user => setIsUserLoggedIn(user)).catch(err => {
                alert.error(err);
            });
            alert.success('Login Successful!')

        }
    }, [alert, data, setIsUserLoggedIn])


    const handleLogin = async e => {
        e.preventDefault();

        try {
            await findUser({
                variables: {
                    email: formData?.email,
                    password: formData?.password,
                }
            });
            setLoginData({ email: '', password: '' })
            history.replace(from);

        } catch (error) {
            if (error) {
                alert.error('Something wrong with finding you!')
            }
        }


    };

    if(loading){
        return <p>Loading...</p>
    }

    if(error){
        alert.error(error.message)
    };

    console.log(isUserLoggedIn)


    return (
        <section className="min-h-screen flex flex-col bg-gray-100 pt-20">
            <div className="flex flex-1 items-center justify-center py-12">
                <div className="rounded-lg bg-white shadow px-4 lg:px-24 py-16 lg:max-w-xl sm:max-w-md w-full text-center">
                    <form className="text-center" onSubmit={e => handleLogin(e)}>
                        <div className="flex flex-col justify-center items-center">
                            <img src="https://cdn.truelancer.com/upload-full/711224-gps-design-logo---Copy-01.png" alt="" className="h-32" />
                            <h1 className="font-bold tracking-wider text-3xl mb-8 w-full text-brand">
                                Sign in
                            </h1>

                        </div>
                        <div className="py-2 text-left">
                            <input onChange={e => handleForm(e)} value={formData?.email} type="email" name='email' className="form-input" placeholder="Email" required />
                        </div>
                        <div className="py-2 text-left">
                            <input onChange={e => handleForm(e)} value={formData?.password} type="password" name='password' className="form-input" placeholder="Password" required />
                        </div>
                        <div className="py-2 relative">
                            <button type="submit" className="relative focus:outline-none focus:ring-2 bg-brand text-white font-bold tracking-wider block w-full p-2 rounded-lg">
                                {/* {
                                    loading ? <SpinLoader /> : null
                                } */}
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