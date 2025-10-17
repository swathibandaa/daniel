import { Button } from '@/components/ui/button';
import AnimatedText from './AnimatedText';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-white to-purple-50 pt-20 pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center space-y-8">
          {/* Animated Heading */}
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-bold text-gray-900 leading-tight tracking-tight">
              <div className="flex flex-wrap justify-center gap-2 md:gap-4">
                {['A', 'n', 'a', 'l', 'y', 't', 'i', 'c', 's'].map((letter, index) => (
                  <span 
                    key={index}
                    className="inline-block hover:text-purple-600 transition-colors duration-300 cursor-default animate-in fade-in slide-in-from-bottom-8"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {letter}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap justify-center gap-2 md:gap-4 mt-4">
                {['t', 'h', 'a', 't', ' ', 'd', 'r', 'i', 'v', 'e', ' ', 'd', 'e', 'c', 'i', 's', 'i', 'o', 'n', 's'].map((letter, index) => (
                  <span 
                    key={index}
                    className="inline-block hover:text-blue-600 transition-colors duration-300 cursor-default animate-in fade-in slide-in-from-bottom-8"
                    style={{ animationDelay: `${(index + 9) * 100}ms` }}
                  >
                    {letter === ' ' ? '\u00A0' : letter}
                  </span>
                ))}
              </div>
            </h1>
          </div>

          {/* Subtitle */}
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-2000">
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Mixpanel helps teams turn user behavior insights into clear next steps, 
              without delays or SQL bottlenecks.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-2500">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold group"
            >
              Get Started Free
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="px-8 py-4 text-lg font-semibold border-2 hover:bg-gray-50 group"
            >
              <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              Book a Demo
            </Button>
          </div>

          {/* Hero Image/Dashboard */}
          <div className="mt-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-3000">
            <div className="relative mx-auto max-w-5xl">
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
                <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-6 py-4 border-b border-gray-200">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                </div>
                <div className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-4">
                      <div className="h-4 bg-gradient-to-r from-purple-200 to-blue-200 rounded-full"></div>
                      <div className="h-3 bg-gray-200 rounded-full w-3/4"></div>
                      <div className="h-3 bg-gray-200 rounded-full w-1/2"></div>
                    </div>
                    <div className="space-y-4">
                      <div className="h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-purple-600">85%</div>
                          <div className="text-sm text-gray-600">Conversion Rate</div>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="h-4 bg-gradient-to-r from-green-200 to-teal-200 rounded-full"></div>
                      <div className="h-3 bg-gray-200 rounded-full w-2/3"></div>
                      <div className="h-3 bg-gray-200 rounded-full w-4/5"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default Hero;