function Header() {
  const HomeIcon: string = "./HomeSmall.png";
  const DesktopIcon: string = "./Desktop.png";
  const MobileIcon: string = "./Mobile.png";
  const LeftIcon: string = "./ArrowUUpLeft.png";
  const RightIcon: string = "./ArrowUUpRight.png";
  const SaveIcon: string = "./FloppyDisk.png";
  const Dropdown: string = "./DropDown.png";

  return (
    <header className="flex w-full h-14 items-center border-b border-[#D7D7D7] font-main bg-white">
      
      {/* Home Part */}
      <div className="flex items-center justify-between px-4 h-full border-r border-[#D7D7D7] min-w-30">
        <div className="flex items-center gap-2">
          <img src={HomeIcon} alt="Home" className="w-4 h-4" />
          <span className="font-medium text-sm">Home</span>
        </div>
        <img src={Dropdown} alt="Dropdown" className="w-3 h-3 ml-4" />
      </div>

      {/* Desktop Icon */}
      <div className="flex items-center justify-center w-14 h-full border-r border-[#D7D7D7]">
        <img src={DesktopIcon} alt="Desktop" className="w-5 h-5" />
      </div>

      {/* Mobile Icon */}
      <div className="flex items-center justify-center w-14 h-full border-r border-[#D7D7D7]">
        <img src={MobileIcon} alt="Mobile" className="w-5 h-5" />
      </div>

      {/* Url */}
      <div className="flex items-center flex-1 px-4 h-full border-r border-[#D7D7D7]">
        <div className="flex items-center w-full max-w-xl mx-auto rounded-md bg-[#E8E8E8] py-1.5 px-4 text-sm text-gray-700">
          https://www.example.com
        </div>
      </div>

      {/* Left Icon (Undo) */}
      <div className="flex items-center justify-center w-14 h-full border-r border-[#D7D7D7]">
        <img src={LeftIcon} alt="Left" className="w-5 h-5" />
      </div>

      {/* Right Icon (Redo) */}
      <div className="flex items-center justify-center w-14 h-full border-r border-[#D7D7D7]">
        <img src={RightIcon} alt="Right" className="w-5 h-5" />
      </div>

      {/* Preview and Save */}
      <div className="flex items-center gap-6 px-4 h-full">
        <div className="flex items-center gap-2">
          <img src={SaveIcon} alt="Save" className="w-5 h-5" />
          <span className="text-sm font-medium">Preview</span>
        </div>
        <button className="rounded-full bg-black py-1.5 px-6 text-sm text-white font-medium hover:bg-gray-800 transition-colors">
          Publish
        </button>
      </div>

    </header>
  );
}

export default Header;