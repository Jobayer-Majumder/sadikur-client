import { useMutation } from '@apollo/client';
import React from 'react';
import { useAlert } from 'react-alert';
import { ADD_WORKS_MUTATION } from '../../../graphql/mutations/mutations';
import useForm from '../../../hooks/useForm';



const AddDesign = () => {
    const alert = useAlert();
    const { formData, handleForm } = useForm();
    const [file, setFile] = React.useState();

    const [addWorks, { data, loading, error }] = useMutation(ADD_WORKS_MUTATION);

    const handleAddWorks = async e => {
        e.preventDefault();

        if (formData.category && file) {
            try {
                await addWorks({
                    variables: {
                        title: formData.title,
                        description: formData.description,
                        category: formData.category,
                        file: 'file'
                    }
                })
                alert.success('passed successfully')
            } catch (error) {
                alert.error(error.message)
            }
        } else {
            alert.info('Select category and file you want to upload!')
        };
    };

    if (loading) {
        return <h1 className='text-center'>Loading</h1>
    }

    if(error){
        alert.error(error.message)
    };

    console.log(data)

    return (
        <section>
            <div className="">
                <div className="grid grid-cols-2 gap-4">
                    <div className="">
                        <div className="pb-4">
                            <h2 className="uppercase font-semibold">
                                Upload Design
                            </h2>
                        </div>
                        <form className="text-center" onSubmit={handleAddWorks}>
                            <div className="py-2 text-left">
                                <label htmlFor="title">Title *</label>
                                <input onChange={e => handleForm(e)} type="text" id='title' name='title' className="form-input" placeholder="Title" required />
                            </div>

                            <div className="py-2 text-left">
                                <label htmlFor="category">Category *</label>
                                <select onChange={e => handleForm(e)} name="category" id="category" className="form-input" required>
                                    <option selected disabled>Select Category</option>
                                    <option value="logo">Logo Design</option>
                                    <option value="web">Web Design</option>
                                    <option value="app">Mobile App Design</option>
                                    <option value="brand">Brand Design</option>
                                </select>
                            </div>
                            <div className="py-2 text-left">
                                <label htmlFor="desc">Description *</label>
                                <textarea onChange={e => handleForm(e)} name='description' type="text" id='desc' className="form-input" placeholder="Short Description" required />
                            </div>
                            <div className="py-2">
                                <button type="submit" className="focus:outline-none focus:ring-2 bg-brand text-white font-bold tracking-wider block w-full p-2 rounded-lg">
                                    Upload
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="flex justify-center flex-col items-center">
                        <div className="">
                            <label className="w-64 flex flex-col items-center px-4 py-6 text-brand rounded-lg shadow tracking-wide uppercase bg-gray-100 cursor-pointer hover:text-opacity-60">
                                <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                                </svg>
                                <span className="mt-2 text-base leading-normal">Select a file</span>
                                <input onChange={e => setFile(e.target.files[0])} type='file' className="hidden" />
                            </label>
                        </div>
                        {
                            file && <p className='text-center'>{file?.name}</p>
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AddDesign;