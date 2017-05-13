var React = require('react');

// stateless component
var About = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>This is weather application, built on React.</p>
      <p>Here are some of the tools I used:</p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> - This was the JS framework used
        </li>
        <li>
          <a href="http://openweathermap.org">Open weather map</a> - I used open weather app to search the location
        </li>
      </ul>
    </div>
  )
}

module.exports = About;
