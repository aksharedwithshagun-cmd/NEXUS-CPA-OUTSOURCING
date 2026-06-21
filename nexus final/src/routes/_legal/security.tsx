import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_legal/security')({
  component: SecurityPage,
})

function SecurityPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-5xl font-bold text-white mb-8">Security</h1>
      <div className="prose prose-invert max-w-none space-y-6 text-slate-300">
        <p className="text-lg">
          We implement reasonable technical and organizational measures to protect user data against unauthorized access, loss, misuse, or alteration.
        </p>
        
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Security Measures</h2>
          <p>Our security measures include:</p>
          <ul className="list-disc pl-6 space-y-2 mt-4 text-[#d4af37]">
            <li><span className="text-slate-300">Encryption of sensitive data in transit and at rest</span></li>
            <li><span className="text-slate-300">Regular security audits and vulnerability assessments</span></li>
            <li><span className="text-slate-300">Secure authentication mechanisms</span></li>
            <li><span className="text-slate-300">Access controls and role-based permissions</span></li>
            <li><span className="text-slate-300">Intrusion detection and prevention systems</span></li>
            <li><span className="text-slate-300">Regular security updates and patches</span></li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Limitations</h2>
          <p>
            While we strive to use commercially acceptable means to protect information, no method of transmission over the internet or electronic storage is 100% secure. Users acknowledge and accept this risk when using the website.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Data Breach Response</h2>
          <p>
            In the event of a security breach, we will notify affected users in accordance with applicable laws and regulations. We maintain an incident response plan to address any security incidents promptly.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Your Responsibility</h2>
          <p>
            You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. Please notify us immediately if you suspect unauthorized access to your account.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Report Security Issues</h2>
          <p>
            If you discover a security vulnerability, please report it to us at:
          </p>
          <p className="mt-2">
            Email: <a href="mailto:info@nexuscpaoutsourcing.com" className="text-[#d4af37] hover:text-[#aa8e2e]">info@nexuscpaoutsourcing.com</a>
          </p>
        </div>
      </div>
    </div>
  )
}
