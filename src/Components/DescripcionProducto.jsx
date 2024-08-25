import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, Card, CardBody, Image, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import { CameraIcon, ShoppingCartIcon, HeartIcon, ShareIcon, ChevronDownIcon, StarIcon } from "lucide-react";
import { Link ,useNavigate, useParams} from "react-router-dom";
import PrincipalPage from "./PrincipalPage";
function DescripcionProducto() {
    const navigate = useNavigate();

    const { id } = useParams();
    console.log(id)
    const product = {
        id: id,
        title: "Album",
        price: 129.99,
        description: "Album Fotografico 50 hojas.",
        image: "/src/Images/Album.jpg?height=150&width=200",
        Colores: "Rojo",
        dimensions: "4000x3000 px",
        Material: "Cuerina",
        license: "Standard License",
      };
  
      const handleDirection = () => {
        navigate("/");
      };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100">
      <header className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border-b border-pink-500/20 shadow-lg shadow-pink-500/10">
        <Navbar className="max-w-7xl mx-auto">
          <NavbarBrand>
            <div className="flex items-center space-x-2 bg-gray-800 px-3 py-1 rounded-full border border-pink-500/50">
              <CameraIcon className="text-pink-500" />
             
              <p className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-pink-600 textoRegreso"  onClick={handleDirection}>
                FotografiaImportada
              </p>
              
            </div>
          </NavbarBrand>
          <NavbarContent className="hidden sm:flex gap-4" justify="center">
            <NavbarItem>
              <Link to="/" color="foreground"  className="text-gray-300 hover:text-pink-400 transition-colors">
                Inicio
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="#" className="text-gray-300 hover:text-pink-400 transition-colors">
                Contacto
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="#" className="text-gray-300 hover:text-pink-400 transition-colors">
                Login
              </Link>
            </NavbarItem>
          </NavbarContent>

        </Navbar>
      </header>

      <main className="py-12 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
        <div className="flex items-center ml-4">
    <Image
        src={product.image}
        alt={product.title}
        style={{ width: '550px', height: '520px' }}
        className="object-cover rounded-lg border border-pink-500/30"
    />
</div>


          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-pink-400">{product.title}</h1>
            <p className="text-2xl font-bold text-pink-400">${product.price.toFixed(2)}</p>
            <p className="text-gray-300">{product.description}</p>
            <div className="space-y-4">
              <div>
                <span className="font-semibold text-pink-400">Colores:</span> {product.Colores}
              </div>
              <div>
                <span className="font-semibold text-pink-400">Dimensions:</span> {product.dimensions}
              </div>
              <div>
                <span className="font-semibold text-pink-400">Material:</span> {product.Material}
              </div>
              <div>
                <span className="font-semibold text-pink-400">Marca:</span> {product.license}
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
        <Button className="w-full bg-pink-500 text-white hover:bg-pink-600 transition-colors">
          Contactar
        </Button>
        <Button className="bg-gray-800 text-pink-400 border border-pink-500/30 hover:border-pink-500/70 transition-colors flex items-center">
          <ShareIcon className="w-5 h-5 mr-2" />
          Share
        </Button>
      </div>
          </div>
        </div>

      </main>
    </div>
  );
}
export default DescripcionProducto;