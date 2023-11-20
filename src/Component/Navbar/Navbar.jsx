import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import  Style  from "./Navbar.module.css"
import Logo from "./Logo";

export default function Navbarmain() {
    return (
        <>
            <Navbar maxWidth="full" className={`${Style.nav} py-2`} >

                <NavbarBrand className="flex gap-3   items-center" >
                     <Logo />
                    <span className="font-[400] text-inherit font-[Inspiration] text-[24px]" >Ik developers</span>
                </NavbarBrand>

                <NavbarContent className="hidden sm:flex gap-8" justify="center">
                    <NavbarItem>
                        <Link className={`${Style.element}`} color="foreground" href="#">
                                 About us
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link className={`${Style.element}`} color="foreground" href="#">
                        Services
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link className={`${Style.element}`} color="foreground" href="#">
                        Case Studies
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link className={`${Style.element}`} color="foreground" href="#">
                        Blog
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link className={`${Style.element}`} color="foreground" href="#">
                        How it Works
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link className={`${Style.element}`} color="foreground" href="#">
                        Hire
                        </Link>
                    </NavbarItem>


                    
                </NavbarContent>
                <NavbarContent justify="end">
                    
                    <NavbarItem>
                        <Button className={`${Style.contact} rounded-[5px]`} style={{}}  href="#" variant="flat">
                                 Contact us
                        </Button>
                    </NavbarItem>
                </NavbarContent>
            </Navbar>
        </>
    )
}
