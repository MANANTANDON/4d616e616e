import { Container, useMediaQuery } from "@mui/material";
import dynamic from "next/dynamic";
import React from "react";
const Typewriter = dynamic(() => import("typewriter-effect"), { ssr: false });

export default function Day27() {
  const laptop = useMediaQuery("(min-width:500px)");
  const AIList = [
    "Claude",
    "ChatGPT",
    "Gemini",
    "Bolt.new",
    "Lovable",
    "v0.dev",
    "Replit",
  ];

  const content = `
    <code style="color: #00FF32; font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, 'Roboto Mono', 'Courier New', monospace;">
      $ vas scan https://manantandon.com
      <br/>
      <div style="margin-top:12px;"></div>
      &gt; Initializing scanner...
      <br/>
      _ Crawling application... 247 URLs discovered
      <br/>
      _ Platform Detected: <strong>Vercel + Supabase</strong>
      <br/>
      _ Analyzing security headers... <span style="color:#CB3925">3 issues found</span>
      <br/>
      _ Scanning for secrets... <span style="color:#CB3925">2 exposed API keys</span>
      <br/>
      _ Checking exposed files... <span style="color:#CB3925">1 .env file exposed</span>
      <br/>
      _ Testing database security... <span style="color:#B0AE31">Missing RLS policies</span>
      <br/>
      _ Validating SSL/TLS... <span>Secure</span>
      <br/>
      Scan complete in 3m 42s
    </code>
  `;
  return (
    <>
      <style>{`
        .Typewriter__cursor {
          color: #00FF32 !important;
        }
      `}</style>
      {!laptop && (
        <div className="flex items-center justify-center h-screen">
          <div className=" border border-slate-600 bg-slate-800 p-5 text-zinc-100 rounded-3xl">
            Switch to Desktop
          </div>
        </div>
      )}
      {laptop && (
        <div className="h-screen w-screen bg-[#080808]">
          <Container
            maxWidth="xl"
            className="h-screen flex flex-col justify-between py-20"
          >
            <div className="flex flex-col item-center">
              <code className="text-[#00FF32] text-5xl xl:text-7xl font-semibold">
                Vibe App Scanner
              </code>
              <code className="text-[#00FF32] text-2xl xl:text-4xl font-normal my-3 mb-6">
                Security Scanner for AI-Generated Apps
              </code>
              <code className="text-[#00FF32] text-xl xl:text-3xl font-normal">
                Find vulnerabilities before attackers do.
              </code>
            </div>
            <div className="border border-[#00FF3220] bg-[#0F0F0F] py-4 px-8 rounded-xl">
              <Typewriter
                options={{ delay: 50, cursor: "|" }}
                onInit={(typewriter) => {
                  typewriter.typeString(content).start();
                }}
              />
            </div>
            <div className="flex flex-wrap items-center gap-5 text-[#00FF32]">
              <div className="sfpro-text text-xl">Works with:</div>
              {AIList.map((item, key) => (
                <code
                  key={key}
                  className="border border-[#00FF3220] hover:bg-[#00FF3240] px-4 py-1.5 rounded-lg cursor-pointer"
                >
                  {item}
                </code>
              ))}
            </div>
          </Container>
        </div>
      )}
    </>
  );
}
