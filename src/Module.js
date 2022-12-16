import React,{useState} from 'react'
import ReactDom from 'react-dom'

const STYLES = {
    position: "fixed",
    top:"%50",
    left:"%50",
    transform: "translate(-50%,-50%)",
    backgroundColor: '#FFF',
    padding:"50px",
    zIndex:1000

}

const OVERAY_STYLES = {
    position: "fixed",
    top:0,
    left:0,
    right:0,
    bottom:0,
    transform: "translate(-50%,-50%)",
    backgroundColor: 'rgba(0, 0, 0, .7)',
    padding:"50px",
    zIndex:1000
}

const Module = ({PopUp,children}) => {
    if(!PopUp) return null

  return ReactDom.createPortal(
    <div style={OVERAY_STYLES}>
    <div className='module' style={STYLES}>

    {children}

    <div style={{display:"flex"}}>
    <button>member</button>
    <button>vendor</button>

    </div>

    </div>
    </div>,
    document.getElementById('portal')
  )
}

export default Module
