import { Button } from '@/components/ui/button';

const Footer = () => {
  const footerSections = [
    {
      title: "PLATFORM",
      links: [
        "Product Analytics", "Web Analytics", "Mobile Analytics", "Experiments", 
        "Metric Trees", "Warehouse Connectors", "Session Replay", "Integrations", "Security & Privacy"
      ]
    },
    {
      title: "USE CASES", 
      links: [
        "Acquire New Users", "Engage Your Users", "Grow Your Usership", "Empower Your Team"
      ]
    },
    {
      title: "TEAMS",
      links: [
        "Product Teams", "Data Analyst Teams", "Marketing Teams", "Engineering Teams"
      ]
    },
    {
      title: "INDUSTRIES",
      links: [
        "Finance", "Media & Entertainment", "B2B SaaS", "Ecommerce", "Healthcare", "AI"
      ]
    },
    {
      title: "BUSINESS SIZE",
      links: [
        "Enterprise", "Small & Midsize", "Startup Program"
      ]
    },
    {
      title: "RESOURCES",
      links: [
        "Docs & Guides", "Contact Support", "What's New", "Troubleshooting FAQs", 
        "Blog", "Events & Webinars", "Community", "Customer Stories"
      ]
    },
    {
      title: "COMPANY",
      links: [
        "About Us", "Become a Partner", "Expert Directory", "Careers", "Contact Sales"
      ]
    },
    {
      title: "TEMPLATES",
      links: [
        "Company KPIs", "Feature Launch", "Lifecycle Cohort Analysis", "Ecommerce", 
        "Marketing KPIs", "Web Analytics", "AI Company KPIs"
      ]
    },
    {
      title: "COMPARE US",
      links: [
        "Amplitude", "Heap", "Pendo", "Google Analytics", "PostHog", "Fullstory", "Adobe Analytics"
      ]
    }
  ];

  return (
    <>
      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Mixpanel is for teams that move. Make your move.
          </h2>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold"
            >
              Get Started Free
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="px-8 py-4 text-lg font-semibold border-white text-white hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              Book a Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-sm font-semibold text-gray-900 tracking-wider">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <button className="text-sm text-gray-600 hover:text-gray-900 transition-colors text-left">
                        {link}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16 pt-8 border-t border-gray-200">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Mixpanel
              </div>
              
              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <span>©2025 Mixpanel. All rights reserved</span>
                <button className="hover:text-gray-900 transition-colors">Privacy Program</button>
                <button className="hover:text-gray-900 transition-colors">Legal</button>
                <button className="hover:text-gray-900 transition-colors">Security</button>
                <button className="hover:text-gray-900 transition-colors">Your Privacy Rights</button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;