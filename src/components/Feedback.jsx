import React from "react";
import { RiDoubleQuotesL } from "react-icons/ri";

function Feedback() {
  const allFeedback = [
    {
      title: "Emily Wilson",
      para: "The customer experience was exceptional from start to finish. The website is user-friendly, the checkout process was smooth, and the clothes I ordered fit perfectly. I'm beyond satisfied!",
    },
    {
      title: "Sarah Thompson",
      para: "I absolutely love the quality and style of the clothing I purchased from this website. customer service was outstanding, and I received my order quickly. Highly recommended!",
    },
    {
      title: "Olivia Martinez",
      para: "I had a great experience shopping on this website. The clothes I bought are fashionable and comfortable. Highly satisfied!",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center py-16 px-11">
      <h2 className="text-4xl font-semibold text-center text-para mb-4">
        Feedback Corner
      </h2>
      <div className="flex flex-col justify-center items-center ">
        {allFeedback.map((feedback, index) => (
          <div
            key={index}
            className="flex flex-col shadow-lg p-10 hover:bg-imgbg"
          >
            <RiDoubleQuotesL className="text-para" />
            <span className="text-para font-semibold my-3">
              {feedback.title}
            </span>
            <p>{feedback.para}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Feedback;
