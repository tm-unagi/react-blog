import React, { useState } from 'react';
import ReactModal from 'react-modal';
import google_signin_image_normal from '../assets/btn_google_signin_dark_normal_web@2x.png';
import google_signin_image_pressed from '../assets/btn_google_signin_dark_pressed_web@2x.png';
import './common/button.css';
import { faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../firebase';

ReactModal.setAppElement('#root');

const LoginModal = ({ setIsAuth }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const navigate = useNavigate();
  const handleGoogleSignIn = () => {
    //Googleでログイン
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem('isAuth', true);
      setIsAuth(true);
      navigate('/');
    });
  };
  let btnImageUrl = google_signin_image_normal;
  if (isClicked) {
    btnImageUrl = google_signin_image_pressed;
  } else if (isHovered) {
    btnImageUrl = google_signin_image_pressed;
  }

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '40vh',
      height: '25vh',
      background: '#fff',
      border: '1px solid #ccc',
      padding: '20px',
      overflow: 'auto',
      textAlign: 'center',
    },
  };

  return (
    <div>
      <button onClick={openModal}>
        <FontAwesomeIcon icon={faArrowRightToBracket} />
        ログイン
      </button>
      <ReactModal isOpen={showModal} onRequestClose={closeModal} contentLabel="確認画面" style={customStyles}>
        <h1>Login</h1>
        <div className="button-container">
          <button
            className="image-button"
            style={{ backgroundImage: `url(${btnImageUrl})` }}
            onClick={handleGoogleSignIn}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onMouseDown={() => setIsClicked(true)}
            onMouseUp={() => setIsClicked(false)}
          />
          <button onClick={closeModal} className="cancel-button">
            キャンセル
          </button>
        </div>
      </ReactModal>
    </div>
  );
};

export default LoginModal;
