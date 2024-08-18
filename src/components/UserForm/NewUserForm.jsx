import './NewUserForm.css';
import { useState } from "react";
import useUserQueue from "../../hooks/useUserQueue";
import { actionTypes } from "../../reducers/actionTypes";

const NewUserForm = () => {
  const { dispatch } = useUserQueue();
  const { state } = useUserQueue();
  const [userName, setUserName] = useState('');
  const [error, setError] = useState(null);

  const handleAddUser = () => {
    const userNameNormalized = userName.trim();
    const isValid = validateUserName(userNameNormalized);
    if (isValid) {
      dispatch({ type: actionTypes.ADD_USER, payload: userNameNormalized });
      handleClearForm()
    }
  };

  const handleClearForm = () => {
    setUserName('');
    setError(null);
  };

  const validateUserName = (value) => {
    if (value.length < 3) {
      setError('User name must be at least 3 characters long');
      return
    }

    if (state.usersQueue.includes(value)) {
      setError('User already exists in the queue');
      return
    }
    return true
  }

  return (
    <article className="user-form">
      <button onClick={handleAddUser} disabled={!userName.trim()}>
        New User
      </button>
      <input
        className="user-form__input"
        required
        type="text"
        value={userName}
        placeholder="User name"
        onChange={(e) => setUserName(e.target.value)}
        onKeyDown={(e) => { if (e.key === "Enter" && userName) handleAddUser() }}
      />
      {error && <p className="error">{error}</p>}
    </article>
  );
}

export default NewUserForm