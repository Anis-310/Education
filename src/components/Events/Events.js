import React from "react";
import card from "../../images/bg-card.png";
import "./Events.css";

const Events = () => {
  return (
    
    <section className="">

{/* ------------------------ */}

<div className="event-background container-fluid "></div>
<div className="container py-5 tab-box">
<nav>
  <div className="nav nav-tabs" id="nav-tab" role="tablist">
    <button className="nav-link active px-5 bg-primary tab-button " id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true"> <h3> <strong>Featured News</strong></h3> </button>
    <button className="nav-link bg-warning tab-button" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false"><h3> <strong>Upcomming Events</strong></h3></button>
    <button className="nav-link bg-info tab-button " id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false"> <h3> <strong>Achivements</strong> </h3></button>
  </div>
</nav>
<div className="tab-content" id="nav-tabContent">
  <div className="tab-pane fade show active bg-white" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
  <div className="container bg-primary">

  <div className="card-1">

    <div className="row">
      <div className="col-md-4">
        <div className="card-box">
        <img className="img-fluid" src={card} alt="" />
        <a href="#"><h4>This is Title</h4></a> 
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, laboriosam asperiores recusandae exercitationem minus facere.
        </p>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card-box">
          <img className="img-fluid" src={card} alt="" />
          <a href="#"><h4>This is Title</h4></a> 
          <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, laboriosam asperiores recusandae exercitationem minus facere.
          </p>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card-box">
          <img className="img-fluid" src={card} alt="" />
          <a href="#"><h4>This is Title</h4></a> 
          <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, laboriosam asperiores recusandae exercitationem minus facere.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
  </div>
  <div className="tab-pane fade bg-white" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
  {/* <div className="event-background container-fluid "></div> */}

<div className="container bg-warning">

  <div className="card-2">

    <div className="row">
      <div className="col-md-4">
        <div className="card-box">
        <img className="img-fluid" src={card} alt="" />
        <a href="#"><h4>This is Title</h4></a> 
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, laboriosam asperiores recusandae exercitationem minus facere.
        </p>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card-box">
          <img className="img-fluid" src={card} alt="" />
          <a href="#"><h4>This is Title</h4></a> 
          <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, laboriosam asperiores recusandae exercitationem minus facere.
          </p>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card-box">
          <img className="img-fluid" src={card} alt="" />
          <a href="#"><h4>This is Title</h4></a> 
          <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, laboriosam asperiores recusandae exercitationem minus facere.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
  </div>
  <div className="tab-pane fade bg-white" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
  <div className="container bg-info">

<div className="card-3">

  <div className="row">
    <div className="col-md-4">
      <div className="card-box">
      <img className="img-fluid" src={card} alt="" />
      <a href="#"><h4>This is Title</h4></a> 
      <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, laboriosam asperiores recusandae exercitationem minus facere.
      </p>
      </div>
    </div>

    <div className="col-md-4">
      <div className="card-box">
        <img className="img-fluid" src={card} alt="" />
        <a href="#"><h4>This is Title</h4></a> 
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, laboriosam asperiores recusandae exercitationem minus facere.
        </p>
      </div>
    </div>

    <div className="col-md-4">
      <div className="card-box">
        <img className="img-fluid" src={card} alt="" />
        <a href="#"><h4>This is Title</h4></a> 
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, laboriosam asperiores recusandae exercitationem minus facere.
        </p>
      </div>
    </div>
  </div>
</div>
</div>
  </div>
</div>
</div>




{/* --------------------------------- */}

      {/* <div>

        <div className="event-background container-fluid "></div>

        <div className="container">

          <div className="card">

            <div className="row">
              <div className="col-md-4">
                <div className="card-box">
                <img className="img-fluid" src={card} alt="" />
                <p>This is Title</p>
                <p>
                  This is Details of mentioned avobe title. This is Details of
                  mentioned avobe title.
                </p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card-box">
                  <img className="img-fluid" src={card} alt="" />
                  <p>This is Title</p>
                  <p>
                    This is Details of mentioned avobe title. This is Details of
                    mentioned avobe title.
                  </p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card-box">
                  <img className="img-fluid" src={card} alt="" />
                  <p>This is Title</p>
                  <p>
                    This is Details of mentioned avobe title. This is Details of
                    mentioned avobe title.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div> */}
    </section>
  );
};

export default Events;
