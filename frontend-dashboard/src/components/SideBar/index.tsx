import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

// import { Container } from './styles';

const SideBar: React.FC = () => {
  return (
      <Nav defaultActiveKey="/" className="flex-column sidebar">
        <Nav.Link>
          <Link to={`/`}>Produtos</Link>
        </Nav.Link>
        <Nav.Link>
          <Link to={`/integration/whatsapp`}>Whatsapp</Link>
        </Nav.Link>
        <Nav.Link>
          <Link to={`/integration/facebook`}>
            Facebook
          </Link>
        </Nav.Link>
        <Nav.Link>
          <Link to={`/integration/analytics`}>
            Analytics
          </Link>
        </Nav.Link>
      </Nav>
  );
}

export default SideBar;