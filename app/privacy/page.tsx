import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read CMG's privacy policy — how we collect, use, and protect your personal information in accordance with the Australian Privacy Act 1988.",
}

export default function PrivacyPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <h1 className="font-heading text-4xl font-bold text-cmg-text mb-4">Privacy Policy</h1>
        <p className="text-cmg-slate mb-10">Last updated: May 2025</p>

        <div className="prose prose-lg max-w-none text-cmg-text">
          <section className="mb-10">
            <h2 className="font-heading text-2xl font-semibold text-cmg-text mb-4">1. Introduction</h2>
            <p className="text-cmg-slate leading-relaxed mb-4">
              Commonwealth Migration Group (CMG, "we", "us", "our") is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information in accordance with the Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs).
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl font-semibold text-cmg-text mb-4">2. Information We Collect</h2>
            <p className="text-cmg-slate leading-relaxed mb-3">We may collect the following personal information:</p>
            <ul className="list-disc list-inside text-cmg-slate space-y-2 mb-4">
              <li>Full name, email address, phone number</li>
              <li>Country of residence and nationality</li>
              <li>Immigration status and visa history</li>
              <li>Employment and educational background</li>
              <li>Financial information where relevant to visa applications</li>
              <li>Communication records and enquiry details</li>
            </ul>
            <p className="text-cmg-slate leading-relaxed">
              We collect this information when you: submit an enquiry or booking form on our website; communicate with us by email, phone, or in person; or engage our migration services.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl font-semibold text-cmg-text mb-4">3. How We Use Your Information</h2>
            <ul className="list-disc list-inside text-cmg-slate space-y-2">
              <li>To assess your eligibility for Australian visas</li>
              <li>To prepare and lodge visa applications on your behalf</li>
              <li>To communicate with the Department of Home Affairs</li>
              <li>To respond to your enquiries and provide consultations</li>
              <li>To send relevant immigration updates (with your consent)</li>
              <li>To improve our website and services</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl font-semibold text-cmg-text mb-4">4. Disclosure of Information</h2>
            <p className="text-cmg-slate leading-relaxed mb-4">
              We may disclose your personal information to:
            </p>
            <ul className="list-disc list-inside text-cmg-slate space-y-2">
              <li>The Australian Department of Home Affairs for visa processing</li>
              <li>Skills assessment authorities as required</li>
              <li>State and territory government departments for nomination purposes</li>
              <li>Third-party service providers assisting in our operations (under confidentiality obligations)</li>
              <li>Legal or regulatory authorities where required by law</li>
            </ul>
            <p className="text-cmg-slate leading-relaxed mt-4">
              We do not sell your personal information to third parties.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl font-semibold text-cmg-text mb-4">5. Security</h2>
            <p className="text-cmg-slate leading-relaxed">
              We take reasonable steps to protect your personal information from misuse, loss, and unauthorised access, modification, or disclosure. We use industry-standard security measures including SSL encryption on our website and secure document storage for client files.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl font-semibold text-cmg-text mb-4">6. Access and Correction</h2>
            <p className="text-cmg-slate leading-relaxed">
              You have the right to access the personal information we hold about you and to request corrections. To make such a request, please contact us at{" "}
              <a href="mailto:info@commonwealthmigration.com.au" className="text-cmg-blue hover:underline">
                info@commonwealthmigration.com.au
              </a>
              . We will respond within 30 days.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl font-semibold text-cmg-text mb-4">7. Cookies</h2>
            <p className="text-cmg-slate leading-relaxed">
              Our website uses cookies to improve your browsing experience, analyse site traffic, and support our analytics. You can disable cookies through your browser settings, though this may affect website functionality.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl font-semibold text-cmg-text mb-4">8. Changes to This Policy</h2>
            <p className="text-cmg-slate leading-relaxed">
              We may update this Privacy Policy from time to time. The current version will always be available on our website. Continued use of our services after any update constitutes acceptance of the revised policy.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-semibold text-cmg-text mb-4">9. Contact Us</h2>
            <p className="text-cmg-slate leading-relaxed">
              For privacy-related enquiries or complaints, please contact our Privacy Officer:
            </p>
            <address className="not-italic text-cmg-slate mt-3 space-y-1">
              <p>Commonwealth Migration Group</p>
              <p>Email: <a href="mailto:info@commonwealthmigration.com.au" className="text-cmg-blue hover:underline">info@commonwealthmigration.com.au</a></p>
              <p>Website: <a href="https://commonwealthmigration.com.au" className="text-cmg-blue hover:underline">commonwealthmigration.com.au</a></p>
            </address>
          </section>
        </div>
      </div>
    </div>
  )
}
