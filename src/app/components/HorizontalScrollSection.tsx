import imgEnterpriseGrade from '@/assets/feature-enterprise-grade.webp';
import imgSecureInfrastructure from '@/assets/feature-secure-infrastructure.webp';
import imgGovernanceReady from '@/assets/feature-governance-ready.webp';
import imgConfigurableWorkflows from '@/assets/feature-configurable-workflows.webp';
import imgFlexibleDeployment from '@/assets/feature-flexible-deployment.webp';
import imgModernModular from '@/assets/feature-modern-modular.webp';

const CARDS = [
  {
    title: 'Enterprise-grade by design',
    description: 'Engineered as an infrastructure to supports complex scheduling workflows across multiple departments, regions, and stakeholder types—without breaking under organizational scale.',
    image: imgEnterpriseGrade
  },
  {
    title: 'Secure infrastructure',
    description: 'Our infrastructure is designed with enterprise security and compliance requirements in mind, including SOC 2–aligned practices, GDPR & CCPA readiness, and ISO 27001 certified controls.',
    image: imgSecureInfrastructure
  },
  {
    title: 'Governance-ready',
    description: 'Role-based access, audit trails, and policy controls enable organization-wide deployment with consistent security, visibility, and accountability.',
    image: imgGovernanceReady
  },
  {
    title: 'Configurable workflows',
    description: 'Adapt scheduling rules to real-world constraints—roles, skills, eligibility, capacity, approvals—without custom rebuilds for every team.',
    image: imgConfigurableWorkflows,
    imageClassName: 'scale-[1.15]'
  },
  {
    title: 'Modern, modular platform',
    description: 'Built on a best-in-class technology stack and a plug-n-play architecture that allows functionality to extend as your organization grows - without overwhelming the users.',
    image: imgModernModular,
    imageClassName: 'scale-[1.15]'
  },
  {
    title: 'Flexible enterprise deployment',
    description: 'Deploy on dedicated infrastructure—on-premise or private cloud—to meet data residency, security, and performance requirements, with aligned SLAs.',
    image: imgFlexibleDeployment,
    imageClassName: 'scale-[1.15]'
  }
];

export function HorizontalScrollSection() {
  return (
    <section className="bg-transparent min-h-[calc(100svh-57px)] relative shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="flex flex-col gap-[24px] items-center justify-center px-[24px] sm:px-[40px] lg:px-[120px] py-[64px] sm:py-[96px] lg:py-[120px] relative w-full max-w-[1440px] mx-auto">
          <div className="flex flex-col gap-[16px] items-center shrink-0 w-full">
            <p className="heading-primary text-center w-full">
              Architecture That Enterprises Can Rely On—
              <span className="text-[#5b1f7d]">Today and at Scale</span>
            </p>
            <p className="subheading text-center max-w-[900px]">
              Enterprise-grade architecture, role-based governance, modular extensibility, and flexible deployment models ensure stability under operational complexity.
            </p>
          </div>

          <div className="relative w-full max-w-[1200px] mx-auto">
            <div className="grid w-full grid-cols-1 py-[12px] px-[16px] gap-[16px] sm:grid-cols-2 sm:gap-[20px] lg:grid-cols-3 lg:gap-[24px]">
              {CARDS.map((card) => (
                <div key={card.title} className="flex flex-col items-start w-full">
                  <div className="bg-white relative rounded-[14px] shrink-0 w-full h-full">
                    <div className="flex flex-col overflow-clip rounded-[inherit] size-full">
                      <div className="flex flex-col gap-[16px] items-start justify-start p-[24px] relative w-full">
                        <div className="h-[83px] shrink-0 w-[79px] flex items-center justify-center">
                          <img
                            alt=""
                            className={`h-full w-full object-contain ${card.imageClassName ?? ''}`}
                            decoding="async"
                            loading="lazy"
                            width={79}
                            height={83}
                            src={card.image}
                          />
                        </div>

                        <div className="flex items-start shrink-0 w-full">
                          <div className="flex flex-1 flex-col gap-[8px] items-start justify-start min-h-px min-w-px py-[6px] relative">
                            <p className="card-heading w-full">
                              {card.title}
                            </p>
                            <p className="card-subheading w-full">
                              {card.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_2px_1px_-1px_rgba(0,0,0,0.2),0px_1px_1px_0px_rgba(0,0,0,0.14),0px_1px_3px_0px_rgba(0,0,0,0.12)]" />
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
