export default function Counter(props) {
  // Props is a parameter that is an object of the passed-in data.
  const { title, imageUrl, startCount = 0 } = props;

  return (
    <div className="w-2/5 rounded-lg shadow mb-5 bg-white dark:bg-gray-800 border dark:border-gray-700 border-gray-200">
      {/* booleanCondition && 'return this if condition is truthy' */}
      {imageUrl && <img className="w-full rounded-t-lg" src={imageUrl} alt="counter" />}
      <div className="p-3">
        <h2 className="text-3xl text-center font-bold text-orange-400">{startCount}</h2>
        <h3 className="text-center text-2xl">{title}</h3>
      </div>
    </div>
  );
}
