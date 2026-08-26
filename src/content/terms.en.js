import { company as c, formatDate } from './company.js'

export default {
  slug: 'terms-and-conditions',
  title: 'Terms of Service',
  updated: formatDate(c.updatedISO, 'en-GB'),
  summary: `The terms that govern access to and use of the ${c.name} website. Engagements for our services are covered by a separate Service Agreement.`,
  intro: [
    {
      t: 'p',
      text: `These Terms of Service ("Terms") govern your access to and use of ${c.url} (the "Website"), operated by ${c.legalName} ("we", "us", or "our").`,
    },
    {
      t: 'p',
      text: 'Please read these Terms carefully before using the Website. By accessing or using the Website, you agree to be bound by these Terms. If you do not agree with any part of these Terms, you must not access the Website.',
    },
  ],
  sections: [
    {
      id: 'definitions',
      title: 'Interpretation and Definitions',
      blocks: [
        { t: 'p', text: 'For the purposes of these Terms:' },
        {
          t: 'dl',
          items: [
            ['Company', `refers to ${c.legalName}, located at ${c.address}.`],
            [
              'Website',
              `refers to ${c.url}, including all pages, content, and features made available through it.`,
            ],
            [
              'You',
              'refers to the individual accessing the Website, or the company or legal entity on whose behalf that individual is accessing the Website.',
            ],
            [
              'Content',
              'means all text, images, graphics, video, code, design elements, and other material published on the Website.',
            ],
            [
              'Services',
              'refers to the professional services we offer, as listed below.',
            ],
            [
              'Service Agreement',
              'means a separate written contract, proposal, statement of work, or purchase order executed between you and the Company for the delivery of Services.',
            ],
          ],
        },
        { t: 'p', text: 'The Services we currently offer are:' },
        { t: 'ul', items: c.services.en },
        {
          t: 'p',
          text: 'This list describes what we do; it is not an offer to perform any of it. Availability, scope, and pricing for each Service are agreed in a Service Agreement, as set out in the section below.',
        },
      ],
    },
    {
      id: 'acceptance',
      title: 'Acceptance of Terms',
      blocks: [
        { t: 'p', text: 'By accessing the Website, you confirm that:' },
        {
          t: 'ul',
          items: [
            `You are at least ${c.terms.minAge} years old, or have reached the age of legal majority in your jurisdiction.`,
            'You have the legal capacity to enter into a binding agreement.',
            'If you are accessing the Website on behalf of an organisation, you have the authority to bind that organisation to these Terms.',
          ],
        },
        {
          t: 'p',
          text: 'Your use of the Website is also governed by our Privacy Policy, which explains how we collect and process your information. The Privacy Policy is incorporated into these Terms by reference.',
        },
        { t: 'docLink', to: 'privacy', text: 'Read the Privacy Policy' },
      ],
    },
    {
      id: 'scope',
      title: 'Scope of These Terms',
      blocks: [
        {
          t: 'lede',
          text: 'These Terms govern your use of the Website only.',
        },
        {
          t: 'p',
          text: 'Nothing on the Website constitutes an offer, quotation, or binding commitment to provide Services. Any engagement for Services is subject to a separate Service Agreement, which will set out the scope of work, deliverables, timelines, fees, payment terms, revision policy, and intellectual property arrangements.',
        },
        {
          t: 'p',
          text: 'In the event of a conflict between these Terms and an executed Service Agreement, the Service Agreement prevails with respect to the Services described in it.',
        },
        {
          t: 'note',
          text: 'Prices, packages, and timelines shown anywhere on this Website are illustrative. They become binding only once set out in a signed Service Agreement.',
        },
      ],
    },
    {
      id: 'permitted-use',
      title: 'Permitted Use of the Website',
      blocks: [
        {
          t: 'p',
          text: 'You may access and use the Website for lawful purposes, including reviewing our work, learning about our Services, and contacting us regarding a potential engagement.',
        },
        { t: 'p', text: 'You agree **not** to:' },
        {
          t: 'ol',
          items: [
            'Use the Website in any way that violates applicable laws or regulations.',
            'Copy, reproduce, republish, distribute, or create derivative works from the Content without our prior written permission.',
            'Use automated systems (including bots, scrapers, crawlers, or data-mining tools) to access, extract, or index the Website, except for standard search engine indexing.',
            'Attempt to gain unauthorised access to the Website, its servers, databases, or any connected systems.',
            'Introduce viruses, malware, or any other code designed to disrupt, damage, or impair the Website.',
            'Interfere with the Website’s normal operation, including by overloading, flooding, or launching denial-of-service attacks.',
            'Submit false, misleading, or fraudulent information through our contact form or any other channel.',
            'Use the Website to transmit unsolicited commercial communications, spam, or advertising.',
            'Reverse engineer, decompile, or attempt to extract the source code of the Website or its underlying software.',
            'Impersonate any person or entity, or misrepresent your affiliation with any person or entity.',
          ],
        },
        {
          t: 'p',
          text: 'We reserve the right to restrict or block access to the Website for any user who violates these Terms, without prior notice.',
        },
      ],
    },
    {
      id: 'intellectual-property',
      title: 'Intellectual Property Rights',
      blocks: [
        { t: 'h', text: 'Our content' },
        {
          t: 'p',
          text: `The Website and its Content (including the design, layout, source code, text, graphics, logos, and structure) are owned by ${c.legalName} or its licensors and are protected by copyright, trade mark, and other intellectual property laws of Indonesia and by international treaties.`,
        },
        {
          t: 'p',
          text: 'Except as expressly permitted in these Terms, no part of the Website may be reproduced, distributed, publicly displayed, or used to create derivative works without our prior written consent.',
        },
        { t: 'h', text: 'Portfolio and client work' },
        {
          t: 'p',
          text: 'Work samples, case studies, and project images displayed on the Website may include trade marks, logos, and materials belonging to our clients or third parties. These remain the property of their respective owners and are shown for portfolio and identification purposes only. Their appearance does not imply any endorsement, partnership, or transfer of rights to you.',
        },
        { t: 'h', text: 'Limited licence' },
        {
          t: 'p',
          text: 'We grant you a limited, non-exclusive, non-transferable, revocable licence to access and view the Website for personal or internal business evaluation purposes. This licence does not include any right to resell, commercially exploit, or systematically collect Content from the Website.',
        },
        { t: 'h', text: 'Feedback' },
        {
          t: 'p',
          text: 'If you submit ideas, suggestions, or feedback about the Website or our Services, you grant us a perpetual, worldwide, royalty-free right to use and implement that feedback without any obligation to compensate or credit you.',
        },
      ],
    },
    {
      id: 'submissions',
      title: 'Submissions Through the Website',
      blocks: [
        {
          t: 'p',
          text: 'When you submit information through our contact form or any other channel on the Website:',
        },
        {
          t: 'ul',
          items: [
            'You confirm that the information you provide is accurate and that you have the right to share it.',
            'You must not submit confidential information belonging to a third party without proper authorisation.',
            'Submitting an enquiry does not create a client relationship, a contract, or any obligation on our part to respond or to provide Services.',
            'We may retain and process your submission in accordance with our Privacy Policy.',
          ],
        },
        {
          t: 'p',
          text: `We recommend not sending sensitive commercial or confidential material through the contact form. If confidentiality is required, please request a non-disclosure agreement first by writing to ${c.email}.`,
        },
      ],
    },
    {
      id: 'third-party-links',
      title: 'Third-Party Links and Services',
      blocks: [
        {
          t: 'p',
          text: 'The Website may contain links to third-party websites, tools, or resources. These links are provided for convenience only.',
        },
        {
          t: 'p',
          text: 'We do not control, endorse, or assume responsibility for the content, privacy practices, availability, or accuracy of any third-party site. Accessing a third-party site is at your own risk, and it is governed by that site’s own terms and policies.',
        },
      ],
    },
    {
      id: 'accuracy',
      title: 'Accuracy of Information',
      blocks: [
        {
          t: 'p',
          text: 'We make reasonable efforts to ensure that the information on the Website is accurate and current. However:',
        },
        {
          t: 'ul',
          items: [
            'Content is provided for general informational purposes and may become outdated.',
            'Pricing indications, service descriptions, timelines, and capability statements are illustrative and subject to change without notice.',
            'Nothing on the Website constitutes professional, legal, financial, or technical advice on which you should rely without independent verification.',
          ],
        },
        {
          t: 'p',
          text: 'We may modify, suspend, or discontinue any part of the Website at any time without notice or liability.',
        },
      ],
    },
    {
      id: 'warranties',
      title: 'Disclaimer of Warranties',
      blocks: [
        {
          t: 'p',
          text: 'The Website is provided on an "as is" and "as available" basis, without warranties of any kind, whether express, implied, statutory, or otherwise.',
        },
        {
          t: 'p',
          text: 'To the maximum extent permitted by applicable law, we disclaim all warranties, including implied warranties of merchantability, fitness for a particular purpose, non-infringement, and any warranties arising out of course of dealing or usage of trade.',
        },
        { t: 'p', text: 'We do not warrant that:' },
        {
          t: 'ul',
          items: [
            'The Website will be uninterrupted, timely, secure, or error-free.',
            'Defects will be corrected within any particular timeframe.',
            'The Website or its servers are free of viruses or other harmful components.',
            'The results obtained from using the Website will be accurate, complete, or reliable.',
          ],
        },
        {
          t: 'p',
          text: 'Some jurisdictions do not allow the exclusion of certain warranties. In such cases, the exclusions above apply only to the extent permitted by law.',
        },
      ],
    },
    {
      id: 'liability',
      title: 'Limitation of Liability',
      blocks: [
        {
          t: 'p',
          text: 'To the maximum extent permitted by applicable law, the Company, its management, employees, partners, and service providers shall not be liable for any indirect, incidental, special, consequential, or punitive damages (including loss of profits, revenue, data, business opportunity, or goodwill) arising out of or in connection with your access to or use of the Website, whether based on contract, tort, negligence, strict liability, or any other legal theory, and whether or not we were advised of the possibility of such damages.',
        },
        {
          t: 'p',
          text: `Our total aggregate liability arising from or relating to your use of the Website shall not exceed ${c.terms.liabilityCap}, or the amount you paid us in the twelve months preceding the claim, whichever is greater.`,
        },
        {
          t: 'p',
          text: 'This limitation does not apply to liability that cannot be excluded or limited under applicable law, including liability for gross negligence, wilful misconduct, or death or personal injury caused by our negligence.',
        },
      ],
    },
    {
      id: 'indemnification',
      title: 'Indemnification',
      blocks: [
        {
          t: 'p',
          text: 'You agree to indemnify, defend, and hold harmless the Company and its management, employees, and agents from and against any claims, liabilities, damages, losses, and expenses (including reasonable legal fees) arising out of or in any way connected with:',
        },
        {
          t: 'ul',
          items: [
            'Your breach of these Terms.',
            'Your violation of any applicable law or the rights of a third party.',
            'Any content or information you submit through the Website.',
            'Your misuse of the Website or its Content.',
          ],
        },
      ],
    },
    {
      id: 'termination',
      title: 'Termination',
      blocks: [
        {
          t: 'p',
          text: 'We may suspend or terminate your access to the Website immediately, without prior notice or liability, for any reason, including a breach of these Terms.',
        },
        {
          t: 'p',
          text: 'Upon termination, your right to use the Website ceases immediately. Provisions that by their nature should survive termination (including intellectual property rights, disclaimers, limitation of liability, indemnification, and governing law) will remain in effect.',
        },
      ],
    },
    {
      id: 'force-majeure',
      title: 'Force Majeure',
      blocks: [
        {
          t: 'p',
          text: 'We shall not be liable for any failure or delay in performance caused by circumstances beyond our reasonable control, including natural disasters, fire, flood, epidemic, war, civil unrest, government action, labour disputes, power failure, internet or hosting provider outages, or cyberattacks.',
        },
      ],
    },
    {
      id: 'governing-law',
      title: 'Governing Law and Dispute Resolution',
      blocks: [
        {
          t: 'p',
          text: 'These Terms are governed by and construed in accordance with the laws of the Republic of Indonesia, without regard to conflict of law principles.',
        },
        {
          t: 'p',
          text: `In the event of a dispute arising from or relating to these Terms or your use of the Website, the parties agree to first attempt to resolve the matter amicably through good-faith negotiation within ${c.terms.negotiationDays} days of written notice.`,
        },
        {
          t: 'p',
          text: `If the dispute cannot be resolved through negotiation, it shall be submitted to the exclusive jurisdiction of the District Court of ${c.jurisdiction}.`,
        },
      ],
    },
    {
      id: 'general',
      title: 'General Provisions',
      blocks: [
        {
          t: 'dl',
          items: [
            [
              'Severability',
              'If any provision of these Terms is held invalid or unenforceable, that provision will be limited or removed to the minimum extent necessary, and the remaining provisions will continue in full force and effect.',
            ],
            [
              'Waiver',
              'Our failure to enforce any right or provision of these Terms shall not be considered a waiver of that right or provision.',
            ],
            [
              'Assignment',
              'You may not assign or transfer your rights under these Terms without our prior written consent. We may assign our rights and obligations without restriction.',
            ],
            [
              'Entire agreement',
              'These Terms, together with the Privacy Policy, constitute the entire agreement between you and the Company regarding the Website, superseding any prior understandings on that subject.',
            ],
            [
              'Language',
              `These Terms are published in both English and Bahasa Indonesia. In the event of any inconsistency, the ${c.terms.prevailingLanguage} version prevails.`,
            ],
          ],
        },
        {
          t: 'note',
          text: 'Under Law No. 24 of 2009, agreements involving Indonesian parties must also be available in Bahasa Indonesia. Both language versions of these Terms are published on this site for that reason.',
        },
      ],
    },
    {
      id: 'changes',
      title: 'Changes to These Terms',
      blocks: [
        {
          t: 'p',
          text: 'We reserve the right to modify these Terms at any time. When we make material changes, we will update the "Last updated" date at the top of this page and, where appropriate, provide additional notice on the Website.',
        },
        {
          t: 'p',
          text: 'Your continued use of the Website after changes take effect constitutes acceptance of the revised Terms. If you do not agree to the changes, you must stop using the Website.',
        },
      ],
    },
    {
      id: 'contact',
      title: 'Contact Us',
      blocks: [
        {
          t: 'p',
          text: 'If you have any questions about these Terms, please contact us:',
        },
        {
          t: 'contact',
          lines: [
            ['Company', c.legalName],
            ['Address', c.address],
            ['Email', c.email],
            ['Phone', c.phone],
            ['Website', c.url],
          ],
        },
      ],
    },
  ],
  disclaimer:
    'This document is a general template and does not constitute legal advice. Have it reviewed by qualified legal counsel before publication.',
}
