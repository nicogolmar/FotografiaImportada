import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Input, Textarea, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import { CameraIcon, ShoppingCartIcon, UploadIcon, PlusIcon } from "lucide-react";

function AgregarProductos() {
  const handleSubmit = () => {
    e.preventDefault();
    // Here you would typically handle the form submission
    console.log("Form submitted");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100">
      <header className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border-b border-pink-500/20 shadow-lg shadow-pink-500/10">
        <Navbar className="max-w-7xl mx-auto">
          <NavbarBrand>
            <div className="flex items-center space-x-2 bg-gray-800 px-3 py-1 rounded-full border border-pink-500/50">
              <CameraIcon className="text-pink-500" />
              <p className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-pink-600">
                FutureShot
              </p>
            </div>
          </NavbarBrand>
          <NavbarContent className="hidden sm:flex gap-4" justify="center">
            <NavbarItem>
              <Link color="foreground" href="#" className="text-gray-300 hover:text-pink-400 transition-colors">
                Explore
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="#" className="text-gray-300 hover:text-pink-400 transition-colors">
                Artists
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="#" className="text-gray-300 hover:text-pink-400 transition-colors">
                About
              </Link>
            </NavbarItem>
          </NavbarContent>
          <NavbarContent justify="end">
            <NavbarItem>
              <Button isIconOnly variant="flat" className="bg-pink-500 text-white rounded-full" aria-label="Shopping Cart">
                <ShoppingCartIcon className="h-5 w-5" />
              </Button>
            </NavbarItem>
          </NavbarContent>
        </Navbar>
      </header>

      <main className="py-12 px-4 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-pink-600">
          Add New Product
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="title" className="text-pink-400 font-semibold">Title</label>
            <Input
              id="title"
              placeholder="Enter product title"
              className="bg-gray-800/50 border border-pink-500/30 text-gray-100 placeholder-gray-400"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="description" className="text-pink-400 font-semibold">Description</label>
            <Textarea
              id="description"
              placeholder="Enter product description"
              className="bg-gray-800/50 border border-pink-500/30 text-gray-100 placeholder-gray-400"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="price" className="text-pink-400 font-semibold">Price</label>
            <Input
              id="price"
              type="number"
              placeholder="Enter price"
              startContent={
                <div className="pointer-events-none flex items-center">
                  <span className="text-gray-400">$</span>
                </div>
              }
              className="bg-gray-800/50 border border-pink-500/30 text-gray-100 placeholder-gray-400"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="artist" className="text-pink-400 font-semibold">Artist</label>
            <Input
              id="artist"
              placeholder="Enter artist name"
              className="bg-gray-800/50 border border-pink-500/30 text-gray-100 placeholder-gray-400"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="dimensions" className="text-pink-400 font-semibold">Dimensions</label>
            <Input
              id="dimensions"
              placeholder="Enter dimensions (e.g., 4000x3000 px)"
              className="bg-gray-800/50 border border-pink-500/30 text-gray-100 placeholder-gray-400"
            />
          </div>

          <div className="space-y-2">
            <label className="text-pink-400 font-semibold">File Format</label>
            <Dropdown>
              <DropdownTrigger>
                <Button 
                  variant="flat" 
                  className="w-full bg-gray-800/50 text-gray-300 border border-pink-500/30 hover:border-pink-500/70 transition-colors"
                >
                  Select File Format
                </Button>
              </DropdownTrigger>
              <DropdownMenu 
                aria-label="File format options" 
                className="bg-gray-800/90 backdrop-blur-lg border border-pink-500/30"
              >
                <DropdownItem key="jpeg" className="text-gray-300 hover:text-pink-400">JPEG</DropdownItem>
                <DropdownItem key="png" className="text-gray-300 hover:text-pink-400">PNG</DropdownItem>
                <DropdownItem key="tiff" className="text-gray-300 hover:text-pink-400">TIFF</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>

          <div className="space-y-2">
            <label className="text-pink-400 font-semibold">License</label>
            <Dropdown>
              <DropdownTrigger>
                <Button 
                  variant="flat" 
                  className="w-full bg-gray-800/50 text-gray-300 border border-pink-500/30 hover:border-pink-500/70 transition-colors"
                >
                  Select License Type
                </Button>
              </DropdownTrigger>
              <DropdownMenu 
                aria-label="License options" 
                className="bg-gray-800/90 backdrop-blur-lg border border-pink-500/30"
              >
                <DropdownItem key="standard" className="text-gray-300 hover:text-pink-400">Standard License</DropdownItem>
                <DropdownItem key="extended" className="text-gray-300 hover:text-pink-400">Extended License</DropdownItem>
                <DropdownItem key="commercial" className="text-gray-300 hover:text-pink-400">Commercial License</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>

          <div className="space-y-2">
            <label htmlFor="image" className="text-pink-400 font-semibold">Upload Image</label>
            <div className="flex items-center justify-center w-full">
              <label htmlFor="image" className="flex flex-col items-center justify-center w-full h-64 border-2 border-pink-500/30 border-dashed rounded-lg cursor-pointer bg-gray-800/50 hover:bg-gray-700/50 transition-colors">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <UploadIcon className="w-8 h-8 mb-4 text-pink-400" />
                  <p className="mb-2 text-sm text-gray-300"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                  <p className="text-xs text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                </div>
                <input id="image" type="file" className="hidden" />
              </label>
            </div>
          </div>

          <Button type="submit" className="w-full bg-pink-500 text-white hover:bg-pink-600 transition-colors">
            <PlusIcon className="w-5 h-5 mr-2" />
            Add New Product
          </Button>
        </form>
      </main>
    </div>
  );
}


export default AgregarProductos;