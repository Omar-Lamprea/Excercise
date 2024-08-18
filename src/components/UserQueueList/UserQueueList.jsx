import useUserQueue from "../../hooks/useUserQueue";

const UserQueueList = () => {
  const { state } = useUserQueue();

  return (
    <article>
      {state.usersQueue.length > 0 ? (
        <ul>
          {state.usersQueue.map((user, index) => (
            <li key={index}>{user}</li>
          ))}
        </ul>
      ) : (
        <p>No users to attend</p>
      )}
    </article>
  );
}

export default UserQueueList