import type { Route } from "./+types/consultation";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Book a Free Consultation" },
    { name: "description", content: "Schedule your free consultation with us" },
  ];
}

export default function Consultation() {
  return (
    <div className="min-h-screen bg-white text-slate-800 py-20">
      <div className="max-w-4xl mx-auto px-8">
        <h1 className="text-4xl font-bold mb-6 text-center">Book Your Free Consultation</h1>
        <p className="text-lg text-center mb-8 text-slate-600">
          Let's discuss your business idea and see how we can help bring it to life.
        </p>
        
        <div className="bg-gray-50 p-8 rounded-lg">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                Company Name
              </label>
              <input
                type="text"
                id="company"
                name="company"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label htmlFor="idea" className="block text-sm font-medium text-gray-700 mb-2">
                Describe Your Idea
              </label>
              <textarea
                id="idea"
                name="idea"
                rows={4}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Tell us about your business idea, challenges, and goals..."
                required
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors font-medium"
            >
              Schedule Consultation
            </button>
          </form>
        </div>
      </div>
    </div>
  );
} 