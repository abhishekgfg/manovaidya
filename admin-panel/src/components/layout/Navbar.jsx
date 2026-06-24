import React, { useState } from 'react';
import { Bell, Search, Menu, LogOut, User as UserIcon, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Navbar({ sidebarOpen, setSidebarOpen }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear auth token/data
    localStorage.removeItem('token');
    
    // Redirect to login page
    navigate('/login');
  };

  return (
    <header className="sticky top-0 z-40 flex w-full bg-white drop-shadow-sm border-b border-slate-200">
      <div className="flex flex-grow items-center justify-between px-4 py-4 shadow-2 md:px-6 2xl:px-11">
        <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
          <button
            aria-controls="sidebar"
            onClick={(e) => {
              e.stopPropagation();
              setSidebarOpen(!sidebarOpen);
            }}
            className="z-50 block rounded-sm border border-slate-200 bg-white p-1.5 shadow-sm lg:hidden"
          >
            <Menu className="h-5 w-5 text-slate-600" />
          </button>
        </div>

        <div className="hidden sm:block">
          <form>
            <div className="relative">
              <button className="absolute left-0 top-1/2 -translate-y-1/2 pl-2">
                <Search className="h-4.5 w-4.5 text-slate-400" />
              </button>
              <input
                type="text"
                placeholder="Type to search..."
                className="w-full bg-transparent pl-9 pr-4 font-medium focus:outline-none xl:w-125"
              />
            </div>
          </form>
        </div>

        <div className="flex items-center gap-3 2xsm:gap-7">
          <ul className="flex items-center gap-2 2xsm:gap-4">
            <li>
              <button className="relative flex h-8.5 w-8.5 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-500 hover:text-primary transition">
                <span className="absolute -top-0.5 right-0 z-1 h-2 w-2 rounded-full bg-red-500">
                  <span className="absolute -z-1 inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75"></span>
                </span>
                <Bell className="h-4.5 w-4.5" />
              </button>
            </li>
          </ul>

          <div className="relative">
            <button 
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-4 focus:outline-none"
            >
              <span className="hidden text-right lg:block">
                <span className="block text-sm font-bold text-slate-800">Dr. Ankush Garg</span>
                <span className="block text-xs font-medium text-slate-500">Administrator</span>
              </span>
              <div className="h-10 w-10 overflow-hidden rounded-full border-2 border-white shadow-sm ring-2 ring-slate-100">
                <img 
                  src="https://ui-avatars.com/api/?name=Ankush+Garg&background=0F766E&color=fff&bold=true" 
                  alt="Dr. Ankush Garg" 
                  className="h-full w-full object-cover"
                />
              </div>
              <ChevronDown className="hidden h-4 w-4 text-slate-500 sm:block" />
            </button>

            {/* Dropdown Menu */}
            {dropdownOpen && (
              <>
                {/* Overlay to close dropdown when clicking outside */}
                <div 
                  className="fixed inset-0 z-40"
                  onClick={() => setDropdownOpen(false)}
                ></div>
                
                <div className="absolute right-0 mt-4 flex w-48 flex-col rounded-xl border border-slate-200 bg-white shadow-lg z-50 overflow-hidden">
                  <ul className="flex flex-col border-b border-slate-100 p-2">
                    <li>
                      <button className="flex w-full items-center gap-3.5 rounded-lg px-4 py-2.5 text-sm font-medium text-slate-600 duration-300 ease-in-out hover:bg-slate-50 hover:text-teal-700">
                        <UserIcon className="h-4.5 w-4.5" />
                        My Profile
                      </button>
                    </li>
                  </ul>
                  <div className="p-2">
                    <button 
                      onClick={handleLogout}
                      className="flex w-full items-center gap-3.5 rounded-lg px-4 py-2.5 text-sm font-medium text-red-600 duration-300 ease-in-out hover:bg-red-50"
                    >
                      <LogOut className="h-4.5 w-4.5" />
                      Log Out
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
