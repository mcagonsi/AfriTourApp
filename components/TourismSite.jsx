
import styled from 'styled-components/native';
import {Text } from 'react-native';
import { Image } from "expo-image";


const Card = styled.View`
    background-color: #FFFFFF;
    border-radius: 8px;
    padding: 20px;
    margin: 10px;
    justify-content:left;
    box-shadow: 0 5px 4px rgba(0,0,0,0.5);
`;

export default function TourismSite({ touristSite }) {
  return (
    <Card>
      <Image
        source={{ uri: touristSite.picture }}
        style={{ width: '100%', height: 200, borderRadius: 10 }}
        contentFit="cover"
      />
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{touristSite.name}</Text>
      <Text style={{ fontSize: 16, color: '#555' }}>{touristSite.location}</Text>
      <Text >{touristSite.description}</Text>
      <Text style={{color:'red'}}>No. of visits: {touristSite.visitations}</Text>
      <Text style={{color:'blue'}}>Rating: {touristSite.rating}</Text>
    </Card>
  );
}