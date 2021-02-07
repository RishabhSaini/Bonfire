import React, { useEffect, useState } from "react";
import {
  GoogleMap,
  LoadScript,
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
              onLoad={(marker) => {
                const customIcon = (opts) =>
                  Object.assign(
                    {
                      path:
                        "M7.8,1.3L7.8,1.3C6-0.4,3.1-0.4,1.3,1.3c-1.8,1.7-1.8,4.6-0.1,6.3c0,0,0,0,0.1,0.1 l3.2,3.2l3.2-3.2C9.6,6,9.6,3.2,7.8,1.3C7.9,1.4,7.9,1.4,7.8,1.3z M4.6,5.8c-0.7,0-1.3-0.6-1.3-1.4c0-0.7,0.6-1.3,1.4-1.3 c0.7,0,1.3,0.6,1.3,1.3 C5.9,5.3,5.3,5.9,4.6,5.8z",
                      fillColor: "#f00",
                      fillOpacity: 1,
                      strokeColor: "#000",
                      strokeWeight: 1,
                      scale: 3.5,
                    },
                    opts
                  );

                marker.setIcon(
                  customIcon({
                    fillColor: "green",
                    strokeColor: "white",
                  })
                );
                return markerLoadHandler(marker, location_);
              }}
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
