import { gql } from '@apollo/client';


export const LOGIN_MUTATION = gql`
# Increments a back-end counter and gets its resulting value
    mutation findUser($email: String, $password: String,) {
        findUser(input: {email: $email, password: $password}){
            token
        }
    }
`;

export const CREATE_ADMIN_MUTATION = gql`
# Increments a back-end counter and gets its resulting value
    mutation makeAdmin($name: String, $email: String, $password: String, $role: String) {
        makeAdmin(input: {name: $name, email: $email, password: $password, role: $role}){
            name
            email
            password
            role
            createdAt
            updatedAt
        }
    }
`;

export const ADD_WORKS_MUTATION = gql`
# Increments a back-end counter and gets its resulting value
    mutation AddWorks($title: String, $description: String, $category: String, $file: Upload) {
        addWorks(input: {title: $title, description: $description, category: $category, file: $file}){
            _id
            title
            description
            category
            file
            createdAt
            updatedAt
        }
    }
`;