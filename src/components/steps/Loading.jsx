import React from "react";
import { Puff } from "react-loader-spinner";
const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-96 md:min-h-1/2">
      <div className="w-full mx-2">
        <div className="flex items-center justify-center">
          <Puff
            visible={true}
            height="80"
            width="80"
            color="yellow"
            ariaLabel="puff-loading"
          />
        </div>
        <div className="text-center">
          <h1 className="font-bold text-xl pb-2">
            Finding learning path recommendations for you based on your
            responses
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Loading;
