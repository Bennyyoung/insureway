import React, { Component } from 'react';
import {  Row, Col, Card, CardBody } from 'reactstrap';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);

    this.state = {
      dropdownOpen: false,
      radioSelected: 2,
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  onRadioBtnClick(radioSelected) {
    this.setState({
      radioSelected: radioSelected,
    });
  }

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  render() {

    return (
      <div className="animated fadeIn">
      <Row>
        <Col sm="6">

          <Card className="text-white bg-info">
              <CardBody className="pb-0">
                <div>
                  <h2>Vision</h2>
                  <p>Our vision is to protect the interest of students, staffs and faculties</p>
                </div>
              </CardBody>
          </Card>

          <Card className="text-white bg-info">
              <CardBody className="pb-0">
                <div>
                  <h2>Mission</h2>
                  <p>We do this, one insurance at a time</p>
                </div>
              </CardBody>
          </Card>

          <Card className="text-white bg-info">
              <CardBody className="pb-0">
                <div>
                  <h2>What we do</h2>
                  <p>Here at insureWAY we insure your ipod, ipad, tabs, laptops, cameras which would require repairs at one point or another in the semester</p>
                </div>
              </CardBody>
          </Card>

          <Card className="text-white bg-info">
              <CardBody className="pb-0">
                <div>
                  <h2>Our Customers</h2>
                  <p>Our customers are univeristy students, staffs and faculties who wants to get their devices insured throughout the course of the semester</p>
                </div>
              </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
    );
  }
}

export default Dashboard;
