import React from "react";
export default function Day12() {
  return (
    <>
      <style>{`
        @keyframes float1 {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(50px, 80px); }
          50% { transform: translate(-30px, 120px); }
          75% { transform: translate(60px, 40px); }
        }
        @keyframes float2 {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(-40px, 100px); }
          50% { transform: translate(70px, 60px); }
          75% { transform: translate(-20px, 130px); }
        }
        @keyframes float3 {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(-60px, 70px); }
          50% { transform: translate(40px, 110px); }
          75% { transform: translate(-50px, 50px); }
        }
        @keyframes float4 {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(-70px, -60px); }
          50% { transform: translate(30px, -100px); }
          75% { transform: translate(-40px, -40px); }
        }
        .float-1 { animation: float1 6s ease-in-out infinite; }
        .float-2 { animation: float2 8s ease-in-out infinite; }
        .float-3 { animation: float3 10s ease-in-out infinite; }
        .float-4 { animation: float4 12s ease-in-out infinite; }
      `}</style>
      <div className="h-screen w-screen bg-[#E7E7E7] overflow-scroll flex items-center justify-center">
        <div
          className="h-[415px] w-[460px] w-max-[460px] bg-[#FFFFFF] rounded-[50px] border-7 border-[#EAEAEA] p-6 flex flex-col"
          style={{
            boxShadow:
              "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
          }}
        >
          <div className="flex items-center gap-4">
            <div
              className="sfpro bg-[#E40203] text-[#FFFEFF] text-4xl p-4 w-fit rounded-3xl border-2 border-[#FFE0DB]"
              style={{
                boxShadow: "rgba(0,0,0,0.6) 0px 20px 30px -10px",
              }}
            >
              􀊴
            </div>
            <div>
              <div className="text-3xl text-[#0C0F16] sfpro">Heart Rate</div>
              <div className="text-lg md:text-xl mt-1 text-[#575757] sfpro">
                Your weekly heart rate range
              </div>
            </div>
          </div>
          <div className="mt-4 flex-1 rounded-[30px] relative bg-[#280101] overflow-hidden">
            <div className="h-50 w-50 rounded-[100px] absolute top-0 bg-[#E40203] float-1" />
            <div className="h-70 w-70 rounded-[200px] absolute top-0 left-6 bg-[#E40203] float-2" />
            <div className="h-40 w-40 rounded-[200px] absolute top-0 right-0 bg-[#E40203] float-3" />
            <div className="h-25 w-25 rounded-[200px] absolute bottom-0 right-0 bg-[#E40203] float-4" />
            <div className="h-50 w-50 rounded-[100px] absolute top-0 bg-[#E40203] float-1" />
            <div className="h-70 w-70 rounded-[200px] absolute top-0 left-6 bg-[#E40203] float-2" />
            <div className="h-40 w-40 rounded-[200px] absolute top-0 right-0 bg-[#E40203] float-3" />
            <div className="h-25 w-25 rounded-[200px] absolute bottom-0 right-0 bg-[#E40203] float-4" />
            <div className="absolute bg-zinc-600/10 inset-0 backdrop-blur-[45px]" />
            <div className="absolute bottom-0 left-0 right-0 px-3 pb-2">
              <div className="text-[#FBCFCC] -mb-4 md:mb-0">
                Heart Rate Range
              </div>
              <div className="text-[#FEFFFD] flex items-center justify-between">
                <div className="flex items-baseline-last gap-2 mt-4 md:mt-0">
                  <div className="text-[35px] md:text-[55px] sfpro">41-103</div>
                  <div className="sfpro">BPM</div>
                </div>
                <div className="flex flex-col items-center justify-center gap-2">
                  <div className="sfpro border border-[#CD7979] px-3 py-1 text-sm rounded-[50px] bg-[#FFFFFF]/10">
                    􀁸 3%
                  </div>
                  <div className="sfpro text-xs md:text-sm text-[#FBCFCC]">
                    From last week
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
