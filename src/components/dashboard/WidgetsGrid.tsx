"use client";
import React from "react";
import { SimpleWidget } from "./SimpleWidget";
import { useAppSelector } from "@/store";
import { IoCartOutline } from "react-icons/io5";

export const WidgetsGrid = () => {

const isCart = useAppSelector((store) => store.counter.count);

  return (
    <div className="flex flex-wrap p-2 justify-center items-center">
      <SimpleWidget title={isCart.toString()} subtitle="Productos Agregados" label="Contador" icon={<IoCartOutline size={70} className="text-blue-600" />} href="/dashboard/counter" />
    </div>
  );
};
