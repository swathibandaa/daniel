import { Card } from '@/components/ui/card';
import { MapPin, Heart, Sparkles } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Daniel
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A journey from street art to digital design, from Ukraine to Porto — 
            crafting meaningful experiences that connect brands with their audiences.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <Card className="p-6 bg-gradient-to-br from-gray-50 to-white border-0 shadow-sm">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 p-3 bg-blue-100 text-blue-600 rounded-lg">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    From Ukraine to Porto
                  </h3>
                  <p className="text-gray-600">
                    My journey began in Ukraine, where I discovered my passion for visual expression. 
                    Now based in Porto, I bring a unique perspective shaped by diverse cultural experiences 
                    and a deep appreciation for both traditional and digital art forms.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-gray-50 to-white border-0 shadow-sm">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 p-3 bg-purple-100 text-purple-600 rounded-lg">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Street Art to Digital Design
                  </h3>
                  <p className="text-gray-600">
                    Starting with street art taught me the importance of bold expression and connecting 
                    with audiences in unexpected ways. This foundation now influences my digital work, 
                    bringing authenticity and creative risk-taking to every project.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-gray-50 to-white border-0 shadow-sm">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 p-3 bg-green-100 text-green-600 rounded-lg">
                  <Heart className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Passion for Innovation
                  </h3>
                  <p className="text-gray-600">
                    I'm driven by the challenge of creating unique, consistent identities that not only 
                    look beautiful but also drive real business results. Every project is an opportunity 
                    to push boundaries and exceed expectations.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <div className="lg:pl-12">
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 h-96 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <div className="w-24 h-24 mx-auto mb-4 bg-gray-300 rounded-full flex items-center justify-center">
                  <span className="text-3xl font-bold text-gray-600">DS</span>
                </div>
                <p className="text-lg font-medium">Daniel Sun</p>
                <p className="text-sm">Designer & Developer</p>
              </div>
            </div>

            <div className="mt-8 space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <span className="font-medium text-gray-900">Years of Experience</span>
                <span className="text-gray-600">5+</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <span className="font-medium text-gray-900">Projects Completed</span>
                <span className="text-gray-600">50+</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <span className="font-medium text-gray-900">Happy Clients</span>
                <span className="text-gray-600">30+</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-black text-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">
              Let's Create Something Amazing Together
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Whether you're a startup founder with a bold vision or an established company 
              looking to innovate, I'm here to help bring your ideas to life.
            </p>
            <button 
              onClick={() => window.open('mailto:hello@danielsun.space')}
              className="inline-flex items-center px-8 py-3 bg-white text-black rounded-lg hover:bg-gray-100 transition-colors font-medium"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;