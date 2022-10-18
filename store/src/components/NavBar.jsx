import React from "react"
import { Button, Container, Navbar, Modal } from "react-bootstrap"

export default function NavBarComponent(){
return (
    <Navbar expand="sm">
        <Navbar.Brand href="/#">Ecommerce Store</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end" />
            <Button>Cart 0 items</Button>
        </Navbar>
)




}