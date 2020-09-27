import React from 'react';
import './Footer.scss';

export default class Footer extends React.Component{
  render(){
    return(
      <footer>
        <a href="https://www.facebook.com/"><i></i><img src={require('./img/fb.svg')} alt="fb"/></a>
        <a href="https://twitter.com/?lang=en"><i></i><img src={require('./img/tw.svg')} alt="tw"/></a>
        <a href="https://www.youtube.com/"><i></i><img src={require('./img/you.svg')} alt="y"/></a>
        <a href="https://www.reddit.com/"><i></i><img src={require('./img/rd.svg')} alt="rd"/></a>
      </footer>
    )
  }
}
