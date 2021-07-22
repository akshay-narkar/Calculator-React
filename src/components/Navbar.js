import { Link } from 'react-router-dom';

export default function Navbar() {
  const styling = {
    textDecoration: 'none',
    color: 'black',
    display: 'inline',
  };

  const spancolor = {
    color: 'white',
    fontSize: 25,

  };

  return (

    <header>
      <nav>
        <Link style={styling} to="/">
          <h4 className="headername">
            Math Magicians
          </h4>
        </Link>
        <ul className="ulnav">
          <li style={styling}>
            <Link className="textinlink" to="/">
              Home
            </Link>

            <span style={spancolor}> | </span>
          </li>
          <li style={styling}>
            <Link className="textinlink" to="/app">
              Calculator
            </Link>

            <span style={spancolor}> | </span>
          </li>
          <li style={styling}>
            <Link className="textinlink" to="/quote">Quote</Link>

          </li>
        </ul>

      </nav>
    </header>

  );
}
