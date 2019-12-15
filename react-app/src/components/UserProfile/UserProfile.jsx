import React, {useEffect, useMemo, useState} from "react";
import './UserProfile.scss';
import * as avatar from './avatar.jpg';
import Post from "../Post/Post";
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

const UserProfile = () => {

    const currentUser = useMemo(() => JSON.parse(localStorage.getItem('currentUser')), []);

    useEffect(() => {
        let allPosts = JSON.parse(localStorage.getItem('posts') || '[]');
        const userPosts = allPosts.find(postData => postData.user === currentUser.email);
        allPosts = allPosts.filter(postData => postData.user !== currentUser.email);
        setPosts(userPosts ? userPosts.posts : []);
    }, [currentUser.email]);

    const [posts, setPosts] = useState([]);

    const [postText, setPostText] = useState('');
    const [postTitle, setPostTitle] = useState('');

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setPostText('');
        setPostTitle('');
        setOpen(false);
    };

    const removePost = (id) => {
        setPosts(posts.filter(post => post.id !== id));
        let allPosts = JSON.parse(localStorage.getItem('posts') || '[]');
        allPosts = allPosts.filter(postData => postData.user !== currentUser.email);
        allPosts.push({
            user: currentUser.email,
            posts: posts.filter(post => post.id !== id)
        });
        localStorage.setItem('posts', JSON.stringify(allPosts));
    };

    const addPost = (id) => {
        setPosts([...posts, {
            id: posts.length,
            title: postTitle,
            description: postText
        }]);
        let allPosts = JSON.parse(localStorage.getItem('posts') || '[]');
        allPosts = allPosts.filter(postData => postData.user !== currentUser.email);
        allPosts.push({
            user: currentUser.email,
            posts: [
                ...posts, {
                    id: posts.length,
                    title: postTitle,
                    description: postText
                }
            ]
        });
        localStorage.setItem('posts', JSON.stringify(allPosts));
        handleClose();
    };

    return (
        <div className="user-profile-wrapper">
            <div className="user-data-wrapper">
                <div className="avatar-icon">
                    <img src={avatar} alt=""/>
                </div>
                <div className="user-data">
                    <div className="description">
                        <p>First Name:</p>
                        <p>Last Name:</p>
                        <p>Email:</p>
                    </div>
                    <div className="value">
                        <p>{currentUser.firstName}</p>
                        <p>{currentUser.lastName}</p>
                        <p>{currentUser.email}</p>
                    </div>
                </div>
            </div>
            <div className="user-posts-wrapper">
                {
                    posts.length
                        ? posts.map(post => <Post postData={post} key={post.id}
                                                  removePost={() => removePost(post.id)}/>)
                        : <p className="no-items">No posts</p>
                }

                <AddIcon className="add-icon" onClick={handleClickOpen}/>
                <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Add new post</DialogTitle>
                    <DialogContent>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Title"
                            fullWidth
                            required
                            value={postTitle}
                            onChange={(e) => setPostTitle(e.target.value)}
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Post"
                            fullWidth
                            required
                            value={postText}
                            onChange={(e) => setPostText(e.target.value)}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={addPost} disabled={!postTitle || !postText} color="primary">
                            Add post
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        </div>
    )
};

export default UserProfile;
