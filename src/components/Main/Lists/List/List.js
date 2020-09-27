import React from 'react';
import {connect} from 'react-redux';
import {addId, removeId} from '../../../../redux/actions'

 class List extends React.Component{

   addOrRemove(id){
     let {goods} = this.props.cart
     return id === goods.find(e=>e===id)?this.props.removeId(id).itemId:this.props.addId(id).itemId
   }

  render(){
    const {id, release, manufacturer, name, model, hash, img, algorithm, efficiency, profit, minPrice, maxPrice} = this.props.data;
    let style;
    id%2===0?style='rgba(255,255,255,0.05)':style='rgba(255,255,255,0.1)'
    console.log(id === this.props.cart.goods.find(e=>e===id))
    return(
      <li style= {{backgroundColor: style}} className='list-product'>
        <span >
        <i/>
          <img key={id*937} src={require('./img/star.svg')} alt="star" onClick={()=>this.addOrRemove(id)}/>
          <img key={id*938} src={require('./img/arrow.svg')} alt="arrow"/>
        </span>
        <span className='releaseSpan'>{release}</span>
        <span className='manufacturerSpan'>{manufacturer}</span>
        <span className='nameSpan'>{name}</span>
        <span className='modelSpan'>{model}</span>
        <span className='hashSpan'>{hash}</span>
        <img src={require(`./img/${img}.png`)} alt="img" className='imgSpan'/>
        <span className='algorithmSpan'>{algorithm}</span>
        <span className='efficiencySpan'>{efficiency}</span>
        <span className='profitSpan'><span className='greenSpan'>{profit}</span> / day</span>
        <span className='priceSpan'>{`$${minPrice} - $${maxPrice}`}</span>
      </li>
    )
  }
}

const mapDispatchToProps = {
  addId,
  removeId
}
const mapStateToProps = ({cart}) =>{
  return{
    cart
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(List)
