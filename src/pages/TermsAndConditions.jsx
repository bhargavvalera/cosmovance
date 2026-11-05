
import React from 'react';

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
      <section className="border-b border-blue-100 bg-white px-6 py-20 text-center">
        <span className="mb-4 inline-block rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600">
          LEGAL INFORMATION
        </span>
        <h1 className="text-4xl font-bold tracking-tight text-[#1E293B] md:text-5xl">
          Terms & Conditions
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-[#64748B]">
          Please review the terms and conditions governing your use of
          the Cosmovance Technologies website and services.
        </p>
        <p className="mt-6 text-sm text-slate-400">
          Last Updated: November 6, 2026
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-14">
        <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm md:p-10">
          <p className="mb-8 leading-7 text-[#64748B]">
            These terms explain the general conditions for using our
            website and provide a framework for our software and
            digital service engagements.
          </p>

          <div className="space-y-9">
            {sections.map((section) => (
              <article key={section.title}>
                <h2 className="mb-3 text-xl font-bold text-[#1E293B]">
                  {section.title}
                </h2>
                <p className="leading-8 text-[#64748B]">
                  {section.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default TermsAndConditions;
