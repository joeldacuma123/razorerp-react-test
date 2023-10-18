import React, { useState } from "react";
import {
  Input,
  InputGroup,
  ListGroup,
  ListGroupItem,
  Button,
  Modal,
  ModalBody,
  Form,
  FormGroup,
  Row,
  Col, 
  Label
} from "reactstrap";

import styles from "@/styles/Input.module.scss";

export default function AutoCompleteInput() {
  const [inputValue, setInputValue] = useState("");
  const [modal, isModal] = useState(false);
  const [autoComplete, setAutoComplete] = useState([
    "5331 Rexford Court, Montgomery AL 36116",
    "8642 Yule Street, Arvada CO 80007",
    "1693 Alice Court, Annapolis MD 21401",
  ]);
  const [addressDetails, setAddressDetails] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    const filterAutoComplete = autoComplete.filter((item) =>
      item.toLowerCase().includes(value.toLowerCase())
    );

    setAutoComplete(filterAutoComplete);
  };

  const handleAutoCompleteClick = (value) => {
    setInputValue(value);
    setAutoComplete([]);
  };

  const toggle = () => isModal(!modal);

  const onChangeAddress = (value) => {
    setAddressDetails(value);
  };

  const handleCreateAddress = () => {
    const previousAutoComplete = autoComplete;
    previousAutoComplete.push(addressDetails);
    setAutoComplete(previousAutoComplete);
    isModal(false);
  };

  const close = () => {
    isModal(false);
  };

  return (
    <div>
      <InputGroup>
        <Input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Input text"
        />
      </InputGroup>
        {autoComplete.length > 0 && inputValue && (
        <div className="my-3 p-4 bg-body rounded shadow-sm">
          <ListGroup className={styles.listGroup}>
            {autoComplete.map((item, index) => (
              <ListGroupItem action tag="button" key={index} onClick={() => handleAutoCompleteClick(item)}>
                {item}
              </ListGroupItem>
            ))}
            <div className="d-flex p-2 justify-content-center">
              <div>
                <Button onClick={toggle} outline className={styles.addButton}>+ Add new Address</Button>
              </div>
            </div>  
          </ListGroup>
        </div>
        )}
      <div>
        <Modal className={styles.modal} returnFocusAfterClose={true} isOpen={modal}>
          <h5 className="p-4 mb-0">
            Create Address
          </h5>
         <ModalBody className={styles.modalBody}>
           <div className="d-flex text-body-secondary">
            <Form className={styles.form}>
              <FormGroup>
                <Row className="mb-4">
                  <Col md={6}>
                    <Label className={styles.formTitle}>
                      First Name
                    </Label>
                    <Input placeholder="Enter first name" />            
                  </Col>
                  <Col md={6}>
                    <Label className={styles.formTitle}>
                      Last Name
                    </Label>
                    <Input placeholder="Enter last name" />
                  </Col>
                </Row>
                <Row className="mb-4">
                  <Col md={6}>
                    <Label className={styles.formTitle}>
                      Email Address
                    </Label>
                    <Input placeholder="Enter email address" />            
                  </Col>
                  <Col md={6}>
                    <Label className={styles.formTitle}>
                      Phone Number
                    </Label>
                    <Input placeholder="Enter phone number" />
                  </Col>                  
                </Row>
                <Row className="mb-4">
                <Col md={6}>
                    <Label className={styles.formTitle}>
                     Date of Birth
                    </Label>
                    <Input type="select" placeholder="Select Date" />            
                  </Col>
                  <Col md={6}>
                    <Label className={styles.formTitle}>
                     Social Security/TIN Number
                    </Label>
                    <Input placeholder="Enter phone number" />
                  </Col>                    
                </Row>
              <Row>
                <h5 className="p-2 mb-2">
                 Address Detail                 
                </h5>
              </Row>
              <Row className="mb-4">
                <Col md={12} className="mb-4">
                  <Label className={styles.formTitle}>
                      Street Address
                  </Label>
                  <Input onChange={(e) => onChangeAddress(e.target.value) } placeholder="Enter street address"  />                   
                </Col>
                <Col md={12}>
                  <Label className={styles.formTitle}>
                    Prefix
                  </Label>
                  <Input placeholder="Enter prefix address" />                  
                </Col>             
              </Row>
              <Row className="mb-4">
                <Col md={4}>
                  <Label className={styles.formTitle}>
                    Apartment Number
                  </Label>
                  <Input placeholder="Enter number" />                     
                </Col>
                <Col md={4}>
                  <Label className={styles.formTitle}>
                    Zip Code
                  </Label>
                  <Input placeholder="Enter 6 digit code" />                     
                </Col>
                <Col md={4}>
                  <Label className={styles.formTitle}>
                    State
                  </Label>
                  <Input placeholder="Enter state" />                   
                </Col>
              </Row>
              </FormGroup>
            </Form>
           </div>
         </ModalBody>
         <hr />
         <Row>
          <div className={styles.buttonGroup}>
            <div className={styles.buttonContainer}>
              <Button onClick={close} outline>Cancel</Button>
            </div>
            <div className={styles.buttonContainer}>
              <Button onClick={handleCreateAddress} color="primary">Create</Button>
            </div>
          </div>
        </Row>
        </Modal>
      </div>
    </div>
  );
}
