import '../../scss/pages/chooseProfile.scss';

function ChooseProfile() {

  return (
    <div>
      <header>
        <div className="logo">
          <a href="./Welcome.tsx"><img src="./assets/NUTFLUX.png" /></a>
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
  )
}

export default ChooseProfile;