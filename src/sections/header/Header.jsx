import { ReactComponent as Logo } from '../../assets/netflix.svg';
import './header.css'

import { HiOutlineLanguage } from "react-icons/hi2";
import { RiArrowDropDownFill } from "react-icons/ri";

export const Header = () => {

  return (
    <header>
        <Logo className='header-logo' />
        <div className='header-menu'>
            <div className='menu-languageSelect'>
                <HiOutlineLanguage className='languageIcon' />
                <select id="LanguageSelect">
                    <option value="por">Português</option>
                    <option value="eng">Inglês</option>
                </select>
                <RiArrowDropDownFill className='arrowIcon'/>
            </div>
            <a href="/" className='menu-button'>Entrar</a>
        </div>
    </header>
  )
}
