import imgImage from "../assets/735b5862b9d021ce0924d2c0125a90b640794a0e.webp";

function Image() {
  return (
    <div className="relative shrink-0 size-[84px]" data-name="Image">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[28.594px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute css-ew64yg font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[28.6px] left-0 text-[22px] text-black top-[-0.5px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Enterprise-grade by design
      </p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[71.391px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-4hzbpn font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[23.8px] left-0 text-[#666] text-[14px] top-[-0.5px] w-[334px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        Supports complex scheduling workflows across multiple departments, regions, and stakeholder types—without breaking under organizational scale.
      </p>
    </div>
  );
}

function Container() {
  return (
    <div className="h-full relative shrink-0 w-[338px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative size-full">
        <Heading />
        <Paragraph />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="Container">
      <Image />
      <div className="flex flex-row items-center self-stretch">
        <Container />
      </div>
    </div>
  );
}

export default function Container2() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start p-[41px] relative rounded-[14px] size-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <Container1 />
    </div>
  );
}