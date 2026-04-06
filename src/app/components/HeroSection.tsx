import { useId, useState, useEffect } from 'react';
import { BOOK_AN_ENTERPRISE_DISCOVERY_CALL_REDIRECT_URL } from '@/app/config/urls';
import svgPaths from '@/imports/svg-71etl2bqme';
import imgImageMerchantMaverick from "../../assets/958a9d26ca1087a9ae60577dec169be1062a6ef3.webp";
import imgImageCapterra from "../../assets/4ffc70432dcab0fe98995cb81aa2b629545589a4.webp";
import imgImageG2 from "../../assets/7ca2ee251a256c353e5dcf2e05fb12ca5dd69dde.webp";
import imgImageGoogle from "../../assets/56e1a9e0c159e8d7cdc1adb3191d523b9ada6cc4.webp";
import imgHeroInfographicOne from "../../assets/hero-infographic-1.webp";
import imgHeroInfographicTwo from "../../assets/hero-infographic-2.webp";

type StarVariant = 'full' | 'half' | 'empty';

function StarIcon({ path, variant }: { path: string; variant: StarVariant }) {
  const gradientId = useId();
  const highlightColor = '#F59E0B';
  const mutedColor = '#E5E7EB';
  const fill =
    variant === 'full'
      ? highlightColor
      : variant === 'empty'
        ? mutedColor
        : `url(#${gradientId})`;
  const stroke =
    variant === 'full'
      ? highlightColor
      : variant === 'empty'
        ? mutedColor
        : `url(#${gradientId})`;

  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
      {variant === 'half' && (
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="0">
            <stop offset="50%" stopColor={highlightColor} />
            <stop offset="50%" stopColor={mutedColor} />
          </linearGradient>
        </defs>
      )}
      <path
        d={path}
        fill={fill}
        id="Vector"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.16667"
      />
    </svg>
  );
}

function renderStars(rating: number, path: string) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);

  const stars: StarVariant[] = [
    ...Array(fullStars).fill('full'),
    ...(hasHalf ? ['half'] : []),
    ...Array(emptyStars).fill('empty')
  ];

  return stars.map((variant, index) => (
    <div key={`${variant}-${index}`} className="relative shrink-0 size-[14px]">
      <StarIcon path={path} variant={variant} />
    </div>
  ));
}

export function HeroSection() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [nextWordIndex, setNextWordIndex] = useState(0);
  const [isWordFading, setIsWordFading] = useState(false);
  const [currentHeroImageIndex, setCurrentHeroImageIndex] = useState(0);
  
  const rotatingWords = ["Enterprise-grade", "Secure", "Governance-ready", "Configurable", "Modern"];
  const heroImages = [imgHeroInfographicOne, imgHeroInfographicTwo];

  useEffect(() => {
    // Rotate words every 3 seconds with a smooth crossfade
    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    const interval = setInterval(() => {
      const upcomingIndex = (currentWordIndex + 1) % rotatingWords.length;
      setNextWordIndex(upcomingIndex);
      setIsWordFading(true);

      // Change hero image every 2 word changes
      if (upcomingIndex % 2 === 0) {
        setCurrentHeroImageIndex((imageIndex) => (imageIndex + 1) % heroImages.length);
      }

      timeoutId = setTimeout(() => {
        setCurrentWordIndex(upcomingIndex);
        setIsWordFading(false);
      }, 900);
    }, 3000);

    return () => {
      clearInterval(interval);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [currentWordIndex, heroImages.length, rotatingWords.length]);

  return (
    <section id="hero-section" className="bg-transparent min-h-[calc(100svh-57px)] flex flex-col items-start lg:flex-row lg:items-center relative w-full pt-[57px] lg:pt-[100px]">
      <div className="flex-1 min-h-px min-w-px relative w-full">
        <div className="flex flex-col items-start w-full">
          {/* Main Content */}
          <div className="flex-1 min-h-px min-w-px relative w-full">
            <div className="content-stretch flex flex-col items-start px-[24px] sm:px-[40px] lg:pl-[100px] lg:pr-[24px] relative w-full">
              <div className="flex-1 min-h-px min-w-px relative w-full">
                {/* Hero Content */}
                <div className="relative content-stretch flex flex-col gap-[40px] items-start lg:flex-row lg:gap-[40px] lg:items-center w-full pt-[48px] lg:pt-[86px]">
                  <div className="content-stretch flex flex-col gap-[16px] items-start relative w-full lg:max-w-[762px]">
                    {/* Heading and Description */}
                    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                      <div className="content-stretch flex flex-col heading-primary items-start relative shrink-0 w-full max-w-[762px] whitespace-pre-wrap lg:text-[52px]">
                        <div className="relative shrink-0 w-full">
                          <p
                            className={`absolute inset-0 transition-opacity duration-[900ms] ease-in-out ${
                              isWordFading ? 'opacity-0' : 'opacity-100'
                            }`}
                            style={{ color: '#762F88' }}
                          >
                            {rotatingWords[currentWordIndex]}
                          </p>
                          <p
                            className={`relative transition-opacity duration-[900ms] ease-in-out ${
                              isWordFading ? 'opacity-100' : 'opacity-0'
                            }`}
                            style={{ color: '#762F88' }}
                          >
                            {rotatingWords[nextWordIndex]}
                          </p>
                        </div>
                        <p className="relative shrink-0 w-full">
                          Scheduling platform
                        </p>
                        <div className="relative shrink-0 w-full">
                          <span className="inline">{`tailored for `}</span>
                          <span className="inline">{`medium & large organisations`}</span>
                        </div>
                      </div>
                      <p
                        className="subheading whitespace-pre-wrap max-w-[472px]"
                      >
                        {`Appointy helps streamline complex booking processes, automate workflows, and optimize staff & resource utilization — across internal and external scheduling touchpoints.`}
                      </p>
                    </div>

                    {/* CTA Button */}
                    <div className="content-stretch flex flex-col gap-[4px] items-center sm:items-start lg:items-center relative shrink-0 w-full sm:w-[334px]">
                      <a href={BOOK_AN_ENTERPRISE_DISCOVERY_CALL_REDIRECT_URL} target="_blank" rel="noopener noreferrer" className="w-full" aria-label="Book an enterprise discovery call">
                        <div className="bg-black h-[53px] rounded-[8px] shrink-0 w-full flex items-center justify-center">
                          <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[21px] text-[13px] sm:text-[13px] lg:text-[14px] text-center text-white tracking-[0.5px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
                            Book an Enterprise Discovery Call
                          </p>
                        </div>
                      </a>
                      <p className="font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[18px] text-[#999] text-[12px] text-center" style={{ fontVariationSettings: "'opsz' 9" }}>
                        Solution fit discussion — not a sales call
                      </p>
                    </div>
                  </div>

                  {/* Hero Image */}
                  <div className="relative w-full max-w-[820px] aspect-[1990/1567] self-center mx-auto lg:mx-0 lg:w-[820px] lg:mt-0 mt-[8px]">
                    {heroImages.map((image, index) => (
                      <img
                        key={image}
                        alt=""
                        className={`absolute inset-0 h-full w-full object-contain rounded-[16px] transition-opacity duration-[1200ms] ease-in-out ${
                          index === currentHeroImageIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                        decoding={index === 0 ? 'sync' : 'async'}
                        fetchPriority={index === 0 ? 'high' : 'auto'}
                        loading={index === 0 ? 'eager' : 'lazy'}
                        width={index === 0 ? 1200 : 1000}
                        height={index === 0 ? 950 : 868}
                        src={image}
                      />
                    ))}
                  </div>
                </div>

                {/* Social Proof */}
                <div className="relative w-full mt-[32px] lg:mt-[40px]">
                  <div className="relative content-stretch grid grid-cols-2 gap-[16px] place-items-center justify-center grayscale pb-[24px] scale-[0.9] origin-top sm:flex sm:flex-nowrap sm:gap-[20px] sm:mt-[8px] sm:scale-[0.9] md:scale-[0.95] lg:scale-100 lg:gap-[32px] lg:h-[56.5px] lg:w-full lg:max-w-none lg:px-0">
                    {/* Merchant Maverick */}
                    <div className="h-[56.5px] relative shrink-0 w-[121.141px]">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-center justify-center relative size-full">
                        <div className="flex-[1_0_0] min-h-px min-w-px opacity-70 relative w-[101.141px]">
                          <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-contain pointer-events-none size-full" loading="lazy" width={708} height={224} src={imgImageMerchantMaverick} />
                        </div>
                        <div className="h-[16.5px] relative shrink-0 w-[121.141px]">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center justify-center relative size-full">
                            {renderStars(4.5, svgPaths.p23039b40)}
                            <div className="h-[16.5px] min-h-px min-w-px relative shrink-0">
                              <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                                <p className="relative font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[16.5px] text-[#666] text-[11px] text-center" style={{ fontVariationSettings: "'opsz' 14" }}>
                                  4.5/5
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Capterra */}
                    <div className="h-[56.5px] relative shrink-0 w-[121.141px]">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-center justify-center relative size-full">
                        <div className="flex-[1_0_0] min-h-px min-w-px opacity-70 relative w-[117.188px]">
                          <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-contain pointer-events-none size-full" loading="lazy" width={824} height={225} src={imgImageCapterra} />
                        </div>
                        <div className="h-[16.5px] relative shrink-0 w-[121.141px]">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center justify-center relative size-full">
                            {renderStars(4.5, svgPaths.p23039b40)}
                            <div className="h-[16.5px] min-h-px min-w-px relative shrink-0">
                              <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                                <p className="relative font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[16.5px] text-[#666] text-[11px] text-center" style={{ fontVariationSettings: "'opsz' 14" }}>
                                  4.5/5
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* G2 */}
                    <div className="h-[56.5px] relative shrink-0 w-[121.141px]">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-center justify-center relative size-full">
                        <div className="flex-[1_0_0] min-h-px min-w-px opacity-70 relative w-[97.141px]">
                          <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-contain pointer-events-none size-full" loading="lazy" width={680} height={224} src={imgImageG2} />
                        </div>
                        <div className="h-[16.5px] relative shrink-0 w-[121.141px]">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center justify-center relative size-full">
                            {renderStars(4.5, svgPaths.p2763a240)}
                            <div className="h-[16.5px] min-h-px min-w-px relative shrink-0">
                              <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                                <p className="relative font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[16.5px] text-[#666] text-[11px] text-center" style={{ fontVariationSettings: "'opsz' 14" }}>
                                  4.5/5
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Google */}
                    <div className="h-[56.5px] relative shrink-0 w-[111.523px]">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-center justify-center relative size-full">
                        <div className="flex-[1_0_0] min-h-px min-w-px opacity-70 relative w-[94.281px]">
                          <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-contain pointer-events-none size-full" loading="lazy" width={660} height={224} src={imgImageGoogle} />
                        </div>
                        <div className="h-[16.5px] relative shrink-0 w-[111.523px]">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center justify-center relative size-full">
                            {renderStars(5, svgPaths.p2763a240)}
                            <div className="h-[16.5px] min-h-px min-w-px relative shrink-0">
                              <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                                <p className="relative font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[16.5px] text-[#666] text-[11px] text-center" style={{ fontVariationSettings: "'opsz' 14" }}>
                                  5/5
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
