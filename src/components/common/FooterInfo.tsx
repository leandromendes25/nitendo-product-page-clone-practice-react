import Link from "next/link";
import React from "react";

export default function FooterInfo() {
  const aboutNitendo = [
    {
      title: "About Nitendo",
      footerLinks: [
        {
          src: "/",
          content: "Careers",
        },
        {
          src: "/",
          content: "Corporate Social Responsibility",
        },
      ],
    },
    {
      title: "Shop",
      footerLinks: [
        {
          src: "/",
          content: "Games",
        },
        {
          src: "/",
          content: "Hardware",
        },
        {
          src: "/",
          content: "Merchandise",
        },
        {
          src: "/",
          content: "Sales & deals",
        },
        {
          src: "/",
          content: "Exclusives",
        },
        {
          src: "/",
          content: "Online service",
        },
        {
          src: "/",
          content: "Nitendo NY store",
        },
      ],
    },
    {
      title: "My Nitendo Store orders",
      footerLinks: [
        {
          src: "/",
          content: "Order details",
        },
        {
          src: "/",
          content: "Shipping info",
        },
        {
          src: "/",
          content: "Returns & exchanges",
        },
        {
          src: "/",
          content: "FAQ",
        },
      ],
    },
    {
      title: "Support",
      footerLinks: [
        {
          src: "/",
          content: "Nitendo Switch",
        },
        {
          src: "/",
          content: "Nitendo Account",
        },
        {
          src: "/",
          content: "Other systems",
        },
        {
          src: "/",
          content: "Repairs",
        },
        {
          src: "/",
          content: "Nitendo product recycling",
        },
      ],
    },
    {
      title: "Parents",
      footerLinks: [
        {
          src: "/",
          content: "Info for parents",
        },
        {
          src: "/",
          content: "Parental control",
        },
      ],
    },
    {
      title: "Privacy",
      footerLinks: [
        {
          src: "/",
          content: "Privacy policy",
        },
        {
          src: "/",
          content: "Cookies and interest-based ads",
        },
      ],
    },
    {
      title: "Community",
      footerLinks: [
        {
          src: "/",
          content: "Community guidelines",
        },
        {
          src: "/",
          content: "Online safety guidelines principles",
        },
      ],
    },
  ];

  return (
    <section className="mx-4 grid justify-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
      {aboutNitendo.map((nitendo, index) => (
        <div key={index} className="border-l pl-5  max-w-52 mt-8">
          <h3 className="font-bold">{nitendo.title}</h3>
          {nitendo.footerLinks.map((value, key) => (
            <Link key={key} className="block leading-8" href={value.src}>
              <p className="text-nitendo-red font-semibold">{value.content}</p>
            </Link>
          ))}
        </div>
      ))}
    </section>
  );
}
