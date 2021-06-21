import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

export class Menu extends Component {
  state = {
    menuItems: [
      "Title1",
      "Title2",
      "Title3",
      "Title4",
      "Title5",
      "Title6",
      "Title7",
      "Title8",
      "Title9",
      "Title10",
    ],
    startIndex: 0,
    count: 5,
    clickedIndex: -1,
  };

  menuItemStyle = (index) => {
    if (index === this.state.clickedIndex)
      return {
        background: "rgba(255, 255, 255, 0.8)",
        boxShadow:
          "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        borderRadius: "20px",
      };
    else return {};
  };

  renderMenuItems = () => {
    let filteredItems = [];
    const { startIndex, count, menuItems } = this.state;
    const { length } = menuItems;

    for (let i = 0; i < count; i += 1) {
      const index = (i + startIndex) % length;
      filteredItems.push(
        <Nav.Link
          style={this.menuItemStyle(index)}
          onClick={() => {
            this.setState({ clickedIndex: index });
            this.moveMenuList(startIndex - index + 2);
          }}
          key={index}
        >
          {menuItems[index]}
        </Nav.Link>
      );
    }
    return filteredItems;
  };

  moveMenuList = (n) => {
    let {
      startIndex,
      menuItems: { length },
    } = this.state;

    startIndex = (startIndex - n + length) % length;
    this.setState({ startIndex });
  };

  handleArrowKeyCliked = (n) => {
    let {
      startIndex,
      menuItems: { length },
      clickedIndex,
    } = this.state;

    if (n == 1) {
      if (clickedIndex === (startIndex + 4) % length) {
        // clickedIndex is at rightMost position
        startIndex = (startIndex + 1 + length) % length;
      }
    } else {
      if (clickedIndex === startIndex) {
        startIndex = (startIndex - 1 + length) % length;
      }
    }
    clickedIndex = (clickedIndex + n + length) % length;

    this.setState({ startIndex, clickedIndex });
  };

  render() {
    return (
      <Navbar expanded>
        <Nav
          fill
          style={{
            background: "#D0D0D0",
            width: "80vw",
          }}
        >
          <Nav.Link onClick={() => this.handleArrowKeyCliked(-1)}>
            <IoIosArrowDropleft size={40} />
          </Nav.Link>
          {this.renderMenuItems()}
          <Nav.Link onClick={() => this.handleArrowKeyCliked(+1)}>
            <IoIosArrowDropright size={40} />
          </Nav.Link>
        </Nav>
      </Navbar>
    );
  }
}

export default Menu;
