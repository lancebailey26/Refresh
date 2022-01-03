import React from 'react';
import PlaceList from '../components/PlaceList';
import {useParams} from 'react-router-dom';

const dummyPlaces = [{
    id:'p1',
    title: 'Empire State Building',
    description: 'One of the most famous buildings in the world',
    imageUrl:'https://marvel-b1-cdn.bc0a.com/f00000000179470/www.esbnyc.com/sites/default/files/styles/small_feature/public/2020-02/Green%20lights.jpg?itok=eesKOaKH',
    address: '20 W 34th Street, New York, NY 10001',
    location: {
        lat: 40.7484405,
        lng: -73.9878584
    },
    creatorId: 'u1'
},
{
    id:'p1',
    title: 'Empire State Building',
    description: 'One of the most famous buildings in the world part 2',
    imageUrl:'https://marvel-b1-cdn.bc0a.com/f00000000179470/www.esbnyc.com/sites/default/files/styles/small_feature/public/2020-02/Green%20lights.jpg?itok=eesKOaKH',
    address: '20 W 34th Street, New York, NY 10001',
    location: {
        lat: 40.7484405,
        lng: -73.9878584
    },
    creatorId: 'u2'
}]
const UserPlaces = () => {
    const userId = useParams().userId;
    const loadedPlaces = dummyPlaces.filter(place => place.creatorId === userId)
    return <PlaceList items={loadedPlaces} />
}

export default UserPlaces