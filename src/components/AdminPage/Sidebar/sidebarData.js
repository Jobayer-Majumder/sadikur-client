import { IoSettingsOutline } from 'react-icons/io5';
import { RiAdminFill } from 'react-icons/ri';
import { BsBriefcaseFill } from 'react-icons/bs';
import { CgFileAdd } from 'react-icons/cg';


export const menuItems = [
    {
        name: "Portfolio",
        exact: true,
        to: `/admin/design_list`,
        icon: <BsBriefcaseFill />,
        subMenus: [
            { name: "Courses", to: "/content/courses" },
            { name: "Videos", to: "/content/videos" },
        ],
    },
    {
        name: "Add Design",
        to: `/admin/add_design`,
        icon: <CgFileAdd/>
    },
    {
        name: "User List",
        exact: true,
        to: `/admin/user_list`,
        icon: <RiAdminFill />
    },
    {
        name: "Make Admin",
        exact: true,
        to: `/admin/make_admin`,
        icon: <RiAdminFill />
    },
    {
        name: "Settings",
        exact: true,
        to: `/settings`,
        icon: <IoSettingsOutline />,
    }
];
