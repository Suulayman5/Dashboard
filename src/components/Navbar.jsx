import React, { useState } from 'react';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ViewModuleOutlinedIcon from '@mui/icons-material/ViewModuleOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import PagesOutlinedIcon from '@mui/icons-material/PagesOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import PhotoLibraryOutlinedIcon from '@mui/icons-material/PhotoLibraryOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-lg p-4 flex justify-between items-center mt-3">

      <div className="hidden md:flex space-x-4 text-gray-600">
        <a href="/" className="hover:text-blue-600 flex items-center space-x-1">
          <HomeOutlinedIcon fontSize="small" />
          <span>Home</span>
        </a>
        <a href="/interface" className="hover:text-blue-600 flex items-center space-x-1">
          <ViewModuleOutlinedIcon fontSize="small" />
          <span>Interface</span>
        </a>
        <a href="/components" className="hover:text-blue-600 flex items-center space-x-1">
          <CategoryOutlinedIcon fontSize="small" />
          <span>Components</span>
        </a>
        <a href="/pages" className="hover:text-blue-600 flex items-center space-x-1">
          <PagesOutlinedIcon fontSize="small" />
          <span>Pages</span>
        </a>
        <a href="/forms" className="hover:text-blue-600 flex items-center space-x-1">
          <FormatListBulletedOutlinedIcon fontSize="small" />
          <span>Forms</span>
        </a>
        <a href="/gallery" className="hover:text-blue-600 flex items-center space-x-1">
          <PhotoLibraryOutlinedIcon fontSize="small" />
          <span>Gallery</span>
        </a>
        <a href="/documentation" className="hover:text-blue-600 flex items-center space-x-1">
          <DescriptionOutlinedIcon fontSize="small" />
          <span>Documentation</span>
        </a>
      </div>
      <div className="flex items-center space-x-4 justify-end md:hidden">
      <button
          onClick={toggleMobileMenu}
          className="md:hidden sm:block focus:outline-none"
        >
          {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button></div>

      {isMobileMenuOpen && (
        <div className="fixed top-16 left-0 w-full bg-white shadow-lg md:hidden">
          <div className="flex flex-col space-y-2 p-4 text-gray-600">
            <a href="/" className="hover:text-blue-600 flex items-center space-x-1">
              <HomeOutlinedIcon fontSize="small" />
              <span>Home</span>
            </a>
            <a href="/interface" className="hover:text-blue-600 flex items-center space-x-1">
              <ViewModuleOutlinedIcon fontSize="small" />
              <span>Interface</span>
            </a>
            <a href="/components" className="hover:text-blue-600 flex items-center space-x-1">
              <CategoryOutlinedIcon fontSize="small" />
              <span>Components</span>
            </a>
            <a href="/pages" className="hover:text-blue-600 flex items-center space-x-1">
              <PagesOutlinedIcon fontSize="small" />
              <span>Pages</span>
            </a>
            <a href="/forms" className="hover:text-blue-600 flex items-center space-x-1">
              <FormatListBulletedOutlinedIcon fontSize="small" />
              <span>Forms</span>
            </a>
            <a href="/gallery" className="hover:text-blue-600 flex items-center space-x-1">
              <PhotoLibraryOutlinedIcon fontSize="small" />
              <span>Gallery</span>
            </a>
            <a href="/documentation" className="hover:text-blue-600 flex items-center space-x-1">
              <DescriptionOutlinedIcon fontSize="small" />
              <span>Documentation</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
