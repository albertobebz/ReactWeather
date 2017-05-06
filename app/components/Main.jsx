var React = require('react');
var Nav = require('Nav');

// stateless component, we pass props as argument
var Main = (props) => {
  return (
    <div>
        <Nav/>
        <h2>Main Component</h2>
        {props.children}
    </div>
  );
}

module.exports = Main;
