export const CardFooter = ({ style, children, ...props }) => (
  <footer {...props} style={{ borderTop: '1px solid lightgray', ...style }}>
    <div style={{ padding: '2rem' }}>{children}</div>
  </footer>
);
