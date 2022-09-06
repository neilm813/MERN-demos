export const CardTitle = ({ children, style, ...props }) => (
  <h3 style={{ marginTop: 0, ...style }} {...props}>
    {children}
  </h3>
);
