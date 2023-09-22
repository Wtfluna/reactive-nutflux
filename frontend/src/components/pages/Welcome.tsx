import '../../scss/pages/welcome.scss';

export default function Welcome() {

  return (
    <div className='welcome-banner'>
          <div className="intro">
            <h1 className='intro-h'>Unlimited movies, TV shows and much more.</h1>
            <p className='intro-p'>
              Ready to watch? Enter your email to create an account.
            </p>
            <div className='intro-form'>
          <input
              type="email"
              placeholder="Email address"
              name="email"
            />
            <button role='button' type="submit"><a href="./SignUp.tsx">Sign Up</a></button>
          </div>
          </div>
          
          <div className='screens'>
            <div>
              <h1 className='screens-h'>Watch everywhere</h1>
            <p className='screens-p'>Stream your favorite movies and TV shows <br /> on your phone, tablet, laptop, and TV.</p>
            </div>
            <div>
              <img className='screens-img' src="./assets/screens.png" alt="phone, pc and tablet screens" />
              </div>
          </div>
            
    </div>
    

)
}