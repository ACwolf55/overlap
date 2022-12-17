import React from 'react'
import ReactDom from 'react-dom'
import { useNavigate } from 'react-router-dom'

const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#FFF',
  padding: '50px',
  zIndex: 1000
}

const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, .7)',
  zIndex: 1000
}

export default function Modal({ open, children, onClose }) {
  const navigate = useNavigate()
  if (!open) return null

  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES}>
        <h2>Are you a member or vendor?</h2>
        <div style={{display:'flex'}}>
        <button onClick={()=>navigate('/Member-reg')}>Member</button>
        <button onClick={()=>navigate('/Vendor-reg')}>Vendor</button>


        </div>
        <button onClick={onClose} style={{marginTop:'15px'}}>Close</button>
       
      </div>
    </>,
    document.getElementById('portal')
  )
}

