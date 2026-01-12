import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import {
  Cpu,
  ShieldCheck,
  Truck,
  Globe2,
  ArrowRight,
  TrendingUp,
  PackageSearch,
  Handshake,
  CheckCircle2,
} from 'lucide-react';
import { Logo } from '@/components/Logo';

const LOGOS = [
  'Man City',
  'The',
  'King',
  'Of',
  'Premier League',
  'Manchester City',
  'Barceloona',
  'Liverpool',
  'Fulham',
  'Briston',
  'Etihad',
  'CampNou',
  'Anfield',
  'Emirates',
  'Stamford',
];

const FEATURES = [
  {
    icon: <PackageSearch className="h-8 w-8 text-blue-500" />,
    title: 'Smart Inventory Sync',
    desc: 'Real-time stock tracking across multiple warehouses. Never oversell or run out of critical hardware components again.',
  },
  {
    icon: <Handshake className="h-8 w-8 text-teal-500" />,
    title: 'Direct Supplier Negotiations',
    desc: 'Connect directly with verified global manufacturers. Negotiate bulk rates and secure contracts within the platform.',
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-indigo-500" />,
    title: 'Secure Escrow Payments',
    desc: 'Transactions are protected. Funds are only released when hardware is delivered and verified to meet quality standards.',
  },
  {
    icon: <Truck className="h-8 w-8 text-orange-500" />,
    title: 'Logistics Optimization',
    desc: 'Automated shipping calculations and carrier selection. Track your shipments from factory floor to doorstep.',
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-green-500" />,
    title: 'Market Analytics',
    desc: 'Data-driven insights on hardware pricing trends, demand forecasts, and supplier performance ratings.',
  },
  {
    icon: <Globe2 className="h-8 w-8 text-purple-500" />,
    title: 'Global Compliance',
    desc: 'Automated customs documentation and regulatory compliance checks for international hardware trade.',
  },
];

export default function Homepage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-teal-100 selection:text-teal-900">
      {/* Navbar */}
      <header className="fixed top-0 w-full bg-white/70 backdrop-blur-xl border-b border-gray-100 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Logo />

          <div className="hidden md:flex items-center gap-10 text-sm font-medium text-gray-600">
            <a
              href="#marketplace"
              className="hover:text-indigo-600 transition-colors cursor-pointer"
            >
              Marketplace
            </a>
            <a href="#solutions" className="hover:text-indigo-600 transition-colors cursor-pointer">
              Solutions
            </a>
            <a href="#suppliers" className="hover:text-indigo-600 transition-colors cursor-pointer">
              For Suppliers
            </a>
          </div>

          <div className="flex items-center gap-4">
            <Link to="/login">
              <Button
                variant="ghost"
                className="hidden sm:inline-flex hover:bg-indigo-50 hover:text-indigo-600 font-medium"
              >
                Log in
              </Button>
            </Link>
            <Link to="/register">
              <Button className="bg-gray-900 hover:bg-gray-800 text-white shadow-lg shadow-gray-200 hover:shadow-xl transition-all hover:-translate-y-0.5 rounded-full px-6">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-teal-200/20 rounded-full blur-3xl mix-blend-multiply animate-pulse" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-indigo-200/20 rounded-full blur-3xl mix-blend-multiply animate-pulse animation-delay-2000" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-40"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm mb-8 animate-fade-in-up">
            <span className="flex h-2 w-2 rounded-full bg-teal-500 animate-pulse"></span>
            <span className="text-sm font-medium text-gray-600">
              The #1 Platform for Hardware Trade
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 mb-8 leading-tight">
            Connect. Trade. <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-teal-500 to-indigo-600 animate-gradient-x">
              Accelerate Hardware.
            </span>
          </h1>

          <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed">
            The modern bridge between hardware vendors and global suppliers. Streamline procurement,
            manage inventory, and secure deals in one unified ecosystem.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link to="/register">
              <Button
                size="lg"
                className="h-14 px-10 text-lg bg-indigo-600 hover:bg-indigo-700 text-white rounded-full shadow-xl shadow-indigo-200 hover:shadow-2xl transition-all hover:-translate-y-1 w-full sm:w-auto"
              >
                Start Trading Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/login">
              <Button
                size="lg"
                variant="outline"
                className="h-14 px-10 text-lg border-2 border-gray-200 hover:border-indigo-600 hover:text-indigo-600 bg-white/50 backdrop-blur-sm rounded-full w-full sm:w-auto"
              >
                View Marketplace
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Infinite Logo Scroll */}
      <section className="py-12 bg-white border-y border-gray-100 overflow-hidden relative">
        <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-white to-transparent z-10" />

        <div className="flex w-full overflow-hidden group">
          <div className="flex animate-scroll gap-16 min-w-full px-8 group-hover:[animation-play-state:paused]">
            {[...LOGOS, ...LOGOS].map((logo, idx) => (
              <div key={idx} className="flex items-center justify-center shrink-0">
                <span className="text-2xl md:text-3xl font-bold text-gray-300 hover:text-gray-900 transition-colors cursor-default whitespace-nowrap select-none">
                  {logo}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="solutions" className="py-32 bg-gray-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-base font-semibold text-teal-600 tracking-wide uppercase mb-3">
              Why PebbleX?
            </h2>
            <p className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Built for the Complexity of Hardware
            </p>
            <p className="text-xl text-gray-600">
              Generic marketplaces don't work for hardware. We built PebbleX to handle specs, bulk
              logistics, and verified quality control.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURES.map((feature, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center mb-6 group-hover:bg-indigo-50 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gray-900">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900 to-teal-900 opacity-90"></div>
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">
            Ready to Revolutionize Your Supply Chain?
          </h2>
          <p className="text-indigo-100 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Join 10,000+ vendors and suppliers using PebbleX to move hardware faster, safer, and
            smarter.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link to="/register">
              <Button
                size="lg"
                className="h-14 px-12 bg-white text-gray-900 hover:bg-gray-100 font-bold rounded-full text-lg shadow-2xl transition-transform hover:scale-105"
              >
                Join Network Free
              </Button>
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-6 md:gap-12 text-sm font-medium text-indigo-200">
            <span className="flex items-center">
              <CheckCircle2 className="h-5 w-5 mr-2 text-teal-400" /> Verified Partners
            </span>
            <span className="flex items-center">
              <CheckCircle2 className="h-5 w-5 mr-2 text-teal-400" /> Insured Shipping
            </span>
            <span className="flex items-center">
              <CheckCircle2 className="h-5 w-5 mr-2 text-teal-400" /> 24/7 Support
            </span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white pt-20 pb-10 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-indigo-600 p-1.5 rounded-lg">
                  <Cpu className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">PebbleX</span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                Empowering the hardware industry with transparency, security, and speed. The
                operating system for global trade.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-6">Platform</h4>
              <ul className="space-y-4 text-sm text-gray-600">
                <li>
                  <a href="#" className="hover:text-indigo-600 transition-colors">
                    Browse Marketplace
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-indigo-600 transition-colors">
                    Sell Hardware
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-indigo-600 transition-colors">
                    Enterprise
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-6">Company</h4>
              <ul className="space-y-4 text-sm text-gray-600">
                <li>
                  <a href="#" className="hover:text-indigo-600 transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-indigo-600 transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-indigo-600 transition-colors">
                    Press
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-6">Support</h4>
              <ul className="space-y-4 text-sm text-gray-600">
                <li>
                  <a href="#" className="hover:text-indigo-600 transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-indigo-600 transition-colors">
                    API Status
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-indigo-600 transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} PebbleX Inc. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-gray-600">
                Privacy
              </a>
              <a href="#" className="hover:text-gray-600">
                Terms
              </a>
              <a href="#" className="hover:text-gray-600">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
