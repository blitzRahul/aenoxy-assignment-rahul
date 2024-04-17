

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFontAwesome } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/fontawesome-free-solid";
import { faMobileScreenButton } from "@fortawesome/free-solid-svg-icons";
import { faCircleNodes } from "@fortawesome/free-solid-svg-icons";
import { faGears } from "@fortawesome/free-solid-svg-icons";
import { faVideo } from "@fortawesome/fontawesome-free-solid";

const categoryBox=[
    {
      iconClass:faFontAwesome,
      title:"Getting Started",
      description:"Learn the basics, connect your calandar, and discover features that will make scheduling easier."
  },
  {
    iconClass:faCalendar,
    title:"Using Calendly",
    description:"Availability, event type settings, and multi-user features."
  },
  {
    iconClass:faMobileScreenButton,
    title:"Calendly for Mobile",
    description:"Mobile Apps for iOS & Android"
  },
  {
    iconClass:faCircleNodes,
    title:"Integrations & Automations",
    description:"Includes Calendar Connections, Calendly Integrations, Workflows, and Embed Options."
  },
  {
    iconClass:faGears,
    title:"Account Settings",
    description:"Includes Billing, Security, SAML/SCIM, setup, and account options."
  },
  {
    iconClass:faVideo,
    title:"Video Tutorials",
    description:"Watch these short videos to learn about getting started with Calendly."
  },
  ];
  

const Categories = () => {
  

  return (
    <div className="w-full flex items-center justify-center mt-14 flex-col gap-5">
    <div className="text-[2.5rem] text-white font-extrabold">Categories</div>
    

    <div className="grid grid-flow-col grid-rows-6 grid-cols-1 md:grid-rows-2 md:grid-cols-3 gap-8 px-14 mt-5 pb-3">
    {categoryBox.map((value,index)=>{
      return(<div className="flex justify-start items-center flex-col text-white bg-[rgba(112,155,255,0.1)] p-4 border-[0.5px] border-[rgba(255,255,255,0.1)] rounded-2xl hover:shadow-lg hover:shadow-[rgba(119,119,255,0.22)]">
      <FontAwesomeIcon className="text-[4rem] text-blue-500" icon={value.iconClass}/>
      <div className="py-3 text-[1.3rem] text-center font-extrabold">{value.title}</div>
      <div className="text-center p-3 text-slate-400">{value.description}</div>
      </div>);
    })}
    </div>
    

    </div>
  );
};

export default Categories;
