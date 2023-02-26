// import React from 'react'
import './dashboard.css'
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

export const ContactPage = () => {
  return (
    <>
        <div className='text-zone' id='contact'>
            <h1 className='text'>Contact Us</h1>
            <p className='text-size'>
                For more information about Med-ER, fill out the form below
            </p>
            <div className='contact-form'>
                <form action='' class-form>
                    <div className='form-input'>
                        <input type="text" name="name" placeholder="Name" required />
                        <br />
                        <input type="email" name="email" placeholder="Email" required />
                        <br />
                        <textarea name="message" placeholder="Message" required></textarea>
                    </div>
                    <div className='btn-submit'>    
                        <input type="submit" name="name" value="Submit" />
                    </div>
                    
                </form>
            </div>
        </div>

        {/* <div className="info-map">
            Adisa Barakat,
            <br />
            Lagos,
            <br />
            Ikeja <br />
            Lagos <br />
            <br />
            <span></span>
        </div>
        <div className="map-wrap">
            <MapContainer center={[44.96366, 19.61045]} zoom={13}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={[44.96366, 19.61045]}>
                <Popup>Sloba lives here, come over for a cup of coffee :)</Popup>
                </Marker>
            </MapContainer>
        </div> */}

    </>
  )
}



// export default Contact