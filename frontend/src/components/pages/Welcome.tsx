
export default function Welcome() {
  return (
    <div className='welcome'>
          <div className="intro">
            <h1>Unlimited movies, TV shows and more.</h1>
            <h5>
              Ready to watch? Enter your email to create an account.
            </h5>
          </div>
          <div className='email-form'>
          <input
              type="email"
              placeholder="Email address"
              name="email"
            
            />
          </div>
    </div>

)
}