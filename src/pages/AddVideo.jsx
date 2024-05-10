import React from 'react'
import './AddVideo.css'
import { set } from 'lodash'
import QRCode from 'qrcode.react';
function AddVideo() {
  const[video, setVideo] = React.useState(null)
  const [afficher_qr_code, setAfficher_qr_code] = React.useState(false)
  const [qr_code, setQr_code] = React.useState('')
  const saveVideo = async () => {
   try {
    const formData = new FormData()
    formData.append('video', video)
   const respance = await fetch('http://localhost:4000/video/addVideo_from_admin', {
      method: 'POST',
      body: formData
    })
    const data = await respance.json()
    console.log(data)
    if(data.success) {
      setAfficher_qr_code(true)
      setQr_code(data.data.video_path)

  }
   } catch (error) {
    console.log(error)
    
   }
  }
  const  printQrCode = () => {
    window.print()
  }

  return (
    <div>
     <input type='file' 
      style={{display: 'none'}}
      id='fileInput'
      onChange={(e) => setVideo(e.target.files[0])}
      accept='video/*' />
     {video===null&& <label className='oijoijooij' htmlFor='fileInput'>Upload Video</label>}
      {
        video && !afficher_qr_code &&(
         <>
         <video 
         style={{display: 'block', width: '70%',maxHeight:'400px', margin: '20px auto'}}
         controls src={URL.createObjectURL(video)} />
          <div className='uihuhu'>
           <button className='noiiinooiji4555o'onClick={saveVideo}>Save Video</button> 
          <button className='noiiinooijio' onClick={() => setVideo(null)}>Remove Video</button>
          </div>
         </>
          

        )
      }
      {
        afficher_qr_code && (
          <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
           <div className='qr-code-container'> <QRCode value={qr_code} /></div>
           
            <div className='uihuhu'>
           <button className='noiiinooiji4555o'onClick={printQrCode}>Print QR code</button> 
          <button className='noiiinooijio' onClick={() => {setVideo(null);setAfficher_qr_code(false) }}>Add another video</button>
          </div>
          </div>
        )
      }


    </div>

  )
}

export default AddVideo