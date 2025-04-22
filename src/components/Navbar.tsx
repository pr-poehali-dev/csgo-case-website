
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import { Menu, ShoppingCart, User } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 pt-4">
                <NavLink to="/" className="text-lg font-medium">
                  Главная
                </NavLink>
                <NavLink to="/cases" className="text-lg font-medium">
                  Все кейсы
                </NavLink>
                <NavLink to="/popular" className="text-lg font-medium">
                  Популярные
                </NavLink>
                <NavLink to="/new" className="text-lg font-medium">
                  Новинки
                </NavLink>
              </nav>
            </SheetContent>
          </Sheet>
          <NavLink to="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-primary">CS:Кейсы</span>
          </NavLink>
        </div>

        <nav className="hidden md:flex items-center space-x-4">
          <NavLink to="/" className="text-sm font-medium transition-colors hover:text-primary">
            Главная
          </NavLink>
          <NavLink to="/cases" className="text-sm font-medium transition-colors hover:text-primary">
            Все кейсы
          </NavLink>
          <NavLink to="/popular" className="text-sm font-medium transition-colors hover:text-primary">
            Популярные
          </NavLink>
          <NavLink to="/new" className="text-sm font-medium transition-colors hover:text-primary">
            Новинки
          </NavLink>
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <ShoppingCart className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
          <Button>Войти</Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
