import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import PlacesList from '../components/Places/PlacesList';
import { useIsFocused } from '@react-navigation/native';

function AllPlaces({route}) {
  const [loadPlaces, setLoadPlaces] = useState([])
  console.log(loadPlaces)
  const isFocused = useIsFocused()
  useEffect(() => {
    if(isFocused && route.params){
      setLoadPlaces(curPlaces => [...curPlaces, route.params.place])
    }
  }, [isFocused, route])
  return <PlacesList places={loadPlaces} />;
}

export default AllPlaces;

const styles = StyleSheet.create({});
