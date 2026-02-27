import { CONFIG } from "../data/config";
import { Mail, Phone, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-16 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Get In Touch</h2>
          <div className="w-20 h-1 mx-auto" style={{ backgroundColor: "var(--accent)" }} />
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <div className="p-3 rounded-full bg-blue-50">
                  <Mail style={{ color: "var(--accent)" }} />
                </div>
                <div>
                  <div className="font-medium">Email</div>
                  <a href={`mailto:${CONFIG.email}`} className="text-gray-700 hover:text-blue-600">
                    {CONFIG.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-3 rounded-full bg-blue-50">
                  <Phone style={{ color: "var(--accent)" }} />
                </div>
                <div>
                  <div className="font-medium">Phone</div>
                  <a href={`tel:${CONFIG.phone}`} className="text-gray-700 hover:text-blue-600">
                    {CONFIG.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-3 rounded-full bg-blue-50">
                  <Linkedin style={{ color: "var(--accent)" }} />
                </div>
                <div>
                  <div className="font-medium">LinkedIn</div>
                  <div className="text-gray-700">{CONFIG.linkedin}</div>
                </div>
              </div>

              <div className="mt-6">
                <a
                  href={CONFIG.resumeUrl}
                  className="inline-block px-6 py-3 rounded-md text-white font-medium"
                  style={{ backgroundColor: "var(--accent)" }}
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
