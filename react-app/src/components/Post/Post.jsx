import React from "react";
import './Post.scss';
import DeleteIcon from '@material-ui/icons/Delete';

const Post = (props) => {

    const removePost = () => {
        props.removePost();
    };

    return (
        <div className="post-wrapper">
            <div className="post-header">
                <p className="title">{props.postData.title}</p>
                <DeleteIcon className="delete-icon" onClick={removePost}/>
            </div>
            <div className="post-body">
                {props.postData.description}
            </div>
        </div>
    )
};

export default Post;
