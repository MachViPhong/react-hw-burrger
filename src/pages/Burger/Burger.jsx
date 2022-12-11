//rcredux
import React, { Component } from "react";
import { connect } from "react-redux";
import "../../assets/burger.css";

class Burger extends Component {
  renderBreadMid = () => {
    let { burger } = this.props;
    return Object.entries(burger).map(([topping, value], index) => {
      let midBread = [];
      for (let i = 0; i < value; i++) {
        midBread.push(<div key={i} className={topping}></div>);
      }
      return midBread;
    });
  };
  renderMenu = () => {
    let { burger, menu } = this.props;
    return Object.entries(menu).map(([topping, price], index) => {
      return (
        <tr key={index}>
          <td className="name">{topping}</td>
          <td className="quantity">
            <span>
              <button className="plus btn btn-success mx-2" onClick={() => {this.handleQuantity(topping, 1)}}>+</button>
              <span>{burger[topping]}</span>
              <button className="minus btn btn-danger mx-2" onClick={() => {this.handleQuantity(topping, -1)}}> - </button>
            </span>
          </td>
          <td className="price">{price}</td>
          <td>{burger[topping] * price}</td>
        </tr>
      );
    });
  };
  handleQuantity = (topping, changeNumber) => {
    const action = {
      type: "CHANGE_QUANTITY",
      topping,
      changeNumber,
    };
    this.props.dispatch(action);
  };
  render() {
    let {total}= this.props;
    return (
      <div className="container">
        <h4 className="display-5 text-success">Bài tập burger cybersoft</h4>
        <div className="row">
          <div className="col-6">
            <h3 className="text-danger text-center">Bánh burger của bạn</h3>
            <div className="breadTop"></div>
            {this.renderBreadMid()}
            <div className="breadBottom"></div>
          </div>
          <div className="col-6">
            <div className="container">
              <h3 className="text-center text-success">Chọn thức ăn</h3>
              <table className="table">
                <thead>
                  <tr>
                    <th>Thức ăn</th>
                    <th>Số lượng</th>
                    <th>Đơn giá</th>
                    <th>Thành Tiền</th>
                  </tr>
                </thead>
                <tbody>{this.renderMenu()}</tbody>
                <tfoot>
                  <tr>
                    <td colSpan="2"></td>
                    <td>Tổng tiền</td>
                    <td> {total} </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  burger: state.burgerReudcer.burger,
  menu: state.burgerReudcer.menu,
  total: state.burgerReudcer.total,
});

export default connect(mapStateToProps)(Burger);
