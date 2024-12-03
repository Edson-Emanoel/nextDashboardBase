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
            <Card className="w-[38%] min-w-[300px] max-h-[31.25rem] bg-slate-900 text-white border-none">
                  <CardHeader>
                        <div className="flex items-center justify-center">
                              <CardTitle className="text-lg sm:text-xl text-gray-300">
                                    Overview de vendas
                              </CardTitle>
                              <DollarSign className="ml-auto w-4 h-4" />
                        </div>
                  </CardHeader>
                  
                  <CardContent>
                        <ChartContainer config={chartConfig} className="min-h-[20.25rem] max-h-[31.25rem] w-full" >
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