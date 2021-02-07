import React, { useEffect, useState } from "react";
import {
  GoogleMap,
  LoadScript,
  MarkerClusterer,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

const Maps = () => {
  let location_ = "";
  const [data, setData] = useState([]);
  const [mapRef, setMapRef] = useState(null);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [markerMap, setMarkerMap] = useState({});
  const [infoOpen, setInfoOpen] = useState(false);

  const loadHandler = (map) => {
    // Store a reference to the google map instance in state
    setMapRef(map);
  };

  // We have to create a mapping of our places to actual Marker objects
  const markerLoadHandler = (marker, place) => {
    return setMarkerMap((prevState) => {
      return { ...prevState, [place.id]: marker };
    });
  };

  const markerClickHandler = (event, place) => {
    // Remember which place was clicked
    setSelectedPlace(place);

    // Required so clicking a 2nd marker works as expected
    if (infoOpen) {
      setInfoOpen(false);
    }

    setInfoOpen(true);

    // if you want to center the selected Marker
    //setCenter(place.pos)
  };

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

  // const onSelect = (item) => {
  //   setSelected(item);
  // };

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
        {data.length &&
          data.map((person) => (
            <Marker
              key={person.Name}
              position={locationgenerator()}
              onLoad={(marker) => markerLoadHandler(marker, location_)}
              onClick={(event) => markerClickHandler(event, location_)}
            />
          ))}
        {infoOpen && selectedPlace && (
          <InfoWindow
            position={location_}
            clickable={true}
            onCloseClick={() => setInfoOpen(false)}
          >
            <p>Hi</p>
          </InfoWindow>
        )}
        ;
      </GoogleMap>
    </LoadScript>
  );
};

export default Maps;
