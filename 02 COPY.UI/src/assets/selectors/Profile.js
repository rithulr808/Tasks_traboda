import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import {AiOutlineLogin, AiOutlineSetting} from "react-icons/ai";
import * as React from "react";
import {MdOutlineContactSupport} from "react-icons/md";
import {Avatar} from "@mui/material";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Profile() {
    return (
        <Menu as="div" className="relative inline-block text-left m-2 " style={{color:"#f5f5f4"}}>
            <div >
                <Menu.Button className="inline-flex w-full mt-1 justify-center rounded-xl border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none ">
                    <Avatar
                        alt="Gin"
                        src="https://cdn.myanimelist.net/r/360x360/images/characters/2/160251.jpg?s=56c3ca82a04d87daf19252ac5e39d159"
                        sx={{ width: 25, height: 25 }}
                    /> <p className="text-gray-400 mx-1"> Hey, </p> User
                    <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    href="#"
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                    )}
                                >
                                    <AiOutlineSetting className='mr-2 inline'/> Account settings
                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    href="#"
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                    )}
                                >
                                    <MdOutlineContactSupport className="mr-2 inline"/>Support
                                </a>
                            )}
                        </Menu.Item>
                        <form method="POST" action="#">
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        type="submit"
                                        className={classNames(
                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                            'block w-full px-4 py-2 text-left text-sm'
                                        )}
                                    >
                                        <AiOutlineLogin className='mr-2 inline'/> Sign out
                                    </button>
                                )}
                            </Menu.Item>
                        </form>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}