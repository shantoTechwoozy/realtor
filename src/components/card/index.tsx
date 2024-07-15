import React from "react";
import PropertyCard from "./propertycard";
import { properties } from "@/stripe/properties";
import SectionTitle from "../Common/SectionTitle";

const Cards: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 mt-5">
      <SectionTitle
        subtitle="Exclusive Deals"
        title="Our Featured Projects"
        paragraph="Shohidul Islam | shohid.realty@gmail.com | Ph: 408-649-1164 | Lic# 02160189"
        width="640px"
        center
      />
      <div className="flex flex-wrap -mx-4">
        {properties.map((property) => (
          <div key={property.id} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="h-full flex">
              <PropertyCard property={property} />
            </div>
          </div>
        ))}
      </div>
    
    </div>

  );
};

export default Cards;
