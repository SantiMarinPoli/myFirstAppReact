import React from 'react';
import logoPoli from '../img/logo-poli.png';
import perfilImg from '../img/perfil.png';
import '../components/css/profile.style.css';

class ProfileComponent extends React.Component{
    render(){
        return(
            <div  className ='profile'>
                <div className='profile__header'>
                    <img className='profile__logo' src={logoPoli} alt='Logo Poli'></img>
                </div>

                <div className='profile__section-name'>
                    <img className='profile__avatar' src={perfilImg} alt='Avatar'></img>
                    <h1 className='profile__name'>Santiago Cortes Marin</h1>
                </div>

                <div className='profile__section-info'>
                    <h3>Tecnico de Sistemas </h3>
                    <spam>@SantiPoli</spam>
                </div>

                <div className='profile__footer'>
                    <p>#Poli Asambleas</p>
                </div>
            </div>
        );
    }
}

export default ProfileComponent;