var React = require('react');

// stateless component
var WeatherMessage = ({temp, location}) => {
  return (
    <h3>It's {temp} in {location}.</h3>
  )
};

module.exports = WeatherMessage;
