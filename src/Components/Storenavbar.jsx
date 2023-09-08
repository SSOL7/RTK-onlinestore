import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

function Storenavbar() {
  return (
    <div>
        <Container>
            <Navbar.Brand href="#home"></Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/cart">Cart</Nav.Link>

            </Nav>

        </Container>
    </div>
  )
}

export default Storenavbar
