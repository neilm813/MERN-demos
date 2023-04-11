import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function OneCrewView(props) {
  const { id } = useParams();

  const [crew, setCrew] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [fetchError, setFetchError] = useState('');

  useEffect(() => {
    setIsLoading(true);

    axios
      .get(`https://api.spacexdata.com/v4/crew/${id}`)
      .then((res) => {
        console.log(res.data);
        setCrew(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);

        // If the api responded and sent back a message in the data, use that, otherwise, use the axios error message.
        // The ?. is optional chaining, it let's you access keys that may not exist without causing an error.
        setFetchError(error?.response?.data?.message || error.message);
      });
  }, [id]);

  return (
    <div className="w-full bg-white dark:bg-gray-800 dark:border-gray-700 border border-gray-200 rounded-lg shadow mb-5">
      <div>
        <h2 className="text-center text-4xl font-extrabold mb-5 pt-5">Crew Details</h2>

        {isLoading && <p className="text-center my-3">Loading...</p>}
        {fetchError && <p className="text-red-500 bold text-center my-3">{fetchError}</p>}

        {crew !== null && (
          <div>
            <div className="p-5 mb-3">
              <h2 className="text-3xl text-center font-bold mb-3">{crew.name}</h2>
            </div>
            <img src={crew.image} className="w-full" alt="Crew Member" />
          </div>
        )}
      </div>
    </div>
  );
}
