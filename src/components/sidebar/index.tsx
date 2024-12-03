import Link from "next/link";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet";
import { Home, LogOut, Package, PanelBottom, Settings2, ShoppingBag, Users } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";

export function Sidebar(){
      return(
            <div className="flex w-full flex-col bg-slate-800">
                  {/* Menu Desktop(para PC) */}
                  <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 border-r bg-slate-800 sm:flex flex-col">
                        <nav className="flex flex-col items-center gap-4 px-2 py-5">
                              <TooltipProvider>
                                    <Link
                                          href="#"
                                          className="flex items-center justify-center h-10 w-10 bg-slate-600 rounded-full text-lg"
                                          prefetch={false}
                                    >
                                          <Package className="w-5 h-5 text-zinc-200 transition-all" />
                                          <span className="text-zinc-200 sr-only">Logo</span>
                                    </Link>

                                    <Tooltip>
                                          <TooltipTrigger asChild>
                                              <Link
                                                      href="#"
                                                      className="flex items-center justify-center h-10 w-10 bg-slate-800 rounded-full text-lg hover:text-zinc-400 transition-colors"
                                                      prefetch={false}
                                                >
                                                      <Home className="w-5 h-5" />
                                                      <span className="text-zinc-200 sr-only">Início</span>
                                                </Link>  
                                          </TooltipTrigger>
                                          <TooltipContent side="right" className="bg-slate-600 text-neutral-200 border-none">Início</TooltipContent>
                                    </Tooltip>

                                    <Tooltip>
                                          <TooltipTrigger asChild>
                                              <Link
                                                      href="#"
                                                      className="flex items-center justify-center h-10 w-10 bg-slate-800 rounded-full text-lg hover:text-zinc-400 transition-colors"
                                                      prefetch={false}
                                                >
                                                      <Package className="w-5 h-5" />
                                                      <span className="text-zinc-200 sr-only">Pedidos</span>
                                              </Link>  
                                          </TooltipTrigger>
                                          <TooltipContent side="right" className="bg-slate-600 text-neutral-200 border-none">Pedidos</TooltipContent>
                                    </Tooltip>

                                    <Tooltip>
                                          <TooltipTrigger asChild>
                                              <Link
                                                      href="#"
                                                      className="flex items-center justify-center h-10 w-10 bg-slate-800 rounded-full text-lg hover:text-zinc-400 transition-colors"
                                                      prefetch={false}
                                                >
                                                      <Users className="w-5 h-5" />
                                                      <span className="text-zinc-200 sr-only">Clientes</span>
                                              </Link>  
                                          </TooltipTrigger>
                                          <TooltipContent side="right" className="bg-slate-600 text-neutral-200 border-none">Clientes</TooltipContent>
                                    </Tooltip>

                                    <Tooltip>
                                          <TooltipTrigger asChild>
                                              <Link
                                                      href="#"
                                                      className="flex items-center justify-center h-10 w-10 bg-slate-800 rounded-full text-lg hover:text-zinc-400 transition-colors"
                                                      prefetch={false}
                                                >
                                                      <Settings2 className="w-5 h-5" />
                                                      <span className="text-zinc-200 sr-only">Configurações</span>
                                              </Link>  
                                          </TooltipTrigger>
                                          <TooltipContent side="right" className="bg-slate-600 text-neutral-200 border-none">Configurações</TooltipContent>
                                    </Tooltip>
                              </TooltipProvider>
                        </nav>

                        <nav className="mt-auto flex flex-col items-center gap-4 px-2 py-5">
                              <TooltipProvider>
                                    <Tooltip>
                                          <TooltipTrigger asChild>
                                              <Link
                                                      href="#"
                                                      className="flex items-center justify-center h-10 w-10 text-red-600 hover:text-red-500 transition-colors"
                                                      prefetch={false}
                                                >
                                                      <LogOut className="w-5 h-5" />
                                                      <span className="text-zinc-200 sr-only">Sair</span>
                                              </Link>  
                                          </TooltipTrigger>
                                          <TooltipContent side="right" className="bg-slate-600 text-neutral-200 border-none">Sair</TooltipContent>
                                    </Tooltip>
                              </TooltipProvider>
                        </nav>
                  </aside>

                  {/* Menu Mobile */}
                  <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14 sm:hidden">
                        <header className="sticky top-0 z-30 flex h-14 items-center px-4 border-b gap-4 sm:static sm:h-auto sm:border-0">
                              <Sheet>
                                    <SheetTrigger asChild>
                                          <Button size="icon" className="sm:hidden bg-slate-600 hover:bg-slate-700 transition-colors">
                                                <PanelBottom className="w-5 h-5" />
                                                <span className="sr-only">Abrir</span>
                                          </Button>
                                    </SheetTrigger>

                                    <SheetContent side="left" className="bg-slate-700">
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
                                    
                                    <SheetTitle className="text-neutral-300 sm:hidden">Menu</SheetTitle>
                              </Sheet>
                        </header>
                  </div>
            </div>
      )
}