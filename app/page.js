/** 
 * @author 邵聖皓 <harrison0975294673@gmail.com>
*/
import Link from "next/link";
import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle,Footer, FooterCopyright, FooterLink, FooterLinkGroup,Carousel,Card,DarkThemeToggle} from "flowbite-react";

export default function Component() {

  const items = [
    {
      cover: "/Tower_of_Taipei_101(cropped).jpg",
      name: "台北101",
      discription: "台北101(英文:Taipei 101)",
    },
    {
      cover: "/31257721794_a7f2e036ab_o.jpg",
      name: "火車站",
      discription: "",
    },
    {
      cover: "/Yuntech_20100910_Cloud_Octagon_0019.jpg",
      name: "雲科大校門",
      discription: "",
    }
  ]
  return (
    <>
    <div className="bg-[#cccccc]">
      <div className="container mx-auto">
          <Navbar fluid rounded className="bg-blue-400">
        <NavbarBrand as={Link} href="/">
          <img src="https://www.yuntech.edu.tw/images/website_png/Group_640.png" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
          <span className="self-center whitespace-nowrap text-xl font-semibold text-white">Hao Bro website</span>
        </NavbarBrand> 
        <div className="flex md:order-2">
          <Button>Get started</Button>
          <NavbarToggle />
        </div>
        <NavbarCollapse>
          <NavbarLink href="#" className="text-dark">
            <span className="px-4 py-2 hover:text-yellow-500 hover:border-yellow-500 hover:border-b-2">活動</span>
          </NavbarLink>
          <NavbarLink as={Link} href="#" className="text-dark hovor:text-yellow-50 hover:hover-b">交通</NavbarLink>
          <NavbarLink href="#">關於我們</NavbarLink>
          <NavbarLink href="#">Pricing</NavbarLink>
          <NavbarLink href="#">Contact</NavbarLink>
        </NavbarCollapse>
        <DarkThemeToggle />
      </Navbar>
      </div>
    </div>
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        <img src="/Tower_of_Taipei_101(cropped).jpg" alt="由 AnthonySantiago101 - 自己的作品, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=113982887" />
        <img src="/31257721794_a7f2e036ab_o.jpg" alt="Copyright by https://www.flickr.com/photos/405mi16/" />
        <img src="/Yuntech_20100910_Cloud_Octagon_0019.jpg" alt="由 Zhuang kuonan - 自己的作品, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=65669091" />
        <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
      </Carousel>
    </div>
    <div className="container mx-auto grid grid-cols-4 gap-4">
        { items.map( items =>
          <Card className="max-w-sm"
              imgAlt={items.name}
              imgSrc={items.cover}>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {items.name}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {items.discription}
            </p>
            <Button>
              Read more
              <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Button>
          </Card>
          )
        }
        </div>
        <Footer container >
        <FooterCopyright href="#" by="Flowbite™" year={2022} />
        <FooterLinkGroup>
          <FooterLink href="#">About</FooterLink>
          <FooterLink href="#">Privacy Policy</FooterLink>
          <FooterLink href="#">Licensing</FooterLink>
          <FooterLink href="#">Contact</FooterLink>
        </FooterLinkGroup>
      </Footer>

    </>
    );
}
