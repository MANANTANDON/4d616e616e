import { Container } from "@mui/material";
import Image from "next/image";
import React from "react";

export default function Day6() {
  const people = [
    {
      name: "John",
      src: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=900",
      amount: "$50.00",
      status: "Received",
    },
    {
      name: "Sarah",
      src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=900",
      amount: "$500.00",
      status: "Pending",
    },
    {
      name: "Alice",
      src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=900",
      amount: "$50.00",
      status: "Failed",
    },
    {
      name: "Debby",
      src: "https://images.unsplash.com/photo-1535295972055-1c762f4483e5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=900",
      amount: "$500.00",
      status: "Pending",
    },
    {
      name: "Frank",
      src: "https://images.unsplash.com/photo-1522556189639-b150ed9c4330?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=900",
      amount: "$50.00",
      status: "Failed",
    },
    {
      name: "Steve",
      src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=900",
      amount: "$500.00",
      status: "Received",
    },
  ];
  return (
    <>
      <div className="h-screen w-screen bg-[#F4F4F4] overflow-scroll py-5 ">
        <Container maxWidth="xs">
          <div className="bg-[#FFFFFF] p-5 rounded-2xl -mx-3">
            {/* Name of the User */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="relative overflow-hidden h-10 w-10 rounded-[100px]">
                  <Image
                    src={"/manan.jpeg"}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                  />
                </div>
                <div>
                  <div className="sfpro text-[#575757] text-sm">
                    Welcome back,
                  </div>
                  <div className="sfpro text-[#010101] text-md text-md">
                    4e616e616e
                  </div>
                </div>
              </div>
              <div className="sfpro">􀋙</div>
            </div>
            {/* Balance */}
            <div className="my-4">
              <div className="text-[#666666] text-sm">Total Balance</div>
              <div className="flex items-baseline-last gap-4">
                <div className="text-xl font-bold text-[#2A2A2A]">
                  $25,870.00
                </div>
                <div className="sfpro bg-[#FAFAFA] text-xs py-1 px-1.5 w-fit rounded-[100px] ">
                  􀎠
                </div>
              </div>
            </div>
            {/* Savings and Current */}
            <div className="my-4 flex items-center gap-4">
              <div className="bg-[#F4F4F4] py-2 px-4 flex items-center gap-5 rounded-xl w-full">
                <div className="sfpro bg-[#FFFFFF] w-fit px-2 py-1 rounded-[100px]">
                  􀄮
                </div>
                <div>
                  <div className="text-[#636363] text-sm">Savings</div>
                  <div>$16,600</div>
                </div>
              </div>
              <div className="bg-[#F4F4F4] py-2 px-4 flex items-center gap-5 rounded-xl w-full">
                <div className="sfpro bg-[#FFFFFF] w-fit px-2 py-1 rounded-[100px]">
                  􀰾
                </div>
                <div>
                  <div className="text-[#636363] text-sm">Current</div>
                  <div>$9,270</div>
                </div>
              </div>
            </div>
            {/* Deposit Button */}
            <div className="my-4">
              <button className="bg-[#252525] py-3 w-full text-sm text-[#F4F4F4] rounded-md cursor-pointer">
                Deposit
              </button>
            </div>
            {/* People */}
            <div className="my-6 flex gap-4 overflow-scroll">
              <div>
                <div className="sfpro bg-[#F4F4F4] h-[38px] w-[38px] rounded-[100px] shrink-0 flex items-center justify-center">
                  􀅼
                </div>
                <div className="text-sm text-center mt-2">Add</div>
              </div>
              {people?.map((item, key) => (
                <div key={key}>
                  <div className="relative overflow-hidden h-[38px] w-[38px] rounded-[100px]">
                    <Image
                      src={item.src}
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                    />
                  </div>
                  <div className="text-sm text-center mt-2">{item.name}</div>
                </div>
              ))}
            </div>
            {/* Transaction */}
            <div className="mt-7 flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <div className="text-[#2B2B2B] text-sm font-medium">
                  Recent Transactions
                </div>
                <div className="text-[#3E3E3E] text-sm">See all</div>
              </div>
              {people?.map((item, key) => (
                <div key={key} className="flex items-center justify-between">
                  <div className="flex items-baseline-last gap-2">
                    <div className="relative overflow-hidden h-[38px] w-[38px] rounded-[100px]">
                      <Image
                        src={item.src}
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                      />
                    </div>
                    <div>
                      <div className="text-base font-medium">{item.name}</div>
                      <div className="text-xs font-medium text-[#797979] mt-1">
                        Today
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="text-base font-medium">{item.amount}</div>
                    <div
                      className="text-sm font-normal text-right mt-1"
                      style={{
                        color:
                          item.status === "Received"
                            ? "#33B563"
                            : item.status === "Pending"
                            ? "#C9A11B"
                            : item.status === "Failed"
                            ? "#C6100E"
                            : "",
                      }}
                    >
                      {item.status}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
