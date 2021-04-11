import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import '../styles/components/Success.css';
import Map from '../components/Map'
import useGoogleAddress from '../hooks/useGoogleAddress';

const Success = () => {
  const { state: { buyer }} = useContext(AppContext)
  const address  = buyer ? buyer.address : "portales 3185"
  const location = useGoogleAddress(address)

  return  (
    <div className="Success">
      <div className="Success-content">
        <h2>{`${buyer.name} Gracias por tu compra`}</h2>

        <span>Tu pedido llegara en 3 dias a tu dirección:</span>
        <div className="Success-map">
          {`${buyer.address}`}
          {location && <Map location={location}/>}
        </div>
      </div>
    </div>
  );
}

export default Success;