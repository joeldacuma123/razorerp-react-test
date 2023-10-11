import styles from '@/styles/Home.module.scss';
import { Form, 
         Row,
         Col,
         FormGroup,
         Label,
         Input,
         Button } from 'reactstrap';
import Union from '../../public/images/Union.png';
import Truck from '../../public/images/Truck.png';
import Client from '../../public/images/Client.png';
import Document from '../../public/images/Document.png';
import Image from 'next/image';



export default function Home() {
  return (
    <>
      <div style={{border: styles.borderBody}} className="my-3 p-4 bg-body rounded shadow-sm">
        <h5 className="pb-2 mb-0">
          General
        </h5>
      <div className="d-flex text-body-secondary pt-3">
        <Form className={styles.form}>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label className={styles.formTitle}>
                Account Name <span className="text-danger">*</span>
              </Label>
              <Input placeholder="Input text" />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label className={styles.formTitle}>Pick Up Location</Label>
              <Input placeholder="Input text" />
            </FormGroup>         
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label className={styles.formTitle}>Job Type</Label>
              <Input placeholder="Select Job Type" />
            </FormGroup>            
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label className={styles.formTitle}>Primary Contract</Label>
              <Input placeholder="Input text" />
            </FormGroup>    
          </Col>
        </Row>
        <Row>
          <div className={styles.buttonGroup}>
            <div className={styles.buttonContainer}>
              <Button className={styles.outlineButton} color="primary" outline> + Add Alternate Contract</Button>
            </div>
            <div className={styles.buttonContainer}>
              <Button className={styles.outlineButton} color="primary" outline> + Add Primary Contract</Button>
            </div>
          </div>
        </Row>
        </Form>
      </div>
      </div>
      <div style={{border: styles.borderBody}} className="my-3 p-4 bg-body rounded shadow-sm">
        <h5 className="pb-2 mb-0">
          Select Logistic Type <span className="text-danger">*</span>
        </h5>
      <div className="d-flex text-body-secondary pt-3">
        <Form className={styles.form}>
        <Row>
          <div className="btn-group">
            <div className="btn-container">
              <Button className={styles.bigOutlineButtonTrucking}>
                <div className="d-flex justify-content-center flex-column">
                  <div className={styles.iconContainer}>
                    <Image src={Union} />
                  </div>
                  <span className={styles.buttonText}>
                    Our Trucking
                  </span>
                </div>
              </Button>
            </div>   
            <div className="btn-container">
              <Button className={styles.bigOutlineButtonCarrier}>
                <div className="d-flex justify-content-center flex-column">
                 <div className={styles.iconContainer}>
                  <Image src={Truck} />
                 </div>
                 <span className={styles.buttonTextCarrier}>
                   Common Carrier
                 </span>
                </div>
              </Button>
            </div>  
            <div className="btn-container">
            <Button className={styles.bigOutlineButtonCarrier}>
                <div className="d-flex justify-content-center flex-column">
                 <div className={styles.iconContainer}>
                  <Image src={Client} />
                 </div>
                 <span className={styles.buttonTextCarrier}>
                  Client Drop Off
                 </span>
                </div>
              </Button>
            </div>  
          </div>
        </Row>
        </Form>
      </div>
      </div>
      <div style={{border: styles.borderBody}} className="my-3 p-4 bg-body rounded shadow-sm">
        <h5 className="pb-2 mb-0">
          Schedule
        </h5>    
        <div className="d-flex text-body-secondary pt-3">
          <Form className={styles.form}>
            <Row>
              <Col md={6}>
                <Label className={styles.formTitle}>
                  Date
                </Label>
              </Col>
              <Col md={6}>
                <Label className={styles.formTitle}>
                  Time
                </Label>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label className={styles.formTitle}>
                    Start Date <span className="text-danger">*</span>
                  </Label>
                  <Input type="date" name="startdate" />
                </FormGroup>   
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label className={styles.formTitle}>
                   Start Time <span className="text-danger">*</span>
                  </Label>
                  <Input type="time" name="time" />
                </FormGroup>                
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label className={styles.formTitle}>
                    End Date <span className="text-danger">*</span>
                  </Label>
                  <Input type="date" name="enddate" />
                </FormGroup>                   
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label className={styles.formTitle}>
                   End Time <span className="text-danger">*</span>
                  </Label>
                  <Input type="time" name="time" />
                </FormGroup>     
              </Col>
            </Row>
            <Row>
              <div className={styles.buttonGroup}>
                <div className={styles.buttonContainer}>
                  <Button className={styles.outlineCalendarButton} outline>Check Calendars</Button>
                </div>
                <div className={styles.buttonContainer}>
                  <Button className={styles.outlineButton} color="danger" outline>Clear dates</Button>
                </div>
              </div>
            </Row>              
          </Form>
        </div>  
        <hr className="my-4" />
        <div className="d-flex text-body-secondary pt-2">
          <Form className={styles.form}>
            <Row>
              <Col>
                <Label className={styles.formTitle}>
                  Member & Resource
                </Label>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label className={styles.formTitle}>
                    Team Members
                  </Label>
                  <Input type="select" name="members">
                    <option>-- Please select --</option>
                  </Input>
                </FormGroup>                                 
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label className={styles.formTitle}>
                    Truck Resources
                  </Label>
                  <Input type="select" name="members">
                    <option>-- Please select --</option>
                  </Input>
                </FormGroup>                
              </Col>
            </Row>
          </Form>        
        </div>
      </div>  
      <div style={{border: styles.borderBody}} className="my-3 p-4 bg-body rounded shadow-sm">
        <h5 className="pb-2 mb-0">
          Tags
        </h5>
        <div className="d-flex text-body-secondary pt-3">
          <Form className={styles.form}>
           <Row>
            <Col md={6}>
              <Input type="textarea" placeholder="Enter tags" />
            </Col>
           </Row>
          </Form>
        </div>     
      </div>
      <div style={{border: styles.borderBody}} className="my-3 p-4 bg-body rounded shadow-sm">
        <h5 className="pb-2 mb-0">
          Notes
        </h5>
        <div className="d-flex text-body-secondary pt-3">
          <Form className={styles.form}>
            <Row>
             <Col md={6}>
              <div className={styles.notesContainer}>
                <ul className="nav nav-underline ps-4">
                  <li className="notes nav-item">
                    <a className="tab nav-link active" href="#">Work Instructions</a>
                  </li>
                  <li className="notes nav-item">
                    <a className="tab nav-link" href="#">Internal Notes</a>
                  </li>
                  <li className="notes nav-item">
                    <a className="tab nav-link" href="#">Field Notes</a>
                  </li>
                </ul>
              </div>
              <div className={styles.notesContainerBody}>
                <Row>
                  <Col>
                    <Label className={styles.formTitle}>
                      Preselected Text
                    </Label>
                    <div className="my-3">
                      <Input type="select">
                        <option>Select</option>
                      </Input>                      
                    </div>
                    <div>
                      <Input type="textarea" placeholder="Enter Notes here..." />
                    </div>
                  </Col>
                </Row>
              </div>
             </Col>
            </Row>
          </Form>
        </div>        
      </div>
      <div style={{border: styles.borderBody}} className="my-3 p-4 bg-body rounded shadow-sm">
        <h5 className="pb-2 mb-0">
          Files and Images
        </h5>
        <div className="d-flex text-body-secondary pt-3">
          <Form className={styles.form}>
            <Row>
              <Col md={6}>
                <div className={styles.fileImageContainer}>
                  <ul className="files nav nav-underline ps-4">
                    <li className="files nav-item">
                      <a className="tab nav-link active" href="#">Files</a>
                    </li>
                    <li className="files nav-item">
                      <a className="tab nav-link" href="#">Images</a>
                    </li>
                  </ul>                    
                </div> 
                <div className={styles.fileImageContainerBody}>
                  <Row>
                    <Col md={12}>
                      <div className={styles.fileImageContainerContent}>
                        <div>
                          <div className="d-flex flex-row">
                            <Image className="mx-2" src={Document}/>
                            <h6 className={styles.fileContentText}>Drag & Drop or Browse</h6>
                          </div>
                          <p className={styles.fileContentSubtitle}>.PDF, .docx, .xlsx are allowed. Max 10mb</p>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div> 
              </Col>
            </Row>            
          </Form>          
        </div>  
      </div>
      <div style={{border: styles.borderBody}} className="my-3 p-4 bg-body rounded shadow-sm">
        <h5 className="pb-2 mb-0">
          Tags
        </h5>
        <div className="pt-3">
          <Form>
            <Row>
              <Col md={12}>
                <Input type="textarea" placeholder="Enter Notes here..." />              
              </Col> 
            </Row>
          </Form>
        </div>
      </div>
      <div style={{border: styles.borderBody}} className="my-3 p-4 bg-body rounded shadow-sm">
        <h5 className="pb-2 mb-0">
          Estimated Equipment
        </h5> 
        <div className="d-flex text-body-secondary pt-3">
          <Form className={styles.form}>
            <FormGroup>
             <Row>
                <Col md={6}>
                  <Label className={styles.formTitle}>
                    Pallet Count
                  </Label>
                  <Input type="select">
                   <option>-- Please Select --</option> 
                  </Input>                
                </Col>
                <Col md={6}>
                 <Label className={styles.formTitle}>
                   Net Weight
                  </Label>
                  <Input placeholder="Input text" />
                </Col>
              </Row>
            </FormGroup>
          </Form>
        </div>       
      </div>
      <div style={{border: styles.borderBody}} className="my-3 p-4 bg-body rounded shadow-sm">
      <h5 className="pb-2 mb-0">
          References
      </h5> 
        <div className="d-flex text-body-secondary pt-3">
          <Form className={styles.form}>
            <FormGroup>
             <Row>
                <Col md={6}>
                  <Label className={styles.formTitle}>
                  BOL
                  </Label>
                  <Input placeholder="Input text" />            
                </Col>
                <Col md={6}>
                 <Label className={styles.formTitle}>
                  References 1
                 </Label>
                  <Input placeholder="Input text" />
                </Col>
              </Row>
              <Row className="mt-2">
                <Col md={6}>
                  <Label className={styles.formTitle}>
                  PO Number
                  </Label>
                  <Input placeholder="Input text" />            
                </Col>
                <Col md={6}>
                 <Label className={styles.formTitle}>
                  References 2
                 </Label>
                  <Input placeholder="Input text" />
                </Col>                
              </Row>
              <Row className="mt-4">
                <Col md={6}>
                </Col>
                <Col md={6}>
                <div className={styles.buttonGroup}>
                  <div className={styles.buttonContainer}>
                    <Button className={styles.outlineButton} color="primary" outline> + Add More Reference</Button>
                  </div>
                </div>
                </Col>
              </Row>
            </FormGroup>
          </Form>
        </div> 
      </div>
    </>
  );  
};