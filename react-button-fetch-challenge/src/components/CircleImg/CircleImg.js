export const CircleImg = ({ style, alt, ...props }) => (
  <img
    style={{
      borderRadius: '50%',
      boxShadow:
        'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px',
      ...style,
    }}
    alt={alt}
    {...props}
  />
);
