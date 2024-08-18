import { useEffect, useState } from "react";
import useUserQueue from "../../hooks/useUserQueue";
import { actionTypes } from "../../reducers/actionTypes";

const AttendUser = () => {
  const { dispatch, state } = useUserQueue();
  const [buttonText, setButtonText] = useState("Attend User");
  const [disabledButton, setDisabledButton] = useState(state.usersQueue.length === 0);
  const [temporarilyDisabled, setTemporarilyDisabled] = useState(false);

  const handleAttendUser = () => {
    if (state.usersQueue.length > 0) {
      setDisabledButton(true);
      setTemporarilyDisabled(true);
      setButtonText("Attending User...");

      dispatch({ type: actionTypes.ATTEND_USER });

      setTimeout(() => {
        setButtonText("Attend User");
        setTemporarilyDisabled(false);
      }, 1000);
    }
  };

  useEffect(() => {
    if (!temporarilyDisabled) setDisabledButton(state.usersQueue.length === 0);
  }, [state.usersQueue, temporarilyDisabled]);

  return (
    <button onClick={handleAttendUser} disabled={disabledButton}>
      {buttonText}
    </button>
  );
};

export default AttendUser;
