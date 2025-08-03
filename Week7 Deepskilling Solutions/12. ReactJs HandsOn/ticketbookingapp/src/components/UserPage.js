import React from 'react';

const UserPage = () => {
  return (
    <div>
      <h2>Welcome User!</h2>
      <h3>Book Your Ticket</h3>
      <form>
        <label>
          Name: <input type="text" required />
        </label><br /><br />
        <label>
          Flight: 
          <select>
            <option>IndiGo</option>
            <option>Air India</option>
            <option>SpiceJet</option>
          </select>
        </label><br /><br />
        <button type="submit">Book</button>
      </form>
    </div>
  );
};

export default UserPage;
