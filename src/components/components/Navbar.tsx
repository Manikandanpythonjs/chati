import { FaShare } from "react-icons/fa";

import {
    DialogActionTrigger,
    DialogBackdrop,
    DialogBody,
    DialogCloseTrigger,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogRoot,
    DialogTitle,
    DialogTrigger,
} from '../ui/dialog'
import { Button } from '../ui/button'
import { Input } from "@chakra-ui/react";
import { useAccount, useMsal } from "@azure/msal-react";

interface NavbarProps {

    HandleLogoutRedirect: () => void
}

const Navbar = ({ HandleLogoutRedirect }: NavbarProps) => {
    const { accounts } = useMsal()
    const account = useAccount(accounts[0] || {})
    return (
        <div className="bg-gray-100 p-4 border-b flex justify-end items-center gap-5">
            {/* <button onClick={() => window.location.reload()} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                New Chat
            </button> */}
            <p className="text-black font-semibold text-2xl"> {account?.name}</p>
            <button onClick={HandleLogoutRedirect} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                Logout
            </button>
            <DialogRoot
                placement={"center"}
                motionPreset="slide-in-bottom">
                <DialogBackdrop />
                <DialogTrigger asChild>
                    <button className=' flex gap-3 justify-between items-center border-2 rounded-full px-4 py-1  border-gray-500 text-black hover:bg-black hover:text-white '>
                        <FaShare />
                        Share
                    </button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Share public link to chat</DialogTitle>
                    </DialogHeader>
                    <DialogBody>
                        <p>
                            Your name and any messages you add after sharing stay private. <a href="">Learn more</a>
                        </p>
                    </DialogBody>
                    <DialogFooter>
                        <div className="w-full">
                            <Input className="p-2" placeholder="https://chati.com/share/..." variant="subtle" />
                        </div>
                        <DialogActionTrigger asChild>
                            <Button variant="outline">Share</Button>
                        </DialogActionTrigger>

                    </DialogFooter>
                    <DialogCloseTrigger />
                </DialogContent>
            </DialogRoot>


        </div>
    );
};

export default Navbar;
