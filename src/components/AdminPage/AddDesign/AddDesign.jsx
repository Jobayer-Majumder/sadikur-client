// import { useMutation } from '@apollo/client';
import React from 'react';
// import { useAlert } from 'react-alert';
// import { ADD_WORKS_MUTATION } from '../../../graphql/mutations/mutations';
import useForm from '../../../hooks/useForm';



const AddDesign = () => {
    // const alert = useAlert();
    const { formData, handleForm } = useForm();
    // const [file, setFile] = React.useState();

    // const [addWorks, { data, loading, error }] = useMutation(ADD_WORKS_MUTATION);

    const handleAddWorks = e => {
        e.preventDefault();

        const worksData = new FormData();

        worksData.append('title', formData?.title);
        worksData.append('category', formData?.category);
        worksData.append('description', formData?.description);
        worksData.append('file', formData?.file);

        try {
            fetch('http://localhost:5000/addDesign', {
                method: 'POST',
                body: worksData
            }).then(res => res.json()).then(data => console.log(data))

        } catch (error) {
            console.log(error.message)
        }
    };
    console.log(formData)

    return (
        <section>
            <form className="" onSubmit={handleAddWorks} enctype="multipart/form-data" method="POST">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="">
                        <div className="pb-4">
                            <h2 className="uppercase font-semibold">
                                Upload Design
                            </h2>
                        </div>
                        <div className="text-center">
                            <div className="py-2 text-left">
                                <label htmlFor="title">Title *</label>
                                <input onChange={e => handleForm(e)} type="text" id='title' name='title' className="form-input" placeholder="Title" required />
                            </div>

                            <div className="py-2 text-left">
                                <label htmlFor="category">Category *</label>
                                <select onChange={e => handleForm(e)} defaultValue='default' name="category" id="category" className="form-input" required>
                                    <option value='default' disabled>Select Category</option>
                                    <option value="logo">Logo Design</option>
                                    <option value="web">Web Design</option>
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
                        </div>
                    </div>
                    <div className="flex justify-center flex-col items-center">
                        <div className="">
                            <label className="w-64 flex flex-col items-center px-4 py-6 text-brand rounded-lg shadow tracking-wide uppercase bg-gray-100 cursor-pointer hover:text-opacity-60">
                                <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                                </svg>
                                <span className="mt-2 text-base leading-normal">Select a file</span>
                                <input onChange={e => handleForm(e)} type='file' name='file' className="hidden" />
                            </label>
                        </div>
                        {/* {
                            formData?.file && <p className='text-center'>{formData?.name}</p>
                        } */}
                    </div>
                </div>
            </form>
        </section>
    );
};

export default AddDesign;