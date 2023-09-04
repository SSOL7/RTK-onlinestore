import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

function Storenavbar() {
  return (
    <div>
        <Container>
            <Navbar.Brand href="#home"></Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
            </Nav>

        </Container>
    </div>
  )
}

export default Storenavbar