

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faTwitter,faYoutube,faInstagram } from "@fortawesome/free-brands-svg-icons";


const footerItems=[
    {title:"About",sub:["About Calendly","Contact Sales","Newsroom","Careers","Security"]},
    {title:"Solutions",sub:["Customer Success","Sales","Recruiting","Information Technology","Marketing"]},
    {title:"Popular Features",sub:["Embed Calendly","Availability","Sending Notifications","Using Calendly Mobile"]},
    {title:"Support",sub:["Help Center","Video Tutorials"]},
    {title:"Add-Ons",sub:["Download for Chrome","Download for Firefox"]},
    {title:"Developers",sub:["Developer Tools"]},
  ];

const Footer = () => {
  

  return (
    <>
             <div className="mt-32 w-full flex items-center justify-center text-white">

<div className="pt-32 flex flex-row items-start justify-center flex-wrap gap-11 px-10 border-t-[1px] border-dotted border-[rgba(255,255,255,0.2)]">

<div className="flex flex-col gap-8 text-white">
<div className="font-extrabold text-[2.5rem]">Easy<br/><span className="text-blue-500">Ahead</span></div>
<div className="w-96">We take the work out of connecting with others so you can accomplish more.</div>
<select className="w-48 text-black border-none p-2">
  <option>English(US)</option>
</select>
<div className="text-white text-[1.5rem] *:pr-4">
<FontAwesomeIcon className="hover:text-blue-500" icon={faTwitter}/>
<FontAwesomeIcon className="hover:text-red-600" icon={faYoutube}/>
<FontAwesomeIcon className="hover:text-pink-500" icon={faInstagram}/>
</div>
</div>

<div className="grid grid-flow-col grid-rows-3 grid-cols-2 md:grid-rows-2 md:grid-cols-3 gap-8">
{footerItems.map((item,value)=>{
  return(
    <div className="flex flex-col">
    <div className="font-extrabold text-[1.2rem]">{item.title}</div>
    {item.sub.map((i,val)=>{
      return(
        <div className="text-gray-400 hover:text-blue-500">
        {i}
      </div>
      );
    })}
    </div>
    );
})}
</div>

</div>
</div>
{/*bottom ends*/}
<div className="w-full flex items-center justify-between mt-36 mb-16 text-slate-500 px-28">
  <div>Copyright Rahul 2024</div>
  <div>Terms and Conditions</div>
</div>
    </>
  );
};

export default Footer;
