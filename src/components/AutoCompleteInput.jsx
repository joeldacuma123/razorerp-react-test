import React, { useState } from "react";
import {
  Input,
  InputGroup,
  ListGroup,
  ListGroupItem
} from "reactstrap";

import styles from "@/styles/Input.module.scss";

export default function AutoCompleteInput() {
  const [inputValue, setInputValue] = useState("");
  const [autoComplete, setAutoComplete] = useState([
    "5331 Rexford Court, Montgomery AL 36116",
    "8642 Yule Street, Arvada CO 80007",
    "1693 Alice Court, Annapolis MD 21401",
  ]);

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
          </ListGroup>
        </div>
        )}
    </div>
  );
}
