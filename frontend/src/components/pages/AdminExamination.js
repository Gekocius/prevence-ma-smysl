import React, {Component} from 'react'
import {Parallax, Background} from 'react-parallax';
import {Jumbotron, Row, Col, Button, Container, UncontrolledTooltip} from 'reactstrap';

import {TopNav} from '../molecules/TopNav';
import {Heading} from '../atoms/Heading';
import {Footer} from '../organisms/Footer';
import {LogoutButton} from '../atoms/LogoutButton';
import {MultiSelect} from '../atoms/MultiSelect';
import {AdminNav} from '../organisms/AdminNav';
import {ExamNameContainer} from '../organisms/ExamNameContainer';
import {GenderPeriodicityContainer} from '../organisms/GenderPeriodicityContainer';
import {AdminBasicFilterContainer} from '../organisms/AdminBasicFilterContainer';
import {AdminAdvancedFilterContainer} from '../organisms/AdminAdvancedFilterContainer';
import {TooltipItem} from '../molecules/TooltipItem';



//import logo from '../../img/logo_prevence.png';

export class AdminExamination extends Component {
  render() {
    return (
      <div>
        <div>
         <AdminNav/>
       </div>
       <div>
         <Row style={{margin: "20px"}}>
         <Col></Col>
         <Col  xs="11"><h2 className="AdminWelcH2">Správa vyšetření</h2></Col>
           <Col>
            <span style={{textDecoration: "underline", color:"blue"}} href="#" id="UncontrolledTooltipExample">
              <i class="material-icons" style={{color:"#28A3B7"}}>
                help
              </i>
            </span>
            <UncontrolledTooltip placement="right" target="UncontrolledTooltipExample">
              Ve správě vyšetření můžete vytvářet či upravovat vyšetření.
            </UncontrolledTooltip>
           </Col>
         </Row>
          <ExamNameContainer />
          <GenderPeriodicityContainer />
          <Row>
            <Col>
              <AdminBasicFilterContainer />
            </Col>
            <Col>
              <AdminAdvancedFilterContainer />
            </Col>
          </Row>
            <Col>
               <Button color="info" size="md" style={{margin: "10px"}}>Smazat</Button>
               <Button color="info" size="md" style={{margin: "10px"}}>Uložit</Button>
           </Col>
       </div>
   </div>
   );
  }
}
