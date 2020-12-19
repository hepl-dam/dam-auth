import React, {useEffect, useState, createContext} from 'react'
import firebase from './firebaseConfig'

// On crée un contexte que l'on stocke dans une variable
export const AuthContext = createContext();

// On crée une fonction pour stocker et rendre disponible le contexte
export const AuthProvider = (props) => {
    
    // On stocke l'utilisateur (l'objet renvoyé par FireBase)
    const [currentUser, setCurrentUser] = useState()

    // on écoute les changements de statut pour mettre à jour le state
    useEffect(() => {
        firebase.auth().onAuthStateChanged(setCurrentUser);
    }, [])
    // on retourne le Context que l'on rend disponible pour les enfants qu'il contiendra lorsqu'il sera utilisé
    return(
        <AuthContext.Provider value={[currentUser, setCurrentUser]}>
            {props.children}
        </AuthContext.Provider>
    )
}