import React, { useEffect, useState } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import Popup from "./Popup"
import MapAppBar from "./MapsAppBar";


const Maps = () => {
  const [selected, setSelected] = useState({});
  const [data, setData] = useState([]);

  useEffect(() => doRequest(), []);

  const doRequest = () => {
    let opts = {
      response: "ok",
    };
    fetch("/getData", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(opts),
    })
      .then((r) => {
        return r.json();
      })
      .then((resp) => {
        console.log(resp.result);
        setData(resp.result);
      });
  };

  const onSelect = (item) => {
    setSelected(item);
    console.log(selected)
  };

  const mapStyles = {
    height: "864px",
    width: "1536px",
  };

  const defaultCenter = {
    lat: 2.7832,
    lng: 28.5085,
  };

  const locations = [
    {
      name: "Location 1",
      location: {
        lat: 10.3954,
        lng: 20.162,
      },
    },
    {
      name: "Location 2",
      location: {
        lat: 20.3917,
        lng: 10.1649,
      },
    },
    {
      name: "Location 3",
      location: {
        lat: 30.3773,
        lng: 20.1585,
      },
    },
    {
      name: "Location 4",
      location: {
        lat: 20.3797,
        lng: 30.1682,
      },
    },
    {
      name: "Location 5",
      location: {
        lat: 5.4055,
        lng: 20.1915,
      },
    },
  ];

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY}>
    <MapAppBar></MapAppBar>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={3.3}
        center={defaultCenter}
      >
        {data.length && data.map((person) => {
          return (
            <Marker
              key={person.name}
              position={person.Position}
              onClick={() => onSelect(person)}
            />
          );
        })}
        {selected.Position &&(
              <InfoWindow
                position={selected.Position}
                clickable={true}
                onCloseClick={() => setSelected({})}
              >
                {<Popup data={selected}/>}
              </InfoWindow>
            )};
      </GoogleMap>
    </LoadScript>
  );
};

export default Maps;
