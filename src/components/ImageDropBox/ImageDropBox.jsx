import React, { Component } from "react";
import DragAndDrop from "../DragAndDrop/DragAndDrop";
import { Row, Col, Container, Image } from "react-bootstrap";

export class ImageDropBox extends Component {
  state = {
    files: [],
  };

  getFiles = (files_) => {
    let { files } = this.state;

    for (var i = 0; i < files_.length; i++) {
      if (!files_[i].name) return;
      files.push({
        name: files_[i].name,
        url: URL.createObjectURL(files_[i]),
      });
    }

    this.setState({ files });

    console.log(files);
  };
  render() {
    return (
      <Container>
        <Row
          className="justify-content-center scrollable"
          style={{ height: "80vh" }}
        >
          <Col
            xs={11}
            md={5}
            style={{
              background: "rgb(245,245,245)",
              margin: "2%",
              display: "flex",
              justifyContent: "center",
              maxHeight: "100%",
              overflowY: "scroll",
              cursor: "auto",
            }}
            className="container vertical-scrollable"
          >
            <Row
              style={{
                justifyContent: "start",
                display: "flex",
                alignItems: "flex-start",
                height: "100%",
                width: "100%",
              }}
            >
              {this.state.files.map((file, index) => (
                <Col
                  xs={6}
                  md={4}
                  style={{
                    padding: "2%",
                    userSelect: "none",
                  }}
                >
                  <Image
                    src={file.url}
                    thumbnail
                    style={{ height: "20vh", width: "20vw" }}
                  />
                </Col>
              ))}
            </Row>
          </Col>
          <Col
            xs={11}
            md={5}
            style={{ margin: "2%", background: "rgb(245,245,245)" }}
          >
            <DragAndDrop handleDrop={this.getFiles} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ImageDropBox;
