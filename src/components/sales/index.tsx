import { Users2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export function Sales() {
  return (
      <Card className="w-[100%] min-w-[300px] bg-slate-900 text-white border-none flex flex-col gap-10 sm:w-[100%] sm:h-[400px] md:w-[100%] md:h-[400px] lg:w-[80%] lg:h-[40%]">
      <CardHeader>
            <div className="flex items-center justify-between">
                  <CardTitle className="text-lg sm:text-xl text-gray-300">
                        Últimos Clientes
                  </CardTitle>
                  <Users2 />
            </div>
            <CardDescription>
                  Novos clientes nas últimas 24 horas
            </CardDescription>
      </CardHeader>

      <CardContent>
            <article className="flex items-center gap-2 border-b py-2">
                  <Avatar className="w-8 h-8">
                        <AvatarImage src="https://github.com/Edson-Emanoel.png" />
                        <AvatarFallback>Ee</AvatarFallback>
                  </Avatar>
                  <div>
                        <p className="text-sm sm:text-base font-semibold">Edson</p>
                        <span className="text-[12px] sm:text-sm text-slate-400">teste@gmail.com</span>
                  </div>
            </article>

            <article className="flex items-center gap-2 border-b py-2">
                  <Avatar className="w-8 h-8">
                        <AvatarImage src="https://github.com/Edson-Emanoel.png" />
                        <AvatarFallback>Ee</AvatarFallback>
                  </Avatar>
                  <div>
                        <p className="text-sm sm:text-base font-semibold">Edson</p>
                        <span className="text-[12px] sm:text-sm text-slate-400">teste@gmail.com</span>
                  </div>
            </article>
            
            <article className="flex items-center gap-2 border-b py-2">
                  <Avatar className="w-8 h-8">
                        <AvatarImage src="https://github.com/Edson-Emanoel.png" />
                        <AvatarFallback>Ee</AvatarFallback>
                  </Avatar>
                  <div>
                        <p className="text-sm sm:text-base font-semibold">Edson</p>
                        <span className="text-[12px] sm:text-sm text-slate-400">teste@gmail.com</span>
                  </div>
            </article>
      </CardContent>
      </Card>
  )
}