import imgMoveFasterCard1 from '@/assets/move-faster-card-1.webp';
import imgOperateWithConfidence from '@/assets/operate-with-confidence.webp';
import imgReduceOperationalOverhead from '@/assets/reduce-operational-overhead.webp';
import imgImproveTeamProductivity from '@/assets/improve-team-productivity.webp';
import imgEnterpriseEcosystem from '@/assets/enterprise-ecosystem.webp';
import imgPreserveBrand from '@/assets/preserve-brand.webp';


const CARDS = [
  {
    title: 'Move faster with less coordination',
    description: 'Eliminate back-and-forth emails, manual follow-ups, and ad-hoc scheduling. Appointy accelerates how teams coordinate time—across internal teams and external stakeholders.'
  },
  {
    title: 'Reduce operational overhead',
    description: 'Automate scheduling workflows across people, roles, resources, and systems so teams spend less time managing logistics and more time delivering outcomes.'
  },
  {
    title: 'Operate with confidence and reliability',
    description: 'Prevent conflicts, errors, and scheduling ambiguity with deterministic logic, real-time visibility, and auditability that you can depend on.'
  }
];

export function StackedCardsSection() {
  return (
    <section className="bg-transparent min-h-[calc(100svh-57px)] relative shrink-0 w-full">
      <div className="flex flex-row justify-center size-full">
        <div className="flex items-start justify-center px-[24px] sm:px-[40px] lg:px-[120px] pt-[64px] sm:pt-[96px] lg:pt-[120px] pb-[96px] lg:pb-[240px] relative w-full">
          <div className="flex-1 min-h-px min-w-px relative">
            <div className="flex flex-col gap-[24px] items-center relative w-full">
              <div className="flex flex-col gap-[16px] items-center shrink-0 w-full">
                <p className="heading-primary text-center w-full">
                  Transform Scheduling from a Coordination Burden into an Operational Advantage
                </p>
                <p className="subheading text-center max-w-[900px]">
                  Streamline appointments, meetings, classes, field visits, and resource bookings while improving productivity, reliability, and brand consistency.
                </p>
              </div>

              {/* Stacked Cards */}
              <div className="flex flex-col gap-[32px] items-start shrink-0 w-full">
                {/* Row 1 */}
                <div className="relative shrink-0 w-full">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col lg:flex-row gap-[24px] lg:gap-[32px] items-stretch relative w-full">
                    {/* Card 1 */}
                    <div className="bg-white w-full lg:flex-[1_0_0] min-h-px min-w-px relative rounded-[14px]">
                      <div className="overflow-clip rounded-[inherit] size-full">
                        <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative w-full h-full">
                          <div className="content-stretch flex items-center relative shrink-0 w-full">
                            <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px py-[6px] relative whitespace-pre-wrap">
                              <p className="card-heading w-full text-[#5b1f7d]">
                                Move faster with less coordination
                              </p>
                              <p className="card-subheading w-full">
                                Eliminate back-and-forth emails, manual follow-ups, and ad-hoc scheduling. Appointy accelerates how teams coordinate time—across internal teams and external stakeholders.
                              </p>
                            </div>
                          </div>
                          <div className="relative rounded-[8px] w-full h-[160px] sm:h-[194px] shrink-0 overflow-hidden">
                            <img alt="" className="absolute inset-0 w-full h-full object-contain scale-100 sm:scale-[0.9]" decoding="async" loading="lazy" width={1200} height={437} src={imgMoveFasterCard1} />
                          </div>
                        </div>
                      </div>
                      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_2px_1px_-1px_rgba(0,0,0,0.2),0px_1px_1px_0px_rgba(0,0,0,0.14),0px_1px_3px_0px_rgba(0,0,0,0.12)]" />
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white w-full lg:flex-[1_0_0] min-h-px min-w-px relative rounded-[14px]">
                      <div className="overflow-clip rounded-[inherit] size-full">
                        <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative w-full h-full">
                          <div className="content-stretch flex items-center relative shrink-0 w-full">
                            <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px py-[6px] relative whitespace-pre-wrap">
                              <p className="card-heading w-full text-[#5b1f7d]">
                                Reduce operational overhead
                              </p>
                              <p className="card-subheading w-full">
                                Automate scheduling workflows across people, roles, resources, and systems so teams spend less time managing logistics and more time delivering outcomes.
                              </p>
                            </div>
                          </div>
                          <div className="relative rounded-[8px] w-full h-[160px] sm:h-[194px] shrink-0 overflow-hidden">
                            <img alt="" className="absolute inset-0 w-full h-full object-contain scale-100 sm:scale-[0.9]" decoding="async" loading="lazy" width={1200} height={453} src={imgReduceOperationalOverhead} />
                          </div>
                        </div>
                      </div>
                      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_2px_1px_-1px_rgba(0,0,0,0.2),0px_1px_1px_0px_rgba(0,0,0,0.14),0px_1px_3px_0px_rgba(0,0,0,0.12)]" />
                    </div>
                  </div>
                </div>

                {/* Row 2 */}
                <div className="relative shrink-0 w-full">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col lg:flex-row gap-[24px] lg:gap-[32px] items-stretch relative w-full">
                    {/* Card 3 */}
                    <div className="bg-white w-full lg:flex-[1_0_0] min-h-px min-w-px relative rounded-[14px]">
                      <div className="overflow-clip rounded-[inherit] size-full">
                        <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative w-full h-full">
                          <div className="content-stretch flex items-center relative shrink-0 w-full">
                            <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px py-[6px] relative whitespace-pre-wrap">
                              <p className="card-heading w-full text-[#5b1f7d]">
                                Operate with confidence and reliability
                              </p>
                              <p className="card-subheading w-full">
                                Prevent conflicts, errors, and scheduling ambiguity with deterministic logic, real-time visibility, and auditability that you can depend on.
                              </p>
                            </div>
                          </div>
                          <div className="h-[160px] sm:h-[194px] relative rounded-[8px] shrink-0 w-full overflow-hidden">
                            <img alt="" className="absolute inset-0 w-full h-full object-contain scale-100 sm:scale-[0.9]" decoding="async" loading="lazy" width={1200} height={570} src={imgOperateWithConfidence} />
                          </div>
                        </div>
                      </div>
                      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_2px_1px_-1px_rgba(0,0,0,0.2),0px_1px_1px_0px_rgba(0,0,0,0.14),0px_1px_3px_0px_rgba(0,0,0,0.12)]" />
                    </div>

                    {/* Card 4 */}
                    <div className="bg-white w-full lg:flex-[1_0_0] min-h-px min-w-px relative rounded-[14px]">
                      <div className="overflow-clip rounded-[inherit] size-full">
                        <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative w-full h-full">
                          <div className="content-stretch flex items-center relative shrink-0 w-full">
                            <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px py-[6px] relative whitespace-pre-wrap">
                              <p className="card-heading w-full text-[#5b1f7d]">
                                Improve team productivity
                              </p>
                              <p className="card-subheading w-full">
                                Reduce time spent on coordination, rescheduling, and exception handling so teams can focus on high-value work instead of managing calendars.
                              </p>
                            </div>
                          </div>
                          <div className="h-[160px] sm:h-[194px] relative rounded-[8px] shrink-0 w-full overflow-hidden">
                            <img alt="" className="absolute inset-0 w-full h-full object-contain scale-100 sm:scale-[0.9]" decoding="async" loading="lazy" width={1200} height={424} src={imgImproveTeamProductivity} />
                          </div>
                        </div>
                      </div>
                      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_2px_1px_-1px_rgba(0,0,0,0.2),0px_1px_1px_0px_rgba(0,0,0,0.14),0px_1px_3px_0px_rgba(0,0,0,0.12)]" />
                    </div>
                  </div>
                </div>

                {/* Row 3 */}
                <div className="relative shrink-0 w-full">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col lg:flex-row gap-[24px] lg:gap-[32px] items-stretch relative w-full">
                    {/* Card 5 */}
                    <div className="bg-white w-full lg:flex-[1_0_0] min-h-px min-w-px relative rounded-[14px]">
                      <div className="overflow-clip rounded-[inherit] size-full">
                        <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative w-full h-full">
                          <div className="content-stretch flex items-center relative shrink-0 w-full">
                            <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px py-[6px] relative whitespace-pre-wrap">
                              <p className="card-heading w-full text-[#5b1f7d]">
                                Fit into your existing enterprise ecosystem
                              </p>
                              <p className="card-subheading w-full">
                                API-first architecture that integrates scheduling directly into internal portals and third party tools via APIs, webhooks, and integrations to support large-scale rollouts.
                              </p>
                            </div>
                          </div>
                          <div className="h-[160px] sm:h-[194px] relative rounded-[8px] shrink-0 w-full overflow-hidden">
                            <img alt="" className="absolute inset-0 w-full h-full object-contain scale-100 sm:scale-[0.9]" decoding="async" loading="lazy" width={1108} height={668} src={imgEnterpriseEcosystem} />
                          </div>
                        </div>
                      </div>
                      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_2px_1px_-1px_rgba(0,0,0,0.2),0px_1px_1px_0px_rgba(0,0,0,0.14),0px_1px_3px_0px_rgba(0,0,0,0.12)]" />
                    </div>

                    {/* Card 6 */}
                    <div className="bg-white w-full lg:flex-[1_0_0] min-h-px min-w-px relative rounded-[14px]">
                      <div className="overflow-clip rounded-[inherit] size-full">
                        <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative w-full h-full">
                          <div className="content-stretch flex items-center relative shrink-0 w-full">
                            <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px py-[6px] relative whitespace-pre-wrap">
                              <p className="card-heading w-full text-[#5b1f7d]">
                                Preserve your brand and user experience
                              </p>
                              <p className="card-subheading w-full">
                                Deliver a consistent, enterprise-owned experience through whitelabeling and branding—so scheduling feels native, trusted, and fully under your control.
                              </p>
                            </div>
                          </div>
                          <div className="h-[160px] sm:h-[194px] relative rounded-[8px] shrink-0 w-full overflow-hidden">
                            <img alt="" className="absolute inset-0 w-full h-full object-contain scale-100 sm:scale-[0.9]" decoding="async" loading="lazy" width={1200} height={656} src={imgPreserveBrand} />
                          </div>
                        </div>
                      </div>
                      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_2px_1px_-1px_rgba(0,0,0,0.2),0px_1px_1px_0px_rgba(0,0,0,0.14),0px_1px_3px_0px_rgba(0,0,0,0.12)]" />
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
