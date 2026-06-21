import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_legal/terms-of-service')({
  component: TermsOfService,
})

function TermsOfService() {
  return (
    <div className="space-y-8">
      <h1 className="text-5xl font-bold text-white mb-8">Terms of Service</h1>
      <div className="prose prose-invert max-w-none space-y-6 text-slate-300">
        <p className="text-lg">
          By accessing or using this website, you agree to comply with these Terms of Service.
        </p>
        
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Acceptable Use</h2>
          <p>
            Users agree not to misuse the website, attempt unauthorized access, or engage in activities that could harm the website or its users. This includes, but is not limited to:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-4 text-[#d4af37]">
            <li><span className="text-slate-300">Attempting to gain unauthorized access to the website or its systems</span></li>
            <li><span className="text-slate-300">Distributing malware or viruses</span></li>
            <li><span className="text-slate-300">Engaging in harassment or abusive behavior</span></li>
            <li><span className="text-slate-300">Circumventing security measures</span></li>
            <li><span className="text-slate-300">Using automated tools to access the website without permission</span></li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Modifications to Terms</h2>
          <p>
            We reserve the right to modify or discontinue any part of the website without prior notice. Continued use of the website constitutes acceptance of any updates to these terms.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Limitation of Liability</h2>
          <p>
            The website and its services are provided "as is" without warranties of any kind. We are not liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of the website.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Governing Law</h2>
          <p>
            These Terms of Service are governed by and construed in accordance with applicable laws, and any disputes shall be subject to the jurisdiction of the appropriate courts.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
          <p>
            For questions about these Terms of Service, please contact us at:
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
