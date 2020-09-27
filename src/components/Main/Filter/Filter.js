import React from 'react';
import './Filter.scss';

export default class Filter extends React.Component{
  render(){
    return(
      <nav>
        <h2>SORT BY</h2>
        <ul>
          <li className='manufacturer'><i/>By Manufacturer</li>
          <li className='min-price'><i/>Minimum price</li>
          <li className='max-price'><i/>Maximum price</li>
        </ul>
      </nav>
    )
  }
}
