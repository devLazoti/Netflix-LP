import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import './main.css'

export const Main = () => {
  return (
    <main>
        <div className='main-introduction'>
          <h1 className='introduction-title'>Filmes, séries e muito mais, sem limites</h1>
          <p className='introduction-description'>Assista onde quiser. Cancele quando quiser.</p>
        </div>
        <div className='main-subscribe'>
          <h3 className='subscribe-title'>Tudo pronto para assistir? Informe seu email ou número de celular para criar ou reiniciar sua <br/> assinatura.</h3>
          <div className='subscribe-form'>
            <input type="text" placeholder='Email ou número de celular' />
            <button type="submit">Vamos lá <IoIosArrowForward /></button>
          </div>
        </div>
    </main>
  )
}
