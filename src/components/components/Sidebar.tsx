import React, { useState } from 'react';
import { FaEllipsisVertical, FaShareNodes } from 'react-icons/fa6';
import {
    MenuContent,
    MenuItem,
    MenuRoot,
    MenuTrigger,
} from "../ui/menu"
import { FaRegUser } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import { Avatar } from "../ui/avatar"
import { MdDeleteForever, MdOutlineDriveFileRenameOutline } from 'react-icons/md';
import { BsMenuAppFill } from 'react-icons/bs';
const Sidebar = () => {
    const historyChat = [
        {
            id: 1,
            title: "Self introduction"
        },
        {
            id: 2,
            title: "Electron js with vite"
        },
        {
            id: 3,
            title: "React native with firebase"
        },
        {
            id: 4,
            title: "Distance between moon and..."
        },
        {
            id: 5,
            title: "Bitcoin current rate"
        },
        {
            id: 6,
            title: "How to deploy the mobile app..."
        },
        {
            id: 7,
            title: "Next js new version"
        },
    ]
    const [open, isOpen] = useState(false)
    return (
        <div className={`${open ? 'w-10' : 'w-72'}  bg-gray-800 text-white h-screen  transition-all ease-in duration-300`}
        >
            <div className='p-2'>
                <div className='flex justify-between items-center gap-5'>
                    <div className='flex justify-start items-center gap-5'>
                        {!open && <MenuRoot >
                            <MenuTrigger asChild>
                                <Avatar className="cursor-pointer" size="md" name="Sage" src="https://bit.ly/sage-adebayo" />


                            </MenuTrigger>
                            <MenuContent>
                                <MenuItem className='flex justify-start gap-2 items-center' value="share">
                                    <FaRegUser />
                                    Profile</MenuItem>
                                <MenuItem className='flex justify-start gap-2 items-center' value="rename">
                                    <IoSettingsOutline />
                                    Settings</MenuItem>
                                <MenuItem className='flex justify-start gap-2 items-center' value="delete">
                                    <MdLogout />
                                    Logout</MenuItem>

                            </MenuContent>
                        </MenuRoot>}
                        {
                            open && (
                                <div>
                                    <BsMenuAppFill onClick={() => isOpen(!open)} className='cursor-pointer' size={25} />
                                </div>
                            )
                        }
                        <div>

                            <h2 className="text-lg font-semibold">Chati</h2>
                        </div>
                    </div>
                    <div className='p-2'>
                        <BsMenuAppFill onClick={() => isOpen(!open)} className='cursor-pointer' size={25} />
                    </div>
                </div>
                <div className='mt-16' />
                <ul>
                    {
                        !open && historyChat.map((history, index) => (

                            <li key={index} className=" flex justify-between items-center  mb-4 cursor-pointer hover:text-gray-300 px-3 py-1 hover:bg-gray-600 hover:rounded-md">
                                {history.title}
                                <MenuRoot>
                                    <MenuTrigger asChild>
                                        <FaEllipsisVertical />

                                    </MenuTrigger>
                                    <MenuContent>
                                        <MenuItem className='flex justify-start gap-2 items-center' value="share">
                                            <FaShareNodes />
                                            Share</MenuItem>
                                        <MenuItem className='flex justify-start gap-2 items-center' value="rename">
                                            <MdOutlineDriveFileRenameOutline />
                                            Rename</MenuItem>
                                        <MenuItem className='flex justify-start gap-2 items-center' value="delete">
                                            <MdDeleteForever />
                                            Delete</MenuItem>

                                    </MenuContent>
                                </MenuRoot>
                            </li>
                        ))
                    }

                </ul>
            </div>


        </div>
    );
};

export default Sidebar;
