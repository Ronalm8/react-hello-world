
function Carrusel() {
  return (
    <div id="carouselExample" className="carousel slide">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="icons">
            <a href="https://x.com/?lang=es&mx=2" className="twitter">
              <i className="bi bi-twitter"></i>
            </a>
            <a href="https://es-la.facebook.com/login/device-based/regular/login/" className="facebook">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="https://www.instagram.com/?hl=es" className="instagram">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="https://github.com/" className="github">
              <i className="bi bi-github"></i>
            </a>
          </div>
          <img src="src/components/imagen.png" className="img" alt="..." />
        </div>
        <div className="carousel-item active">
          <div className="icons">
            <a href="https://es-la.facebook.com/login/device-based/regular/login/" className="facebook">
              <i className="bi bi-facebook"></i>
            </a>
          </div>
          <img src="src/components/radio.png" className="img"alt="..." />
        </div>
        <div className="carousel-item active">
          <img src="src/components/gol.png" className="img" alt="..." />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carrusel;
