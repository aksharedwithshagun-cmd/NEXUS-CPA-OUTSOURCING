import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_legal/compliance')({
  component: CompliancePage,
})

function CompliancePage() {
  return (
    <div className="space-y-8">
      <h1 className="text-5xl font-bold text-white mb-8">Compliance</h1>
      <div className="prose prose-invert max-w-none space-y-6 text-slate-300">
        <p className="text-lg">
          We operate in compliance with applicable laws, regulations, and industry standards relevant to our business operations.
        </p>
        
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Regulatory Compliance</h2>
          <p>Our policies and procedures are designed to ensure ethical conduct, data protection, and regulatory adherence. We comply with:</p>
          <ul className="list-disc pl-6 space-y-2 mt-4 text-[#d4af37]">
            <li><span className="text-slate-300">GAAP (Generally Accepted Accounting Principles)</span></li>
            <li><span className="text-slate-300">IRS regulations and requirements</span></li>
            <li><span className="text-slate-300">State and federal accounting standards</span></li>
            <li><span className="text-slate-300">Data protection and privacy laws</span></li>
            <li><span className="text-slate-300">SOC 2 security standards</span></li>
            <li><span className="text-slate-300">Industry-specific regulations and guidelines</span></li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Ongoing Compliance</h2>
          <p>
            We regularly review and update our practices to maintain compliance with evolving legal and regulatory requirements. Our team participates in continuous professional development and training to stay current with industry standards.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Audits and Assessments</h2>
          <p>
            We conduct regular internal audits and engage third-party auditors to assess our compliance with applicable standards and regulations.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Client Responsibility</h2>
          <p>
            While we maintain high compliance standards, clients are responsible for ensuring that their use of our services complies with all applicable laws and regulations in their jurisdiction.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Compliance Questions</h2>
          <p>
            If you have questions about our compliance practices, please contact us at:
          </p>
          <p className="mt-2">
            Email: <a href="mailto:info@nexuscpaoutsourcing.com" className="text-[#d4af37] hover:text-[#aa8e2e]">info@nexuscpaoutsourcing.com</a>
          </p>
          <p>
            Phone: <a href="tel:+13109289229" className="text-[#d4af37] hover:text-[#aa8e2e]">+1 (310) 928-9229</a>
          </p>
        </div>
      </div>
    </div>
  )
}
