export const Address = (props) => {
  const { address, oneLine } = props;

  if (!address) {
    return null;
  }

  const { city, street, suite, zip } = address;

  if (oneLine) {
    return (
      <span>
        {suite} {street}, {city} {zip}
      </span>
    );
  }

  return (
    <div>
      <p>
        {suite} {street}
      </p>
      <p>
        {city} {zip}
      </p>
    </div>
  );
};
