import React, { useEffect } from "react";
import { Typography } from "@material-tailwind/react";
import NavigationbarWithDropdownMultilevelMenu from "../components/Navbar";
import FooterWithSitemap from "../components/Footer";
import Card from "../components/Cards";
import refractoryMaterials from "../data/refractoryMaterials";

export default function RefractoryMaterials() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-amber-100">
      <NavigationbarWithDropdownMultilevelMenu />

      <div className="relative h-[60vh] md:h-[80vh] w-full">
        <div className="absolute inset-0">
          <img
            src="/images/Refractory-Products.jpg?height=800&width=1200"
            alt="Warehouse"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative h-full flex items-center justify-center">
          <Typography
            variant="h1"
            color="white"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-center"
          >
            REFRACTORY MATERIALS
          </Typography>
        </div>
      </div>

      <div className="flex flex-wrap gap-8 justify-center py-6">
        {refractoryMaterials.map((item) => {
          return (
            <Card
              title={item.title}
              subTitle={item.subTitle}
              imgUrl={item.imgUrl}
              links={item.links}
            />
          );
        })}
      </div>
      <FooterWithSitemap />
    </div>
  );
}
