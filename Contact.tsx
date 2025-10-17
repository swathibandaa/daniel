import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MessageCircle, Send } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Project Inquiry from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\n\nMessage:\n${formData.message}`;
    window.open(`mailto:hello@danielsun.space?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to bring your vision to life? Let's discuss your project and create 
            something exceptional that drives real results for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="p-8 bg-white">
              <div className="flex items-center space-x-3 mb-6">
                <MessageCircle className="w-6 h-6 text-gray-600" />
                <h3 className="text-xl font-semibold text-gray-900">
                  Send a Message
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company
                  </label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company name"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Details *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, goals, and timeline..."
                    className="w-full min-h-[120px]"
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-black hover:bg-gray-800 text-white py-3"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="p-6 bg-white">
              <div className="flex items-center space-x-3 mb-4">
                <Mail className="w-6 h-6 text-gray-600" />
                <h3 className="text-lg font-semibold text-gray-900">
                  Direct Contact
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                Prefer to reach out directly? Send me an email and I'll get back to you within 24 hours.
              </p>
              <Button 
                onClick={() => window.open('mailto:hello@danielsun.space')}
                variant="outline"
                className="w-full"
              >
                hello@danielsun.space
              </Button>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-black to-gray-800 text-white">
              <h3 className="text-lg font-semibold mb-4">
                What to Expect
              </h3>
              <ul className="space-y-3 text-sm text-gray-300">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Response within 24 hours
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Free consultation call
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Detailed project proposal
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Transparent pricing
                </li>
              </ul>
            </Card>

            <Card className="p-6 bg-blue-50 border-blue-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Perfect For
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• YC Startups & Scale-ups</li>
                <li>• SaaS & Web3 Companies</li>
                <li>• Enterprise Innovation Teams</li>
                <li>• Bootstrapped Founders</li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;