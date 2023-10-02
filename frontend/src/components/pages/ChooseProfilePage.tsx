import User from "../../types/user";
import axios from "axios";

export async function loader({ params }) {
  const user = await getUser(params.userId);
  return { user };
}

async function getUser(id: number): Promise<User> {
  const response = await axios.get(`http://localhost:3000/user/${id}`);
  return response.data[0] as User;
}

function ChooseProfilePage() {
  return (
    <div>
      <header className="header">
        <div className="header__logo">
          <a href="./Welcome.tsx">
            <img src="./assets/NUTFLUX.png" />
          </a>
        </div>
      </header>

      <div className="profile">
        <h1 className="profile__title">Who's watching?</h1>

        <div className="profile__card">
          <div className="profile__user">
            <img className="profile__img" src="./assets/avatars/ballow.png" />
          </div>
          <p>1</p>
        </div>

        <div className="profile__card">
          <div className="profile__user">
            <img className="profile__img" src="./assets/avatars/barog.png" />
          </div>
          <p>2</p>
        </div>

        <div className="profile__card">
          <div className="profile__user">
            <img className="profile__img" src="./assets/avatars/unilloon.png" />
          </div>
          <p>3</p>
        </div>

        <div className="profile__card">
          <div className="profile__user">
            <img className="profile__img" src="./assets/avatars/ballox.png" />
          </div>
          <p>4</p>
        </div>

        <div className="profile__button">
          <button>Manage Profiles</button>
        </div>
      </div>
    </div>
  );
}

export default ChooseProfilePage;
