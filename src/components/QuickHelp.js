

const qh=["Setting up your first event","Troubleshooting availability","Schedule with video conferencing","Embed options overview","Automate tasks with Workflows","Using Calendly for Chrome"];


const QuickHelp = () => {
  

  return (
    <div className="w-full text-white flex items-center justify-center">
    <div className="flex items-center justify-center flex-wrap w-[40rem] gap-5 py-8">
    {qh.map((value,index)=>{
      return (
        <div style={{
          width:"18rem",
        }} className="text-center md:text-justify underline hover:text-blue-500 hover:cursor-pointer">
          {value}
      </div>
      );
    })}
    </div>
  </div>
  );
};

export default QuickHelp;
