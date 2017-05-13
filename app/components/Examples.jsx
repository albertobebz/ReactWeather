var React = require('react');
var { Link } = require('react-router');

// stateless component
var Examples = (props) => {
  return (
    <div>
      <h1 className="text-center">Examples</h1>
      <p>Here a few example location to try out:</p>
      <ol>
        <li>
          <Link to="/?location=London">London, UK</Link>
        </li>
        <li>
          <Link to="/?location=Rio">Rio, Brazil</Link>
        </li>
      </ol>
    </div>
  )
};

module.exports = Examples;
