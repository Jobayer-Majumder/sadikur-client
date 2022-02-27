import { gql } from '@apollo/client';


export const GET_USERS = gql`
    query {
        users{
            name 
            email
            role
            createdAt
        }
    }
`;

export const GET_WORKS_BY_CATEGORY = gql`
    query WorksByCategory($bred: String!){
        worksByCategory(category: $bred){
            title
            description
            category
            file
        }
    }
`;

export const GET_WORKS = gql`
    query {
        works{
            title
            description
            category
            file
        }
    }
`;

export const GET_REVIEWS = gql`
    query {
        reviews{
            _id
            name
            img
            company
            comment
            review
        }
    }
`;