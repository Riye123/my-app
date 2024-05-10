import Link from "next/link";
import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle,Footer, FooterCopyright, FooterLink, FooterLinkGroup,Carousel} from "flowbite-react";

export default function Component() {
  return (
    <>
        <Navbar fluid rounded>
      <NavbarBrand href="https://flowbite-react.com">
        <img src="/next.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
      </NavbarBrand>
      <div className="flex md:order-2">
        <Button>Get started</Button>
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <NavbarLink href="#" active>
          Home
        </NavbarLink>
        <NavbarLink href="#">About</NavbarLink>
        <NavbarLink href="#">Services</NavbarLink>
        <NavbarLink href="#">Pricing</NavbarLink>
        <NavbarLink href="#">Contact</NavbarLink>
      </NavbarCollapse>
    </Navbar>
        <Footer container>
        <FooterCopyright href="#" by="Flowbite™" year={2022} />
        <FooterLinkGroup>
          <FooterLink href="#">About</FooterLink>
          <FooterLink href="#">Privacy Policy</FooterLink>
          <FooterLink href="#">Licensing</FooterLink>
          <FooterLink href="#">Contact</FooterLink>
        </FooterLinkGroup>
      </Footer>
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
      </Carousel>
    </div>
    </>
    );
}
