import Leaflet from "leaflet";

import mapMakerImg from "../images/map-marker.svg";

const mapIcon = Leaflet.icon({
  iconUrl: mapMakerImg,

  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [0, -60]
});

export default mapIcon;
