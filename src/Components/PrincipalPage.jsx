import React, { useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Input, Button, Card, CardBody, CardFooter, Image, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import { SearchIcon, ShoppingCartIcon, CameraIcon, ChevronDownIcon } from "lucide-react";
import DescripcionProducto from "./DescripcionProducto";
import { useNavigate } from "react-router-dom";



function PrincipalPage({pantallaEnviada}) {
    const [photos, setPhotos] = useState([
        { id: 1, title: "Album", price: 29.99, image: "src/Images/Album.jpg?height=150&width=200" },
        { id: 2, title: "Cyberpunk Alley", price: 34.99, image: "/placeholder.svg?height=200&width=300" },
        { id: 3, title: "Holographic Dreams", price: 39.99, image: "/placeholder.svg?height=200&width=300" },
        { id: 4, title: "Digital Sunset", price: 32.99, image: "/placeholder.svg?height=200&width=300" },
        { id: 5, title: "Digital Sunset", price: 32.99, image: "/placeholder.svg?height=200&width=300" },
        { id: 6, title: "Digital Sunset", price: 32.99, image: "/placeholder.svg?height=200&width=300" },
        { id: 7, title: "Digital Sunset", price: 32.99, image: "/placeholder.svg?height=200&width=300" },
        { id: 8, title: "Digital Sunset", price: 32.99, image: "/placeholder.svg?height=200&width=300" },
        { id: 9, title: "Digital Sunset", price: 32.99, image: "/placeholder.svg?height=200&width=300" },
      ]);
      const navigate = useNavigate();
      const [sortKey, setSortKey] = useState("default");
      const [idProducto, setIdProcuto] = useState(0);
      const [pantalla, setPantalla] = useState(pantallaEnviada ? pantallaEnviada : 0);
      const sortPhotos = (key) => {
        let sortedPhotos = [...photos];
        switch (key) {
          case "priceAsc":
            sortedPhotos.sort((a, b) => a.price - b.price);
            break;
          case "priceDesc":
            sortedPhotos.sort((a, b) => b.price - a.price);
            break;
          case "titleAsc":
            sortedPhotos.sort((a, b) => a.title.localeCompare(b.title));
            break;
          case "titleDesc":
            sortedPhotos.sort((a, b) => b.title.localeCompare(a.title));
            break;
          default:
            sortedPhotos.sort((a, b) => a.id - b.id);
        }
        setPhotos(sortedPhotos);
        setSortKey(key);
      };

      const handlePhotoClick = (idProducto) => {
        
        if(idProducto && idProducto>0){
            console.log("entrando" + idProducto)
            setPantalla(1);
            navigate(`/home/producto/${idProducto}`)

    }
      };

      switch (pantalla) {
        case 0: return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100">
      <header className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border-b border-pink-500/20 shadow-lg shadow-pink-500/10">
        <Navbar className="max-w-7xl mx-auto">
          <NavbarBrand>
            <div className="flex items-center space-x-2 bg-gray-800 px-3 py-1 rounded-full border border-pink-500/50">
              <CameraIcon className="text-pink-500" />
              <p className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-pink-600">
                FotografiaImportada
              </p>
            </div>
          </NavbarBrand>
          {/** Header 
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
          */}
        </Navbar>
      </header>

     <main className="py-12 px-4 max-w-7x23 mx-auto">
        <div className="mb-4">
        <h1 className="text-5xl font-bold text-center mb-8 bg-clip-text text-pink-400 to-pink-600">
            Fotografia Importada
        </h1>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
        <div className="w-full sm:w-auto flex-grow flex items-center">
  <Input
    classNames={{
      base: "h-10",
      mainWrapper: "h-full",
      input: "text-large input-no-focus pl-10 pt-2", // Añade un padding a la izquierda para el icono
      inputWrapper:
        "h-full font-normal text-gray-300 bg-gray-800/50 backdrop-blur-lg rounded-full border border-pink-500/30 hover:border-pink-500/70 transition-colors relative", // Añade "relative" aquí
    }}
    placeholder="Buscar Producto..."
    size="lg"
    startContent={<SearchIcon size={24} className="text-pink-500/70 absolute left-3 top-1/2 transform -translate-y-1/2" />}
    type="search"
  />
</div>

          <Dropdown>
            <DropdownTrigger>
            <Button
  variant="flat"
  className="bg-gray-800/50 text-pink-400 border border-pink-500/30 hover:border-pink-500/70 transition-colors rounded-full flex items-center" // Añade "flex items-center" aquí
        >
        <span className="mr-2">
            Ordenar por{" "}
            {sortKey === "default"
            ? "Default"
            : sortKey.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}
        </span>
        <ChevronDownIcon className="h-4 w-4" />
        </Button>

            </DropdownTrigger>
            <DropdownMenu 
              aria-label="Sort photos" 
              onAction={(key) => sortPhotos(key)}
              className="bg-gray-800/90 backdrop-blur-lg border border-pink-500/30"
            >
              <DropdownItem key="default" className="text-gray-300 hover:text-pink-400">Defecto</DropdownItem>
              <DropdownItem key="priceAsc" className="text-gray-300 hover:text-pink-400">Precio: Menor a Mayor</DropdownItem>
              <DropdownItem key="priceDesc" className="text-gray-300 hover:text-pink-400">Precio: Mayor a Menor</DropdownItem>
              <DropdownItem key="titleAsc" className="text-gray-300 hover:text-pink-400">Titulo: A to Z</DropdownItem>
              <DropdownItem key="titleDesc" className="text-gray-300 hover:text-pink-400">Titulo: Z to A</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {photos.map((photo) => (
           
            <Card 
              shadow="lg" 
              key={photo.id} 
              isPressable 
              
              className="bg-gray-800/50 backdrop-blur-lg border border-pink-500/30 hover:border-pink-500/70 transition-all duration-300 transform hover:-translate-y-1"
            >
                
              <CardBody className="overflow-visible p-0">
                <Image
                  shadow="lg"
                  radius="lg"
                  width="100%"
                  alt={photo.title}
                  className="w-full object-cover h-[200px]"
                  src={photo.image}
                />
              </CardBody>
              <CardFooter className="text-small justify-between bg-gray-900/50 backdrop-blur-lg">
        <div>
          <b className="text-pink-400">{photo.title}</b>
          <p className="text-gray-300">${photo.price.toFixed(2)}</p>
        </div>
        <Link to={`/home/producto/${photo.id}`}>
        <Button className="ml-auto w-full bg-pink-500 text-white hover:bg-pink-600 transition-color" onClick={() => handlePhotoClick(photo.id)}>
          Ver
        </Button>
        </Link>
        </CardFooter>
             
            </Card>
          ))}
        </div>
      </main>

    </div>
    )
case 1: return (
    <DescripcionProducto/>

    )   

    }

}

export default PrincipalPage;