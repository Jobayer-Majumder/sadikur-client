import React from 'react';



const useForm = () => {
    const [formData, setFormData] = React.useState();


    const handleForm = e => {
        const name = e.target.name;
        const value = e.target.value;

        const newData = { ...formData }

        if(name === 'file'){
            newData[name] = e.target.files[0];
        }else{
            newData[name] = value;
        }

        setFormData(newData);
    }


    return {
        formData,
        setFormData,
        handleForm
    };


};

export default useForm;