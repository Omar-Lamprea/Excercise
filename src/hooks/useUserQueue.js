import { useContext } from "react";
import { UserQueueContext } from "../context/UserQueueContext";

const useUserQueue = () => {
  const context = useContext(UserQueueContext);
  if (!context) {
    throw new Error('useUserQueue must be used within a UserQueueProvider');
  }
  return context;
}

export default useUserQueue;
