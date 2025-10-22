import { Container } from "@mui/material";
import Image from "next/image";
import React from "react";

export default function Day4() {
  //   const getData = async () => {
  //     try {
  //       const res = await axios.post(
  //         "http://10.58.15.6:190/fineapis/CountryScoring/CountryRanking"
  //       );
  //       console.log(res);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };

  //   useEffect(() => {
  //     getData();
  //   }, []);

  const People = [
    { name: "You", src: "/manan.jpeg", status: "Paid" },
    { name: "Olabode", src: "/manan.jpeg", status: "Paid" },
    { name: "Lukmon", src: "/manan.jpeg", status: "Paid" },
    { name: "Hope", src: "/manan.jpeg", status: "Unpaid" },
    { name: "Dara", src: "/manan.jpeg", status: "Unpaid" },
  ];
  return (
    <>
      <div className="h-screen w-screen bg-[#FFFFFF]">
        <Container
          maxWidth="xs"
          className="h-screen bg-[#F8F9FD] overflow-scroll"
        >
          {/* Header */}
          <div className="flex items-center justify-between py-5">
            <div className="sfpro flex items-center justify-center h-[44px] w-[44px] bg-[#FFFFFF] rounded-[50%]">
              􀄪
            </div>
            <div className="font-bold text-[18px] text-[#090C1B]">
              Payment Status
            </div>
            <div className="sfpro flex items-center justify-center h-[44px] w-[44px] bg-[#FFFFFF] rounded-[50%]">
              􀰞
            </div>
          </div>
          {/* Main Design*/}
          <div className="py-5">
            <div className="h-[100px] rounded-[15px] shadow-xl py-[12px] px-[20px] bg-[radial-gradient(circle,rgba(61,63,62,1)_62%,rgba(52,50,51,1)_100%)] relative">
              <div className=" h-[21px] w-full rounded-[100px] bg-zinc-800 border border-zinc-700" />
              {/* Gradient */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 h-20 w-[345px] z-2 bg-[linear-gradient(to_top,transparent_30%,#27272a_90%)] rounded-[8px]" />
              {/* Reciept */}
              <div className="flex items-center justify-center absolute top-6 left-1/2 -translate-x-1/2">
                <div className="bg-[#FFFFFF] h-fit w-[350px] p-4 rounded-[5px] shadow-lg  [clip-path:polygon(1%_0%,99%_0%,100%_100%,0%_100%)]">
                  <div className="border-l-0 border-r-0  border border-dashed border-zinc-700 text-center text-[17px] py-0.5">
                    Trip Invoice - Switzerland Winters 2025
                  </div>
                  <div className="pt-6 pb-3 flex flex-col gap-2 border-t-0 border-r-0 border-l-0 border border-[#E8E9EB]">
                    <div className="flex items-center justify-between">
                      <div className="text-[#4C535D]">Total</div>
                      <div className="text-[#090B11]">$30,000</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-[#4C535D]">Per Person</div>
                      <div className="text-[#090B11]">$6,000</div>
                    </div>
                  </div>
                  {/* People */}
                  <div className=" border-r-0 border-l-0 pt-2">
                    {People?.map((item, key) => (
                      <div className="flex items-center" key={key}>
                        <div className="p-3 border-r border-b border-r-[#E9E9E9] border-b-[#E9E9E9]">
                          <div className="relative h-[35px] w-[35px] overflow-hidden rounded-[100px] shrink-0">
                            <Image
                              src={item.src}
                              layout="fill"
                              objectFit="cover"
                              objectPosition="center"
                            />
                          </div>
                        </div>
                        <div className=" px-2 py-[12.5px] flex flex-row items-center justify-between w-full border-b border-b-[#E9E9E9]">
                          <div>{item.name}</div>
                          <div className="sfpro flex items-center gap-2 border border-[#E2E7E7] rounded-lg p-1">
                            <span
                              style={{
                                color:
                                  item.status === "Paid"
                                    ? "#3DC593"
                                    : "#EF751F",
                              }}
                            >
                              {item.status === "Paid" ? "􀁣" : "􀐬"}
                            </span>
                            <div className="text-[#54555A]">{item.status}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* Payment Status */}
                  <div className="border border-[#F1F2F4] my-5 p-3 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div className="text-[14px] text-[#02020E]">
                        Payment Status
                      </div>
                      <div className="font-bold text-[15px] text-[#02020E]">
                        UNPAID
                      </div>
                    </div>
                    <div className="relative py-3">
                      <div className="h-2 bg-[#F1F4F9]" />
                      <div className="absolute h-2 bg-[#040615] w-[75%] left-0 top-1/2 -translate-y-1/2" />
                      <div className="sfpro absolute -left-1 top-1/2 -translate-y-1/2 text-[#2CC060] bg-[#FFFFFF] rounded-[100px] px-[2.5px] shadow-md">
                        􀁣
                      </div>
                      <div className="sfpro absolute left-18 top-1/2 -translate-y-1/2 text-[#2CC060] bg-[#FFFFFF] rounded-[100px] px-[2.5px] shadow-md">
                        􀁣
                      </div>
                      <div className="sfpro absolute left-35 top-1/2 -translate-y-1/2 text-[#2CC060] bg-[#FFFFFF] rounded-[100px] px-[2.5px] shadow-md">
                        􀁣
                      </div>
                      <div className="sfpro absolute right-18 top-1/2 -translate-y-1/2 text-[#F6741B] bg-[#FFFFFF] rounded-[100px] px-[2.5px] shadow-md">
                        􁙜
                      </div>
                      <div className="sfpro absolute -right-1 top-1/2 -translate-y-1/2 text-[#111111] bg-[#FFFFFF] rounded-[100px] px-[2.5px] shadow-md">
                        􀎽
                      </div>
                    </div>
                  </div>
                  {/* Buttons */}
                  <div className="flex items-center justify-center gap-4">
                    <button className="bg-[#2D303F] text-[#FEFEFE] w-full py-2 text-[14px] rounded-[100px] shadow-lg cursor-pointer">
                      Send Reminder
                    </button>
                    <button className="text-[#2D303F] bg-[#FEFEFE] w-full py-2 text-[14px] rounded-[100px] shadow-lg cursor-pointer">
                      Download Invoice
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* Paynow button */}
            <div className="mt-140 border-t border-[#C8CCCF] p-[17px]">
              <div className="flex items-center justify-between">
                <div className="text-[#475464] text-[14px]">Payment Method</div>
                <div className="text-[#475464] text-[14px]">
                  Visa Ending 2986
                </div>
              </div>
              <button className="bg-[#2D303F] w-full py-2.5 rounded-lg text-[#FBFBFF] my-4 shadow-lg cursor-pointer">
                Pay Now
              </button>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
