export default function Spinner(props) {
  const { isLoading = true, className = '', ...rest } = props;

  if (isLoading === false) {
    // Don't render anything. This makes it so you can pass in false to hide the spinner instead of always having to do
    // { condition && <Spinner /> }
    return null;
  }

  return (
    <div
      // Add any passed in classes at the end so they can override the defaults.
      className={`inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-blue-500 motion-reduce:animate-[spin_1.5s_linear_infinite] ${className}`}
      role="status"
      // Spread all the rest of the props passed in onto the root element of this component to have more control of it
      // such as adding any event handlers or any other props.
      {...rest}
    >
      <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
        Loading...
      </span>
    </div>
  );
}
