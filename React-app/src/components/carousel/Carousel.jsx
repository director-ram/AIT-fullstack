import './Carousel.css'

export default function Carousel(){
    return (
        <>
        <div id="carouselExampleRide" className="carousel slide" data-bs-ride="true">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://images.pexels.com/photos/31959085/pexels-photo-31959085.jpeg?auto=compress&dpr=2&w=400&h=250&fit=crop&crop=focalpoint" className="d-block img"  height={30} alt="FirstImage"/>
    </div>
    <div className="carousel-item">
      <img src="https://images.pexels.com/photos/4719338/pexels-photo-4719338.jpeg?auto=compress&dpr=2&w=400&h=250&fit=crop&crop=focalpoint" className="d-block img" height={30} alt="SecondImage"/>
    </div>
    <div className="carousel-item">
      <img src="https://images.pexels.com/photos/38447074/pexels-photo-38447074.jpeg?auto=compress&dpr=2&w=400&h=250&fit=crop&crop=focalpoint" className="d-block img" height={30} alt="ThirdImage"/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </>
    )
}