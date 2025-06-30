import React from 'react';
import { useNavigate } from 'react-router';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* Hero Section */}
      <section className="text-center py-32 bg-gradient-to-r from-green-300 via-green-600 to-green-800 text-white">
        <h1 className="text-4xl font-bold mb-4">We Build Your Business Ideas, Fast.</h1>
        <p className="text-lg mb-6">
          Turn your internal processes or customer-facing ideas into real, working systems—mocked up,
          designed, and prototyped in days, not months.
        </p>
        <div className="flex justify-center gap-4">
          <Button 
            className="bg-yellow-400 text-black hover:bg-yellow-300 hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            onClick={() => navigate('/consultation')}
          >
            Book a Free Consultation
          </Button>
          <Button 
            variant="outline" 
            className="text-black border-white hover:bg-white hover:text-green-800 hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            See Our Work
          </Button>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-8 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-8 text-center">Our 5-Day Build Sprint</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {['Discovery', 'Mockups', 'Prototype', 'Roadmap'].map((step, i) => (
            <Card key={i}>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Day {i + 1} - {step}</h3>
                <p className="text-sm text-slate-600">
                  {step === 'Discovery' && 'We listen to your idea, challenges, and goals.'}
                  {step === 'Mockups' && 'Rapid wireframes and user journeys are mapped.'}
                  {step === 'Prototype' && 'A working visual prototype you can touch and feel.'}
                  {step === 'Roadmap' && 'We deliver a step-by-step build + integration plan.'}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button className="bg-blue-600 text-white">Start Your Sprint</Button>
        </div>
      </section>

      {/* Services */}
      <section className="bg-gray-100 py-16 px-8">
        <h2 className="text-3xl font-semibold text-center mb-8">What We Can Build for You</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            'Customer Portals',
            'Appointment Scheduling Systems',
            'Inventory & Order Management',
            'Employee Dashboards',
            'Automated Reports',
            'CRM Integration'
          ].map((service, i) => (
            <Card key={i}>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">{service}</h3>
                <p className="text-sm text-slate-600">Custom-built solutions for your business needs.</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="py-16 px-8 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-6">About Us</h2>
        <p className="text-lg text-center max-w-2xl mx-auto text-slate-700">
          We're business builders first, developers second. Our passion is helping small and independent
          businesses bring their visions to life with clarity, speed, and precision.
        </p>
      </section>

      {/* Contact */}
      <section className="bg-gradient-to-r from-green-300 via-green-600 to-green-800 text-white py-16 px-8">
        <h2 className="text-3xl font-semibold text-center mb-6">Let's Build Your Idea</h2>
        <form className="max-w-xl mx-auto grid gap-4">
          <input type="text" placeholder="Your Name" className="p-3 rounded text-black bg-green-50/80 focus:ring-2 focus:ring-green-500 focus:border-transparent" />
          <input type="email" placeholder="Your Email" className="p-3 rounded text-black bg-green-50/80 focus:ring-2 focus:ring-green-500 focus:border-transparent" />
          <textarea placeholder="Describe your idea..." rows={4} className="p-3 rounded text-black bg-green-50/80 focus:ring-2 focus:ring-green-500 focus:border-transparent" />
          <Button className="bg-yellow-400 text-black hover:bg-yellow-300 hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">Submit</Button>
        </form>
      </section>
    </div>
  );
}
