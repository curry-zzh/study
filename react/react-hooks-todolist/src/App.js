import React ,{useState,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import { Spin, Tabs } from 'antd';
import "antd/dist/atnd.css";
const { TabPane } = Tabs;
import  { fetchTodos } from './api'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
