import React, { useState, useEffect } from 'react';

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedJob, setSelectedJob] = useState(null);
  const [applicationStep, setApplicationStep] = useState(0);

  const jobCategories = [
    { id: 'all', name: 'All Jobs', icon: '📋' },
    { id: 'customer-service', name: 'Customer Service', icon: '💬' },
    { id: 'light-housekeeping', name: 'Light Housekeeping', icon: '🧹' },
    { id: 'garden-care', name: 'Garden Care', icon: '🌿' },
    { id: 'tutoring', name: 'Tutoring & Mentorship', icon: '📚' },
    { id: 'pet-sitting', name: 'Pet Sitting', icon: '🐶' },
    { id: 'delivery', name: 'Local Delivery', icon: '📦' },
    { id: 'ebook-author', name: 'Ebook Author/Publisher', icon: '📖' },
    { id: 'virtual-assistant', name: 'Virtual Assistant', icon: '💻' },
    { id: 'content-writing', name: 'Content Writing/Blogging', icon: '✍️' },
    { id: 'craft-sales', name: 'Craft & Handmade Sales', icon: '🎨' }
  ];

  const jobs = [
    {
      id: 1,
      title: "Friendly Companion for Seniors",
      company: "EldersEdge",
      category: "customer-service",
      location: "Springfield, IL",
      hours: "Part-time (20 hrs/week)",
      pay: "$60-$85/hour",
      description: "Provide friendly companionship to elderly clients through conversation, light activities, and accompaniment on walks. No experience necessary - training provided!",
      requirements: ["Good communication skills", "Patient and kind demeanor", "Reliable transportation"],
      benefits: ["Flexible scheduling", "Free training", "Health insurance eligibility", "Weekly social events"],
      image: "https://placehold.co/400x300/8B4513/FFFFFF?text=Senior+Companion"
    },
    {
      id: 2,
      title: "Garden Helper for Homeowners",
      company: "EldersEdge",
      category: "garden-care",
      location: "Madison, WI",
      hours: "Part-time (15 hrs/week)",
      pay: "$60-$85/hour",
      description: "Assist homeowners with gardening tasks including planting, weeding, and light pruning. Work outdoors in a peaceful environment.",
      requirements: ["Enjoy working outdoors", "Basic gardening knowledge", "Ability to lift 20 lbs"],
      benefits: ["Regular work schedule", "Equipment provided", "Community garden access", "Seasonal bonuses"],
      image: "https://placehold.co/400x300/2E8B57/FFFFFF?text=Garden+Helper"
    },
    {
      id: 3,
      title: "Tutor for Adult Literacy Program",
      company: "EldersEdge",
      category: "tutoring",
      location: "Portland, OR",
      hours: "Flexible (2-4 hrs/week)",
      pay: "$60-$85/hour",
      description: "Help adults improve their reading and writing skills in a supportive classroom setting. Your life experience is invaluable!",
      requirements: ["Strong reading/writing skills", "Patience and encouragement", "Willingness to learn teaching methods"],
      benefits: ["Professional development", "Free materials", "Networking opportunities", "Recognition awards"],
      image: "https://placehold.co/400x300/4B0082/FFFFFF?text=Tutoring+Session"
    },
    {
      id: 4,
      title: "Pet Sitting & Dog Walking",
      company: "EldersEdge",
      category: "pet-sitting",
      location: "Austin, TX",
      hours: "Flexible (as needed)",
      pay: "$60-$85/hour",
      description: "Care for pets while owners are away. Walk dogs, feed cats, provide love and attention. Great for animal lovers!",
      requirements: ["Love for animals", "Reliable schedule", "Basic pet care knowledge"],
      benefits: ["Work at your own pace", "Pet-friendly environment", "Free pet supplies", "Monthly pet playdates"],
      image: "https://placehold.co/400x300/FF6347/FFFFFF?text=Pet+Sitting"
    },
    {
      id: 5,
      title: "Local Package Delivery Driver",
      company: "EldersEdge",
      category: "delivery",
      location: "Denver, CO",
      hours: "Part-time (10-20 hrs/week)",
      pay: "$60-$85/hour",
      description: "Deliver packages within your neighborhood using your car or bicycle. Easy routes, familiar surroundings, and friendly customers.",
      requirements: ["Valid driver's license or reliable bike", "Good sense of direction", "Friendly personality"],
      benefits: ["Flexible hours", "Vehicle maintenance reimbursement", "Weekly bonus program", "Community appreciation events"],
      image: "https://placehold.co/400x300/9932CC/FFFFFF?text=Delivery+Driver"
    },
    {
      id: 6,
      title: "Light Housekeeping Assistant",
      company: "EldersEdge",
      category: "light-housekeeping",
      location: "Phoenix, AZ",
      hours: "Part-time (15 hrs/week)",
      pay: "$60-$85/hour",
      description: "Help maintain clean and organized homes for seniors. Tasks include light cleaning, laundry, and organizing personal items.",
      requirements: ["Attention to detail", "Comfort with household chores", "Respect for personal space"],
      benefits: ["Consistent weekly schedule", "Cleaning supplies provided", "Flexible scheduling", "Health & wellness discounts"],
      image: "https://placehold.co/400x300/87CEEB/FFFFFF?text=Housekeeping+Assistant"
    },
    {
      id: 7,
      title: "Ebook Author & Publisher",
      company: "EldersEdge",
      category: "ebook-author",
      location: "Remote",
      hours: "Flexible (self-paced)",
      pay: "$60-$85/hour",
      description: "Share your life experiences, expertise, or stories through self-publishing ebooks. We provide editing, formatting, and distribution support.",
      requirements: ["Strong writing skills", "Life experience to share", "Basic computer skills"],
      benefits: ["Full royalties", "Publishing support", "Marketing assistance", "Passive income potential"],
      image: "https://placehold.co/400x300/6A0DAD/FFFFFF?text=Ebook+Author"
    },
    {
      id: 8,
      title: "Virtual Assistant for Seniors",
      company: "EldersEdge",
      category: "virtual-assistant",
      location: "Remote",
      hours: "Part-time (15-25 hrs/week)",
      pay: "$60-$85/hour",
      description: "Help other seniors manage digital tasks like online appointments, email management, bill payments, and video calls with family.",
      requirements: ["Tech-savvy", "Patient communicator", "Detail-oriented"],
      benefits: ["Work from home", "Flexible hours", "Training provided", "Meaningful impact"],
      image: "https://placehold.co/400x300/2E8B57/FFFFFF?text=Virtual+Assistant"
    },
    {
      id: 9,
      title: "Content Writer & Blogger",
      company: "EldersEdge",
      category: "content-writing",
      location: "Remote",
      hours: "Flexible (10-20 hrs/week)",
      pay: "$60-$85/hour",
      description: "Write engaging blog posts, articles, and social media content about senior living, health, travel, and retirement experiences.",
      requirements: ["Strong writing ability", "Knowledge of senior topics", "Basic SEO understanding"],
      benefits: ["Creative freedom", "Multiple payment options", "Build your portfolio", "Join our writer community"],
      image: "https://placehold.co/400x300/8B4513/FFFFFF?text=Content+Writer"
    },
    {
      id: 10,
      title: "Online Craft & Handmade Sales",
      company: "EldersEdge",
      category: "craft-sales",
      location: "Remote",
      hours: "Flexible (self-managed)",
      pay: "$60-$85/hour",
      description: "Sell your handmade crafts, quilts, pottery, knitting, woodworking, or other artisan creations through our curated online marketplace.",
      requirements: ["Creative skills", "Ability to photograph products", "Basic online selling knowledge"],
      benefits: ["No listing fees", "Marketing support", "Shipping assistance", "Access to loyal customer base"],
      image: "https://placehold.co/400x300/9932CC/FFFFFF?text=Handmade+Crafts"
    },
    {
      id: 11,
      title: "Historical Storyteller for Community Events",
      company: "EldersEdge",
      category: "customer-service",
      location: "Various Locations",
      hours: "Part-time (4-8 hrs/month)",
      pay: "$60-$85/hour",
      description: "Share your life stories and historical perspectives at community centers, libraries, and senior events. Preserve history through storytelling.",
      requirements: ["Rich life experiences", "Comfort speaking to groups", "Interest in history"],
      benefits: ["Honorarium payments", "Travel reimbursement", "Social engagement", "Legacy creation"],
      image: "https://placehold.co/400x300/4B0082/FFFFFF?text=Storyteller"
    },
    {
      id: 12,
      title: "Recipe Book Compiler & Cookbook Creator",
      company: "EldersEdge",
      category: "content-writing",
      location: "Remote",
      hours: "Flexible (self-paced)",
      pay: "$60-$85/hour",
      description: "Compile your family recipes into beautifully designed cookbooks. We handle the design, printing, and sales while you share your culinary heritage.",
      requirements: ["Great recipes to share", "Organized approach", "Interest in food history"],
      benefits: ["Royalties on sales", "Free professional photography", "Digital and print copies", "Gift market opportunity"],
      image: "https://placehold.co/400x300/FF6B35/FFFFFF?text=Cookbook+Creator"
    }
  ];

  const filteredJobs = jobs.filter(job => {
    const matchesCategory = selectedCategory === 'all' || job.category === selectedCategory;
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleApply = (job) => {
    setSelectedJob(job);
    setApplicationStep(1);
  };

  const nextStep = () => {
    if (applicationStep < 4) setApplicationStep(applicationStep + 1);
  };

  const prevStep = () => {
    if (applicationStep > 0) setApplicationStep(applicationStep - 1);
  };

  const renderApplicationForm = () => {
    const steps = [
      { title: "Personal Information", icon: "👤" },
      { title: "Experience & Skills", icon: "🌟" },
      { title: "Availability", icon: "📅" },
      { title: "References", icon: "📝" },
      { title: "Review & Submit", icon: "✅" }
    ];

    return (
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <div className="flex justify-center mb-8">
          <div className="flex items-center space-x-4">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold ${
                  index <= applicationStep ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'
                }`}>
                  {step.icon}
                </div>
                <span className={`text-sm mt-2 ${index <= applicationStep ? 'text-blue-600' : 'text-gray-400'}`}>
                  {step.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Apply for {selectedJob?.title}</h3>
          
          {applicationStep === 0 && (
            <div className="space-y-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Full Name</label>
                <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Enter your full name" />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Email Address</label>
                <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Enter your email" />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
                <input type="tel" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="+1 (555) 123-4567" />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">WhatsApp Number (Optional but recommended)</label>
                <input type="tel" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="+1 (555) 123-4567" />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Country of Residence</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>Select your country</option>
                  <option>United States</option>
                  <option>Canada</option>
                  <option>United Kingdom</option>
                  <option>Australia</option>
                  <option>Germany</option>
                  <option>France</option>
                  <option>Japan</option>
                  <option>India</option>
                  <option>Brazil</option>
                  <option>Mexico</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Preferred Work Location</label>
                <div className="flex space-x-4 mt-2">
                  <label className="flex items-center">
                    <input type="radio" name="location" value="remote" className="mr-2" defaultChecked />
                    <span>Remote (Work from anywhere)</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="location" value="in-person" className="mr-2" />
                    <span>In-person (We provide accommodation support)</span>
                  </label>
                </div>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Address</label>
                <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Your current address" />
              </div>
            </div>
          )}

          {applicationStep === 1 && (
            <div className="space-y-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">What previous work experience do you have?</label>
                <textarea className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" rows="4" placeholder="Describe any relevant experience..."></textarea>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">What skills do you bring to this role?</label>
                <textarea className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" rows="4" placeholder="List your strengths and abilities..."></textarea>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Are you comfortable using technology for communication?</label>
                <div className="flex space-x-6 mt-2">
                  <label className="flex items-center">
                    <input type="radio" name="tech" className="mr-2" />
                    <span>Yes, I'm comfortable</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="tech" className="mr-2" />
                    <span>I need some help</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="tech" className="mr-2" />
                    <span>No, but I'm willing to learn</span>
                  </label>
                </div>
              </div>
            </div>
          )}

          {applicationStep === 2 && (
            <div className="space-y-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Preferred days of the week</label>
                <div className="grid grid-cols-2 md:grid-cols-7 gap-2">
                  {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                    <label key={day} className="flex flex-col items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-blue-50 transition-colors">
                      <input type="checkbox" className="mb-2" />
                      <span className="text-sm">{day}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Preferred hours</label>
                <div className="flex space-x-4">
                  <select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-32">
                    <option>Any time</option>
                    <option>8 AM - 12 PM</option>
                    <option>12 PM - 4 PM</option>
                    <option>4 PM - 8 PM</option>
                  </select>
                  <span className="self-center text-gray-600">to</span>
                  <select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-32">
                    <option>Any time</option>
                    <option>8 AM - 12 PM</option>
                    <option>12 PM - 4 PM</option>
                    <option>4 PM - 8 PM</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">How soon can you start?</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>Immediately</option>
                  <option>In 1 week</option>
                  <option>In 2 weeks</option>
                  <option>In 1 month</option>
                </select>
              </div>
            </div>
          )}

          {applicationStep === 3 && (
            <div className="space-y-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Reference 1 Name</label>
                <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Full name" />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Reference 1 Phone</label>
                <input type="tel" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="(555) 123-4567" />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Reference 1 Relationship</label>
                <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="e.g., former colleague, neighbor" />
              </div>
              <div className="border-t pt-6">
                <label className="block text-gray-700 font-medium mb-2">Reference 2 Name</label>
                <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Full name" />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Reference 2 Phone</label>
                <input type="tel" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="(555) 123-4567" />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Reference 2 Relationship</label>
                <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="e.g., friend, family member" />
              </div>
            </div>
          )}

          {applicationStep === 4 && (
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-bold text-blue-800 mb-4">Review Your Application</h4>
                <p className="text-blue-700 mb-4">Please review all information before submitting.</p>
                <ul className="list-disc list-inside space-y-2 text-blue-700">
                  <li>Personal details entered correctly</li>
                  <li>Experience and skills accurately described</li>
                  <li>Availability preferences confirmed</li>
                  <li>References provided</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-bold text-green-800 mb-4">You're Almost Done!</h4>
                <p className="text-green-700 mb-4">Our team will review your application and contact you within 3 business days. You'll receive an email notification when your application has been reviewed.</p>
                <p className="text-green-700"><strong>Need help?</strong> Call our support line at +1 (256) 417-3785 or WhatsApp us at +1 (256) 417-3785</p>
                <p className="text-green-700 mt-4"><strong>International Applicants:</strong> EldersEdge provides accommodation support for qualified applicants who wish to work with us in person from other countries. Our team will coordinate housing arrangements based on your needs and location.</p>
              </div>
            </div>
          )}
        </div>

        <div className="flex justify-between mt-8">
          <button 
            onClick={prevStep}
            disabled={applicationStep === 0}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              applicationStep === 0 
                ? 'bg-gray-200 text-gray-500 cursor-not-allowed' 
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
          >
            ← Previous
          </button>
          
          {applicationStep === 4 ? (
            <button className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
              Submit Application
            </button>
          ) : (
            <button 
              onClick={nextStep}
              className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Next →
            </button>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-2xl font-bold text-white mr-4">
                🌟
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-800">EldersEdge</h1>
                <p className="text-gray-600">Empowering seniors through meaningful employment</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="hidden md:block text-right">
                <p className="text-sm text-gray-600">Trusted by over</p>
                <p className="text-2xl font-bold text-blue-600">12,500+</p>
                <p className="text-sm text-gray-600">Happy Workers</p>
              </div>
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold">
                👵
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Find Meaningful Work That Fits Your Life
          </h2>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-4xl mx-auto">
            Discover flexible job opportunities designed specifically for seniors who want to stay active, engaged, and earn extra income.
          </p>
          
          <div className="max-w-2xl mx-auto bg-white rounded-full shadow-lg p-2 flex">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Search jobs by title or company..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 rounded-full text-gray-800 outline-none"
              />
              <svg className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
            <button className="bg-blue-600 text-white px-8 rounded-full font-semibold hover:bg-blue-700 transition-colors ml-2">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Browse by Job Type</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {jobCategories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-4 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md'
                }`}
              >
                <span className="text-xl">{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">
              {filteredJobs.length} Available Jobs
            </h2>
            <div className="text-gray-600">
              Showing results for "{searchTerm}" {selectedCategory !== 'all' && `in ${jobCategories.find(c => c.id === selectedCategory)?.name}`}
            </div>
          </div>

          {filteredJobs.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-700 mb-4">No jobs found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your search criteria or browse other categories.</p>
              <button 
                onClick={() => {setSearchTerm(''); setSelectedCategory('all');}}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredJobs.map(job => (
                <div key={job.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                  <img src={job.image} alt={job.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold text-gray-800">{job.title}</h3>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {job.pay}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 mb-4 font-medium">{job.company}</p>
                    <div className="flex items-center text-gray-500 mb-4">
                      <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                      {job.location}
                    </div>
                    
                    <div className="flex items-center text-gray-500 mb-4">
                      <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      {job.hours}
                    </div>
                    
                    <p className="text-gray-700 mb-6 line-clamp-3">{job.description}</p>
                    
                    <div className="flex justify-between items-center">
                      <div className="flex space-x-2">
                        {job.requirements.slice(0, 2).map((req, i) => (
                          <span key={i} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                            {req.split(' ')[0]}
                          </span>
                        ))}
                        {job.requirements.length > 2 && (
                          <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                            +{job.requirements.length - 2}
                          </span>
                        )}
                      </div>
                      
                      <button
                        onClick={() => handleApply(job)}
                        className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                      >
                        Apply Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Support Resources */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">We Support You Every Step of the Way</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Tech Assistance</h3>
              <p className="text-gray-600 mb-6">
                Free one-on-one tech coaching to help you navigate our platform, use video interviews, and communicate digitally.
              </p>
              <button className="text-blue-600 font-medium hover:text-blue-700 transition-colors">
                Learn More →
              </button>
            </div>
            
            <div className="text-center p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Career Coaching</h3>
              <p className="text-gray-600 mb-6">
                Personalized career guidance from specialists who understand the unique strengths and needs of senior workers.
              </p>
              <button className="text-green-600 font-medium hover:text-green-700 transition-colors">
                Learn More →
              </button>
            </div>
            
            <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">24/7 Support</h3>
              <p className="text-gray-600 mb-6">
                Our dedicated senior support line is available around the clock to answer questions and assist with applications.
              </p>
              <button className="text-purple-600 font-medium hover:text-purple-700 transition-colors">
                Learn More →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Success Stories</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Margaret Thompson, 72",
                job: "Pet Sitting",
                quote: "After retiring, I missed having purpose. EldersEdge helped me find pet sitting work that lets me be outside and connect with animals every day. It's become my favorite part of the week!"
              },
              {
                name: "Robert Chen, 68",
                job: "Tutor",
                quote: "I spent 40 years as a teacher and wanted to share my knowledge. This platform connected me with adult learners who appreciate my experience. The flexible hours are perfect for my schedule."
              },
              {
                name: "Eleanor Wilson, 75",
                job: "Light Housekeeping",
                quote: "I never thought I'd be working again at my age, but the housekeeping jobs are so manageable. I'm earning extra money for my grandchildren and staying active in my community."
              },
              {
                name: "James Peterson, 70",
                job: "Ebook Author",
                quote: "I've written memoirs for my family for years. EldersEdge helped me turn them into published ebooks! I now earn passive income from my stories."
              },
              {
                name: "Susan Miller, 67",
                job: "Virtual Assistant",
                quote: "I help other seniors with technology. My background as a secretary makes me perfect for this role. I work from my favorite armchair!"
              },
              {
                name: "Thomas Reynolds, 74",
                job: "Craft Sales",
                quote: "I've been making wooden birdhouses since I was 20. Through EldersEdge's marketplace, I'm finally getting paid properly for my craftsmanship."
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                    <p className="text-gray-600">{testimonial.job}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Begin Your Next Chapter?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Join thousands of seniors who have found fulfilling work that fits their lifestyle. Your experience matters, and we're here to help you make the most of it.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg">
              Browse All Jobs
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition-colors">
              Call +1 (256) 417-3785
            </button>
          </div>
          
          <p className="mt-8 text-blue-100">
            Trusted by seniors worldwide • 100% free for job seekers • No hidden fees • Pay ranges from $60-$85 per hour • Accommodation support available for international applicants
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-xl font-bold mr-3">
                  🌟
                </div>
                <h3 className="text-xl font-bold">EldersEdge</h3>
              </div>
              <p className="text-gray-300">
                Connecting seniors with meaningful work opportunities since 2018.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">Browse Jobs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Employer Portal</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Resources</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">Tech Help</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Application Guide</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Interview Tips</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">Connect With Us</h4>
              <div className="space-y-2 text-gray-300">
                <p>📞 +1 (256) 417-3785</p>
                <p>📱 WhatsApp: +1 (256) 417-3785</p>
                <p>✉️ info@eldersedge.com</p>
                <p>🕒 Mon-Fri: 8am-8pm EST</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2023 EldersEdge. All rights reserved. Designed with ❤️ for seniors.</p>
            <p className="mt-2">Accommodation support available for qualified international applicants wishing to work with us in person.</p>
          </div>
        </div>
      </footer>

      {/* Modal for Application Form */}
      {selectedJob && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-screen overflow-y-auto">
            <div className="flex justify-between items-center p-6 border-b">
              <h2 className="text-2xl font-bold text-gray-800">Apply for {selectedJob.title}</h2>
              <button 
                onClick={() => {
                  setSelectedJob(null);
                  setApplicationStep(0);
                }}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>
            <div className="p-6">
              {renderApplicationForm()}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
