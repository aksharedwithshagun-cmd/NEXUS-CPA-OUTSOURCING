import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_legal/privacy-policy')({
  component: PrivacyPolicy,
})

function PrivacyPolicy() {
  return (
    <div className="space-y-8">
      <h1 className="text-5xl font-bold text-white mb-8">Privacy Policy</h1>
      <div className="prose prose-invert max-w-none space-y-6 text-slate-300">
        <p className="text-lg">
          We value your privacy and are committed to protecting your personal information.
        </p>
        
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Information We Collect</h2>
          <p>
            We may collect basic personal details such as name, email address, phone number, and other information voluntarily provided by you through forms or communications. This information is used solely to provide services, respond to inquiries, and improve user experience.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Data Sharing</h2>
          <p>
            We do not sell, rent, or share your personal data with third parties except where required by law or for essential service operations.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Your Rights</h2>
          <p>
            You have the right to access, correct, or request deletion of your personal information. Please contact us at <a href="mailto:info@nexuscpaoutsourcing.com" className="text-[#d4af37] hover:text-[#aa8e2e]">info@nexuscpaoutsourcing.com</a> to exercise these rights.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at:
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
