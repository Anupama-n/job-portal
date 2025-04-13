import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LogOut, Settings, User2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {

  const { user } = useSelector(store => store.auth);
  return (
    <nav className="bg-white">
      <div className="max-w-7xl mx-auto px-1 sm:px-2 lg:px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <h1 className="text-3xl font-bold text-gray-800 -ml-20">
            Job <span className="text-[#9B59B6]">Orbit</span>
          </h1>

          <div className="flex items-center space-x-8">

            <ul className="flex space-x-8 text-gray-700 font-medium">
              <li className="hover:text-[#F83002] transition-colors duration-300 cursor-pointer">
                <Link to="/">Home</Link>
              </li>
              <li className="hover:text-[#F83002] transition-colors duration-300 cursor-pointer">
                <Link to="/jobs">Jobs</Link>
              </li>
              <li className="hover:text-[#F83002] transition-colors duration-300 cursor-pointer">
                <Link to="/browse">Browse</Link>
              </li>
            </ul>

            {!user ? (
              <div className="-mr-22 flex space-x-4 ml-6">
                <Link to="/login"><Button variant="outline" >Login</Button></Link>
                <Link to="/signup"><Button className="bg-[#9B59B6] hover:bg-[#7A3C8E]">Signup</Button></Link>

              </div>
            ) : (
              <>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Avatar className="cursor-pointer ml-6">
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@user"
                      />
                      <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                      <DropdownMenuItem asChild>
                        <Link to="/profile" className="flex justify-between items-center w-full">
                          Profile
                          <User2 className="w-4 h-4" />
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        Settings
                        <DropdownMenuShortcut>
                          <Settings />
                        </DropdownMenuShortcut>
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      Log out
                      <DropdownMenuShortcut>
                        <LogOut />
                      </DropdownMenuShortcut>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
