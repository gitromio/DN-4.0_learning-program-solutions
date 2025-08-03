import React from 'react';

const OfficeList = () => {
  const offices = [
    {
      name: 'SpaceHub',
      rent: 50000,
      address: 'Koramangala, Bangalore',
      image: 'https://northshoregroup.com.au/wp-content/uploads/2018/11/25-Savage-Street-Pinkenba-1Web.jpg'
    },
    {
      name: 'TechTower',
      rent: 65000,
      address: 'Hitech City, Hyderabad',
      image: 'https://images.squarespace-cdn.com/content/v1/5cbf44b101232c7b9bfb3a32/1560357296444-7ZG2UFGRAGGOGKREJHA4/OV+5.jpg?format=1500w'
    },
    {
      name: 'InnoSpace',
      rent: 45000,
      address: 'Baner, Pune',
      image: 'https://content.instantoffices.com/sc/Prod/images/centres/1600width/119773/119773-812296.jpg'
      
    
    }
  ];

  return (
    <div>
      <h2>Available Office Spaces</h2>
      {offices.map((office, index) => (
        <div key={index} style={{
          border: '1px solid #ccc',
          margin: '10px',
          padding: '10px',
          borderRadius: '8px'
        }}>
          <h3>{office.name}</h3>
          <img src={office.image} alt={office.name} style={{width: '200px', height: '100px'}} />
          <p><strong>Address:</strong> {office.address}</p>
          <p style={{ color: office.rent < 60000 ? 'red' : 'green' }}>
            <strong>Rent:</strong> ₹{office.rent}
          </p>
        </div>
      ))}
    </div>
  );
};

export default OfficeList;
