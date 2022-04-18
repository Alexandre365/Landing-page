import { useState } from 'react'
import Li from './components/tag-list'
import Buttons from './components/Buttons'
import './Header.css'


export default () =>{

    const [togglmenu, setTogglmenu] = useState(false)
    const [screenWidth, setscreenWidth] = useState(window.innerWidth)
    
    const btn_menu = () =>{
        setTogglmenu(!togglmenu)
    }
    

    return <nav className='heade'>
        <div className='btn-menu'>
                <Buttons  onClick={btn_menu}><img src="./img/menu.png" alt="" /></Buttons>
        </div>
        
        {(togglmenu || screenWidth > 1140) && (
            <div className='container-menu'>
                <div className='Perfil'>
                    <div className='Perfil-foto'></div>
                </div>
                <div className='list'>
                    <ul>
                        <Li text='Preços' />
                        <Li text='Modelos' />
                        <Li text='Seguro' />
                        <Li text='Contato' />
                    </ul>
                </div>
                <div className='btns'>
                    <Buttons Width='100'>Conecta-se</Buttons>
                    <Buttons Color='violet' Width='100' Size='Px20'>Cadastra-se</Buttons>
                </div>
            </div>
        )}
    </nav>
}

