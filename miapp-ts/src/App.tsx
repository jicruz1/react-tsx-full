import noticias from './data/noticias.json'
import Noticia from './components/Noticia'


import { useState } from 'react'
import ClickCounterButton from './components/ClickCounterButton'

import React, { Component } from 'react'
import Acordeon from './components/Acordeon';

const App = () => {
  return (
    <div>
      <Acordeon titulo="Una lista de productos">
         <ul>
           <li>Albahaca</li>
           <li>Queso parmesano</li>
           <li>Pechuga de pollo</li>
           <li>Tomates</li>
         </ul>
      </Acordeon>
      <Acordeon titulo="Librería JS" cerrado={false}>
         <div>
           <h4>¿Que es React?</h4>
           <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/330px-React-icon.svg.png" alt="Logo de
React"/>

           <p>React es una librería de JS que permite pintar interfaces de usuario...</p>
         </div>
      </Acordeon>
    </div>
  )
}

export default App