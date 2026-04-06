function Container2() {
  return <div className="bg-[#d1d5dc] opacity-20 rounded-[8px] shrink-0 size-[80px]" data-name="Container" />;
}

function TextContainer() {
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

function ListItem() {
  return (
    <div className="relative shrink-0 w-[260px]" data-name="ListItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-full">
        <TextContainer />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center justify-center relative shrink-0" data-name="Container">
      <Container2 />
      <ListItem />
    </div>
  );
}

function Container() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start p-[24px] relative rounded-[10px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <Container1 />
    </div>
  );
}

function Container5() {
  return <div className="bg-[#d1d5dc] opacity-20 rounded-[8px] shrink-0 size-[80px]" data-name="Container" />;
}

function TextContainer1() {
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

function ListItem1() {
  return (
    <div className="relative shrink-0 w-[260px]" data-name="ListItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-full">
        <TextContainer1 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Container5 />
      <ListItem1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start p-[24px] relative rounded-[10px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <Container4 />
    </div>
  );
}

function Container8() {
  return <div className="bg-[#d1d5dc] opacity-20 rounded-[8px] shrink-0 size-[80px]" data-name="Container" />;
}

function TextContainer2() {
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

function ListItem2() {
  return (
    <div className="relative shrink-0 w-[260px]" data-name="ListItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-full">
        <TextContainer2 />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Container8 />
      <ListItem2 />
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start p-[24px] relative rounded-[10px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <Container7 />
    </div>
  );
}

function Container11() {
  return <div className="bg-[#d1d5dc] opacity-20 rounded-[8px] shrink-0 size-[80px]" data-name="Container" />;
}

function TextContainer3() {
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

function ListItem3() {
  return (
    <div className="relative shrink-0 w-[260px]" data-name="ListItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-full">
        <TextContainer3 />
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Container11 />
      <ListItem3 />
    </div>
  );
}

function Container9() {
  return (
    <div className="bg-white content-stretch flex flex-col h-full items-start p-[24px] relative rounded-[10px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <Container10 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
      <Container />
      <Container3 />
      <Container6 />
      <div className="flex flex-row items-center self-stretch">
        <Container9 />
      </div>
    </div>
  );
}

function Container14() {
  return <div className="bg-[#d1d5dc] opacity-20 rounded-[8px] shrink-0 size-[80px]" data-name="Container" />;
}

function TextContainer4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px py-[6px] relative text-center tracking-[0.15px] whitespace-pre-wrap" data-name="Text Container">
      <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[20px] text-[rgba(0,0,0,0.87)] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>{`Education Ops / Learning & Development`}</p>
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.43] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.54)] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Classes, cohort programs, exams, interviews, certifications, and instructor-led sessions.
      </p>
    </div>
  );
}

function ListItem4() {
  return (
    <div className="relative shrink-0 w-[260px]" data-name="ListItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-full">
        <TextContainer4 />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center justify-center relative shrink-0" data-name="Container">
      <Container14 />
      <ListItem4 />
    </div>
  );
}

function Container12() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start p-[24px] relative rounded-[10px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <Container13 />
    </div>
  );
}

function Container17() {
  return <div className="bg-[#d1d5dc] opacity-20 rounded-[8px] shrink-0 size-[80px]" data-name="Container" />;
}

function TextContainer5() {
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

function ListItem5() {
  return (
    <div className="relative shrink-0 w-[260px]" data-name="ListItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-full">
        <TextContainer5 />
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Container17 />
      <ListItem5 />
    </div>
  );
}

function Container15() {
  return (
    <div className="bg-white content-stretch flex flex-col h-full items-start p-[24px] relative rounded-[10px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <Container16 />
    </div>
  );
}

function Container20() {
  return <div className="bg-[#d1d5dc] opacity-20 rounded-[8px] shrink-0 size-[80px]" data-name="Container" />;
}

function TextContainer6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px py-[6px] relative text-center tracking-[0.15px] whitespace-pre-wrap" data-name="Text Container">
      <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[20px] text-[rgba(0,0,0,0.87)] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>{`Sales & Marketing Operations`}</p>
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.43] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.54)] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Demo bookings, onboarding sessions, partner meetings, and campaign-related scheduling
      </p>
    </div>
  );
}

function ListItem6() {
  return (
    <div className="relative shrink-0 w-[260px]" data-name="ListItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-full">
        <TextContainer6 />
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Container20 />
      <ListItem6 />
    </div>
  );
}

function Container18() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start p-[24px] relative rounded-[10px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <Container19 />
    </div>
  );
}

function Container23() {
  return <div className="bg-[#d1d5dc] opacity-20 rounded-[8px] shrink-0 size-[80px]" data-name="Container" />;
}

function TextContainer7() {
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

function ListItem7() {
  return (
    <div className="relative shrink-0 w-[260px]" data-name="ListItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-full">
        <TextContainer7 />
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Container23 />
      <ListItem7 />
    </div>
  );
}

function Container21() {
  return (
    <div className="bg-white content-stretch flex flex-col h-full items-start p-[24px] relative rounded-[10px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <Container22 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
      <Container12 />
      <div className="flex flex-row items-center self-stretch">
        <Container15 />
      </div>
      <Container18 />
      <div className="flex flex-row items-center self-stretch">
        <Container21 />
      </div>
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative size-full">
      <Frame />
      <Frame2 />
    </div>
  );
}