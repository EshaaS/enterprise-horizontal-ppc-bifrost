import logoAppointy from '../../assets/Appointy Logo from CRM.svg';

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white h-[57px] w-full border-b border-[#e5e7eb] z-50">
      <div className="flex flex-col justify-center items-start px-[32px] h-full">
        <div className="flex h-[32px] items-start w-full">
          <img
            src={logoAppointy}
            alt="Appointy"
            className="h-[26px] w-auto"
            width={200}
            height={26}
          />
        </div>
      </div>
    </nav>
  );
}
