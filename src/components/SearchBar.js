
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/fontawesome-free-solid';
const SearchBar = () => {
  

  return (
    <div className="text-white h-[40vh] flex items-center justify-center mt-16 flex-col gap-6">
      <div className="text-[3rem] text-center font-extrabold">What can we help you with?</div>

     
      <div className="bg-[rgba(160,192,252,0.2)] backdrop-blur-md flex items-center p-4 px-7 rounded-full md:w-96 border-[1px] shadow-lg shadow-[rgba(153,160,255,0.3)]">
        <FontAwesomeIcon icon={faSearch} className="mr-2 md:mr-4 size-6 text-blue-500"/>
        <input className="flex-1 placeholder:text-lg border-none bg-transparent focus:outline-none" placeholder="Search our articles"/>
      </div>
    
    </div>
  );
};

export default SearchBar;
