import React from 'react';
import HeaderList from './HeaderList/HeaderList';
import Services from '../../../services/services'
import './Lists.scss';

export default class Lists extends React.Component{
  state={
    id: 1
  }


  render(){
    return(
      <article>
        <h2>ON SALE</h2>
        <ul>
        <HeaderList/>
        <Services/>
        </ul>
      </article>
    )
  }
}
