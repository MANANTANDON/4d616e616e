import {
  Avatar,
  AvatarGroup,
  Box,
  Container,
  Grid2,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import React from "react";

export default function Day9() {
  const laptop = useMediaQuery("(min-width:769px)");

  const menu = [
    { name: "About", link: "/" },
    { name: "Services", link: "/services" },
    { name: "Gallery", link: "/gallery" },
    { name: "Pricing", link: "/pricing" },
  ];

  const dogs = [
    {
      title: "Pet Boarding & Daycare",
      link: "https://images.unsplash.com/photo-1597633425046-08f5110420b5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGRvZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=900",
      description:
        "Safe and fun space for your pets while you're away -- care included.",
    },
    {
      title: "Training & Behaviour Support",
      link: "https://images.unsplash.com/photo-1504826260979-242151ee45b7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRvZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=900",
      description:
        "Positive training methods to build good habits for dogs of all ages.",
    },
    {
      title: "Veterinary check-ups",
      link: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGRvZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=900",
      description:
        "Regular health exam & preventive care to keep your pets in their best shapes.",
    },
  ];

  const people = [
    "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=900",
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=900",
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=900",
    "https://images.unsplash.com/photo-1535295972055-1c762f4483e5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=900",
  ];

  return (
    <>
      {!laptop && (
        <div className="flex items-center justify-center h-screen">
          <div className=" border border-slate-600 bg-slate-800 p-5 text-zinc-100 rounded-3xl">
            Switch to Desktop
          </div>
        </div>
      )}
      {laptop && (
        <div className="h-screen w-screen bg-[#EFECE5] overflow-scroll">
          <Container maxWidth="lg" className="">
            {/* Header */}
            <div className="flex items-center justify-between py-8">
              <div className="sfpro text-[22px]">
                􂀇 <span className="font-black">Pawsy</span>
              </div>
              <div className="bg-[#F7F6F2] border border-[#FFFEF9] rounded-[100px] flex items-center gap-4 py-2 px-6 w-fit">
                {menu?.map((item, key) => (
                  <Box
                    component="a"
                    href={item.link}
                    key={key}
                    className={
                      item.link === "/"
                        ? "#171612 font-semibold"
                        : "#474642 font-normal"
                    }
                  >
                    {item.name}
                  </Box>
                ))}
              </div>
              <div>
                <button className="sfpro px-6 py-2 bg-zinc-900 text-zinc-100 rounded-[100px] cursor-pointer">
                  Contact
                </button>
              </div>
            </div>
            {/* Hero Section */}
            <Grid2 container className="pt-20 pb-10 flex items-center ">
              <Grid2 size={6}>
                <div className="flex items-center gap-4">
                  <div>
                    <AvatarGroup spacing="small">
                      {people.map((item, key) => (
                        <Avatar alt="Manan Tandon" src={item} key={key} />
                      ))}
                    </AvatarGroup>
                  </div>
                  <div className="text-[#17140F] font-medium">
                    Based on 2K+ Reviewed
                  </div>
                </div>
                <div>
                  <div className="text-[100px] md:text-[90px] font-medium">
                    Where Pets
                  </div>
                  <div className="text-[100px] font-medium -mt-10">
                    Feel <i className="font-light">Home</i>
                  </div>
                </div>
                <div className="text-[#686560] text-[18px] w-100">
                  From grooming and training to veterinary check-ups, we provide
                  trusted pet care services that keep tail wagging paws happy.
                </div>
                <div className="my-8">
                  <button className="sfpro px-6 py-4 bg-zinc-900 text-zinc-100 text-[15px] rounded-[100px] cursor-pointer">
                    Book Appointment
                  </button>
                </div>
              </Grid2>
              <Grid2 size={6} className="flex items-center justify-center">
                <Image
                  src={"/images/designs/girlwithdog.png"}
                  layout="intrinsic"
                  height={678}
                  width={440}
                />
              </Grid2>
            </Grid2>
            {/* Pets Cards */}
            <div className="pb-20">
              <div className="text-center text-[40px] font-medium text-[#080806]">
                Our pet care <i className="font-light">services</i>
              </div>
              <div className="my-4">
                <div className="text-center text-base font-normal text-[#7C7974]">
                  From play time to health check-ups, we provide everything
                </div>
                <div className="text-center text-base font-normal text-[#7C7974]">
                  your furry friends needs to live a happy, healthy life.
                </div>
              </div>
              <div className="flex items-center gap-5 mt-15">
                {dogs?.map((item, key) => (
                  <div
                    className="bg-[#FFFFFF] w-full p-6 rounded-2xl"
                    key={key}
                  >
                    <div className="text-[#000000] font-medium text-[25px] w-55">
                      {item.title}
                    </div>
                    <div className="relative overflow-hidden h-[150px] w-full rounded-[100px] my-10">
                      <Image
                        src={item.link}
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                      />
                    </div>
                    <div className="text-[#797979] font-medium text-[18px]">
                      {item.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </div>
      )}
    </>
  );
}
