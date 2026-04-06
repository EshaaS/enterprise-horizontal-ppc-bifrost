import { useRef, useState, type TouchEvent } from 'react';
import logoAppointy from '../../assets/Appointy Logo from PPC.svg';
import imgUsecaseItsm from '../../assets/usecase-itsm.webp';
import imgUsecaseHrOps from '../../assets/usecase-hr-operations.webp';
import imgUsecaseCustomerExperience from '../../assets/usecase-customer-experience.webp';
import imgUsecaseFieldService from '../../assets/usecase-field-service.webp';
import imgUsecaseEducationOps from '../../assets/usecase-education-ops.webp';
import imgUsecaseFranchiseOps from '../../assets/usecase-franchise-operations.webp';
import imgUsecaseSalesMarketing from '../../assets/usecase-sales-marketing.webp';
import imgUsecaseWorkplaceServices from '../../assets/usecase-workplace-services.webp';
import imgIntegrationsArc from '../../assets/integrations-arc.webp';
import imgFeatureOmnichannel from '../../assets/feature-omnichannel.webp';
import imgFeatureUserRoles from '../../assets/feature-user-roles.webp';
import imgFeatureOrgHierarchy from '../../assets/feature-org-hierarchy.webp';
import imgFeatureDatabaseManagement from '../../assets/feature-database-management.webp';
import imgFeatureReportingAnalytics from '../../assets/feature-reporting-analytics.webp';
import imgFeatureReminders from '../../assets/feature-reminders.webp';
import imgFeatureSecureInfrastructure from '../../assets/feature-secure-infrastructure.webp';
import imgFeatureMobileApp from '../../assets/feature-mobile-app.webp';
import imgFeatureOnlinePayments from '../../assets/feature-online-payments.webp';
import imgTestimonialMath from '../../assets/testimonial-math.webp';
import imgTestimonialUniversity from '../../assets/testimonial-university.webp';
import imgTestimonialHealthcare from '../../assets/testimonial-healthcare.webp';
import imgTestimonialTech from '../../assets/testimonial-tech.webp';
import imgTestimonialVehicleInspection from '../../assets/testimonial-vehicle-inspection.webp';
import imgTeamSarangVerma from '../../assets/team-sarang-verma.webp';
import imgTeamShauryaPratapSingh from '../../assets/team-shaurya-pratap-singh.webp';
import imgTeamAnvitiChaurasiya from '../../assets/team-anviti-chaurasiya.webp';
import imgTeamLeharKhilrani from '../../assets/team-lehar-khilrani.webp';
import { BOOK_AN_ENTERPRISE_DISCOVERY_CALL_REDIRECT_URL } from '@/app/config/urls';

const USE_CASES = [
  { title: 'ITSM', description: 'Incidents, change windows, on-site support visits, audits, and maintenance scheduling.', image: imgUsecaseItsm },
  { title: 'HR Operations', description: 'Interview scheduling, onboarding sessions, training programs, internal services, and workforce coordination.', image: imgUsecaseHrOps },
  { title: 'Customer Experience', description: 'Customer appointments, assisted scheduling, escalations, and service interactions across channels.', image: imgUsecaseCustomerExperience },
  { title: 'Field Service', description: 'Field visits, inspections, installations, certifications, and skill-based routing.', image: imgUsecaseFieldService },
  { title: 'Education Ops / Learning & Development', description: 'Classes, cohort programs, exams, interviews, certifications, and instructor-led sessions.', image: imgUsecaseEducationOps },
  { title: 'Franchise Operations', description: 'Standardized scheduling across franchise locations with local flexibility and brand consistency.', image: imgUsecaseFranchiseOps },
  { title: 'Sales & Marketing Operations', description: 'Demo bookings, onboarding sessions, partner meetings, and campaign-related scheduling', image: imgUsecaseSalesMarketing },
  { title: 'Workplace Services', description: 'Room bookings, facilities scheduling, resource scheduling, workplace services, and internal resource coordination.', image: imgUsecaseWorkplaceServices }
];

const FEATURES = [
  {
    title: 'Omnichannel Scheduling',
    description:
      'Accept bookings from Google/ social media, or integrate our 24x7 online enterprise scheduler on your client-facing application/ website to provide a seamless booking experience',
    image: imgFeatureOmnichannel
  },
  {
    title: 'User Roles & Rights',
    description:
      'With role-based access you can control which feature or how much information is available to different users depending on their role within the organization',
    image: imgFeatureUserRoles
  },
  {
    title: 'Organizational Hierarchy',
    description:
      'Easily manage cross functional teams, multiple locations and users spread across different geographies from a single interface',
    image: imgFeatureOrgHierarchy
  },
  {
    title: 'Database Management',
    description:
      'Store important client data like appointment details, purchase history, etc. under dedicated user profiles to collect insights and deliver personalized services',
    image: imgFeatureDatabaseManagement
  },
  {
    title: 'Reporting & Analytics',
    description:
      'Keep a track of your bookings, users, and other important metrics with the option to print and export data in various formats',
    image: imgFeatureReportingAnalytics
  },
  {
    title: 'Reminders & Notifications',
    description:
      'Receive sms, email, or in-app notifications for booking updates. Automated reminders are also sent to attendees before appointments to reduce no shows',
    image: imgFeatureReminders
  },
  {
    title: 'Mobile App',
    description:
      'Stay on top of your upcoming appointments and schedule no matter where you are with Appointy’s Android & iOS mobile app',
    image: imgFeatureMobileApp
  },
  {
    title: 'Online payments',
    description:
      'Accept full or partial prepayments for your services using our integration with popular payment gateways like Stripe, Square, and PayPal',
    image: imgFeatureOnlinePayments
  }
];

const TESTIMONIALS = [
  {
    headline: 'One of the Big Five global technology companies',
    italicLine: 'Scheduling platform for their employee wellness program',
    image: imgTestimonialTech,
    logo: imgFeatureReportingAnalytics,
    paragraph: (
      <>
        Appointy is deployed as a privately hosted scheduling solution supporting 200,000+ employees across 90+ global locations.
        <br />
        The platform enables{' '}
        <span className="font-semibold text-[#56207D]">
          internal appointment scheduling for wellness programs, fitness sessions, and employee classes
        </span>{' '}
        at massive scale of ~1 million
        <br />
        appointments/year across their four wellness programs.
        <br />
        <br />
        150,000 hours of admin time saved annually via end-to-end automation
        <br />
        ~ $5M+ saved annually in admin time
      </>
    )
  },
  {
    headline: 'A Fortune 500 healthcare and life sciences organization',
    italicLine: 'Privately hosted ITSM scheduling',
    image: imgTestimonialHealthcare,
    logo: imgFeatureSecureInfrastructure,
    paragraph: (
      <>
        Appointy supports{' '}
        <span className="font-semibold text-[#56207D]">
          Internal IT consultation and support scheduling, deployed in a private hosting environment
        </span>{' '}
        to meet strict security, compliance, and governance requirements. The company schedules appointments for about 700 agents who provide on-site and remote support services to 200,000+ employees worldwide.
        <br />
        Automated over 100,000+ internal IT appointments annually – and cut average issue resolution time by 28%.
      </>
    )
  },
  {
    headline: 'Largest vehicle inspection company in New Zealand',
    italicLine: 'Centralized scheduling for complex inspection workflows',
    image: imgTestimonialVehicleInspection,
    logo: imgFeatureReminders,
    paragraph: (
      <>
        Appointy integrated with the government’s vehicle data API which enabled{' '}
        <span className="font-semibold text-[#56207D]">
          guided, parameter-based booking flows
        </span>{' '}
        that automatically match customers to the correct inspection service based on vehicle attributes—{' '}
        <span className="font-semibold text-[#56207D]">
          reducing incorrect bookings, operational bottlenecks, and administrative overhead
        </span>{' '}
        while improving the end-to-end booking experience.
        <br />
        <br />
        The system is deployed across 85+ inspection centers around the nation.
      </>
    )
  },
  {
    headline: 'World’s top Math franchise network',
    italicLine: 'Centralized scheduling for in-center and virtual learning',
    image: imgTestimonialMath,
    logo: imgFeatureReminders,
    paragraph: (
      <>
        Appointy is deployed as a{' '}
        <span className="font-semibold text-[#56207D]">
          centralized scheduling platform
        </span>{' '}
        across 600+ centers, streamlining{' '}
        <span className="font-semibold text-[#56207D]">
          session bookings, instructor allocation, and attendance tracking.
        </span>
        <br />
        <br />
        Integrated with the organization’s in-house CRM, the system ensures{' '}
        <span className="font-semibold text-[#56207D]">
          accurate student and guardian data synchronization,
        </span>{' '}
        supports{' '}
        <span className="font-semibold text-[#56207D]">
          fractional instructor availability management,
        </span>{' '}
        and provides real-time calendar visibility — reducing administrative overhead while improving the booking experience for guardians and administrators.
      </>
    )
  },
  {
    headline: 'One of Canada’s top public universities',
    italicLine: 'LMS-integrated academic scheduling system',
    image: imgTestimonialUniversity,
    logo: imgFeatureOmnichannel,
    paragraph: (
      <>
        Appointy is embedded directly within the university’s{' '}
        <span className="font-semibold text-[#56207D]">
          Learning Management System to support class scheduling, session bookings, and instructor coordination.
        </span>{' '}
        The system is used by the Workplace Learning department to manage high-volume academic operations while integrating seamlessly into existing institutional infrastructure.
      </>
    )
  }
];

export function UseCasesSection() {
  return (
    <section className="bg-transparent min-h-[calc(100svh-57px)] relative shrink-0 w-full flex items-center">
      <div className="flex flex-col items-center justify-center w-full">
        <div className="flex flex-col items-center justify-center px-[24px] sm:px-[40px] lg:px-[120px] py-[64px] sm:py-[96px] lg:py-[120px] relative w-full max-w-[1440px] mx-auto">
          <div className="flex flex-col gap-[16px] items-center shrink-0 w-full mb-[24px]">
            <p className="heading-primary text-center max-w-[900px]">
              One scheduling platform—used across teams, departments, and use cases
            </p>
            <p className="subheading text-center max-w-[900px]">
              Appointy is designed to support multiple functional verticals across industries. Teams adopt Appointy within their operational context—while sharing a commonly deployed, governed platform that can scale across departments and geographies.
            </p>
          </div>

          {/* Use Cases Grid */}
          <div className="w-full max-w-[1200px] px-[24px] sm:px-[40px] lg:px-0 py-[24px] sm:py-[32px] lg:py-[40px]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[16px] sm:gap-[20px] lg:gap-[24px] items-stretch auto-rows-fr">
              {USE_CASES.map((useCase, index) => (
                <div key={index} className="w-full">
                  <div
                    className="bg-white flex flex-col items-start p-[20px] relative rounded-[12px] w-full h-full min-h-[240px] sm:min-h-[260px] lg:min-h-[280px]"
                    style={{ backgroundColor: '#ffffff' }}
                  >
                    <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
                    <div className="flex flex-col gap-[12px] sm:gap-[16px] items-center justify-center relative w-full h-full">
                      <div className="shrink-0 size-[56px] sm:size-[64px] flex items-center justify-center">
                        <img alt="" className="h-full w-full object-contain" decoding="async" loading="lazy" width={64} height={64} src={useCase.image} />
                      </div>
                      <div className="relative w-full flex-1 min-h-0">
                        <div className="flex flex-col items-start justify-center min-h-px py-[6px] relative text-center tracking-[0.15px]">
                          <p className="card-heading w-full text-[#5b1f7d]">
                            {useCase.title}
                          </p>
                          <p className="card-subheading w-full mt-2">
                            {useCase.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FeaturesSection() {
  return (
    <section className="bg-transparent min-h-[calc(100svh-57px)] relative shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="flex flex-col items-center justify-center px-[24px] sm:px-[40px] lg:px-[120px] py-[72px] sm:py-[96px] lg:py-[120px] relative w-full max-w-[1440px] mx-auto">
          <div className="flex flex-col gap-[16px] items-center shrink-0 w-full mb-[24px]">
            <p className="heading-primary text-center max-w-[900px]">
              <span className="text-[#5b1f7d]">Key features</span> in our enterprise appointment scheduling software
            </p>
          </div>

          <div className="w-full max-w-[1200px] px-[24px] sm:px-[40px] lg:px-0 py-[24px] sm:py-[32px] lg:py-[40px]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[16px] sm:gap-[20px] lg:gap-[24px] items-stretch auto-rows-fr">
              {FEATURES.map((feature) => (
                <div key={feature.title} className="w-full">
                  <div
                    className="bg-white flex flex-col items-start p-[20px] relative rounded-[12px] w-full h-full min-h-[240px] sm:min-h-[260px] lg:min-h-[280px]"
                    style={{ backgroundColor: '#ffffff' }}
                  >
                    <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
                    <div className="flex flex-col gap-[12px] sm:gap-[16px] items-center text-center relative w-full h-full">
                      <div className="shrink-0 h-[64px] w-[64px] flex items-center justify-center">
                        <img alt="" className="h-full w-full object-contain" decoding="async" loading="lazy" width={64} height={64} src={feature.image} />
                      </div>
                      <div className="relative w-full flex-1 min-h-0">
                        <div className="flex flex-col items-center justify-start min-h-px py-[6px] relative tracking-[0.15px]">
                          <p className="card-heading w-full text-center">
                            {feature.title}
                          </p>
                          <p className="card-subheading w-full mt-2 text-center">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchDeltaX = useRef(0);
  const totalTestimonials = TESTIMONIALS.length;

  const goPrev = () => {
    setActiveIndex((prev) => (prev - 1 + totalTestimonials) % totalTestimonials);
  };

  const goNext = () => {
    setActiveIndex((prev) => (prev + 1) % totalTestimonials);
  };

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
    touchDeltaX.current = 0;
  };

  const handleTouchMove = (event: TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) {
      return;
    }

    touchDeltaX.current = event.touches[0]?.clientX - touchStartX.current;
  };

  const handleTouchEnd = () => {
    const swipeThreshold = 40;
    const delta = touchDeltaX.current;

    if (Math.abs(delta) >= swipeThreshold) {
      if (delta > 0) {
        goPrev();
      } else {
        goNext();
      }
    }

    touchStartX.current = null;
    touchDeltaX.current = 0;
  };

  return (
    <section className="bg-transparent min-h-[calc(100svh-57px)] relative shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="flex flex-col items-center justify-center px-[24px] sm:px-[40px] lg:px-[120px] py-[72px] sm:py-[96px] lg:py-[120px] relative w-full max-w-[1440px] mx-auto">
          <div className="flex flex-col gap-[16px] items-center shrink-0 w-full mb-[24px]">
            <p className="heading-primary text-center max-w-[900px]">
              <span className="text-[#5b1f7d]">Trusted by</span> marquee customers, backed by deep domain expertise across industries
            </p>
          </div>
          <div className="relative w-full max-w-[760px] sm:max-w-[820px] lg:max-w-[920px] overflow-visible">
            <div className="absolute left-[-64px] right-[-64px] top-1/2 -translate-y-1/2 flex items-center justify-between pointer-events-none z-10">
              <button
                className="pointer-events-auto bg-white border border-[#e5e7eb] rounded-full size-[44px] shadow-[0px_4px_12px_rgba(0,0,0,0.08)]"
                aria-label="Previous testimonial"
                onClick={goPrev}
              >
                <span className="block text-[20px] leading-none">‹</span>
              </button>
              <button
                className="pointer-events-auto bg-white border border-[#e5e7eb] rounded-full size-[44px] shadow-[0px_4px_12px_rgba(0,0,0,0.08)]"
                aria-label="Next testimonial"
                onClick={goNext}
              >
                <span className="block text-[20px] leading-none">›</span>
              </button>
            </div>

            <div
              className="w-full py-[12px]"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div className="bg-white rounded-[16px] p-[28px] sm:p-[36px] shadow-[0px_2px_12px_rgba(0,0,0,0.08)] border border-[#f1f5f9] w-full max-w-[760px] mx-auto min-h-[360px]">
                <div className="flex flex-col sm:flex-row items-start gap-[20px]">
                  <div className="size-[96px] sm:size-[136px] rounded-[16px] overflow-hidden bg-[#e5e7eb] shrink-0">
                    <img
                      alt=""
                      className="h-full w-full object-cover"
                      decoding="async"
                      loading="lazy"
                      width={136}
                      height={136}
                      src={TESTIMONIALS[activeIndex]?.image}
                    />
                  </div>
                  <div className="flex-1">
                    <p className="card-heading text-left">
                      {TESTIMONIALS[activeIndex]?.headline}
                    </p>
                    <p className="text-[14px] sm:text-[15px] text-[#6b7280] italic text-left mt-[6px]">
                      {TESTIMONIALS[activeIndex]?.italicLine}
                    </p>
                    <p className="card-subheading text-[#4b5563] text-left mt-[16px] whitespace-pre-line">
                      {TESTIMONIALS[activeIndex]?.paragraph}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-[8px] mt-[20px]">
              {TESTIMONIALS.map((_, index) => (
                <div
                  key={index}
                  className={`h-[6px] rounded-full ${index === activeIndex ? 'w-[18px] bg-[#111]' : 'w-[6px] bg-[#cbd5f0]'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function EnterpriseConsultationSection() {
  return (
    <section className="w-full bg-transparent">
      <div className="mx-auto max-w-[1200px] px-[24px] sm:px-[40px] lg:px-[64px] py-[28px] sm:py-[32px] pb-[44px] sm:pb-[56px]">
        <div className="bg-black rounded-[16px] shadow-[0px_10px_22px_rgba(0,0,0,0.14)] px-[24px] sm:px-[32px] lg:px-[40px] py-[24px] sm:py-[28px]">
          <div className="flex flex-col gap-[18px] sm:gap-[24px] items-center text-center">
            <div className="text-center sm:max-w-[720px]">
              <p className="heading-primary text-center text-white text-[24px] sm:text-[28px] lg:text-[32px] leading-[1.2]">
                Connect with our enterprise scheduling software specialists
              </p>
              <p className="subheading text-center text-white/80 mt-[8px]">
                The switch to a new tool can be a complex process for enterprises—there&apos;s a lot to consider. Our solution design experts can help you easily achieve your business objectives on time & within a budget. Find out how!
              </p>
            </div>

            <div className="flex w-full sm:w-auto justify-center">
              <a href={BOOK_AN_ENTERPRISE_DISCOVERY_CALL_REDIRECT_URL} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto" aria-label="Book an enterprise discovery call">
                <div className="bg-white h-[53px] rounded-[8px] w-full sm:w-[320px] flex items-center justify-center">
                  <p
                    className="text-center text-black uppercase tracking-[0.5px] text-[13px] sm:text-[13px] lg:text-[14px]"
                    style={{
                      fontWeight: 700,
                      lineHeight: '21px',
                      fontVariationSettings: "'opsz' 14"
                    }}
                  >
                    Book an Enterprise Discovery Call
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function IntegrationsSection() {
  return (
    <section className="bg-transparent min-h-[calc(100svh-57px)] relative shrink-0 w-full flex items-center">
      <div className="flex flex-row items-center justify-center w-full">
          <div className="flex flex-col items-center justify-center px-[24px] sm:px-[40px] lg:px-[120px] py-[72px] sm:py-[90px] lg:py-[120px] gap-[40px] relative w-full">
          <div className="flex flex-col items-center gap-[24px] max-w-[720px] text-center w-full">
            <p className="heading-primary text-center">
              Seamlessly integrate with your everyday tools. Enjoy uninterrupted workflow.
            </p>
            
            <p className="subheading max-w-[600px] text-center">
              Connect Appointy to your existing ecosystem with advanced APIs and seamless integrations including CRMs, calendars, analytics tools, payment gateways, SSO via your organization's authentication systems like Active Directory, SAML, OpenID, CAS, & more.
            </p>
          </div>

          <div className="flex justify-center items-end w-full relative mt-auto">
            <div className="relative w-full max-w-[980px] flex items-end justify-center">
              <img
                alt=""
                className="w-full h-auto object-contain"
                decoding="async"
                loading="lazy"
                width={1200}
                height={494}
                src={imgIntegrationsArc}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function TeamSection() {
  return (
    <section className="bg-transparent min-h-[calc(100svh-57px)] relative shrink-0 w-full">
      <div className="flex flex-row items-center w-full">
        <div className="flex flex-col justify-between relative w-full">
          <div className="flex-1 flex items-center justify-center px-[24px] sm:px-[40px] lg:px-[120px] py-[72px] sm:py-[96px] lg:py-[120px] w-full">
            <div className="flex flex-col items-center gap-[32px] sm:gap-[48px] max-w-[800px] mx-auto text-center">
              <p className="heading-primary text-center">
                Connect with our <span className="text-[#5b1f7d]">team of experts</span>
              </p>
              
              <p className="subheading max-w-[600px]">
                Our team is here to help you navigate enterprise scheduling challenges and implement solutions that scale with your organization.
              </p>

              {/* Team member placeholders */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[24px] mt-[24px] sm:mt-[32px]">
                {[
                  { name: "Sarang Verma", title: "Chief Operating Officer", image: imgTeamSarangVerma },
                  { name: "Shaurya Pratap Singh", title: "Chief Growth Officer", image: imgTeamShauryaPratapSingh },
                  { name: "Anviti Chaurasiya", title: "Sr. Enterprise Account Manager", image: imgTeamAnvitiChaurasiya },
                  { name: "Lehar Khilrani", title: "Product Manager", image: imgTeamLeharKhilrani }
                ].map((member) => (
                  <div key={member.name} className="flex flex-col items-center">
                    <div className="h-[120px] w-[120px] rounded-full mb-[16px] overflow-hidden">
                      <img alt={member.name} className="h-full w-full object-cover" decoding="async" loading="lazy" width={120} height={120} src={member.image} />
                    </div>
                    <p
                      className="font-bold text-[18px]"
                      style={{
                        fontVariationSettings: "'opsz' 14",
                        color: 'rgba(0,0,0,0.87)'
                      }}
                    >
                      {member.name}
                    </p>
                    <p
                      className="text-[14px]"
                      style={{
                        fontVariationSettings: "'opsz' 9",
                        color: '#898989'
                      }}
                    >
                      {member.title}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-[4px] items-center w-full sm:w-[334px] mt-[24px] sm:mt-[32px]">
                <a href={BOOK_AN_ENTERPRISE_DISCOVERY_CALL_REDIRECT_URL} target="_blank" rel="noopener noreferrer" className="w-full" aria-label="Book a discovery call">
                  <div className="bg-black h-[53px] relative rounded-[8px] shrink-0 w-full flex items-center justify-center">
                    <p 
                      className="text-center text-white uppercase tracking-[0.5px] text-[13px] sm:text-[13px] lg:text-[14px]"
                      style={{
                        fontWeight: 700,
                        lineHeight: '21px',
                        fontVariationSettings: "'opsz' 14"
                      }}
                    >
                      Book a Discovery Call
                    </p>
                  </div>
                </a>
                <div className="h-[18px] relative shrink-0 w-full">
                  <p 
                    className="text-center"
                    style={{
                      fontWeight: 400,
                      fontSize: '14px',
                      lineHeight: '18px',
                      color: '#999999',
                      fontVariationSettings: "'opsz' 9"
                    }}
                  >
                    Solution fit discussion — not a sales call
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-black flex flex-col items-center justify-center gap-[12px] overflow-hidden py-[40px] sm:py-[48px] lg:py-[56px] shrink-0 w-full">
            <img
              src={logoAppointy}
              alt="Appointy"
              className="h-[40px] sm:h-[48px] lg:h-[56px] w-auto"
              decoding="async"
              width={562}
              height={100}
            />
            <p className="text-[12px] sm:text-[13px] text-center text-white/70">
              Copyright 2024 © Appointy. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
