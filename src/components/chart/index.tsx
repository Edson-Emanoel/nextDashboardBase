"use client"

import { DollarSign } from "lucide-react";
import { ChartConfig, ChartContainer } from "../ui/chart";
import {Bar, XAxis, BarChart, CartesianGrid} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export function ChartOverview(){

      const chartData = [
            { month: "Janeiro", desktop: 186, mobile: 80 },
            { month: "Fevereiro", desktop: 305, mobile: 200 },
            { month: "Março", desktop: 237, mobile: 120 },
            { month: "Abril", desktop: 73, mobile: 190 },
            { month: "Maio", desktop: 209, mobile: 130 },
            { month: "Junho", desktop: 214, mobile: 140 },
      ]


      const chartConfig = {
            desktop: {
                  label: "Desktop",
                  color: "#1e293b"
            },
            mobile: {
                  label: "Mobile",
                  color: "#334155"
            }
      } satisfies ChartConfig


      return(
            <Card className="max-w-[40%] min-w-[280px] bg-slate-900 text-white border-none flex flex-col gap-10 sm:w-[100%] sm:h-[400px] md:w-[100%] md:h-[400px] lg:w-[80%] lg:h-[40%]">
                  <CardHeader className="w-[100%] h-[10%]">
                        <div className="flex items-center justify-center">
                              <CardTitle className="text-lg sm:text-xl text-gray-300">
                                    Overview de vendas
                              </CardTitle>
                              <DollarSign className="ml-auto w-4 h-4" />
                        </div>
                  </CardHeader>
                  
                  <CardContent className="w-full h-[500px] sm:w-[100%] sm:h-[400px] lg:w-full lg:h-full">
                        <ChartContainer config={chartConfig} className="h-[100%] w-full" >
                              <BarChart data={chartData}>
                                    <CartesianGrid vertical={false} />
                                    <XAxis
                                          dataKey="month"
                                          tickLine={false}
                                          tickMargin={10}
                                          axisLine={false}
                                          style={{ fill: "#FFF" }}
                                          tickFormatter={(value) => value.slice(0, 3)}
                                    />
                                    <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
                                    <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
                              </BarChart>
                        </ChartContainer>
                  </CardContent>
            </Card>
      )
}