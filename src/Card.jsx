export default function Card() {
  return (
    <div className="card--container">
      <div>
        <img
          className="img--container"
          src="https://source.unsplash.com/WLxQvbMyfas"
          alt=""
        />{" "}
      </div>
      <div className="details--container">
        <div>
          pindrop logo Japan <a>View on Google Maps</a>
        </div>
        <strong>12 Jan, 2021 - 24 Jan, 2021</strong>
        <p>
          Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters
          (12,380 feet). Mount Fuji is the single most popular tourist site in
          Japan, for both Japanese and foreign tourists.
        </p>
      </div>
    </div>
  );
}
