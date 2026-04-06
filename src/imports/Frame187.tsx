import svgPaths from "./svg-di42djviok";

function Event() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Event">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Event">
          <path d={svgPaths.p359fea00} fill="var(--fill-0, black)" fillOpacity="0.54" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Icon">
      <Event />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[8px] relative shrink-0" data-name="Container">
      <Icon />
    </div>
  );
}

function TextContainer() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px py-[6px] relative whitespace-pre-wrap" data-name="Text Container">
      <p className="font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[10px] text-[rgba(0,0,0,0.6)] tracking-[0.15px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Strategic meeting starts in 5 mins
      </p>
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.66] relative shrink-0 text-[8px] text-[rgba(0,0,0,0.54)] tracking-[0.4px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>{`Meeting Slot: 12:00 PM - 01:00 PM `}</p>
    </div>
  );
}

function ListItem() {
  return (
    <div className="absolute content-stretch flex items-center left-[17px] top-[9px] w-[232px]" data-name="ListItem">
      <Container />
      <TextContainer />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-[#f5f5f5] overflow-clip relative rounded-[8px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.12)] size-full">
      <ListItem />
      <p className="absolute font-['DM_Sans:Regular',sans-serif] font-normal inset-[25.86%_5.23%_51.72%_88.85%] leading-[1.66] text-[8px] text-[rgba(0,0,0,0.54)] tracking-[0.4px] whitespace-pre-wrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        now
      </p>
    </div>
  );
}