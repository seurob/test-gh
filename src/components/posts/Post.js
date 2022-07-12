import React from 'react';
import { useParams } from "react-router";
import { useFetch } from "./useFetch";

const Post = () => {
    let params = useParams();

    const { data, error, loading } = useFetch(
        "https://jsonplaceholder.typicode.com/posts/" + params.id
    );

    if (loading) {
        return <h1>Loading...</h1>;
    }
    if (error !== "") {
        return <h1>{error}</h1>;
    }

    return (
        <div class="container p-5 my-5 border">
            <ul class="list-group">
                <li class="list-group-item list-group-item-secondary">{data.id} - {data.title}</li>
                <li class="list-group-item">{data.body}</li>
            </ul>
        </div>
    );
};

export default Post;