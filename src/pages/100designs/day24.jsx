import Image from "next/image";
import React from "react";

export default function Day24() {
  return (
    <>
      <div className="h-screen w-screen bg-[#222122] flex items-center justify-center px-2">
        <div className="max-w-[552px] w-[552px] h-[552px] max-h-[552px] border-2 border-[#5D5D5E] rounded-[48px] bg-linear-to-r from-[#222121] to-[#323232] shadow-2xl relative overflow-hidden ">
          <div className="absolute -left-70 top-5 animate-spin [animation-duration:45s]">
            <Image
              src="/images/designs/day24icons.png"
              layout="intrinsic"
              height={800}
              width={800}
            />
          </div>
          <div className="absolute top-68 left-10 right-0">
            <div className="sfpro-text text-[#B8B8B8] text-xl font-medium">
              Manage Your
              <br />
              Subscriptions
            </div>
            <div className="sfpro-text text-[#7F7E7F] text-xl font-normal my-3">
              Keep Track Of All Your
              <br />
              Subscriptions In One
              <br /> Place.
            </div>
            <button
              className="bg-linear-to-t from-[#848484] to-[#CBCBCB] sfpro-text text-xl px-4 py-2 font-medium rounded-xl text-[#363636] w-fit mt-7 cursor-pointer"
              onClick={() => alert("App downloaded !")}
            >
              Get App
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
