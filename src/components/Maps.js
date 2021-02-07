import React, { useEffect, useState } from "react";
import {
  GoogleMap,
  LoadScript,
  MarkerClusterer,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

const Maps = () => {
  const [selected, setSelected] = useState("");
  const [data, setData] = useState([]);
  let location_ = "";

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
  };

  const mapStyles = {
    height: "100vh",
    width: "200vh",
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

  const locationgenerator = () => {
    let google_location = {
      lat: Math.random() * (+30.19334 - -30.68439978681 + 1) - 30.68439978681,
      lng: Math.random() * (+40.19334 - -0.82333736817 + 1) - 0.82333736817,
    };
    location_ = google_location;
    return google_location;
  };

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY}>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={3.3}
        center={defaultCenter}
      >
        <MarkerClusterer>
          {(clusterer) =>
            data.length &&
            data.map((person, index) => (
              <Marker
                key={person.Name}
                position={locationgenerator()}
                onClick={() => onSelect(person.Name)}
              >
                {selected && (
                  <InfoWindow
                    position={location_}
                    clickable={true}
                    onCloseClick={() => setSelected(null)}
                  >
                    <p>{selected.Name}</p>
                  </InfoWindow>
                )};
              </Marker>
            ))
          }
        </MarkerClusterer>
      </GoogleMap>
    </LoadScript>
  );
};

export default Maps;
