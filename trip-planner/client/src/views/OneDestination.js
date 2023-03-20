import { useParams } from 'react-router-dom';

export const OneDestination = (props) => {
  // url route param matching `:id`.
  const { id } = useParams();

  return <h2>OneDestination</h2>;
};
