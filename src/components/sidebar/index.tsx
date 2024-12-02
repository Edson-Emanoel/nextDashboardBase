import Link from "next/link";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet";
import { Home, Package, PanelBottom, Settings2, ShoppingBag, Users } from "lucide-react";

export function Sidebar(){
      return(
            <div className="flex w-full flex-col bg-slate-800">
                  
                  <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
                        <header className="sticky top-0 z-30 flex h-14 items-center px-4 border-b gap-4 sm:static sm:h-auto sm:border-0">
                              <Sheet>
                                    <SheetTitle className="hidden">Menu</SheetTitle>

                                    <SheetTrigger asChild>
                                          <Button size="icon" className="sm:hidden bg-slate-600 hover:bg-slate-700 transition-colors">
                                                <PanelBottom className="w-5 h-5" />
                                                <span className="sr-only">Abrir</span>
                                          </Button>
                                    </SheetTrigger>

                                    <SheetContent className="bg-slate-700">
                                          <nav className="grid gap-6 text-lg font-medium">
                                                <Link
                                                      href="#"
                                                      className="flex items-center justify-center h-10 w-10 bg-slate-800 rounded-full text-lg"
                                                      prefetch={false}
                                                >
                                                      <Package className="w-5 h-5 text-zinc-200 transition-all" />
                                                      <span className="text-zinc-200 sr-only">Logo</span>
                                                </Link>
                                                
                                                <Link
                                                      href="#"
                                                      className="flex items-center gap-4 px-2.5 text-zinc-300 hover:text-zinc-400 transition-colors"
                                                      prefetch={false}
                                                >
                                                      <Home className="w-5 h-5 transition-all" />
                                                      Início
                                                </Link>
                                                
                                                <Link
                                                      href="#"
                                                      className="flex items-center gap-4 px-2.5 text-zinc-300 hover:text-zinc-400 transition-colors"
                                                      prefetch={false}
                                                >
                                                      <ShoppingBag className="w-5 h-5 transition-all" />
                                                      Pedidos
                                                </Link>
                                                
                                                <Link
                                                      href="#"
                                                      className="flex items-center gap-4 px-2.5 text-zinc-300 hover:text-zinc-400 transition-colors"
                                                      prefetch={false}
                                                >
                                                      <Users className="w-5 h-5 transition-all" />
                                                      Clientes
                                                </Link>
                                                
                                                <Link
                                                      href="#"
                                                      className="flex items-center gap-4 px-2.5 text-zinc-300 hover:text-zinc-400 transition-colors"
                                                      prefetch={false}
                                                >
                                                      <Settings2 className="w-5 h-5 transition-all" />
                                                      Configurações
                                                </Link>
                                          </nav>
                                    </SheetContent>
                              </Sheet>
                        </header>
                  </div>
            </div>
      )
}