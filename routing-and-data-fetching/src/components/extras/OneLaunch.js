export default function OneLaunch(props) {
  const { launch } = props;

  if (!launch) {
    // Render nothing.
    return null;
  }

  const { name, details, links } = launch;

  return (
    <div>
      <div className="p-5 mb-3">
        <h2 className="text-3xl text-center font-bold mb-3">{name}</h2>
        <p>{details}</p>
      </div>

      {links.flickr.original.map((url) => {
        return <img src={url} className="w-full" alt="Launch" />;
      })}
    </div>
  );
}
