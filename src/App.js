import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { fetchUsersSuccess } from "./actions"; // импортируйте действие, которые вы создали для получения данных

export const App = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users); // доступ к данным пользователей через selector

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        dispatch(fetchUsersSuccess(response.data)); // отправляем действие со списком пользователей
      })
      .catch((error) => console.error(error));
  }, [dispatch]);

  return (
    <div className="users">
      {users.map((user) => (
        <div key={user.id}> /* Выводите данные пользователя */ </div>
      ))}
    </div>
  );
};

export default App;
