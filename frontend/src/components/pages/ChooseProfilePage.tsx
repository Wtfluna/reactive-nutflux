import { useLoaderData, useNavigate } from "react-router-dom";
import { authTokenKey, userIdKey } from "../../localStorage";
import User from "../../types/user";
import axios from "axios";

export async function loader() {
  const users = await getUsers();
  return users;
}

async function getUsers(): Promise<User[]> {
  const token = localStorage.getItem(authTokenKey);
  // TODO mettre dans .env (API_URL)
  const response = await axios.get(
    `http://localhost:3000/users/account/${token}`
  );
  return response.data as User[];
}

function ChooseProfilePage() {
  // State
  const users = useLoaderData() as User[];
  const navigate = useNavigate();
  // Behavior
  const showUserCreationForm = () => {};
  const chooseThisUser = (userId: number) => {
    localStorage.setItem(userIdKey, userId.toString());
    navigate("/home");
  };
  // Render
  return (
    <div className="profile">
      <h1 className="profile__title">Who's watching?</h1>

      {users.map((user) => (
        <div key={user.id} className="profile__card">
          <div className="profile__user">
            <a onClick={() => chooseThisUser(user.id)}>
              <img
                className="profile__img"
                src={`./assets/avatars/${user.avatar}`}
              />
            </a>
          </div>
          <p className="profile__username">{user.username}</p>
        </div>
      ))}

      <div className="profile__card">
        <div className="profile__user">
          <img className="profile__plus" src="./assets/avatars/plus.png" />
        </div>
        <p className="profile__username">New</p>
      </div>
      <div className="profile__button">
        <button>Manage Profiles</button>
      </div>
    </div>
  );
}

export default ChooseProfilePage;
