

import React from 'react';

import { FileText, ShieldCheck, ArrowUpRight } from 'lucide-react';



const sections = [

  {

    title: '1. Introduction',

    text: 'Cosmovance Technologies (“we”, “our” or “us”) respects your privacy. This Privacy Policy explains how information may be collected, used, stored and protected when you visit our website or communicate with us.'

  },

  {

    title: '2. Information We Collect',

    text: 'We may collect information you voluntarily provide, including your name, email address, phone number, company name, project details and other information submitted through our contact or inquiry forms. Basic technical information, such as browser type and website usage data, may also be collected through applicable technologies.'

  },

  {

    title: '3. How We Use Your Information',

    text: 'We may use your information to respond to inquiries, understand project requirements, provide requested services, prepare proposals, communicate with clients, improve our website and maintain business records.'

  },

  {

    title: '4. Information Sharing',

    text: 'We do not sell personal information. Information may be shared with service providers who help operate our website or deliver our services, where necessary and subject to appropriate safeguards. We may also disclose information when required by applicable law.'

  },

  {

    title: '5. Cookies and Tracking Technologies',

    text: 'Our website may use cookies and similar technologies to support website functionality, understand visitor activity and improve user experience. You can manage cookies through your browser settings. Where required, we will seek consent before using non-essential cookies.'

  },

  {

    title: '6. Data Security',

    text: 'We take reasonable technical and organizational measures to protect information against unauthorized access, alteration, loss or disclosure. However, no method of online transmission or electronic storage can be guaranteed to be completely secure.'

  },

  {

    title: '7. Data Retention',

    text: 'We retain personal information only for as long as reasonably necessary for the purposes described in this policy, including responding to inquiries, providing services, maintaining records and meeting applicable legal obligations.'

  },

  {

    title: '8. Your Privacy Rights',

    text: 'Depending on applicable law, you may have rights to request access to, correction of or deletion of your personal information, or to withdraw consent where processing is based on consent. You may contact us to submit a privacy-related request.'

  },

  {

    title: '9. Third-Party Websites and Services',

    text: 'Our website may contain links to third-party websites or use third-party services. We are not responsible for the privacy practices or content of external websites. Please review their privacy policies separately.'

  },

  {

    title: '10. Children’s Privacy',

    text: 'Our website and services are intended for businesses and general audiences, not specifically for children. We do not knowingly collect personal information from children in violation of applicable law.'

  },

  {

    title: '11. Changes to This Policy',

    text: 'We may update this Privacy Policy from time to time. Any updated version will be published on this page with a revised Last Updated date.'

  },

  {

    title: '12. Contact Us',

    text: 'For questions, requests or concerns regarding this Privacy Policy or the handling of your personal information, please contact Cosmovance Technologies through the Contact Us page on our website.'

  }

];



const PrivacyPolicy = () => {

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

            Privacy Policy

          </h1>



          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#64748B] sm:text-lg sm:leading-8">

            Your privacy matters to us. Learn how Cosmovance Technologies

            handles information when you use our website and services.

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
                  <p className="!m-0 mt-1 text-xs font-medium text-[#64748B]">12 sections</p>
                </div>
              </div>

              <div className="my-5 h-[3px] w-full rounded-full bg-gradient-to-r from-[#22D3EE] via-[#3B82F6] to-[#A78BFA]" />

              <nav aria-label="Privacy Policy sections">
                <ul className="space-y-2">
                  {sections.map((section, index) => (
                    <li key={section.title} className="min-w-0">
                      <a
                        href={`#privacy-section-${index + 1}`}
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

          {/* Privacy Policy Content */}

          <div className="min-w-0">



            {/* Introduction Card */}

            <div className="mb-7 rounded-2xl border border-[#DCE7FA] bg-gradient-to-r from-[#EAF2FF] to-[#F1EDFF] p-6 sm:p-8">



              <div className="mb-3 flex items-center gap-2 text-sm font-bold text-[#3B82F6]">

                <ShieldCheck className="h-5 w-5" />

                Your Privacy Matters

              </div>



              <p className="text-sm leading-7 text-[#64748B] sm:text-base sm:leading-8">

                This policy applies to information collected through the

                Cosmovance Technologies website and related communications.

                Please read it carefully to understand our approach to privacy.

              </p>



            </div>



            {/* Sections Card */}

            <div className="rounded-2xl border border-[#DCE7FA] bg-white p-6 shadow-sm sm:p-8 md:p-10">



              <div className="mb-8 flex items-center justify-between gap-4 border-b border-slate-100 pb-6">



                <div>

                  <h2 className="text-xl font-bold text-[#1E293B] sm:text-2xl">

                    Privacy Information

                  </h2>



                  <p className="mt-1 text-sm text-slate-400">

                    Understand how we handle your information.

                  </p>

                </div>



                <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#EAF2FF] text-[#3B82F6] sm:flex">

                  <ShieldCheck className="h-6 w-6" />

                </div>



              </div>



              <div className="divide-y divide-[#E5ECF8]">



                {sections.map((section, index) => (

                  <article

                    key={section.title}

                    id={`privacy-section-${index + 1}`}

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

                  Have questions about your privacy?

                </h3>



                <p className="mt-2 text-sm leading-6 text-[#64748B]">

                  Contact our team for privacy-related questions or requests.

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



export default PrivacyPolicy;
