import React from "react";
import { connect } from "react-redux";
import "./Header.scss";

class Header extends React.Component {
  render() {
    let {goods} = this.props.cart
    console.log(goods)
    return (
      <header>
        <div className="left-elem">
          <img src={require('./img/logo.svg')} alt="logo" className="left-elem__logo"/>
          <div className="left-elem__lang">
            <img src={require('./img/planet.svg')} alt="planet"/>
            <span>Eng</span>
          </div>
          <div className="left-elem__burger">
            <img src={require('./img/burger.svg')} alt="burger"/>
          </div>
        </div>
        <div className="middle-elem">
          <img src={require('./img/smallLogo.svg')} alt="smallSvg"/>
        </div>
        <div className="right-elem">
          <img src={require('./img/cart.svg')}  alt="cart" className="right-elem__cart"/>
          <span className="right-elem__counter">{goods.length}</span>
        </div>
      </header>
    );
  }
}

const mapStateToProps = ({cart}) =>{
  return{
    cart
  }
}

export default connect(mapStateToProps, null)(Header)
