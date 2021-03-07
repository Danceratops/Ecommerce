import React from 'react';
import ReactDom from 'react-dom';

function HelloWorld () {
  var isHello = true;
  return (
    <div>
      <span>{isHello ? "hello" : "not hello"}</span>
      <Hello />
      <World />
      <Danielle />
      <Howdy name="danielle"/>
      <Hola name="danielle" />
      <Hallo fname="danielle" lname="reed"/>
    </div>
  );
}

function Hello () {
  const name = "world!";
  return(
    <span>Hello {name}</span>
  );
}

function World () {
  return (
    <span> World!</span>
  ); 
}

function Danielle () {
  const firstName = "Danielle";
  const lastName = "Reed";

  return (
    <Person age={72} name = {firstName + " " + lastName}/>
  )
}

const Person = props => <h1>{props.name + " " + props.age}</h1>

function Howdy(props) {
  return (
    <h1>Howdy, {props.name}</h1>
  );
}

const Hola = ({name}) => (
  <h1>Hola, {name}</h1>
);

const Hallo = ({fname, lname}) => (
  <h1>Hallo, {fname} {lname}</h1>
);

ReactDom.render(<HelloWorld/>, document.querySelector('#root'));