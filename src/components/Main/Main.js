import React from 'react';
import Filter from './Filter/Filter';
import Lists from './Lists/Lists';
import Advert from './Advert/Advert'
import './Main.scss';



export default class Main extends React.Component{
  render(){
    return(
      <main>
        <Filter/>
        <Lists/>
        <Advert/>
      </main>
    )
  }
}
