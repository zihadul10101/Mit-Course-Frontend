import React from 'react';
import { useNavigate } from "react-router-dom";
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AssignmentIcon from '@mui/icons-material/Assignment';

const Sidebar = () => {
    const navigate = useNavigate();
    const sidebarMenu = [
        {
            label: "All Orders",
            active: false,
            to: "/orders",
        },
        {
            label: "All Course",
            active: false,
            to: "/dashborad/all-course/:currentPage?",
        },
        {
            label: "Add Course",
            active: false,
            to: "/dashborad/course-add",
        },
        {
            label: "Edit Course",
            active: false,
            to: "/dashborad/course/edit/:courseSlug",
        },
    ];
    const sidebarRouting = (e) => {
        navigate(e.to);
    };

    return (
        <>
         {sidebarMenu.map((item, index) => (
            <ListItemButton
            key={index}
            onClick={() => sidebarRouting(item)}

            >
                <ListItemIcon>
                    <AssignmentIcon />
                </ListItemIcon>
                <ListItemText primary= {item.label} />
            </ListItemButton>
         ))}
            
        </>
    );
};

export default Sidebar;