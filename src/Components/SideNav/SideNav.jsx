import React from 'react';
import { MdFavorite } from 'react-icons/md';
import { IoMdContacts } from 'react-icons/io';
import { GrDocumentText } from 'react-icons/gr';
import { AiTwotoneSetting } from 'react-icons/ai';
import { BsFillMoonFill } from 'react-icons/bs';
import { MdNotifications } from 'react-icons/md';
import { CgLogOff } from 'react-icons/cg';
import { NavLink } from 'react-router-dom';

const SideNav = () => {
    return (
        <div>
            <NavLink to="" activeClassName="selected"><MdFavorite className="text-4xl bg-slate-100 w-10 h-10 rounded-full mt-3  p-2 "/></NavLink>
            <NavLink to="" activeClassName="selected"><GrDocumentText className="text-4xl bg-slate-100 w-10 h-10 rounded-full mt-3  p-2 "/></NavLink>
            <NavLink to="" activeClassName="selected"><IoMdContacts className="text-4xl bg-slate-100 w-10 h-10 rounded-full mt-3  p-2 "/></NavLink>
            <NavLink to="" activeClassName="selected"><MdNotifications className="text-4xl bg-slate-100 w-10 h-10 rounded-full mt-3  p-2 "/></NavLink>
            <NavLink to="" activeClassName="selected"><AiTwotoneSetting className="text-4xl bg-slate-100 w-10 h-10 rounded-full mt-3  p-2 "/></NavLink>
            <NavLink to="" activeClassName="selected"><BsFillMoonFill className="text-4xl bg-slate-100 w-10 h-10 rounded-full mt-3  p-2 "/></NavLink>
            <NavLink to="" activeClassName="selected"><CgLogOff className="text-4xl bg-slate-100 w-10 h-10 rounded-full mt-3  p-2 "/></NavLink>
        </div>
    );
};

export default SideNav;