import React, {useState, Fragment, useContext} from 'react'
import firebase from '../firebaseConfig'
import {AuthContext} from '../AuthContext' 


  

export default function LoginForm() {

    const [currentUser, setCurrentUser] = useContext(AuthContext);

    const [user, setUser] = useState();
    const [pw, setPw] = useState();
    const [isLogged, setIsLogged] = useState();
 
  
  
    /* ------------------------------------------------------------------------ */
    /* ------------------ fonction déclandée au submit ------------------------ */
    /* -------------------------------------------------------------------------*/
    /* --- récupère les valeurs des champs et log (ou error) l'utilisateur avec */
    /* ------------------------------------------------------------------------ */
    const authListener = (e) => {
      e.preventDefault();
  
      // Méthode qui log l'utilisateur avec une addresse mail + mdp
      // Il existe +/- la même fonction qui crée un utilisateur -> doc plus bas
      firebase.auth().signInWithEmailAndPassword(user, pw)
      .then((user) => {
        // console.log('Log ok ' + user.email +' '+user.uid);
        setCurrentUser(user);
      })
      .catch((error) => {
        // on attrape l'erreur (code et message)
        let errorCode = error.code;
        let errorMessage = error.message;
        // on les log ou autre ...
        console.log(errorCode + ' et ' + errorMessage );
      });
    }
    
   
  
    return (
      <Fragment>
        <form>
          <p>
            <label htmlFor="userEmail">
              Email
            </label>
            <input type="email" name="email" id="userEmail" onChange={e => setUser(e.target.value)} />
          </p>
          <p>
            <label htmlFor="pw">
              Mot de passe
            </label>
            <input type="password" name="pw" id="pw"  onChange={e => setPw(e.target.value)}/>
          </p>
          <input type="submit" value="Connectez-vous" onClick={authListener}/>
        </form>
        {
          currentUser && <p>Vous êtes connecté</p>
        }
      </Fragment>
  
    );
}
  
