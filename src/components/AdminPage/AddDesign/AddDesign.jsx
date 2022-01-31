import React from 'react';



const AddDesign = () => {
    const [file, setFile] = React.useState();

    console.log(file)


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
                        <form className="text-center">
                            <div className="py-2 text-left">
                                <label htmlFor="title">Title *</label>
                                <input type="text" id='title' className="bg-gray-200 border border-gray-100 focus:outline-none block w-full py-2 px-4 rounded-lg focus:border-brand focus:bg-white" placeholder="Title" />
                            </div>

                            <div className="py-2 text-left">
                                <label htmlFor="category">Category *</label>
                                <select name="category" id="category" className="bg-gray-200 border border-gray-100 focus:outline-none block w-full py-2 px-4 rounded-lg focus:border-brand focus:bg-white">
                                    <option selected disabled>Select Category</option>
                                    <option value="XD">Adobe XD file</option>
                                    <option value="AI">Adobe Illustrator Document (AI)</option>
                                    <option value="PSD">Photoshop Document (PSD)</option>
                                    <option value="JPG/JPEG">Joint Photographic Experts Group (JPEG/JPG)</option>
                                </select>
                            </div>
                            <div className="py-2 text-left">
                                <label htmlFor="desc">Description *</label>
                                <textarea type="text" id='desc' className="bg-gray-200 border border-gray-100 focus:outline-none block w-full py-2 px-4 rounded-lg focus:border-brand focus:bg-white" placeholder="Short Description" />
                            </div>
                            <div className="py-2">
                                <button type="submit" className="focus:outline-none focus:ring-2 bg-brand text-white font-bold tracking-wider block w-full p-2 rounded-lg">
                                    Upload
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="flex justify-center items-center">
                        <div className="">
                            <label className="w-64 flex flex-col items-center px-4 py-6 text-brand rounded-lg shadow tracking-wide uppercase bg-gray-100 cursor-pointer hover:text-opacity-60">
                                <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                                </svg>
                                <span className="mt-2 text-base leading-normal">Select a file</span>
                                <input onChange={e => setFile(e.target.files[0])} type='file' className="hidden" />
                            </label>
                            {
                                file && <p className='text-center'>{file?.name}</p>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AddDesign;