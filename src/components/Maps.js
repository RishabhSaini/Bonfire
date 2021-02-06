import React, { useEffect, useState } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

const Maps = () => {
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
      });
  };

  const [selected, setSelected] = useState({});

  const onSelect = (item) => {
    setSelected(item);
  };

  const mapStyles = {
    height: "100vh",
    width: "200vh",
  };

  const defaultCenter = {
    lat: 0,
    lng: 23.821603,
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
      <GoogleMap mapContainerStyle={mapStyles} zoom={4} center={defaultCenter}>
        {locations.map((item) => {
          return (
            <Marker
              key={item.name}
              position={item.location}
              onClick={() => onSelect(item)}
            />
          );
        })}
        {selected.location && (
          <InfoWindow
            position={selected.location}
            clickable={true}
            onCloseClick={() => setSelected({})}
          >
            <p>{selected.name}</p>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default Maps;
