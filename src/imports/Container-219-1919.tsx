import imgCardMedia from "../assets/ce089bb1f413e5bf09ab510e9b027cf63ebf0545.webp";

function TextContainer() {
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

function ListItem() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="ListItem">
      <TextContainer />
    </div>
  );
}

function CardMedia() {
  return <div className="bg-[#f5f5f5] flex-[1_0_0] min-h-px min-w-px rounded-[8px] w-full" data-name="CardMedia" />;
}

function Card() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[14px] self-stretch" data-name="Card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative size-full">
          <ListItem />
          <CardMedia />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_2px_1px_-1px_rgba(0,0,0,0.2),0px_1px_1px_0px_rgba(0,0,0,0.14),0px_1px_3px_0px_rgba(0,0,0,0.12)]" />
    </div>
  );
}

function TextContainer1() {
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

function ListItem1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="ListItem">
      <TextContainer1 />
    </div>
  );
}

function CardMedia1() {
  return (
    <div className="h-[194px] relative rounded-[8px] shrink-0 w-full" data-name="CardMedia">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
        <img alt="" className="absolute max-w-none object-cover rounded-[8px] size-full" src={imgCardMedia} />
        <div className="absolute bg-[#f5f5f5] inset-0 rounded-[8px]" />
      </div>
    </div>
  );
}

function Card1() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[14px]" data-name="Card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative w-full">
          <ListItem1 />
          <CardMedia1 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_2px_1px_-1px_rgba(0,0,0,0.2),0px_1px_1px_0px_rgba(0,0,0,0.14),0px_1px_3px_0px_rgba(0,0,0,0.12)]" />
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[24px] items-start relative w-full">
        <Card />
        <Card1 />
      </div>
    </div>
  );
}

function TextContainer2() {
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

function ListItem2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="ListItem">
      <TextContainer2 />
    </div>
  );
}

function CardMedia2() {
  return (
    <div className="h-[194px] relative rounded-[8px] shrink-0 w-full" data-name="CardMedia">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
        <img alt="" className="absolute max-w-none object-cover rounded-[8px] size-full" src={imgCardMedia} />
        <div className="absolute bg-[#f5f5f5] inset-0 rounded-[8px]" />
      </div>
    </div>
  );
}

function Card2() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[14px]" data-name="Card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative w-full">
          <ListItem2 />
          <CardMedia2 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_2px_1px_-1px_rgba(0,0,0,0.2),0px_1px_1px_0px_rgba(0,0,0,0.14),0px_1px_3px_0px_rgba(0,0,0,0.12)]" />
    </div>
  );
}

function TextContainer3() {
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

function ListItem3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="ListItem">
      <TextContainer3 />
    </div>
  );
}

function CardMedia3() {
  return (
    <div className="h-[194px] relative rounded-[8px] shrink-0 w-full" data-name="CardMedia">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
        <img alt="" className="absolute max-w-none object-cover rounded-[8px] size-full" src={imgCardMedia} />
        <div className="absolute bg-[#f5f5f5] inset-0 rounded-[8px]" />
      </div>
    </div>
  );
}

function Card3() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[14px]" data-name="Card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative w-full">
          <ListItem3 />
          <CardMedia3 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_2px_1px_-1px_rgba(0,0,0,0.2),0px_1px_1px_0px_rgba(0,0,0,0.14),0px_1px_3px_0px_rgba(0,0,0,0.12)]" />
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[24px] items-start relative w-full">
        <Card2 />
        <Card3 />
      </div>
    </div>
  );
}

function TextContainer4() {
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

function ListItem4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="ListItem">
      <TextContainer4 />
    </div>
  );
}

function CardMedia4() {
  return (
    <div className="h-[194px] relative rounded-[8px] shrink-0 w-full" data-name="CardMedia">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
        <img alt="" className="absolute max-w-none object-cover rounded-[8px] size-full" src={imgCardMedia} />
        <div className="absolute bg-[#f5f5f5] inset-0 rounded-[8px]" />
      </div>
    </div>
  );
}

function Card4() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[14px]" data-name="Card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative w-full">
          <ListItem4 />
          <CardMedia4 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_2px_1px_-1px_rgba(0,0,0,0.2),0px_1px_1px_0px_rgba(0,0,0,0.14),0px_1px_3px_0px_rgba(0,0,0,0.12)]" />
    </div>
  );
}

function TextContainer5() {
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

function ListItem5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="ListItem">
      <TextContainer5 />
    </div>
  );
}

function CardMedia5() {
  return (
    <div className="h-[194px] relative rounded-[8px] shrink-0 w-full" data-name="CardMedia">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
        <img alt="" className="absolute max-w-none object-cover rounded-[8px] size-full" src={imgCardMedia} />
        <div className="absolute bg-[#f5f5f5] inset-0 rounded-[8px]" />
      </div>
    </div>
  );
}

function Card5() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[14px]" data-name="Card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative w-full">
          <ListItem5 />
          <CardMedia5 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_2px_1px_-1px_rgba(0,0,0,0.2),0px_1px_1px_0px_rgba(0,0,0,0.14),0px_1px_3px_0px_rgba(0,0,0,0.12)]" />
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[24px] items-start relative w-full">
        <Card4 />
        <Card5 />
      </div>
    </div>
  );
}

export default function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative size-full" data-name="Container">
      <Frame />
      <Frame1 />
      <Frame2 />
    </div>
  );
}