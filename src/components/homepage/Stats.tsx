import { statsData } from "@/static";
import React from "react";

const Stats = () => {
  return (
    <section className="px-4 mt-8 md:px-6 lg:px-12 xl:px-22 2xl:px-44">
      <div className="grid grid-cols-2 gap-y-8 md:flex md:justify-between md:items-center">
        {statsData.map((stat, index) => (
          <React.Fragment key={index}>
            <div className="flex flex-col items-center justify-center py-4">
              <h3 className="text-2xl font-bold text-black">
                {stat.value}
                {stat.unit && <span className="font-light">{stat.unit}</span>}
              </h3>
              <p className="text-gray-600">{stat.description}</p>
            </div>

            {/* Divider - only between items and on medium screens and above */}
            {index < statsData.length - 1 && (
              <div className="hidden md:block h-12 border-r border-black"></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Stats;
