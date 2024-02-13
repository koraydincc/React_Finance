import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useFetchLeaguesQuery } from '../../store';
import { Skeleton } from 'antd';
import { useDispatch } from 'react-redux';
import { setSelectedLeague } from '../../store/reducers/leagueSlice';
import { Link } from 'react-router-dom';

function NavScrollExample() {
    const { data, error, isLoading } = useFetchLeaguesQuery();
    const dispatch = useDispatch();

    const handleLeagueClick = (league) => {
        console.log("Selected league:", league);
        dispatch(setSelectedLeague(league));
    };

    const renderData = () => {
        if (isLoading) {
            return <Skeleton active size='large' style={{ width: '100%', height: '500px' }} />;
        } else if (error) {
            return <div>Error: {error.message}</div>;
        } else {
            return data.result.map((league, index) => (
                <NavDropdown.Item key={index} onClick={() => handleLeagueClick(league)}>
                    <Link to={`${league.key}`}>
                        {league.league}
                    </Link>
                </NavDropdown.Item>
            ));
        }
    };

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand href="#">SporHaberX</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                        <Nav.Link href="#action1">Ansayfa</Nav.Link>
                        <Nav.Link href="#action2">Link</Nav.Link>
                        <NavDropdown title="Ligler" id="navbarScrollingDropdown">
                            {renderData()}
                        </NavDropdown>
                        <Nav.Link href="#" disabled>
                            Link
                        </Nav.Link>
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
