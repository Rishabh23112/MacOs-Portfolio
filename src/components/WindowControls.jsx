import { useWindowStore } from '#store/window'
import React from 'react'

const WindowControls = ({target}) => {

    const {closeWindow}=useWindowStore()

  return (
    <div id='window-controls'>
        <div>
            <img className='close' src="/images/delete.png" alt="close" onClick={()=>closeWindow(target)}/>
        </div>
        <div>
            <img className='minimize' src="/images/minimize.png" alt="minimize" />
        </div>
        <div>
            <img className='maximize' src="/images/maximize-size.png" alt="maximize" />
        </div>

    </div>
  )
}

export default WindowControls