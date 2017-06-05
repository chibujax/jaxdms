import React, {PropTypes} from 'react';
import SignUp from './SignUp.js';
import SignIn from './SignIn.js';
/**
 * This represents the the signin/signup page
 * @param {function} toggleSignUp - function that toggles the 
 * signup and signin
 * @param {object} userActions - Object that represents the 
 * user actions
 * @param {object} stateProp - Object that represents the state
 * of the component.
 * @return {ReactElement} 
 */
const AuthContent = ({toggleSignUp, userActions, stateProp}) => {
  return (
    <div className='info-container'>
      <div className='form-container'>
        <SignUp
          userActions={userActions}
          stateProp={stateProp}
          toggleSignUp={toggleSignUp}/>
        <SignIn
          userActions={userActions}
          stateProp={stateProp}
          toggleSignUp={toggleSignUp}/>
      </div>
      <div className='login-side'>
            <div className="card">
              <div className="card-image">
                <img src={require('../images/auth.jpg')} />
                <span className="card-title">Jaxified</span>
              </div>
            </div>    
      </div>
    </div>
  );
};

AuthContent.propTypes = {
  userActions: PropTypes.object,
  stateProp: PropTypes.object,
  toggleSignUp: PropTypes.func
};

export default AuthContent;