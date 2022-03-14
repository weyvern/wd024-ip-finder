import { useState, useEffect } from 'react';
import { Map, Marker } from 'pigeon-maps';
import axios from 'axios';
import Layout from './components/Layout';
import Loading from './components/Loading';
import InfoCard from './components/InfoCard';
import './App.css';

const App = () => {
  const [IP, setIP] = useState(null);
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const {
          data: { ip, location }
        } = await axios.get(
          `https://geo.ipify.org/api/v1?apiKey=${process.env.REACT_APP_IPIFY_API_KEY}`
        );
        setIP(ip);
        setLocation(location);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    })();
  }, []);

  if (loading) return <Loading />;
  return (
    <Layout>
      {IP && location ? (
        <Map
          defaultCenter={[location.lat, location.lng]}
          defaultZoom={11}
          boxClassname='map-filter'
        >
          <InfoCard ip={IP} location={location} />
          <Marker width={50} anchor={[location.lat, location.lng]} />
        </Map>
      ) : (
        'No IP for you'
      )}
    </Layout>
  );
};

export default App;
