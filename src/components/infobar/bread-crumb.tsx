"use client";

const BreadCrumb = () => {
  // setup use sidebar hook for real time chat and chat bot stuff
  // set up the description and the switch

  return (
    <div className="flex flex-col">
      <div className="flex gap-5 items-center">
        <h2 className="text-3xl font-bold capitalize">Title</h2>
      </div>
      <p className="text-gray-500 text-sm">
        {/* {page == "settings"
          ? "Manage you account settings, preferences and integrations"
          : page == "dashboard"
          ? "A detailed overview of your metrics, usage, customers and more"
          : page == "appointment"
          ? "View aand edit all your appointments"
          : page == "email-marketing"
          ? "Send bulk emails to your customers"
          : page == "integration"
          ? "Connect third-party applications into Chat-AI"
          : "Modify domain settings, change chatbot options, enter sales questions and trin your bot to do what you want it to."} */}
        Modify domain settings, change chatbot options, enter sales questions
        and trin your bot to do what you want it to.
      </p>
    </div>
  );
};

export default BreadCrumb;
