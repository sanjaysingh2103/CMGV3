import type { PolicyContent } from "@/components/PolicyPage"

export const privacyPolicy: PolicyContent = {
  title: "Privacy Policy",
  effectiveDate: "May 22, 2026",
  intro:
    'Welcome to Commonwealth Migration Group ("CMG", "we", "our", or "us"). Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and protect your personal information when you use our website, services, consultations, or communicate with us. By using our website or engaging our services, you consent to the practices described in this Privacy Policy.',
  sections: [
    {
      heading: "1. Information We Collect",
      body: "We may collect the following categories of information:",
      sublist: [
        {
          title: "a) Personal Information",
          items: [
            "Full name",
            "Email address",
            "Phone number",
            "Passport details",
            "Nationality and immigration history",
            "Employment and education information",
            "Financial information relevant to visa eligibility",
            "Documents submitted for immigration purposes",
          ],
        },
        {
          title: "b) Technical Information",
          items: [
            "IP address",
            "Browser type and device information",
            "Cookies and website usage data",
            "Website interaction analytics",
          ],
        },
        {
          title: "c) Communication Records",
          items: [
            "Emails",
            "WhatsApp messages",
            "Consultation notes",
            "Phone call records (where permitted by law)",
          ],
        },
      ],
    },
    {
      heading: "2. How We Use Your Information",
      body: "We use your information to:",
      list: [
        "Assess your immigration eligibility",
        "Provide migration and visa consultation services",
        "Prepare and process applications",
        "Respond to enquiries and client requests",
        "Improve our website and client experience",
        "Send service updates and important notifications",
        "Comply with legal and regulatory obligations",
        "Prevent fraud and unauthorised activity",
      ],
    },
    {
      heading: "3. Sharing of Information",
      body: "We may share your information with MARA-authorised migration agents, government immigration authorities, educational institutions, employers or recruitment partners, third-party service providers assisting with application processing, and legal or compliance authorities when required by law. We do not sell or rent personal information to third parties.",
    },
    {
      heading: "4. Data Security",
      body: "We implement commercially reasonable administrative, technical, and physical safeguards to protect your information from unauthorised access, misuse, loss, or disclosure. However, no online transmission or storage system can be guaranteed to be 100% secure.",
    },
    {
      heading: "5. Data Retention",
      body: "We retain personal information only for as long as necessary to provide services, meet legal and regulatory obligations, resolve disputes, and maintain business records.",
    },
    {
      heading: "6. Cookies and Tracking Technologies",
      body: "Our website may use cookies and analytics tools to improve user experience and website functionality. You may disable cookies through your browser settings; however, certain website functions may not operate properly.",
    },
    {
      heading: "7. International Data Transfers",
      body: "As an international migration consultancy, your information may be transferred across jurisdictions including Canada, UAE, Australia, and other countries relevant to your immigration application. By using our services, you consent to such transfers where necessary.",
    },
    {
      heading: "8. Your Rights",
      body: "Depending on your jurisdiction, you may have the right to:",
      list: [
        "Request access to your personal information",
        "Correct inaccurate data",
        "Withdraw consent where applicable",
        "Request deletion of information subject to legal limitations",
        "Object to certain processing activities",
      ],
    },
    {
      heading: "9. Third-Party Websites",
      body: "Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of external websites.",
    },
    {
      heading: "10. Changes to This Privacy Policy",
      body: "We may update this Privacy Policy periodically. Updated versions will be posted on this page with the revised effective date.",
    },
    {
      heading: "11. Contact Us",
      body: "Commonwealth Migration Group · support@commonwealthmigration.ae · www.commonwealthmigration.ae",
    },
  ],
}

export const termsOfService: PolicyContent = {
  title: "Terms of Service",
  effectiveDate: "May 22, 2026",
  intro:
    'These Terms of Service ("Terms") govern your use of the Commonwealth Migration Group website and services. By accessing our website or engaging our services, you agree to these Terms.',
  sections: [
    {
      heading: "1. Scope of Services",
      body: "Commonwealth Migration Group provides:",
      list: [
        "Immigration consultation services",
        "Visa eligibility assessments",
        "Documentation guidance",
        "Application preparation support",
        "Migration advisory services",
        "Assistance through MARA-authorised professionals where applicable",
      ],
    },
    {
      heading: "2. Client Responsibilities",
      body: "Clients agree to:",
      list: [
        "Provide accurate and truthful information",
        "Submit genuine and valid documents",
        "Respond promptly to requests for information",
        "Inform us of changes in circumstances",
        "Comply with immigration laws and regulations",
      ],
    },
    {
      heading: "3. No Guarantee of Outcome",
      body: "Immigration decisions are made solely by relevant government authorities. Commonwealth Migration Group cannot guarantee:",
      list: [
        "Visa approvals",
        "Processing timelines",
        "Invitation rounds",
        "Permanent residency outcomes",
        "Government policy stability",
      ],
    },
    {
      heading: "4. Professional Advice",
      body: "Information on this website is for general informational purposes only and should not be considered legal advice unless expressly stated. Formal immigration advice is provided only through authorised professionals under a signed service agreement.",
    },
    {
      heading: "5. Payments and Fees",
      body: "Service fees must be paid according to agreed payment terms. Government fees, medical fees, biometric fees, translation charges, and third-party costs are separate unless otherwise stated. Delayed payments may impact service timelines.",
    },
    {
      heading: "6. Intellectual Property",
      body: "All website content including logos, branding, graphics, text, videos, and materials are the intellectual property of Commonwealth Migration Group unless otherwise stated. Unauthorised reproduction or distribution is prohibited.",
    },
    {
      heading: "7. Limitation of Liability",
      body: "To the maximum extent permitted by law, Commonwealth Migration Group shall not be liable for visa refusals, delays caused by government authorities, changes in immigration laws or policies, losses arising from inaccurate information provided by clients, or indirect or consequential damages.",
    },
    {
      heading: "8. Confidentiality",
      body: "We maintain confidentiality of client information in accordance with applicable laws and our Privacy Policy.",
    },
    {
      heading: "9. Termination of Services",
      body: "We reserve the right to suspend or terminate services if fraudulent information is provided, clients engage in abusive or unethical conduct, payment obligations are not met, or requests violate applicable laws or regulations.",
    },
    {
      heading: "10. Governing Law",
      body: "These Terms shall be governed by applicable laws in the jurisdiction where the services are provided or managed.",
    },
    {
      heading: "11. Changes to Terms",
      body: "We may revise these Terms periodically. Continued use of the website or services constitutes acceptance of updated Terms.",
    },
    {
      heading: "12. Contact Information",
      body: "Commonwealth Migration Group · support@commonwealthmigration.ae · www.commonwealthmigration.ae",
    },
  ],
}

export const refundPolicy: PolicyContent = {
  title: "Refund Policy",
  effectiveDate: "May 22, 2026",
  intro:
    "At Commonwealth Migration Group, we are committed to delivering professional and transparent immigration services. This Refund Policy outlines the circumstances under which refunds may or may not be provided.",
  sections: [
    {
      heading: "1. Consultation Fees",
      body: "Consultation fees are generally non-refundable once the consultation has been completed. If a consultation is cancelled by the client with sufficient notice, rescheduling may be permitted at our discretion.",
    },
    {
      heading: "2. Service Fees",
      body: "Refund eligibility depends on:",
      list: [
        "Stage of application processing",
        "Work already completed",
        "Administrative and professional resources utilised",
        "Third-party costs incurred",
      ],
    },
    {
      heading: "3. Non-Refundable Situations",
      body: "Refunds will generally not be issued where:",
      list: [
        "Visa or immigration applications are refused by authorities",
        "Government policies change after engagement",
        "Clients provide incomplete, false, or misleading information",
        "Clients fail to submit required documents on time",
        "Clients voluntarily withdraw applications after work has commenced",
        "Delays occur due to external authorities",
      ],
    },
    {
      heading: "4. Partial Refunds",
      body: "Partial refunds may be considered in limited circumstances where services have not substantially commenced, processing work remains incomplete, or exceptional circumstances apply. Approved refunds may be subject to administrative deductions.",
    },
    {
      heading: "5. Third-Party Fees",
      body: "Government charges, biometric fees, medical fees, translation fees, courier charges, and other third-party expenses are non-refundable.",
    },
    {
      heading: "6. Refund Processing Time",
      body: "Approved refunds, if applicable, may take 15–30 business days to process depending on payment methods and banking procedures.",
    },
    {
      heading: "7. Chargebacks and Payment Disputes",
      body: "Clients are encouraged to contact us directly before initiating payment disputes or chargebacks. Fraudulent or abusive chargebacks may result in suspension of services and legal action where appropriate.",
    },
    {
      heading: "8. Contact Us",
      body: "Commonwealth Migration Group · support@commonwealthmigration.ae · www.commonwealthmigration.ae",
    },
  ],
}

export const antiFraudPolicy: PolicyContent = {
  title: "Anti-Fraud Policy",
  effectiveDate: "May 22, 2026",
  intro:
    "Commonwealth Migration Group maintains a zero-tolerance policy towards fraud, misrepresentation, unethical conduct, and document falsification. We are committed to ethical immigration practices and regulatory compliance.",
  sections: [
    {
      heading: "1. Fraud Prevention Commitment",
      body: "We actively work to prevent:",
      list: [
        "Fake documentation",
        "Identity fraud",
        "Misrepresentation",
        "Payment fraud",
        "Unauthorised account access",
        "False claims or guarantees",
        "Impersonation of government authorities",
      ],
    },
    {
      heading: "2. Client Responsibilities",
      body: "Clients must provide genuine and authentic documents, submit truthful information, avoid forged or altered records, and cooperate with verification procedures. Any fraudulent activity may result in immediate termination of services, reporting to relevant authorities, permanent refusal of future services, and legal action where applicable.",
    },
    {
      heading: "3. Verification Procedures",
      body: "We may verify:",
      list: [
        "Identity documents",
        "Employment records",
        "Financial documents",
        "Educational credentials",
        "Supporting evidence submitted for applications",
      ],
    },
    {
      heading: "4. Unauthorised Representation",
      body: "Only authorised representatives and approved professionals may act on behalf of Commonwealth Migration Group. Clients should verify communication channels before sharing confidential information or making payments.",
    },
    {
      heading: "5. Secure Payments",
      body: "Clients should only make payments through approved official payment channels communicated by Commonwealth Migration Group. We are not responsible for losses resulting from payments made to unauthorised individuals or fraudulent accounts.",
    },
    {
      heading: "6. Reporting Fraud",
      body: "If you suspect fraudulent activity, phishing attempts, impersonation, or misuse of our brand, please contact us immediately at support@commonwealthmigration.ae.",
    },
    {
      heading: "7. Compliance and Cooperation",
      body: "We cooperate with immigration authorities, financial institutions, regulatory bodies, and law enforcement agencies where legally required.",
    },
    {
      heading: "8. Contact Information",
      body: "Commonwealth Migration Group · support@commonwealthmigration.ae · www.commonwealthmigration.ae",
    },
  ],
}
