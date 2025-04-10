import { useEffect } from "react";

const FacebookPage = () => {
  useEffect(() => {
    if (!window.FB) {
      const script = document.createElement("script");
      script.src =
        "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v16.0";
      script.async = true;
      script.defer = true;
      script.crossOrigin = "anonymous";
      script.onload = () => window.FB && window.FB.XFBML.parse();
      document.body.appendChild(script);
    } else {
      window.FB.XFBML.parse();
    }
  }, []);

  return (
    <div className="flex  ">
      <div
        className="fb-page"
        data-href="https://www.facebook.com/profile.php?id=61573971997816"
        data-width="300"
        data-height="300"
        data-small-header="false"
        data-adapt-container-width="true"
        data-hide-cover="false"
        data-show-facepile="true"
      ></div>
    </div>
  );
};

export default FacebookPage;
