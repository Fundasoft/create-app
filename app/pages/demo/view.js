const React = require('react');
const Header = require('../../components/header');
const axios = require('axios');

const { useState } = React;

const restclient = axios.create({
  baseURL: 'http://localhost:3000/api',
  timeout: 5000,
});

const Demo = ({ message }) => {
  const [text, setText] = useState(message);

  return (
    <div className="demo">
      <Header />
      <div className="container">
        <span>{text}</span>
        <button
          onClick={() => {
            restclient.get(`/demo/joke`)
            .then(response => setText(response.data.value))
            .catch(error => console.log(error));
          }}
        >
          ¡Another one!
        </button>
      </div>
    </div>
  );
};

module.exports = Demo;
