const Found = ({ country, showCountry }) => {
  if (country === null) {
    return null;
  }

  return (
    <>
      <div>
        {country} <button onClick={showCountry} >Show</button>
      </div>
    </>
  );
};

export default Found;
