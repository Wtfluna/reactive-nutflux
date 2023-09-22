import '../../scss/pages/all-profiles.scss';

function ChooseProfile(){

    return(
      <div>
    <header>
        <div className="logo">
          <a href="./Welcome.tsx"><img src="./assets/NUTFLUX.png"/></a>
        </div>
      </header>
      
      <div className="list-profile">
        
         <h1 className="list-profile-title">Who's watching?</h1>
        
        <div className="card">
         <div className="profile"> 
             <img className="profile-img" src="./assets/avatars/ballow.png"/>
         </div>
         <p>1</p>
        </div>
        
        <div className="card">
         <div className="profile"> 
            <img className="profile-img" src="./assets/avatars/barog.png"/>
         </div>
         <p>2</p>
        </div>
        
        <div className="card">
         <div className="profile"> 
            <img className="profile-img" src="./assets/avatars/unilloon.png"/>
         </div>
         <p>3</p>
        </div>
        
        <div className="card">
         <div className="profile"> 
            <img className="profile-img" src="./assets/avatars/ballox.png"/>
         </div>
         <p>4</p>
        </div>
        
        
        
        <div className="profile-button">
          <button>Manage Profiles</button>
        </div>

      </div>
</div>
    )
}

export default ChooseProfile;