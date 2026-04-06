import { BOOK_AN_ENTERPRISE_DISCOVERY_CALL_REDIRECT_URL } from '@/app/config/urls';

type StickyCtaBannerProps = {
  desktopVisible: boolean;
  mobileVisible: boolean;
};

export function StickyCtaBanner({ desktopVisible, mobileVisible }: StickyCtaBannerProps) {
  return (
    <>
      <div
        className={`fixed left-0 right-0 top-[57px] z-40 hidden border-b border-[#1f1f1f] bg-[#111111]/95 backdrop-blur-md transition-all duration-300 sm:block ${
          desktopVisible ? 'translate-y-0 opacity-100' : 'pointer-events-none -translate-y-full opacity-0'
        }`}
        aria-hidden={!desktopVisible}
      >
        <div className="mx-auto flex min-h-[57px] w-full max-w-[1440px] items-center justify-center px-[20px] sm:px-[32px]">
          <div className="flex w-full flex-col items-center justify-center gap-[10px] py-[10px] sm:flex-row sm:gap-[16px] sm:py-0">
            <p
              className="text-center text-[16px] leading-[22px] text-white/85 sm:text-[17px]"
              style={{ fontVariationSettings: "'opsz' 14", fontWeight: 500 }}
            >
              30 minutes. No slides. See exactly how Appointy fits your workflows.
            </p>

            <a
              href={BOOK_AN_ENTERPRISE_DISCOVERY_CALL_REDIRECT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
              aria-label="Reserve your slot"
            >
              <div className="flex h-[36px] w-full items-center justify-center rounded-[8px] bg-white px-[16px] sm:w-auto sm:min-w-[220px]">
                <p
                  className="text-center text-[12px] uppercase tracking-[0.4px] text-[#111]"
                  style={{
                    lineHeight: '18px',
                    fontVariationSettings: "'opsz' 14",
                    fontWeight: 600
                  }}
                >
                  Reserve your slot
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div
        className={`fixed inset-x-[16px] bottom-[16px] z-50 rounded-[14px] border border-[#1f1f1f] bg-[#111111]/95 p-[14px] shadow-[0px_18px_40px_rgba(0,0,0,0.22)] backdrop-blur-md transition-all duration-300 sm:hidden ${
          mobileVisible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-[24px] opacity-0'
        }`}
        aria-hidden={!mobileVisible}
      >
        <div className="flex flex-col gap-[10px]">
          <p
            className="text-center text-[14px] leading-[20px] text-white/85"
            style={{ fontVariationSettings: "'opsz' 14", fontWeight: 500 }}
          >
            30 minutes. No slides. See exactly how Appointy fits your workflows.
          </p>

          <a
            href={BOOK_AN_ENTERPRISE_DISCOVERY_CALL_REDIRECT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
            aria-label="Reserve your slot"
          >
            <div className="flex h-[48px] w-full items-center justify-center rounded-[10px] bg-white px-[16px]">
              <p
                className="text-center text-[13px] uppercase tracking-[0.4px] text-[#111]"
                style={{
                  lineHeight: '20px',
                  fontVariationSettings: "'opsz' 14",
                  fontWeight: 600
                }}
              >
                Reserve your slot
              </p>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
