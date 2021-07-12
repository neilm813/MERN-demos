const Tab = (props) => {
  const classes = [];

  if (props.tab.selected) {
    classes.push("selected", "italics", "bold");
  }

  if (props.tab === props.tabs[props.tabs.length - 1]) {
    classes.push("warning");
  }

  return (
    <span
      className={classes.join(" ")}
      style={{
        border: "1px solid gray",
        padding: 10,
        marginRight: 10,
      }}
      onClick={(e) => {
        const updatedTabs = props.tabs.map((t) => {
          t.selected = t === props.tab ? true : false;
          return t;
        });

        props.setTabs(updatedTabs);
        props.tab.callback();
      }}
    >
      {props.tab.label}
    </span>
  );
};

export default Tab;
