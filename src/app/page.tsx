import { ChartOverview } from "@/components/chart";
import { Sales } from "@/components/sales";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BadgeDollarSign, DollarSign, Percent, Users } from "lucide-react";

export default function Home() {
  return (
    <main className="sm:ml-20 p-4">
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-slate-900 text-white border-none">
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl select-none">
                Total Vendas
              </CardTitle>
              <DollarSign className="ml-auto w-5 h-5" />
            </div>

            <CardDescription>
              Total de vendas em 90 dias
            </CardDescription>
          </CardHeader>

          <CardContent>
            <p className="text-base sm:text-lg font-bold">R$ 40.000</p>
          </CardContent>
        </Card>

        <Card className="bg-slate-900 text-white border-none">
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl select-none">
                Novos Clientes
              </CardTitle>
              <Users className="ml-auto w-5 h-5" />
            </div>

            <CardDescription>
              Novos clientes em 30 dias
            </CardDescription>
          </CardHeader>

          <CardContent>
            <p className="text-base sm:text-lg font-bold">234</p>
          </CardContent>
        </Card>

        <Card className="bg-slate-900 text-white border-none">
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl select-none">
                Pedidos hoje
              </CardTitle>
              <Percent className="ml-auto w-5 h-5" />
            </div>

            <CardDescription>
              Total de pedidos hoje
            </CardDescription>
          </CardHeader>

          <CardContent>
            <p className="text-base sm:text-lg font-bold">65</p>
          </CardContent>
        </Card>

        <Card className="bg-slate-900 text-white border-none">
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl select-none">
                Total de Pedidos hoje
              </CardTitle>
              <BadgeDollarSign className="ml-auto w-5 h-5" />
            </div>

            <CardDescription>
              Total de pedidos em 30 dias
            </CardDescription>
          </CardHeader>

          <CardContent>
            <p className="text-base sm:text-lg font-bold">2300</p>
          </CardContent>
        </Card>
      </section>
      
      <section className="mt-4 flex flex-col md:flex-row gap-4">
        <ChartOverview />
        <Sales />
      </section>
    </main>
  );
}