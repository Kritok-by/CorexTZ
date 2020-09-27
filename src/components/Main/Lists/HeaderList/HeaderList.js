import React from 'react';
import './HeaderList.scss';

export default class HeaderList extends React.Component{
  render(){
    return(
      <li className='header-li'>
        <span><i/></span>
        <span className='releaseSpan'>Release</span>
        <span className='manufacturerSpan'>Manufacturer</span>
        <span className='modelSpan'>Model</span>
        <span className='hashSpan'>Hash</span>
        <span className='algorithmSpan'>Algorithm</span>
        <span className='efficiencySpan'>Efficiency</span>
        <span className='profitSpan'>Profit</span>
        <span className="priceSpan">Price</span>
      </li>
    )
  }
}
