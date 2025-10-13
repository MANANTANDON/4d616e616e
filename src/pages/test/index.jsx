import React from "react";

const Index = () => {
  return (
    <>
      <iframe
        allow="autoplay *; encrypted-media *;"
        frameborder="0"
        height="150"
        style={{
          width: "100%",
          maxWidth: "660px",
          overflow: "hidden",
          background: "transparent",
        }}
        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
        src="https://embed.music.apple.com/in/album/reckless/1801914841?i=1801915058"
      ></iframe>
      <iframe
        allow="autoplay *; encrypted-media *;"
        frameborder="0"
        height="150"
        style={{
          width: "100%",
          maxWidth: "660px",
          overflow: "hidden",
          background: "transparent",
        }}
        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
        src="https://embed.music.apple.com/in/album/aura/1801914841?i=1801915051"
      />
    </>
  );
};

export default Index;
