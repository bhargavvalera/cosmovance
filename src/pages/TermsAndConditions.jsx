
import { FileText, ShieldCheck, ArrowUpRight } from 'lucide-react';

const sections = [

  {

    title: '1. Introduction and Acceptance',

    text: 'Welcome to Cosmovance Technologies. By accessing or using our website, you agree to these Terms & Conditions. If you do not agree with these terms, please discontinue use of the website.'

  },

  {

    title: '2. Website Usage',

    text: 'You agree to use this website only for lawful purposes. You must not attempt to interfere with website security, misuse its content, introduce malicious code or use the website in a way that may harm other users.'

  },

  {

    title: '3. Our Services',

    text: 'Cosmovance Technologies provides digital and software development services, which may include custom software development, web development, mobile applications, eCommerce solutions, UI/UX design, AI solutions and business automation. Actual services are subject to the agreed project scope.'

  },

  {

    title: '4. Project Proposals and Agreements',

    text: 'Project proposals, quotations, specifications and delivery commitments will be discussed with the client. A project will proceed based on mutually agreed requirements and applicable written agreements.'

  },

  {

    title: '5. Pricing and Payments',

    text: 'Project fees, payment schedules, applicable taxes and other charges will be communicated before work begins. Payment obligations will follow the quotation, invoice or separate agreement accepted by the client.'

  },

  {

    title: '6. Project Timeline and Delivery',

    text: 'Estimated timelines depend on project scope, complexity, feedback and the timely provision of required information and materials. Changes to requirements may affect delivery dates and project costs.'

  },

  {

    title: '7. Client Responsibilities',

    text: 'Clients are responsible for providing accurate project information, necessary content, approvals, access credentials and materials required for the agreed work. Clients must ensure they have the rights to any materials they provide.'

  },

  {

    title: '8. Intellectual Property',

    text: 'Ownership and licensing of project deliverables, source code, designs and other materials will be determined by the applicable project agreement. Unless otherwise agreed, pre-existing tools, reusable components and third-party materials remain subject to their respective ownership and license terms.'

  },

  {

    title: '9. Confidentiality',

    text: 'Both parties should take reasonable steps to protect confidential business, technical and project information shared during an engagement. Any additional confidentiality obligations may be documented in a separate agreement.'

  },

  {

    title: '10. Revisions and Scope Changes',

    text: 'Project revisions and modifications will be handled according to the agreed scope. Requests outside the original scope may require additional time, fees or a revised agreement.'

  },

  {

    title: '11. Third-Party Services',

    text: 'Projects may involve third-party software, APIs, hosting providers, payment gateways or other external services. Their availability, pricing, terms and performance are governed by their respective providers.'

  },

  {

    title: '12. Limitation of Liability',

    text: 'To the extent permitted by applicable law, Cosmovance Technologies will not be responsible for indirect or consequential losses arising from website use or project engagements. Nothing in these terms excludes liability that cannot legally be excluded.'

  },

  {

    title: '13. Suspension and Termination',

    text: 'We may restrict access to the website where necessary for security, legal compliance or prevention of misuse. Project termination, outstanding payments and delivery of work will be governed by the applicable project agreement.'

  },

  {

    title: '14. Governing Law',

    text: 'These Terms & Conditions are subject to applicable laws. The specific governing law and jurisdiction for a project or business relationship should be stated in the relevant written agreement.'

  },

  {

    title: '15. Changes to These Terms',

    text: 'We may revise these Terms & Conditions from time to time. Updated terms will be published on this page with a revised Last Updated date.'

  },

  {

    title: '16. Contact Us',

    text: 'If you have questions about these Terms & Conditions, please contact Cosmovance Technologies through the Contact Us page on our website.'

  }

];



const TermsAndConditions = () => {

  return (

    <main className="min-h-screen bg-[#F5F8FF]">



      {/* Hero Section */}

      <section className="relative overflow-hidden border-b border-[#DCE7FA] bg-gradient-to-br from-white via-[#F5F8FF] to-[#EFF6FF]">

        {/* Background Decoration */}

        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#60A5FA]/20 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-[#A78BFA]/20 blur-3xl" />



        <div className="relative mx-auto max-w-7xl px-5 py-16 text-center sm:px-8 md:py-20">



          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#DCE7FA] bg-white/80 px-4 py-2 text-xs font-bold tracking-[0.16em] text-[#3B82F6] shadow-sm">

            <ShieldCheck className="h-4 w-4" />

            LEGAL INFORMATION

          </div>



          <h1 className="text-4xl font-extrabold tracking-tight text-[#1E293B] sm:text-5xl md:text-6xl">

            Terms & Conditions

          </h1>



          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#64748B] sm:text-lg sm:leading-8">

            Please review the terms and conditions governing your use of

            the Cosmovance Technologies website and services.

          </p>



          <div className="mt-7 inline-flex items-center gap-2 rounded-xl border border-[#DCE7FA] bg-white/80 px-4 py-2.5 text-sm text-slate-500 shadow-sm">

            <FileText className="h-4 w-4 text-[#3B82F6]" />

            <span>Last Updated:</span>

            <span className="font-semibold text-[#1E293B]">

              November 6, 2026

            </span>

          </div>



        </div>

      </section>



      {/* Main Content */}

      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 md:py-16">



        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[280px_minmax(0,1fr)] xl:gap-12">



          {/* Professional Table of Contents */}
          <aside className="w-full min-w-0 lg:sticky lg:top-24">
            <div className="w-full min-w-0 rounded-2xl border border-[#DCE7FA] bg-white p-4 shadow-[0_8px_30px_rgba(30,41,59,0.06)] sm:p-5">
              <div className="flex min-w-0 items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EAF2FF] text-[#3B82F6]">
                  <FileText className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <h2 className="!m-0 whitespace-nowrap !text-lg !font-extrabold !leading-tight !tracking-tight !text-[#1E293B] sm:!text-xl">
                    On This Page
                  </h2>
                  <p className="!m-0 mt-1 text-xs font-medium text-[#64748B]">16 sections</p>
                </div>
              </div>

              <div className="my-5 h-[3px] w-full rounded-full bg-gradient-to-r from-[#22D3EE] via-[#3B82F6] to-[#A78BFA]" />

              <nav aria-label="Terms & Conditions sections">
                <ul className="space-y-2">
                  {sections.map((section, index) => (
                    <li key={section.title} className="min-w-0">
                      <a
                        href={`#terms-section-${index + 1}`}
                        className="group grid min-w-0 grid-cols-[40px_minmax(0,1fr)] items-center gap-3 rounded-xl border border-[#E5ECF8] bg-[#F8FAFF] px-3 py-3 transition-all duration-200 hover:border-[#60A5FA] hover:bg-[#EAF2FF] hover:shadow-sm sm:px-4"
                      >
                        <span className="flex h-9 w-10 shrink-0 items-center justify-center rounded-lg bg-[#E2EDFF] text-sm font-extrabold tabular-nums text-[#2563EB] transition-colors group-hover:bg-[#3B82F6] group-hover:text-white">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <span className="min-w-0 break-words text-sm font-semibold leading-5 text-[#334155] transition-colors group-hover:text-[#2563EB]">
                          {section.title.replace(/^\d+\.\s*/, '')}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </aside>

          {/* Terms Content */}

          <div className="min-w-0">



            {/* Introduction Card */}

            <div className="mb-7 rounded-2xl border border-[#DCE7FA] bg-gradient-to-r from-[#EAF2FF] to-[#F1EDFF] p-6 sm:p-8">

              <div className="mb-3 flex items-center gap-2 text-sm font-bold text-[#3B82F6]">

                <ShieldCheck className="h-5 w-5" />

                Welcome to Cosmovance Technologies

              </div>



              <p className="text-sm leading-7 text-[#64748B] sm:text-base sm:leading-8">

                These terms explain the general conditions for using our

                website and provide a framework for our software and

                digital service engagements.

              </p>

            </div>



            {/* Sections Card */}

            <div className="rounded-2xl border border-[#DCE7FA] bg-white p-6 shadow-sm sm:p-8 md:p-10">



              <div className="mb-8 flex items-center justify-between gap-4 border-b border-slate-100 pb-6">

                <div>

                  <h2 className="text-xl font-bold text-[#1E293B] sm:text-2xl">

                    Terms of Service

                  </h2>

                  <p className="mt-1 text-sm text-slate-400">

                    Please read each section carefully.

                  </p>

                </div>



                <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#EAF2FF] text-[#3B82F6] sm:flex">

                  <FileText className="h-6 w-6" />

                </div>

              </div>



              <div className="divide-y divide-[#E5ECF8]">

                {sections.map((section, index) => (

                  <article

                    key={section.title}

                    id={`terms-section-${index + 1}`}

                    className="scroll-mt-28 py-7 first:pt-0 last:pb-0"

                  >



                    <div className="mb-3 flex items-start gap-3">

                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#EAF2FF] text-sm font-bold text-[#3B82F6]">

                        {String(index + 1).padStart(2, '0')}

                      </span>



                      <h3 className="pt-1 text-lg font-bold leading-snug text-[#1E293B] sm:text-xl">

                        {section.title.replace(/^\d+\.\s*/, '')}

                      </h3>

                    </div>



                    <p className="pl-11 text-sm leading-7 text-[#64748B] sm:text-base sm:leading-8">

                      {section.text}

                    </p>



                  </article>

                ))}

              </div>



            </div>



            {/* Bottom Contact Card */}

            <div className="mt-7 flex flex-col items-start justify-between gap-5 rounded-2xl border border-[#DCE7FA] bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:p-8">

              <div>

                <h3 className="text-lg font-bold text-[#1E293B]">

                  Have questions about our terms?

                </h3>

                <p className="mt-2 text-sm leading-6 text-[#64748B]">

                  Get in touch with our team for further information.

                </p>

              </div>



              <a

                href="/contact"

                className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-gradient-to-r from-[#3B82F6] to-[#A78BFA] px-5 py-3 text-sm font-semibold text-white shadow-md shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/30"

              >

                Contact Us

                <ArrowUpRight className="h-4 w-4" />

              </a>

            </div>



          </div>

        </div>

      </section>

    </main>

  );

};



export default TermsAndConditions;
