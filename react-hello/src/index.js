import React from 'react';
import ReactDom from 'react-dom';

function HelloWorld () {
  var isHello = true;
  return (
    <div>
      <span>{isHello ? "hello" : "not hello"}</span>
      <Hello />
      <World />
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

ReactDom.render(<HelloWorld/>, document.querySelector('#root'));