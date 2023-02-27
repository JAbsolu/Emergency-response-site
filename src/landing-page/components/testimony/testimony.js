import React from "react";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCol,
  MDBIcon,
  MDBTypography,
  MDBContainer,
  MDBRow,
} from "mdb-react-ui-kit";


const TestimonySlider = () => {
  return (
    <MDBContainer className="py-5" id="testimonials">
      <MDBCarousel showControls dark>
        <MDBCarouselInner>
          <MDBCarouselItem className="active">
            <h2 className="text-center testimonial-heading h2">Our Users<span className="text-red">Testimonies</span></h2>
            <MDBContainer>
              <MDBRow className="text-center">
              <MDBCol md="6" className="mb-5 mb-md-0  testimony-custom-css">
                  <div className="d-flex justify-content-center mb-4">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(6).webp"
                      className="rounded-circle shadow-1-strong"
                      width="150"
                      height="150"
                    />
                  </div>
                  <h5 className="mb-3">Anna Deynah</h5>
                  <p className="px-xl-3">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                      I had to use the app during a car accident and the response time was incredibly fast. 
                      The team contacted me within seconds and dispatched help immediately.
                    </p>
                </MDBCol>
                {/* <MDBCol lg="4" className="mb-5 mb-md-0 testimony-custom-css">
                  <div className="d-flex justify-content-center mb-4">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                      className="rounded-circle shadow-1-strong"
                      width="150"
                      height="150"
                    />
                  </div>
                  <h5 className="mb-3">Jessica D</h5>
                  <p className="px-xl-3">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    As a first responder, I highly recommend this app. 
                    The emergency button feature allows for quick and easy 
                    communication with dispatch.
                  </p>
                </MDBCol> */}
                <MDBCol md="6" className="d-none d-lg-block testimony-custom-css">
                  <div className="d-flex justify-content-center mb-4">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(7).webp"
                      className="rounded-circle shadow-1-strong"
                      width="150"
                      height="150"
                    />
                  </div>
                  <h5 className="mb-3">Maria Kate</h5>
                  <p className="px-xl-3">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    This app is a must-have for anyone with a medical condition. The medical alert feature provides 
                    instant access to your health information in an emergency.
                  </p>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBCarouselItem>
          <MDBCarouselItem>
          <h2 className="text-center testimonial-heading h2">Our Users<span className="text-red">Testimonies</span></h2>
            <MDBContainer>
              <MDBRow className="text-center">
                <MDBCol md="6" className="mb-5 mb-md-0 testimony-custom-css">
                  <div className="d-flex justify-content-center mb-4">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(3).webp"
                      className="rounded-circle shadow-1-strong"
                      width="150"
                      height="150"
                    />
                  </div>
                  <h5 className="mb-3">Alexander</h5>
                  <p className="px-xl-3">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    My elderly mother lives alone, and I worry about her health. 
                    This app's emergency contact feature gives me peace of mind that she can get help quickly if she needs it.</p>
                </MDBCol>
                <MDBCol md="6" className="d-none d-lg-block testimony-custom-css">
                  <div className="d-flex justify-content-center mb-4">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(4).webp"
                      className="rounded-circle shadow-1-strong"
                      width="150"
                      height="150"
                    />
                  </div>
                  <h5 className="mb-3">Alex Rey</h5>
                  <p className="px-xl-3">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    This app is a lifesaver! It helped me get immediate medical attention when I had a sudden heart attack.
                  </p>
                </MDBCol>
                {/* <MDBCol lg="4" className="d-none d-lg-block testimony-custom-css">
                  <div className="d-flex justify-content-center mb-4">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(5).webp"
                      className="rounded-circle shadow-1-strong"
                      width="150"
                      height="150"
                    />
                  </div>
                  <h5 className="mb-3">Maria Kate</h5>
                  <p className="px-xl-3">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    I had to call an ambulance for my son who was having an asthma attack. This app made the process so much faster and less stressful for me.
                  </p>
                </MDBCol> */}
              </MDBRow>
            </MDBContainer>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer> 
  );
}

export default TestimonySlider;