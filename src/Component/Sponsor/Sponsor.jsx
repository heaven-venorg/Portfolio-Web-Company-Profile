import React from "react";

function Sponsor() {
  const SponsorImages = [
    {
      urlImage:
        "https://png.pngtree.com/png-vector/20230223/ourmid/pngtree-modern-demo-logo-vector-file-png-image_6614515.png",
      desc: "Lorem 1",
    },
    {
      urlImage:
        "https://png.pngtree.com/recommend-works/png-clipart/20241211/ourmid/pngtree-lorem-ipsum-design-png-image_14708721.png",
      desc: "Lorem 2",
    },
    {
      urlImage:
        "https://png.pngtree.com/png-vector/20220131/ourmid/pngtree-abstract-s-logo-company-flat-orange-vector-png-image_23589092.png",
      desc: "Lorem 3",
    },
  ];

  return (
    <section className="bg-white rounded-2xl py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="overflow-x-auto pb-4">
          <div className="flex items-center justify-start md:justify-center space-x-12 sm:space-x-16 md:space-x-20 flex-nowrap">
            {SponsorImages.map((sponsorImage) => (
              <div
                key={sponsorImage.urlImage}
                className="flex flex-col gap-2 items-center text-center flex-shrink-0 w-24 sm:w-32"
              >
                <img
                  src={sponsorImage.urlImage}
                  alt={sponsorImage.desc}
                  className="h-16 sm:h-20 w-auto max-w-full object-contain p-1 grayscale hover:grayscale-0 transition duration-300"
                />
                <p className="text-sm font-light text-gray-600">
                  {sponsorImage.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sponsor;
