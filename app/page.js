/** 
 * @author 邵聖皓 <harrison0975294673@gmail.com>
*/
'use client'
//b11117010-0ed97957-5819-469f
//8dd60b39-5342-478e-9c70-5db88132ae61
import { useState,useEffect } from "react";
import Link from "next/link";
import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle,Footer, FooterCopyright, FooterLink, FooterLinkGroup,Carousel,Card,DarkThemeToggle} from "flowbite-react";
import CustomCard  from "@/Components/Card"; //絕對路徑
import Image from "next/image";
import { SearchParamsContext } from "next/dist/shared/lib/hooks-client-context.shared-runtime";

export default function Component() {

  const [items,setItems] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('api/items');
      const data = await response.json();
      console.log(data);
      setItems(data);
    }
    fetchData();
  },[]);
  
  return (
    <>
    <div className="bg-[#cccccc]">
      <div className="container mx-auto">
          <Navbar fluid rounded className="bg-blue-400">
        <NavbarBrand as={Link} href="/">
          <img src="https://www.yuntech.edu.tw/images/website_png/Group_640.png" className="mr-3 h-6 sm:h-9"  alt="Flowbite React Logo" />
          <span className="self-center whitespace-nowrap text-xl font-semibold text-white">Hao Bro website</span>
        </NavbarBrand> 
        <div className="flex md:order-2">

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
        <Image src="/Tower_of_Taipei_101(cropped).jpg" width={500} height={500} alt="由 AnthonySantiago101 - 自己的作品, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=113982887" />
        <Image src="/31257721794_a7f2e036ab_o.jpg" width={500} height={500} alt="Copyright by https://www.flickr.com/photos/405mi16/" />
        <Image src="/Yuntech_20100910_Cloud_Octagon_0019.jpg" width={500} height={500} alt="由 Zhuang kuonan - 自己的作品, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=65669091" />
        <Image src="/1024x768-filedata635593621663304685.jpg" width={500} height={500} alt="Copyright by 台南旅遊網" />
        <Image src="/hualien-travel-5.jpg" width={500} height={500} alt="Copyright by https://www.instagram.com/taiwan.4fun/" />
      </Carousel>
    </div>

        <div className="container mx-auto">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
            { items.map( (items,index) =>
              <CustomCard item={items} key={index}/>
            )}
          </div>
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
