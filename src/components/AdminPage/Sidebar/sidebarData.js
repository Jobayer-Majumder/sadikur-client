import { IoSettingsOutline } from 'react-icons/io5';
import { RiAdminFill } from 'react-icons/ri';
import { BsBriefcaseFill } from 'react-icons/bs';
import { CgFileAdd } from 'react-icons/cg';

import { ImEnter } from 'react-icons/im';

export const menuItems = [
    {
        name: "Portfolio",
        exact: true,
        to: `/admin/designList`,
        icon: <BsBriefcaseFill />,
        subMenus: [
            { name: "Courses", to: "/content/courses" },
            { name: "Videos", to: "/content/videos" },
        ],
    },
    {
        name: "Add Design",
        to: `/admin/addDesign`,
        icon: <CgFileAdd/>
    },
    {
        name: "Login",
        to: `/login`,
        icon: <ImEnter />
    },
    {
        name: "Make Admin",
        exact: true,
        to: `/admin/makeAdmin`,
        icon: <RiAdminFill />
    },
    {
        name: "Settings",
        exact: true,
        to: `/settings`,
        icon: <IoSettingsOutline />,
    }
];
