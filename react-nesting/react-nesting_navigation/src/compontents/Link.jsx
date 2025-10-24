export default function Link({ children, hrefLink }) {
  return (
    <a className="navigation__link" href={hrefLink}>
      {children}
    </a>
  );
}
