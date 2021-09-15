import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import Room from "@material-ui/icons/Room";
import Star from "@material-ui/icons/Star";
import { pinActions } from '../core/pin/actions';

export const MapBox = () => {
    const dispatch = useDispatch();
    const [viewport, setViewport] = useState({
        width: "100vw",
        height: "100vh",
        latitude: 46,
        longitude: 17,
        zoom: 4
    });

    const { pins } = useSelector(state => state)


    useEffect(() => {
        dispatch(pinActions.loadPins())
    }, []);

    return (
        <>
            <ReactMapGL
                {...viewport}
                mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
                onViewportChange={nextViewport => setViewport(nextViewport)}
                mapStyle="mapbox://styles/magali-dev/cktltp6bh0rfe17mjr1kdzp1f"
            >
                {
                   pins.data.length > 0 && pins.data.map(pin =>
                        <>
                            <Marker
                                latitude={pin.lat}
                                longitude={pin.long}
                                offsetLeft={-3.5 * viewport.zoom}
                                offsetTop={-7 * viewport.zoom}
                            >
                                <Room style={{ fontSize: viewport.zoom * 7, color: "slateblue" }} />
                            </Marker>
                            <Popup
                                latitude={pin.lat}
                                longitude={pin.long}
                                closeButton={true}
                                closeOnClick={false}
                                anchor="left"
                            >
                                <div className="card">
                                    <label>Place</label>
                                    <h4 className="place">{pin.title}</h4>
                                    <label>Review</label>
                                    <p className="desc">{pin.desc}</p>
                                    <label>Rating</label>
                                    <div className="stars">
                                        <Star className="star" />
                                        <Star className="star" />
                                        <Star className="star" />
                                        <Star className="star" />
                                        <Star className="star" />
                                    </div>
                                    <label>Information</label>
                                    <span className="username">Created by <b>{pin.username}</b></span>
                                    <span className="date">1 hour ago</span>
                                </div>
                            </Popup>
                        </>
                    )
                }
            </ReactMapGL>

        </>
    )
}
