
import React from 'react';

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
      <section className="border-b border-blue-100 bg-white px-6 py-20 text-center">
        <span className="mb-4 inline-block rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600">
          LEGAL INFORMATION
        </span>
        <h1 className="text-4xl font-bold tracking-tight text-[#1E293B] md:text-5xl">
          Privacy Policy
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-[#64748B]">
          Your privacy matters to us. Learn how Cosmovance Technologies
          handles information when you use our website and services.
        </p>
        <p className="mt-6 text-sm text-slate-400">
          Last Updated: November 6, 2026
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-14">
        <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm md:p-10">
          <p className="mb-8 leading-7 text-[#64748B]">
            This policy applies to information collected through the
            Cosmovance Technologies website and related communications.
            Please read it carefully to understand our approach to privacy.
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

export default PrivacyPolicy;
