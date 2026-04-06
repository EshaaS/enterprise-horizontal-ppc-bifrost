import svgPaths from "./svg-71etl2bqme";
import imgImageMerchantMaverick from "../assets/958a9d26ca1087a9ae60577dec169be1062a6ef3.webp";
import imgImageCapterra from "../assets/4ffc70432dcab0fe98995cb81aa2b629545589a4.webp";
import imgImageG2 from "../assets/7ca2ee251a256c353e5dcf2e05fb12ca5dd69dde.webp";
import imgImageGoogle from "../assets/56e1a9e0c159e8d7cdc1adb3191d523b9ada6cc4.webp";
import imgCardMedia from "../assets/ce089bb1f413e5bf09ab510e9b027cf63ebf0545.webp";

const DISCOVERY_CALL_URL =
  "https://selecttime.appointy.com/appointy85l?service=srv_01KJCES1E93X3KBEW3GS7MHBRB";

function Container1() {
  return (
    <div className="content-stretch flex h-[32px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['DM_Sans:Bold',sans-serif] font-bold leading-[32px] min-h-px min-w-px relative text-[24px] text-black whitespace-pre-wrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        appointy
      </p>
    </div>
  );
}

function Navigation() {
  return (
    <div className="bg-white h-[81px] relative shrink-0 w-full" data-name="Navigation">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pb-px pt-[24px] px-[32px] relative size-full">
        <Container1 />
      </div>
    </div>
  );
}

function Business() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Business">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Business">
          <path d={svgPaths.p3a757100} fill="var(--fill-0, black)" fillOpacity="0.54" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Icon">
      <Business />
    </div>
  );
}

function Typography() {
  return (
    <div className="content-stretch flex flex-col items-start px-[6px] py-[3px] relative shrink-0" data-name="Typography">
      <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[13px] text-[rgba(0,0,0,0.87)] tracking-[0.16px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Enterprise
      </p>
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-white content-stretch flex items-center pl-[8px] pr-[4px] py-[4px] relative rounded-[16px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(217,217,217,0.5)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Icon />
      <Typography />
    </div>
  );
}

function Chip() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Chip">
      <Container3 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold items-start leading-[61.6px] relative shrink-0 text-[56px] text-black w-[762px] whitespace-pre-wrap">
      <p className="relative shrink-0 w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Secure
      </p>
      <p className="relative shrink-0 w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Scheduling platform
      </p>
      <div className="relative shrink-0 w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="mb-0">{`tailored for `}</p>
        <p>{`medium & large organisations`}</p>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[67.195px] relative shrink-0 w-[476px]" data-name="Paragraph">
      <p className="absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[22.4px] left-0 text-[#666] text-[16px] top-[-0.5px] w-[472px] whitespace-pre-wrap" style={{ fontVariationSettings: "'opsz' 9" }}>{`Appointy helps streamline complex booking processes, automate workflows, and optimize staff & resource utilization — across internal and external scheduling touchpoints.`}</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame1 />
      <Paragraph />
    </div>
  );
}

function Button() {
  return (
    <a href={DISCOVERY_CALL_URL} target="_blank" rel="noopener noreferrer" aria-label="Book an enterprise discovery call">
      <div className="bg-black h-[53px] relative rounded-[8px] shrink-0 w-[333.859px]" data-name="Button">
        <p className="-translate-x-1/2 absolute font-['DM_Sans:Bold',sans-serif] font-bold leading-[21px] left-[167px] text-[14px] text-center text-white top-[16px] tracking-[0.5px] uppercase" style={{ fontVariationSettings: "'opsz' 14" }}>
          Book an Enterprise Discovery Call
        </p>
      </div>
    </a>
  );
}

function Paragraph1() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[18px] left-[calc(50%-129px)] text-[#999] text-[14px] top-0" style={{ fontVariationSettings: "'opsz' 9" }}>
        Solution fit discussion — not a sales call
      </p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[334px]">
      <Button />
      <Paragraph1 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0">
      <Chip />
      <Frame2 />
      <Frame />
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute content-stretch flex gap-[66px] items-center left-0 top-[52px] w-[1312px]">
      <Frame3 />
      <div className="-translate-y-1/2 absolute bg-[rgba(217,217,217,0.5)] h-[492px] left-[850px] rounded-[44px] top-[calc(50%-0.1px)] w-[634px]" />
    </div>
  );
}

function ImageMerchantMaverick() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px opacity-70 relative w-[101.141px]" data-name="Image (Merchant Maverick)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImageMerchantMaverick} />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p23039b40} fill="var(--fill-0, #FDC700)" id="Vector" stroke="var(--stroke-0, #FDC700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p23039b40} fill="var(--fill-0, #FDC700)" id="Vector" stroke="var(--stroke-0, #FDC700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p23039b40} fill="var(--fill-0, #FDC700)" id="Vector" stroke="var(--stroke-0, #FDC700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p23039b40} fill="var(--fill-0, #FDC700)" id="Vector" stroke="var(--stroke-0, #FDC700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p23039b40} fill="var(--fill-0, #FDC700)" id="Vector" stroke="var(--stroke-0, #FDC700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="flex-[1_0_0] h-[16.5px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[16.5px] left-0 text-[#666] text-[11px] top-0" style={{ fontVariationSettings: "'opsz' 14" }}>
          4.5/5
        </p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[121.141px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon1 />
        <Icon2 />
        <Icon3 />
        <Icon4 />
        <Icon5 />
        <Text />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[56.5px] relative shrink-0 w-[121.141px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-center relative size-full">
        <ImageMerchantMaverick />
        <Container6 />
      </div>
    </div>
  );
}

function ImageCapterra() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px opacity-70 relative w-[117.188px]" data-name="Image (Capterra)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImageCapterra} />
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p23039b40} fill="var(--fill-0, #FDC700)" id="Vector" stroke="var(--stroke-0, #FDC700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p23039b40} fill="var(--fill-0, #FDC700)" id="Vector" stroke="var(--stroke-0, #FDC700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p23039b40} fill="var(--fill-0, #FDC700)" id="Vector" stroke="var(--stroke-0, #FDC700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p23039b40} fill="var(--fill-0, #FDC700)" id="Vector" stroke="var(--stroke-0, #FDC700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p23039b40} fill="var(--fill-0, #FDC700)" id="Vector" stroke="var(--stroke-0, #FDC700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Text1() {
  return (
    <div className="flex-[1_0_0] h-[16.5px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[16.5px] left-0 text-[#666] text-[11px] top-0" style={{ fontVariationSettings: "'opsz' 14" }}>
          4.5/5
        </p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[121.141px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon6 />
        <Icon7 />
        <Icon8 />
        <Icon9 />
        <Icon10 />
        <Text1 />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[56.5px] relative shrink-0 w-[121.141px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-center relative size-full">
        <ImageCapterra />
        <Container8 />
      </div>
    </div>
  );
}

function ImageG() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px opacity-70 relative w-[97.141px]" data-name="Image (G2)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImageG2} />
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p2763a240} fill="var(--fill-0, #FDC700)" id="Vector" stroke="var(--stroke-0, #FDC700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p2763a240} fill="var(--fill-0, #FDC700)" id="Vector" stroke="var(--stroke-0, #FDC700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Icon13() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p2763a240} fill="var(--fill-0, #FDC700)" id="Vector" stroke="var(--stroke-0, #FDC700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Icon14() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p2763a240} fill="var(--fill-0, #FDC700)" id="Vector" stroke="var(--stroke-0, #FDC700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Icon15() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p2763a240} fill="var(--fill-0, #FDC700)" id="Vector" stroke="var(--stroke-0, #FDC700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Text2() {
  return (
    <div className="flex-[1_0_0] h-[16.5px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[16.5px] left-0 text-[#666] text-[11px] top-0" style={{ fontVariationSettings: "'opsz' 14" }}>
          4.5/5
        </p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[121.141px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon11 />
        <Icon12 />
        <Icon13 />
        <Icon14 />
        <Icon15 />
        <Text2 />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[56.5px] relative shrink-0 w-[121.141px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-center relative size-full">
        <ImageG />
        <Container10 />
      </div>
    </div>
  );
}

function ImageGoogle() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px opacity-70 relative w-[94.281px]" data-name="Image (Google)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImageGoogle} />
    </div>
  );
}

function Icon16() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p2763a240} fill="var(--fill-0, #FDC700)" id="Vector" stroke="var(--stroke-0, #FDC700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Icon17() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p2763a240} fill="var(--fill-0, #FDC700)" id="Vector" stroke="var(--stroke-0, #FDC700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Icon18() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p2763a240} fill="var(--fill-0, #FDC700)" id="Vector" stroke="var(--stroke-0, #FDC700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Icon19() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p2763a240} fill="var(--fill-0, #FDC700)" id="Vector" stroke="var(--stroke-0, #FDC700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Icon20() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p2763a240} fill="var(--fill-0, #FDC700)" id="Vector" stroke="var(--stroke-0, #FDC700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Text3() {
  return (
    <div className="flex-[1_0_0] h-[16.5px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[16.5px] left-0 text-[#666] text-[11px] top-0" style={{ fontVariationSettings: "'opsz' 14" }}>
          5/5
        </p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[111.523px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon16 />
        <Icon17 />
        <Icon18 />
        <Icon19 />
        <Icon20 />
        <Text3 />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[56.5px] relative shrink-0 w-[111.523px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-center relative size-full">
        <ImageGoogle />
        <Container12 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex gap-[32px] h-[56.5px] items-start justify-center left-0 pr-[0.008px] top-[609.12px] w-[1376px]" data-name="Container">
      <Container5 />
      <Container7 />
      <Container9 />
      <Container11 />
    </div>
  );
}

function Container2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Container">
      <Frame4 />
      <Container4 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full">
      <div className="content-stretch flex flex-col items-start pl-[64px] relative size-full">
        <Container2 />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[80px] items-start relative size-full">
        <Navigation />
        <Frame5 />
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <div className="bg-gradient-to-b content-stretch flex from-[#f8f8f8] h-[900px] items-center relative shrink-0 to-white w-full" data-name="HeroSection">
      <Container />
    </div>
  );
}

function StickyNote() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="StickyNote_2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="StickyNote_2">
          <path d={svgPaths.p2dc7b9d0} fill="var(--fill-0, black)" fillOpacity="0.54" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon21() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Icon">
      <StickyNote />
    </div>
  );
}

function Typography1() {
  return (
    <div className="content-stretch flex flex-col items-start px-[6px] py-[3px] relative shrink-0" data-name="Typography">
      <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[13px] text-[rgba(0,0,0,0.87)] tracking-[0.16px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Lorem Ipsum
      </p>
    </div>
  );
}

function Container13() {
  return (
    <div className="bg-white content-stretch flex items-center pl-[8px] pr-[4px] py-[4px] relative rounded-[16px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(217,217,217,0.5)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Icon21 />
      <Typography1 />
    </div>
  );
}

function Chip1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Chip">
      <Container13 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full">
      <Chip1 />
      <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[61.6px] min-w-full relative shrink-0 text-[56px] text-black text-center w-[min-content] whitespace-pre-wrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        Operate at scale. Cut through complexity.
      </p>
    </div>
  );
}

function CardMedia() {
  return <div className="bg-[#f5f5f5] h-[83px] rounded-[8px] shrink-0 w-[79px]" data-name="CardMedia" />;
}

function TextContainer() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start justify-center min-h-px min-w-px py-[6px] relative whitespace-pre-wrap" data-name="Text Container">
      <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[20px] text-[rgba(0,0,0,0.87)] tracking-[0.15px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Enterprise-grade by design
      </p>
      <p className="font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[23.8px] relative shrink-0 text-[16px] text-[rgba(0,0,0,0.54)] w-full" style={{ fontVariationSettings: "'opsz' 9" }}>
        Supports complex scheduling workflows across multiple departments, regions, and stakeholder types—without breaking under organizational scale.
      </p>
    </div>
  );
}

function ListItem() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="ListItem">
      <TextContainer />
    </div>
  );
}

function Card() {
  return (
    <div className="bg-white relative rounded-[14px] shrink-0 w-full" data-name="Card">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start justify-center p-[24px] relative w-full">
          <CardMedia />
          <ListItem />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_2px_1px_-1px_rgba(0,0,0,0.2),0px_1px_1px_0px_rgba(0,0,0,0.14),0px_1px_3px_0px_rgba(0,0,0,0.12)]" />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col h-[293px] items-start relative shrink-0 w-[382px]">
      <Card />
    </div>
  );
}

function CardMedia1() {
  return <div className="bg-[#f5f5f5] h-[83px] rounded-[8px] shrink-0 w-[79px]" data-name="CardMedia" />;
}

function TextContainer1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start justify-center min-h-px min-w-px py-[6px] relative whitespace-pre-wrap" data-name="Text Container">
      <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[20px] text-[rgba(0,0,0,0.87)] tracking-[0.15px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Secure infrastructure
      </p>
      <p className="font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[23.8px] relative shrink-0 text-[16px] text-[rgba(0,0,0,0.54)] w-full" style={{ fontVariationSettings: "'opsz' 9" }}>{`Designed with enterprise security and compliance requirements in mind, including SOC 2–aligned practices, GDPR & CCPA readiness, and ISO 27001 certified controls.`}</p>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="ListItem">
      <TextContainer1 />
    </div>
  );
}

function Card1() {
  return (
    <div className="bg-white relative rounded-[14px] shrink-0 w-full" data-name="Card">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start justify-center p-[24px] relative w-full">
          <CardMedia1 />
          <ListItem1 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_2px_1px_-1px_rgba(0,0,0,0.2),0px_1px_1px_0px_rgba(0,0,0,0.14),0px_1px_3px_0px_rgba(0,0,0,0.12)]" />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col h-[293px] items-start relative shrink-0 w-[382px]">
      <Card1 />
    </div>
  );
}

function CardMedia2() {
  return <div className="bg-[#f5f5f5] h-[83px] rounded-[8px] shrink-0 w-[79px]" data-name="CardMedia" />;
}

function TextContainer2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start justify-center min-h-px min-w-px py-[6px] relative whitespace-pre-wrap" data-name="Text Container">
      <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[20px] text-[rgba(0,0,0,0.87)] tracking-[0.15px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Governance-ready
      </p>
      <p className="font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[23.8px] relative shrink-0 text-[16px] text-[rgba(0,0,0,0.54)] w-full" style={{ fontVariationSettings: "'opsz' 9" }}>
        Role-based access, audit trails, and policy controls enable organization-wide deployment with consistent security, visibility, and accountability.
      </p>
    </div>
  );
}

function ListItem2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="ListItem">
      <TextContainer2 />
    </div>
  );
}

function Card2() {
  return (
    <div className="bg-white relative rounded-[14px] shrink-0 w-full" data-name="Card">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start justify-center p-[24px] relative w-full">
          <CardMedia2 />
          <ListItem2 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_2px_1px_-1px_rgba(0,0,0,0.2),0px_1px_1px_0px_rgba(0,0,0,0.14),0px_1px_3px_0px_rgba(0,0,0,0.12)]" />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col h-[293px] items-start relative shrink-0 w-[382px]">
      <Card2 />
    </div>
  );
}

function CardMedia3() {
  return <div className="bg-[#f5f5f5] h-[83px] rounded-[8px] shrink-0 w-[79px]" data-name="CardMedia" />;
}

function TextContainer3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start justify-center min-h-px min-w-px py-[6px] relative whitespace-pre-wrap" data-name="Text Container">
      <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[20px] text-[rgba(0,0,0,0.87)] tracking-[0.15px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Configurable workflows
      </p>
      <p className="font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[23.8px] relative shrink-0 text-[16px] text-[rgba(0,0,0,0.54)] w-full" style={{ fontVariationSettings: "'opsz' 9" }}>
        Adapt scheduling rules to real-world constraints—roles, skills, eligibility, capacity, approvals—without custom rebuilds for every team.
      </p>
    </div>
  );
}

function ListItem3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="ListItem">
      <TextContainer3 />
    </div>
  );
}

function Card3() {
  return (
    <div className="bg-white relative rounded-[14px] shrink-0 w-full" data-name="Card">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start justify-center p-[24px] relative w-full">
          <CardMedia3 />
          <ListItem3 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_2px_1px_-1px_rgba(0,0,0,0.2),0px_1px_1px_0px_rgba(0,0,0,0.14),0px_1px_3px_0px_rgba(0,0,0,0.12)]" />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col h-[293px] items-start relative shrink-0 w-[382px]">
      <Card3 />
    </div>
  );
}

function CardMedia4() {
  return <div className="bg-[#f5f5f5] h-[83px] rounded-[8px] shrink-0 w-[79px]" data-name="CardMedia" />;
}

function TextContainer4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start justify-center min-h-px min-w-px py-[6px] relative whitespace-pre-wrap" data-name="Text Container">
      <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[20px] text-[rgba(0,0,0,0.87)] tracking-[0.15px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Modern, modular platform
      </p>
      <p className="font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[23.8px] relative shrink-0 text-[16px] text-[rgba(0,0,0,0.54)] w-full" style={{ fontVariationSettings: "'opsz' 9" }}>
        Built on a best-in-class technology stack that allows functionality to expand as your organization grows—without overwhelming users.
      </p>
    </div>
  );
}

function ListItem4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="ListItem">
      <TextContainer4 />
    </div>
  );
}

function Card4() {
  return (
    <div className="bg-white relative rounded-[14px] shrink-0 w-full" data-name="Card">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start justify-center p-[24px] relative w-full">
          <CardMedia4 />
          <ListItem4 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_2px_1px_-1px_rgba(0,0,0,0.2),0px_1px_1px_0px_rgba(0,0,0,0.14),0px_1px_3px_0px_rgba(0,0,0,0.12)]" />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col h-[293px] items-start relative shrink-0 w-[382px]">
      <Card4 />
    </div>
  );
}

function CardMedia5() {
  return <div className="bg-[#f5f5f5] h-[83px] rounded-[8px] shrink-0 w-[79px]" data-name="CardMedia" />;
}

function TextContainer5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start justify-center min-h-px min-w-px py-[6px] relative whitespace-pre-wrap" data-name="Text Container">
      <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[20px] text-[rgba(0,0,0,0.87)] tracking-[0.15px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Flexible enterprise deployment
      </p>
      <p className="font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[23.8px] relative shrink-0 text-[16px] text-[rgba(0,0,0,0.54)] w-full" style={{ fontVariationSettings: "'opsz' 9" }}>
        Deploy on dedicated infrastructure—on-premise or private cloud—to meet data residency, security, and performance requirements, with aligned SLAs.
      </p>
    </div>
  );
}

function ListItem5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="ListItem">
      <TextContainer5 />
    </div>
  );
}

function Card5() {
  return (
    <div className="bg-white relative rounded-[14px] shrink-0 w-full" data-name="Card">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start justify-center p-[24px] relative w-full">
          <CardMedia5 />
          <ListItem5 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_2px_1px_-1px_rgba(0,0,0,0.2),0px_1px_1px_0px_rgba(0,0,0,0.14),0px_1px_3px_0px_rgba(0,0,0,0.12)]" />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col h-[293px] items-start relative shrink-0 w-[382px]">
      <Card5 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[24px] items-start relative">
        <Frame6 />
        <Frame11 />
        <Frame12 />
        <Frame13 />
        <Frame14 />
        <Frame15 />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Frame10 />
    </div>
  );
}

function HorizontalScrollSection() {
  return (
    <div className="bg-gradient-to-b from-white h-[900px] relative shrink-0 to-[#f5f5f5] via-1/2 via-[#fafafa] w-full" data-name="HorizontalScrollSection">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[32px] items-center justify-center px-[64px] py-[198px] relative size-full">
          <Frame16 />
          <Container14 />
        </div>
      </div>
    </div>
  );
}

function StickyNote1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="StickyNote_2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="StickyNote_2">
          <path d={svgPaths.p2dc7b9d0} fill="var(--fill-0, black)" fillOpacity="0.54" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon22() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Icon">
      <StickyNote1 />
    </div>
  );
}

function Typography2() {
  return (
    <div className="content-stretch flex flex-col items-start px-[6px] py-[3px] relative shrink-0" data-name="Typography">
      <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[13px] text-[rgba(0,0,0,0.87)] tracking-[0.16px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Lorem Ipsum
      </p>
    </div>
  );
}

function Container16() {
  return (
    <div className="bg-white content-stretch flex items-center pl-[8px] pr-[4px] py-[4px] relative rounded-[16px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(217,217,217,0.5)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Icon22 />
      <Typography2 />
    </div>
  );
}

function Chip2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Chip">
      <Container16 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full">
      <Chip2 />
      <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[61.6px] min-w-full relative shrink-0 text-[56px] text-black text-center w-[min-content] whitespace-pre-wrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        Operate at scale. Cut through complexity.
      </p>
    </div>
  );
}

function TextContainer6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px py-[6px] relative whitespace-pre-wrap" data-name="Text Container">
      <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[20px] text-[rgba(0,0,0,0.87)] tracking-[0.15px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Move faster with less coordination
      </p>
      <p className="font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[23.8px] relative shrink-0 text-[16px] text-[rgba(0,0,0,0.54)] w-full" style={{ fontVariationSettings: "'opsz' 9" }}>
        Eliminate back-and-forth emails, manual follow-ups, and ad-hoc scheduling. Appointy accelerates how teams coordinate time—across internal teams and external stakeholders.
      </p>
    </div>
  );
}

function ListItem6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="ListItem">
      <TextContainer6 />
    </div>
  );
}

function CardMedia6() {
  return <div className="bg-[#f5f5f5] flex-[1_0_0] min-h-px min-w-px rounded-[8px] w-full" data-name="CardMedia" />;
}

function Card6() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[14px] self-stretch" data-name="Card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative size-full">
          <ListItem6 />
          <CardMedia6 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_2px_1px_-1px_rgba(0,0,0,0.2),0px_1px_1px_0px_rgba(0,0,0,0.14),0px_1px_3px_0px_rgba(0,0,0,0.12)]" />
    </div>
  );
}

function TextContainer7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px py-[6px] relative whitespace-pre-wrap" data-name="Text Container">
      <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[20px] text-[rgba(0,0,0,0.87)] tracking-[0.15px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Reduce operational overhead
      </p>
      <p className="font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[23.8px] relative shrink-0 text-[16px] text-[rgba(0,0,0,0.54)] w-full" style={{ fontVariationSettings: "'opsz' 9" }}>
        Automate scheduling workflows across people, roles, resources, and systems so teams spend less time managing logistics and more time delivering outcomes.
      </p>
    </div>
  );
}

function ListItem7() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="ListItem">
      <TextContainer7 />
    </div>
  );
}

function CardMedia7() {
  return (
    <div className="h-[194px] relative rounded-[8px] shrink-0 w-full" data-name="CardMedia">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
        <img alt="" className="absolute max-w-none object-cover rounded-[8px] size-full" src={imgCardMedia} />
        <div className="absolute bg-[#f5f5f5] inset-0 rounded-[8px]" />
      </div>
    </div>
  );
}

function Card7() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[14px]" data-name="Card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative w-full">
          <ListItem7 />
          <CardMedia7 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_2px_1px_-1px_rgba(0,0,0,0.2),0px_1px_1px_0px_rgba(0,0,0,0.14),0px_1px_3px_0px_rgba(0,0,0,0.12)]" />
    </div>
  );
}

function Frame7() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[24px] items-start relative w-full">
        <Card6 />
        <Card7 />
      </div>
    </div>
  );
}

function TextContainer8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px py-[6px] relative whitespace-pre-wrap" data-name="Text Container">
      <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[20px] text-[rgba(0,0,0,0.87)] tracking-[0.15px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Operate with confidence and reliability
      </p>
      <p className="font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[23.8px] relative shrink-0 text-[16px] text-[rgba(0,0,0,0.54)] w-full" style={{ fontVariationSettings: "'opsz' 9" }}>
        Prevent conflicts, errors, and scheduling ambiguity with deterministic logic, real-time visibility, and auditability that you can depend on.
      </p>
    </div>
  );
}

function ListItem8() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="ListItem">
      <TextContainer8 />
    </div>
  );
}

function CardMedia8() {
  return (
    <div className="h-[194px] relative rounded-[8px] shrink-0 w-full" data-name="CardMedia">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
        <img alt="" className="absolute max-w-none object-cover rounded-[8px] size-full" src={imgCardMedia} />
        <div className="absolute bg-[#f5f5f5] inset-0 rounded-[8px]" />
      </div>
    </div>
  );
}

function Card8() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[14px]" data-name="Card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative w-full">
          <ListItem8 />
          <CardMedia8 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_2px_1px_-1px_rgba(0,0,0,0.2),0px_1px_1px_0px_rgba(0,0,0,0.14),0px_1px_3px_0px_rgba(0,0,0,0.12)]" />
    </div>
  );
}

function TextContainer9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px py-[6px] relative whitespace-pre-wrap" data-name="Text Container">
      <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[20px] text-[rgba(0,0,0,0.87)] tracking-[0.15px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Improve team productivity
      </p>
      <p className="font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[23.8px] relative shrink-0 text-[16px] text-[rgba(0,0,0,0.54)] w-full" style={{ fontVariationSettings: "'opsz' 9" }}>
        Reduce time spent on coordination, rescheduling, and exception handling so teams can focus on high-value work instead of managing calendars.
      </p>
    </div>
  );
}

function ListItem9() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="ListItem">
      <TextContainer9 />
    </div>
  );
}

function CardMedia9() {
  return (
    <div className="h-[194px] relative rounded-[8px] shrink-0 w-full" data-name="CardMedia">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
        <img alt="" className="absolute max-w-none object-cover rounded-[8px] size-full" src={imgCardMedia} />
        <div className="absolute bg-[#f5f5f5] inset-0 rounded-[8px]" />
      </div>
    </div>
  );
}

function Card9() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[14px]" data-name="Card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative w-full">
          <ListItem9 />
          <CardMedia9 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_2px_1px_-1px_rgba(0,0,0,0.2),0px_1px_1px_0px_rgba(0,0,0,0.14),0px_1px_3px_0px_rgba(0,0,0,0.12)]" />
    </div>
  );
}

function Frame8() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[24px] items-start relative w-full">
        <Card8 />
        <Card9 />
      </div>
    </div>
  );
}

function TextContainer10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px py-[6px] relative whitespace-pre-wrap" data-name="Text Container">
      <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[20px] text-[rgba(0,0,0,0.87)] tracking-[0.15px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Fit into your existing enterprise ecosystem
      </p>
      <p className="font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[23.8px] relative shrink-0 text-[16px] text-[rgba(0,0,0,0.54)] w-full" style={{ fontVariationSettings: "'opsz' 9" }}>
        API-first architecture that integrates scheduling directly into internal portals and third party tools via APIs, webhooks, and integrations to support large-scale rollouts.
      </p>
    </div>
  );
}

function ListItem10() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="ListItem">
      <TextContainer10 />
    </div>
  );
}

function CardMedia10() {
  return (
    <div className="h-[194px] relative rounded-[8px] shrink-0 w-full" data-name="CardMedia">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
        <img alt="" className="absolute max-w-none object-cover rounded-[8px] size-full" src={imgCardMedia} />
        <div className="absolute bg-[#f5f5f5] inset-0 rounded-[8px]" />
      </div>
    </div>
  );
}

function Card10() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[14px]" data-name="Card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative w-full">
          <ListItem10 />
          <CardMedia10 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_2px_1px_-1px_rgba(0,0,0,0.2),0px_1px_1px_0px_rgba(0,0,0,0.14),0px_1px_3px_0px_rgba(0,0,0,0.12)]" />
    </div>
  );
}

function TextContainer11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px py-[6px] relative whitespace-pre-wrap" data-name="Text Container">
      <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[20px] text-[rgba(0,0,0,0.87)] tracking-[0.15px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Preserve your brand and user experience
      </p>
      <p className="font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[23.8px] relative shrink-0 text-[16px] text-[rgba(0,0,0,0.54)] w-full" style={{ fontVariationSettings: "'opsz' 9" }}>
        Deliver a consistent, enterprise-owned experience through whitelabeling and branding—so scheduling feels native, trusted, and fully under your control.
      </p>
    </div>
  );
}

function ListItem11() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="ListItem">
      <TextContainer11 />
    </div>
  );
}

function CardMedia11() {
  return (
    <div className="h-[194px] relative rounded-[8px] shrink-0 w-full" data-name="CardMedia">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
        <img alt="" className="absolute max-w-none object-cover rounded-[8px] size-full" src={imgCardMedia} />
        <div className="absolute bg-[#f5f5f5] inset-0 rounded-[8px]" />
      </div>
    </div>
  );
}

function Card11() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[14px]" data-name="Card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative w-full">
          <ListItem11 />
          <CardMedia11 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_2px_1px_-1px_rgba(0,0,0,0.2),0px_1px_1px_0px_rgba(0,0,0,0.14),0px_1px_3px_0px_rgba(0,0,0,0.12)]" />
    </div>
  );
}

function Frame9() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[24px] items-start relative w-full">
        <Card10 />
        <Card11 />
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[1106px]" data-name="Container">
      <Frame7 />
      <Frame8 />
      <Frame9 />
    </div>
  );
}

function Container15() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[32px] items-center relative w-full">
        <Frame17 />
        <Container17 />
      </div>
    </div>
  );
}

function StackedCardsSection() {
  return (
    <div className="bg-gradient-to-b from-[#f5f5f5] relative shrink-0 to-white via-1/2 via-[#fafafa] w-full" data-name="StackedCardsSection">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex items-start justify-center p-[64px] relative w-full">
          <Container15 />
        </div>
      </div>
    </div>
  );
}

function AutoAwesomeMotion() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="AutoAwesomeMotion">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="AutoAwesomeMotion">
          <path d={svgPaths.p3aed1180} fill="var(--fill-0, black)" fillOpacity="0.54" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon23() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Icon">
      <AutoAwesomeMotion />
    </div>
  );
}

function Typography3() {
  return (
    <div className="content-stretch flex flex-col items-start px-[6px] py-[3px] relative shrink-0" data-name="Typography">
      <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[13px] text-[rgba(0,0,0,0.87)] tracking-[0.16px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Use Cases
      </p>
    </div>
  );
}

function Container18() {
  return (
    <div className="bg-white content-stretch flex items-center pl-[8px] pr-[4px] py-[4px] relative rounded-[16px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(217,217,217,0.5)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Icon23 />
      <Typography3 />
    </div>
  );
}

function Chip3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Chip">
      <Container18 />
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[124px] relative shrink-0 w-[1074px]" data-name="Heading 2">
      <p className="-translate-x-1/2 absolute font-['DM_Sans:Bold',sans-serif] font-bold leading-[61.6px] left-[537.02px] text-[56px] text-black text-center top-0 w-[1060px] whitespace-pre-wrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        One scheduling platform—used across teams, departments, and use cases
      </p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0">
      <Chip3 />
      <Heading />
    </div>
  );
}

function Container21() {
  return <div className="bg-[#d1d5dc] opacity-20 rounded-[8px] shrink-0 size-[80px]" data-name="Container" />;
}

function TextContainer12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px py-[6px] relative text-center tracking-[0.15px] whitespace-pre-wrap" data-name="Text Container">
      <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[20px] text-[rgba(0,0,0,0.87)] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        ITSM
      </p>
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.43] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.54)] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Incidents, change windows, on-site support visits, audits, and maintenance scheduling.
      </p>
    </div>
  );
}

function ListItem12() {
  return (
    <div className="relative shrink-0 w-[260px]" data-name="ListItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-full">
        <TextContainer12 />
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center justify-center relative shrink-0" data-name="Container">
      <Container21 />
      <ListItem12 />
    </div>
  );
}

function Container19() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start p-[24px] relative rounded-[10px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <Container20 />
    </div>
  );
}

function Container24() {
  return <div className="bg-[#d1d5dc] opacity-20 rounded-[8px] shrink-0 size-[80px]" data-name="Container" />;
}

function TextContainer13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px py-[6px] relative text-center tracking-[0.15px] whitespace-pre-wrap" data-name="Text Container">
      <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[20px] text-[rgba(0,0,0,0.87)] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        HR Operations
      </p>
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.43] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.54)] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Interview scheduling, onboarding sessions, training programs, internal services, and workforce coordination.
      </p>
    </div>
  );
}

function ListItem13() {
  return (
    <div className="relative shrink-0 w-[260px]" data-name="ListItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-full">
        <TextContainer13 />
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Container24 />
      <ListItem13 />
    </div>
  );
}

function Container22() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start p-[24px] relative rounded-[10px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <Container23 />
    </div>
  );
}

function Container27() {
  return <div className="bg-[#d1d5dc] opacity-20 rounded-[8px] shrink-0 size-[80px]" data-name="Container" />;
}

function TextContainer14() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px py-[6px] relative text-center tracking-[0.15px] whitespace-pre-wrap" data-name="Text Container">
      <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[20px] text-[rgba(0,0,0,0.87)] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Customer Experience
      </p>
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.43] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.54)] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Customer appointments, assisted scheduling, escalations, and service interactions across channels.
      </p>
    </div>
  );
}

function ListItem14() {
  return (
    <div className="relative shrink-0 w-[260px]" data-name="ListItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-full">
        <TextContainer14 />
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Container27 />
      <ListItem14 />
    </div>
  );
}

function Container25() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start p-[24px] relative rounded-[10px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <Container26 />
    </div>
  );
}

function Container30() {
  return <div className="bg-[#d1d5dc] opacity-20 rounded-[8px] shrink-0 size-[80px]" data-name="Container" />;
}

function TextContainer15() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px py-[6px] relative text-center tracking-[0.15px] whitespace-pre-wrap" data-name="Text Container">
      <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[20px] text-[rgba(0,0,0,0.87)] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Field Service
      </p>
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.43] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.54)] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Field visits, inspections, installations, certifications, and skill-based routing.
      </p>
    </div>
  );
}

function ListItem15() {
  return (
    <div className="relative shrink-0 w-[260px]" data-name="ListItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-full">
        <TextContainer15 />
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Container30 />
      <ListItem15 />
    </div>
  );
}

function Container28() {
  return (
    <div className="bg-white content-stretch flex flex-col h-full items-start p-[24px] relative rounded-[10px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <Container29 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
      <Container19 />
      <Container22 />
      <Container25 />
      <div className="flex flex-row items-center self-stretch">
        <Container28 />
      </div>
    </div>
  );
}

function Container33() {
  return <div className="bg-[#d1d5dc] opacity-20 rounded-[8px] shrink-0 size-[80px]" data-name="Container" />;
}

function TextContainer16() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px py-[6px] relative text-center tracking-[0.15px] whitespace-pre-wrap" data-name="Text Container">
      <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[20px] text-[rgba(0,0,0,0.87)] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>{`Education Ops / Learning & Development`}</p>
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.43] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.54)] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Classes, cohort programs, exams, interviews, certifications, and instructor-led sessions.
      </p>
    </div>
  );
}

function ListItem16() {
  return (
    <div className="relative shrink-0 w-[260px]" data-name="ListItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-full">
        <TextContainer16 />
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center justify-center relative shrink-0" data-name="Container">
      <Container33 />
      <ListItem16 />
    </div>
  );
}

function Container31() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start p-[24px] relative rounded-[10px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <Container32 />
    </div>
  );
}

function Container36() {
  return <div className="bg-[#d1d5dc] opacity-20 rounded-[8px] shrink-0 size-[80px]" data-name="Container" />;
}

function TextContainer17() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px py-[6px] relative text-center tracking-[0.15px] whitespace-pre-wrap" data-name="Text Container">
      <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[20px] text-[rgba(0,0,0,0.87)] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Franchise Operations
      </p>
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.43] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.54)] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Standardized scheduling across franchise locations with local flexibility and brand consistency.
      </p>
    </div>
  );
}

function ListItem17() {
  return (
    <div className="relative shrink-0 w-[260px]" data-name="ListItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-full">
        <TextContainer17 />
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Container36 />
      <ListItem17 />
    </div>
  );
}

function Container34() {
  return (
    <div className="bg-white content-stretch flex flex-col h-full items-start p-[24px] relative rounded-[10px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <Container35 />
    </div>
  );
}

function Container39() {
  return <div className="bg-[#d1d5dc] opacity-20 rounded-[8px] shrink-0 size-[80px]" data-name="Container" />;
}

function TextContainer18() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px py-[6px] relative text-center tracking-[0.15px] whitespace-pre-wrap" data-name="Text Container">
      <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[20px] text-[rgba(0,0,0,0.87)] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>{`Sales & Marketing Operations`}</p>
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.43] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.54)] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Demo bookings, onboarding sessions, partner meetings, and campaign-related scheduling
      </p>
    </div>
  );
}

function ListItem18() {
  return (
    <div className="relative shrink-0 w-[260px]" data-name="ListItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-full">
        <TextContainer18 />
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Container39 />
      <ListItem18 />
    </div>
  );
}

function Container37() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start p-[24px] relative rounded-[10px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <Container38 />
    </div>
  );
}

function Container42() {
  return <div className="bg-[#d1d5dc] opacity-20 rounded-[8px] shrink-0 size-[80px]" data-name="Container" />;
}

function TextContainer19() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px py-[6px] relative text-center tracking-[0.15px] whitespace-pre-wrap" data-name="Text Container">
      <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[20px] text-[rgba(0,0,0,0.87)] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Workplace Services
      </p>
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.43] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.54)] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Room bookings, facilities scheduling, resource scheduling, workplace services, and internal resource coordination.
      </p>
    </div>
  );
}

function ListItem19() {
  return (
    <div className="relative shrink-0 w-[260px]" data-name="ListItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-full">
        <TextContainer19 />
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Container42 />
      <ListItem19 />
    </div>
  );
}

function Container40() {
  return (
    <div className="bg-white content-stretch flex flex-col h-full items-start p-[24px] relative rounded-[10px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <Container41 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
      <Container31 />
      <div className="flex flex-row items-center self-stretch">
        <Container34 />
      </div>
      <Container37 />
      <div className="flex flex-row items-center self-stretch">
        <Container40 />
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0">
      <Frame18 />
      <Frame20 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0">
      <Frame24 />
      <Frame19 />
    </div>
  );
}

function UseCasesSection() {
  return (
    <div className="bg-gradient-to-b from-white h-[900px] relative shrink-0 to-[#f5f5f5] via-1/2 via-[#fafafa] w-full" data-name="UseCasesSection">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[64px] relative size-full">
          <Frame23 />
        </div>
      </div>
    </div>
  );
}

function Business1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Business">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Business">
          <path d={svgPaths.p3a757100} fill="var(--fill-0, black)" fillOpacity="0.54" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon24() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Icon">
      <Business1 />
    </div>
  );
}

function Typography4() {
  return (
    <div className="content-stretch flex flex-col items-start px-[6px] py-[3px] relative shrink-0" data-name="Typography">
      <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[13px] text-[rgba(0,0,0,0.87)] tracking-[0.16px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Lorem Ipsum
      </p>
    </div>
  );
}

function Container43() {
  return (
    <div className="bg-white content-stretch flex items-center pl-[8px] pr-[4px] py-[4px] relative rounded-[16px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(217,217,217,0.5)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Icon24 />
      <Typography4 />
    </div>
  );
}

function Chip4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Chip">
      <Container43 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[67.195px] relative shrink-0 w-[700px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[22.4px] left-[350.39px] text-[#666] text-[16px] text-center top-[-0.5px] w-[681px] whitespace-pre-wrap" style={{ fontVariationSettings: "'opsz' 9" }}>{`The switch to a new tool can be a complex process for enterprises—there's a lot to consider. Our solution design experts can help you easily achieve your business objectives on time & within a budget. Find out how!`}</p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full">
      <div className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[61.6px] min-w-full relative shrink-0 text-[56px] text-black text-center w-[min-content] whitespace-pre-wrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="mb-0">Connect with our enterprise scheduling</p>
        <p>software specialists</p>
      </div>
      <Paragraph2 />
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-black h-[52px] relative rounded-[8px] shrink-0 w-[246.734px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['DM_Sans:Bold',sans-serif] font-bold leading-[20px] left-[123.5px] text-[14px] text-center text-white top-[15.5px] tracking-[0.5px] uppercase" style={{ fontVariationSettings: "'opsz' 14" }}>
        Contact our Sales Team
      </p>
    </div>
  );
}

function Frame21() {
  return (
    <div className="relative shrink-0 w-[993px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-center justify-center relative w-full">
        <Chip4 />
        <Frame22 />
        <Button1 />
      </div>
    </div>
  );
}

function EnterpriseConsultationSection() {
  return (
    <div className="bg-gradient-to-b from-[#f5f5f5] h-[900px] relative shrink-0 to-white via-1/2 via-[#fafafa] w-full" data-name="EnterpriseConsultationSection">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[32px] relative size-full">
          <Frame21 />
        </div>
      </div>
    </div>
  );
}

function Business2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Business">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Business">
          <path d={svgPaths.p3a757100} fill="var(--fill-0, black)" fillOpacity="0.54" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon25() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Icon">
      <Business2 />
    </div>
  );
}

function Typography5() {
  return (
    <div className="content-stretch flex flex-col items-start px-[6px] py-[3px] relative shrink-0" data-name="Typography">
      <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[13px] text-[rgba(0,0,0,0.87)] tracking-[0.16px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Lorem Ipsum
      </p>
    </div>
  );
}

function Container44() {
  return (
    <div className="bg-white content-stretch flex items-center pl-[8px] pr-[4px] py-[4px] relative rounded-[16px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(217,217,217,0.5)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Icon25 />
      <Typography5 />
    </div>
  );
}

function Chip5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Chip">
      <Container44 />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[67.195px] relative shrink-0 w-[700px]" data-name="Paragraph">
      <p className="absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[22.4px] left-[calc(50%-329.5px)] text-[#666] text-[16px] top-0 w-[579px] whitespace-pre-wrap" style={{ fontVariationSettings: "'opsz' 9" }}>{`Connect Appointy to your existing ecosystem with advanced APIs and seamless integrations including CRMs, calendars, analytics tools, payment gateways, SSO via your organization's authentication systems like Active Directory, SAML, OpenID, CAS, & more.`}</p>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full">
      <div className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[61.6px] min-w-full relative shrink-0 text-[56px] text-black w-[min-content] whitespace-pre-wrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="mb-0">{`Seamlessly integrate with your everyday tools. `}</p>
        <p>Enjoy uninterrupted workflow.</p>
      </div>
      <Paragraph3 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame28 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[428px] items-start relative shrink-0 w-[657px]">
      <Chip5 />
      <Frame27 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[124px] items-center relative">
        <Frame25 />
        <div className="bg-[rgba(217,217,217,0.5)] h-[492px] rounded-[44px] shrink-0 w-[485px]" />
      </div>
    </div>
  );
}

function IntegrationsSection() {
  return (
    <div className="bg-gradient-to-b from-white h-[900px] relative shrink-0 to-[#f5f5f5] via-1/2 via-[#fafafa] w-full" data-name="IntegrationsSection">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[32px] relative size-full">
          <Frame26 />
        </div>
      </div>
    </div>
  );
}

function Business3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Business">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Business">
          <path d={svgPaths.p3a757100} fill="var(--fill-0, black)" fillOpacity="0.54" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon26() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Icon">
      <Business3 />
    </div>
  );
}

function Typography6() {
  return (
    <div className="content-stretch flex flex-col items-start px-[6px] py-[3px] relative shrink-0" data-name="Typography">
      <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[13px] text-[rgba(0,0,0,0.87)] tracking-[0.16px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Lorem Ipsum
      </p>
    </div>
  );
}

function Container45() {
  return (
    <div className="bg-white content-stretch flex items-center pl-[8px] pr-[4px] py-[4px] relative rounded-[16px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(217,217,217,0.5)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Icon26 />
      <Typography6 />
    </div>
  );
}

function Chip6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Chip">
      <Container45 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
      <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[61.6px] relative shrink-0 text-[56px] text-black text-center w-full whitespace-pre-wrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        Ready to explore a personalized enterprise scheduling software solution for your organization?
      </p>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full">
      <Chip6 />
      <Frame31 />
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-black h-[52px] relative rounded-[8px] shrink-0 w-[454px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['DM_Sans:Medium',sans-serif] font-medium leading-[20px] left-[calc(50%+0.5px)] text-[14px] text-center text-white top-[15.5px] tracking-[0.5px] uppercase" style={{ fontVariationSettings: "'opsz' 14" }}>
        Get in touch with our enterprise solution advisor!
      </p>
    </div>
  );
}

function Frame29() {
  return (
    <div className="relative shrink-0 w-[993px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-center justify-center relative w-full">
        <Frame30 />
        <Button2 />
      </div>
    </div>
  );
}

function FinalCtaSection() {
  return (
    <div className="bg-gradient-to-b from-[#f5f5f5] h-[900px] relative shrink-0 to-white via-1/2 via-[#fafafa] w-full" data-name="FinalCTASection">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[32px] relative size-full">
          <Frame29 />
        </div>
      </div>
    </div>
  );
}

function Business4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Business">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Business">
          <path d={svgPaths.p3a757100} fill="var(--fill-0, black)" fillOpacity="0.54" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon27() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Icon">
      <Business4 />
    </div>
  );
}

function Typography7() {
  return (
    <div className="content-stretch flex flex-col items-start px-[6px] py-[3px] relative shrink-0" data-name="Typography">
      <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[13px] text-[rgba(0,0,0,0.87)] tracking-[0.16px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Lorem Ipsum
      </p>
    </div>
  );
}

function Container47() {
  return (
    <div className="bg-white content-stretch flex items-center pl-[8px] pr-[4px] py-[4px] relative rounded-[16px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(217,217,217,0.5)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Icon27 />
      <Typography7 />
    </div>
  );
}

function Chip7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Chip">
      <Container47 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[61.594px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="-translate-x-1/2 absolute font-['DM_Sans:Bold',sans-serif] font-bold leading-[61.6px] left-[537.2px] text-[56px] text-black text-center top-0" style={{ fontVariationSettings: "'opsz' 14" }}>
        Connect with our team of experts
      </p>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full">
      <Chip7 />
      <Heading1 />
    </div>
  );
}

function Container50() {
  return <div className="bg-[#d1d5dc] opacity-20 rounded-[8px] shrink-0 size-[80px]" data-name="Container" />;
}

function TextContainer20() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px py-[6px] relative text-center whitespace-pre-wrap" data-name="Text Container">
      <p className="font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[30px] relative shrink-0 text-[20px] text-[rgba(0,0,0,0.87)] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Sarang Verma
      </p>
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.43] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.54)] tracking-[0.15px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Chief Operating Officer
      </p>
    </div>
  );
}

function ListItem20() {
  return (
    <div className="relative shrink-0 w-[260px]" data-name="ListItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-full">
        <TextContainer20 />
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center justify-center relative shrink-0" data-name="Container">
      <Container50 />
      <ListItem20 />
    </div>
  );
}

function Container48() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start p-[24px] relative rounded-[10px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <Container49 />
    </div>
  );
}

function Container53() {
  return <div className="bg-[#d1d5dc] opacity-20 rounded-[8px] shrink-0 size-[80px]" data-name="Container" />;
}

function TextContainer21() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px py-[6px] relative text-center whitespace-pre-wrap" data-name="Text Container">
      <p className="font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[30px] relative shrink-0 text-[20px] text-[rgba(0,0,0,0.87)] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Anviti Chaurasiya
      </p>
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.43] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.54)] tracking-[0.15px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Sr. Enterprise Account Manager
      </p>
    </div>
  );
}

function ListItem21() {
  return (
    <div className="relative shrink-0 w-[260px]" data-name="ListItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-full">
        <TextContainer21 />
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center justify-center relative shrink-0" data-name="Container">
      <Container53 />
      <ListItem21 />
    </div>
  );
}

function Container51() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start p-[24px] relative rounded-[10px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <Container52 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex gap-[48px] items-center relative shrink-0">
      <Container48 />
      <Container51 />
    </div>
  );
}

function Container46() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-col items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[32px] items-center px-[151px] relative w-full">
          <Frame32 />
          <Frame33 />
        </div>
      </div>
    </div>
  );
}

function TeamSection() {
  return (
    <div className="bg-gradient-to-b from-white h-[900px] relative shrink-0 to-[#f5f5f5] via-1/2 via-[#fafafa] w-full" data-name="TeamSection">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[32px] relative size-full">
          <Container46 />
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="absolute content-stretch flex flex-col h-[6831px] items-start left-0 top-0 w-[1440px]" data-name="App">
      <HeroSection />
      <HorizontalScrollSection />
      <StackedCardsSection />
      <UseCasesSection />
      <EnterpriseConsultationSection />
      <IntegrationsSection />
      <FinalCtaSection />
      <TeamSection />
    </div>
  );
}

export default function EnterpriseLandingPageDesign() {
  return (
    <div className="bg-white relative size-full" data-name="Enterprise Landing Page Design">
      <App />
    </div>
  );
}
