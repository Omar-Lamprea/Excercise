import { createContext, useReducer } from "react";
import { initialState, userQueueReducer } from "../reducers/UserQueueReducer";
import PropTypes from 'prop-types';

export const UserQueueContext = createContext();

const UserQueueProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userQueueReducer, initialState);

  return (
    <UserQueueContext.Provider value={{ state, dispatch }}>
      {children}
    </UserQueueContext.Provider>
  );
}

UserQueueProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserQueueProvider;