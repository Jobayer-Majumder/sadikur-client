import { useMutation } from '@apollo/client';
import React from 'react';
import { useAlert } from 'react-alert';
import { CREATE_ADMIN_MUTATION } from '../../../graphql/mutations/mutations';
import useForm from '../../../hooks/useForm';
import { caseInsensitiveComparison } from '../../../utils/caseComparison';





const MakeAdmin = () => {
    const alert = useAlert();
    const { formData, handleForm, setFormData } = useForm();


    const [makeAdmin, { data, loading, error }] = useMutation(CREATE_ADMIN_MUTATION);

    React.useEffect(() => {
        if(data){
            alert.success('Successfully created an admin')
        }
    }, [alert, data]);


    const handleMakeAdmin = async e => {
        e.preventDefault();

        try {
            if(caseInsensitiveComparison(formData?.password, formData?.confirm_password)){
                await makeAdmin({
                    variables: {
                        name: formData?.name,
                        email: formData?.email,
                        password: formData?.password,
                        role: 'admin'
                    }
                });
                setFormData({
                    name: '',
                    email: '',
                    password: '',
                    confirm_password: ''
                });

            }else{
                alert.error('Make sure both password are same')
            }
        } catch (error) {
            alert.error(error.message);
        };
    };

    if(loading){
        return <p>Loading...</p>
    };

    if(error){
        alert.error(error.message)
    };


    return (
        <section className="min-h-screen flex flex-col ">
            <div className="flex flex-1 items-center justify-center">
                <div className="rounded-lg bg-gray-100 shadow px-4 lg:px-24 py-16 lg:max-w-xl sm:max-w-md w-full text-center">
                    <form className="text-center" onSubmit={handleMakeAdmin}>
                        <div className="flex flex-col justify-center items-center">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Oikya_Front_Logo.png/480px-Oikya_Front_Logo.png" alt="" className="h-32" />
                            <h1 className="font-bold tracking-wider text-3xl mb-8 w-full text-brand">
                                Make Admin
                            </h1>
                        </div>
                        <div className="py-2 text-left">
                            <input type="text" onChange={e => handleForm(e)} value={formData?.name} name='name' className="form-input" placeholder="Full Name" required />
                        </div>
                        <div className="py-2 text-left">
                            <input type="email" onChange={e => handleForm(e)} value={formData?.email} name='email' className="form-input" placeholder="Email" required />
                        </div>
                        <div className="py-2 text-left">
                            <input type="password" onChange={e => handleForm(e)} value={formData?.password} name='password' className="form-input" placeholder="Password" required />
                        </div>
                        <div className="py-2 text-left">
                            <input type="password" onChange={e => handleForm(e)} value={formData?.confirm_password} name='confirm_password' className="form-input" placeholder="Confirm Password" required />
                        </div>
                        <div className="py-2">
                            <button type="submit" className="focus:outline-none focus:ring-2 bg-brand text-white font-bold tracking-wider block w-full p-2 rounded-lg">
                                Make Admin
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default MakeAdmin;