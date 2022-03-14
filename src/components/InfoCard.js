const InfoCard = ({ ip, location }) => {
  return (
    <div
      className='card'
      style={{
        position: 'absolute',
        top: '25%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
      }}
    >
      <div className='card-header text-center'>
        <h3>Your IP: {ip}</h3>
      </div>
      <img
        className='card-img-top'
        src={`https://flagcdn.com/192x144/${location.country.toLowerCase()}.png`}
        alt={location.country}
      />
      <div className='card-body'>
        <p className='card-text'>Country: {location.country}</p>
        <p className='card-text'>State: {location.region}</p>
        <p className='card-text'>City: {location.city}</p>
        <p className='card-text'>Time: {}</p>
      </div>
    </div>
  );
};

export default InfoCard;
