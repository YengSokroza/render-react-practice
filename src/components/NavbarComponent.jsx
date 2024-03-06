import { Navbar } from "flowbite-react";

const NavbarComponent = () => {
  return (
    <div >
      <Navbar fluid rounded>
        <Navbar.Brand  href="https://flowbite-react.com">
          <img
            src="https://us.innisfree.com/cdn/shop/files/innisfree-brand.svg?v=1700687353&width=246"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite React Logo"
          />
          
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar href="#" active>
            Products & Feedback
          </Navbar>
          <Navbar  href="#">
            About
          </Navbar>
          <Navbar href="#">Contact Us</Navbar>
          
         
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
