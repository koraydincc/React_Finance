import React from 'react';
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { useFetchUsersQuery } from '../../store';
import { Skeleton } from 'antd';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

function NavScrollExample() {
    const { data, error, isLoading } = useFetchUsersQuery();
    const dispatch = useDispatch();

    const renderUserData = () => {
        if (isLoading) {
            return <Skeleton active size='large' style={{ width: '100%', height: '500px' }} />;
        } else if (error) {
            return <div>Error: {error.message}</div>;
        } else {
            return data.map((user, index) => (
                <NavDropdown.Item key={index}>
                    <Link to={`/user/${user.id}`}>{user.name}</Link>
                </NavDropdown.Item>
            ));
        }
    };

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand href="#">Kişisel Finans Takip</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                        <Nav.Link as={Link} to="/">Anasayfa</Nav.Link>
                        <NavDropdown title="Hesaplar" id="navbarScrollingDropdown">
                            <NavDropdown.Item as={Link} to="/banka-hesaplari">Banka Hesapları</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/kredi-kartlari">Kredi Kartları</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={Link} to="/diger-hesaplar">Diğer Hesaplar</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Bütçeler" id="navbarScrollingDropdown">
                            <NavDropdown.Item as={Link} to="/gelirler">Gelirler</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/harcamalar">Harcamalar</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={Link} to="/bütçe-oluştur">Bütçe Oluştur</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link as={Link} to="/raporlar-analizler">Raporlar ve Analizler</Nav.Link>
                        <Nav.Link as={Link} to="/ayarlar">Ayarlar</Nav.Link>
                        <Nav.Link as={Link} to="/çıkış-yap">Çıkış Yap</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavScrollExample;
