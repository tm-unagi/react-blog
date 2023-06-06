import React, { useEffect } from 'react';
import { auth, db } from '../firebase';
import { deleteDoc, doc } from 'firebase/firestore';
import { useNavigate, useLocation } from 'react-router-dom';
import './common/common.css';

const ConfirmDelete = ({ isAuth }) => {
  const location = useLocation();
  const { post } = location.state;
  const navigate = useNavigate();

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, 'posts', id));
    navigate('/');
  };

  useEffect(() => {
    if (!isAuth) {
      navigate('/');
    }
  });

  return (
    <div className="createPostPage">
      <div className="postContainer">
        <h1>削除確認</h1>
        <h3>削除しますがよろしいですか？</h3>
        <div className="nameAndDeleteButton">
          <div>{post.author.id === auth.currentUser?.uid && <button onClick={() => handleDelete(post.id)}>削除</button>}</div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDelete;
