import React from "react";
import { ButtonGroup, Dropdown, DropdownButton } from "react-bootstrap";

const Sorter = ()=>{
    return(
        <>
        <DropdownButton as={ButtonGroup} title="Dropdown" is="bg-nested-dropdown" variant="secondary">
            <Dropdown.Item eventKey={1} active>Rating</Dropdown.Item>
            <Dropdown.Item eventKey={2}>Year</Dropdown.Item>
        </DropdownButton>
        </>
    )
}

export default Sorter;