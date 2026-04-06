import imgPpcEnterpriseGroup511 from "../assets/a60f6879bb0ce73a956ec1c796830ecf6f789be7.webp";

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
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px overflow-clip relative rounded-[8px] w-full" data-name="CardMedia">
      <div className="absolute h-[161px] left-[95px] top-[17px] w-[304px]" data-name="PPC Enterprise Group 5 (1) 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPpcEnterpriseGroup511} />
      </div>
    </div>
  );
}

export default function Card() {
  return (
    <div className="bg-white relative rounded-[14px] size-full" data-name="Card">
      <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip p-[24px] relative rounded-[inherit] size-full">
        <ListItem />
        <CardMedia />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_2px_1px_-1px_rgba(0,0,0,0.2),0px_1px_1px_0px_rgba(0,0,0,0.14),0px_1px_3px_0px_rgba(0,0,0,0.12)]" />
    </div>
  );
}