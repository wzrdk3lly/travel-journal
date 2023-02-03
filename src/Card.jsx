import pin from "./assets/Pin.png";
export default function Card(props) {
  return (
    <div className="card--container">
      <div>
        <img className="img--container" src={props.item.imageUrl} alt="" />
      </div>
      <div className="details--container">
        <div>
          <p>
            <img className="img--pin" src={pin} /> {props.item.location}{" "}
            <a className="a--link" href="https://goo.gl/maps/1DGM5WrWnATgkSNB8">
              View on Google Maps
            </a>
          </p>
        </div>
        <h3>{props.item.title}</h3>
        <strong>{`${props.item.startDate} - ${props.item.endDate}`}</strong>
        <p className="p--main">{props.item.description}</p>
      </div>
    </div>
  );
}

// id: 1,
// title: "Mount Fuji",
// location: "JAPAN",
// googleMapsUrl: "https://goo.gl/maps/1DGM5WrWnATgkSNB8",
// startDate: "12 Jan, 2021",
// endDate: "24 Jan, 2021",
// description:
//   "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
// imageUrl: "https://source.unsplash.com/WLxQvbMyfas",
// },
// {
