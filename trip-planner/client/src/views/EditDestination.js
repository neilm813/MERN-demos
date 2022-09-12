import { useParams } from 'react-router-dom';

export const EditDestination = (props) => {
  // url route param matching `:id`.
  const { id } = useParams();
  return <h2>EditDestination - id: {id}</h2>;
};

export default EditDestination;
