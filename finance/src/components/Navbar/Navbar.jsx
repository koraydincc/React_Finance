import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useAddUserMutation } from '../../store';
import CircularProgress from '@mui/material/CircularProgress';



function NavScrollExample() {

  

  const [addUser, results] = useAddUserMutation();

  console.log(results)
  
  const handleUserAdd = () => {
    addUser()
  }

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">kdFinance</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href='#'>Anasayfa</Nav.Link>
            <Nav.Link href="#action1">Kullanıcı İşlemleri</Nav.Link>
            <Nav.Link href="#action2">Hesap İşlemleri</Nav.Link>
            <Button variant="outlined" onClick={handleUserAdd}>
          {results.isLoading ? <CircularProgress /> : <span> Kişi Ekle+</span>}
        </Button>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;