/**
 * Display the current form data.
 * @param {Object} props
 * @property {string} props.category
 * @property {string} props.front
 * @property {string} props.back
 */
const FormResults = (props) => {
  return (
    <fieldset
      style={{ padding: "5px", border: "1px solid green", textAlign: "center" }}
    >
      <legend>FormResult.js</legend>
      <p>{props.category}</p>
      <p>{props.front}</p>
      <p>{props.back}</p>
    </fieldset>
  );
};

export default FormResults;
