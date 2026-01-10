import { useState } from "react";
import { CONFIG } from "../data/config";
import { Mail, Phone, Linkedin, CheckCircle } from "lucide-react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    e.target.reset();
  }

  return (
    <section id="contact" className="py-16 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Get In Touch</h2>
          <div className="w-20 h-1 mx-auto" style={{ backgroundColor: "var(--accent)" }} />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <div className="p-3 rounded-full bg-blue-50">
                  <Mail style={{ color: "var(--accent)" }} />
                </div>
                <div>
                  <div className="font-medium">Email</div>
                  <div className="text-gray-700">{CONFIG.email}</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-3 rounded-full bg-blue-50">
                  <Phone style={{ color: "var(--accent)" }} />
                </div>
                <div>
                  <div className="font-medium">Phone</div>
                  <div className="text-gray-700">{CONFIG.phone}</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-3 rounded-full bg-blue-50">
                  <Linkedin style={{ color: "var(--accent)" }} />
                </div>
                <div>
                  <div className="font-medium">LinkedIn</div>
                  <div className="text-gray-700">{CONFIG.linkedin}</div>
                  <div className="text-xs text-gray-500 mt-1">Replace with your real LinkedIn link.</div>
                </div>
              </div>

              <a
                href={CONFIG.resumeUrl}
                className="inline-block px-5 py-2 rounded-md text-white"
                style={{ backgroundColor: "var(--accent)" }}
              >
                Download Resume
              </a>
            </div>
          </div>

          <div className="bg-white border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-6">Send Me a Message</h3>

            <form onSubmit={onSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Your Name</label>
                <input className="w-full border rounded-md px-3 py-2" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email Address</label>
                <input type="email" className="w-full border rounded-md px-3 py-2" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Subject</label>
                <input className="w-full border rounded-md px-3 py-2" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Message</label>
                <textarea rows="5" className="w-full border rounded-md px-3 py-2" required />
              </div>

              <button
                className="w-full px-6 py-3 rounded-md text-white font-medium"
                style={{ backgroundColor: "var(--accent)" }}
                type="submit"
              >
                Send Message
              </button>

              {sent && (
                <div className="mt-3 p-3 bg-green-100 text-green-700 rounded-md flex items-center gap-2">
                  <CheckCircle size={18} />
                  <span>Your message has been sent successfully!</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
