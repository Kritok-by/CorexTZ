import React from 'react';
import './Advert.scss';

export default class Advert extends React.Component{
  render(){
    return(
      <aside>
        <h2>NEWS</h2>
        <div className="news-content">
          <img src={require('./img/news-logo.svg')} className='new-logo' alt="logo"/>
          <h3>THE STANDARD FOR CRYPTO CONSULTING</h3>
          <ul className='adventages'>
            <li>Mining Operations</li>
            <li>ICO (Initial Coin Offering)</li>
            <li>New Buisness Investment</li>
            <li>Blockchain Technology</li>
          </ul>
            <img src={require('./img/img-in-new.svg')} alt="img"/>
            <ul className="pagination">
              <li><img src={require('./img/copml-dot.svg')} alt="dot"/></li>
              <li><img src={require('./img/null-dot.svg')} alt="dot"/></li>
              <li><img src={require('./img/null-dot.svg')} alt="dot"/></li>
            </ul>
        </div>
      </aside>
    )
  }
}
