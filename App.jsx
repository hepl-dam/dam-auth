import {Fragment, useContext} from 'react'
import {BrowserRouter, Route, Redirect} from 'react-router-dom'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Nav from './components/Nav'


import {AuthContext} from './AuthContext' 

function App() {
  const [currentUser] = useContext(AuthContext);
  
  return (
      <Fragment>
        <BrowserRouter>
          {
            currentUser
            ? 
              <Nav /> 
            && 
            <Redirect
            to={{
              pathname: "/",
            }}
          />
            :
              <Redirect
                to={{
                  pathname: "/login",
                }}
              />
          }
          <Route path="/" exact component={Home}/>
          <Route path="/login" component={LoginForm}/>
        </BrowserRouter>
      </Fragment>
  );
}

export default App;


/* 
  Référence de l'objet auth
  https://firebase.google.com/docs/reference/js/firebase.auth.Auth

  https://firebase.google.com/docs/auth/web/password-auth
  
  Objet retourné après authentification :
  https://firebase.google.com/docs/reference/js/firebase.User

  Créer un module qui automatise la privatisation des routes
  https://medium.com/@tomlarge/private-routes-with-react-router-dom-28e9f40c7146

  https://www.youtube.com/watch?v=unr4s3jd9qA
*/