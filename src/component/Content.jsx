import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row,Image } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ImageContent1 from "../image/Rectangle 50.png";
import ImageContent2 from "../image/Rectangle 60.png";
import ImageBank1 from "../image/bank1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";

function Content() {
  return (
    <div className="content-color">
      <Container className="mt-3">
        {/* ---------------section----------- */}
        <div className="card-section">
          <div className="ms-3 d-flex align-items-center font-size-section">
            เติมเกมออนไลน์
          </div>
        </div>
        <div className="mt-5">
          <Row>
            <Col>
              <Card>
                <Card.Img variant="top" src={ImageContent1} />
              </Card>
              <div className="mt-2 d-flex align-items-center justify-content-center font-size-image">
                VALORANT
              </div>
            </Col>
            <Col>
              <Card>
                <Card.Img variant="top" src={ImageContent1} />
              </Card>
              <div className="mt-2 d-flex align-items-center justify-content-center font-size-image">
                VALORANT
              </div>
            </Col>
            <Col>
              <Card>
                <Card.Img variant="top" src={ImageContent1} />
              </Card>
              <div className="mt-2 d-flex align-items-center justify-content-center font-size-image">
                VALORANT
              </div>
            </Col>
            <Col>
              <Card>
                <Card.Img variant="top" src={ImageContent1} />
              </Card>
              <div className="mt-2 d-flex align-items-center justify-content-center font-size-image">
                VALORANT
              </div>
            </Col>
            <Col>
              <Card>
                <Card.Img variant="top" src={ImageContent1} />
              </Card>
              <div className="mt-2 d-flex align-items-center justify-content-center font-size-image">
                VALORANT
              </div>
            </Col>
          </Row>
        </div>
        <div className="mt-5">
          <Row>
            <Col>
              <Card>
                <Card.Img variant="top" src={ImageContent1} />
              </Card>
              <div className="mt-2 d-flex align-items-center justify-content-center font-size-image">
                VALORANT
              </div>
            </Col>
            <Col>
              <Card>
                <Card.Img variant="top" src={ImageContent1} />
              </Card>
              <div className="mt-2 d-flex align-items-center justify-content-center font-size-image">
                VALORANT
              </div>
            </Col>
            <Col>
              <Card>
                <Card.Img variant="top" src={ImageContent1} />
              </Card>
              <div className="mt-2 d-flex align-items-center justify-content-center font-size-image">
                VALORANT
              </div>
            </Col>
            <Col>
              <Card>
                <Card.Img variant="top" src={ImageContent1} />
              </Card>
              <div className="mt-2 d-flex align-items-center justify-content-center font-size-image">
                VALORANT
              </div>
            </Col>
            <Col>
              <Card>
                <Card.Img variant="top" src={ImageContent1} />
              </Card>
              <div className="mt-2 d-flex align-items-center justify-content-center font-size-image">
                VALORANT
              </div>
            </Col>
          </Row>
        </div>
        {/*---------------- end section----------- */}
        {/*----------------section 2----------- */}
        <div>
          <Row>
            <Col>
              <div className="card-section mt-5">
                <Row>
                  <Col>
                    <div className="ms-3 d-flex align-items-center font-size-section">
                      โปรโมชั่น
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col>
              <div className="justify-content-end mt-5">
                <Row>
                  <Col>
                    {/* <div className="ms-3 d-flex align-items-end justify-content-end font-size-section">
                    right
                  </div> */}
                    <div className="ms-3 d-flex align-items-end justify-content-end font-color-more">
                      ดูโปรโมชั่นเพิ่มเติม
                      {
                        <FontAwesomeIcon
                          icon={faChevronRight}
                          className="ms-2 mb-1"
                        />
                      }
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
        {/*----------------end section2----------- */}
        {/*----------------section 3----------- */}
        <div className="mt-5">
          <Row>
            <Col>
              <Card>
                <Card.Img variant="top" src={ImageContent2} />
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img variant="top" src={ImageContent2} />
              </Card>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col>
              <Card>
                <Card.Img variant="top" src={ImageContent2} />
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img variant="top" src={ImageContent2} />
              </Card>
            </Col>
          </Row>
        </div>
        {/*----------------end section 3----------- */}
        {/*----------------section 4----------- */}
        <div className="mt-5">
          <div className="section-footer m-2">
            <Row>
              <Col className="mx-5">
                <div className="circle my-2">
                  <FontAwesomeIcon icon={faThumbsUp} className="icon-size" />
                </div>
                <div className="text-circle ms-2">สะดวก</div>
              </Col>
              <Col className="mx-5">
                <div className="circle my-2">
                  <FontAwesomeIcon icon={faThumbsUp} className="icon-size" />
                </div>
                <div className="text-circle ms-2">ปลอดภัย</div>
              </Col>
              <Col className="mx-5">
                <div className="circle my-2">
                  <FontAwesomeIcon icon={faThumbsUp} className="icon-size" />
                </div>
                <div className="text-circle ms-2">คุ้มที่สุด</div>
              </Col>
              <Col className="mx-5">
                <div className="circle my-2">
                  <FontAwesomeIcon icon={faThumbsUp} className="icon-size" />
                </div>
                <div className="text-circle ms-2">เงินเข้าทันที</div>
              </Col>
            </Row>
          </div>
        </div>
        <div className="mt-5">
          <div className="section-footer m-2">
            <Row>
              <Col className="mx-5">
                <div className="my-2">
                  <Image src={ImageBank1} />
                </div>
              </Col>
              <Col className="mx-5">
                <div className="my-2">
                  <Image src={ImageBank1} />
                </div>
              </Col>
              <Col className="mx-5">
                <div className="my-2">
                  <Image src={ImageBank1} />
                </div>
              </Col>
              <Col className="mx-5">
                <div className="my-2">
                  <Image src={ImageBank1} />
                </div>
              </Col>
              <Col className="mx-5">
                <div className="my-2">
                  <Image src={ImageBank1} />
                </div>
              </Col>
              <Col className="mx-5">
                <div className="my-2">
                  <Image src={ImageBank1} />
                </div>
              </Col>
            </Row>
          </div>
        </div>
        {/*----------------end section 4----------- */}
      </Container>
    </div>
  );
}

export default Content;
