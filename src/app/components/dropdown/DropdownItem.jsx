"use client";
import Image from "next/image";
import Dropdown from "react-bootstrap/Dropdown";
import "./DropdownItems.css";

const DropdownItem = () => {
  return (
    <>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          <Image src="/medium_3dots.svg" width={32} height={32} alt="dot" />
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#">Update</Dropdown.Item>
          <Dropdown.Item href="#">Active</Dropdown.Item>
          <Dropdown.Item href="#">Delete</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export default DropdownItem;
