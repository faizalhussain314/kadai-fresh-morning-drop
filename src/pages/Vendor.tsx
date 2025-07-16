import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  UserPlus,
  MapPin,
  Truck,
  CheckCircle,
  Download,
  Users,
  TrendingUp,
  Shield,
  Smartphone,
  Clock,
  DollarSign,
  IndianRupee,
} from "lucide-react";

const Vendor = () => {
  const vendorFeatures = [
    {
      icon: <UserPlus className="h-6 w-6" />,
      title: "Customer Registration",
      description:
        "Register new customers directly at their doorstep with auto-generated login credentials",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "GPS Navigation",
      description:
        "Deliver orders with precision using built-in GPS tracking to customer locations",
    },
    {
      icon: <Truck className="h-6 w-6" />,
      title: "Order Management",
      description:
        "Simple order fulfillment flow: Packing → Ready → Dispatch → Delivered",
    },
    {
      icon: <IndianRupee className="h-6 w-6" />,
      title: "COD Collection",
      description:
        "Mark orders complete only after payment collection with secure COD acknowledgement",
    },
  ];

  const vendorBenefits = [
    "Expand customer base with digital tools",
    "Real-time order tracking and management",
    "GPS-guided delivery for accuracy",
    "Simple order status updates",
    "Secure cash collection process",
    "Build trust in your neighborhood",
  ];

  const stats = [
    { number: "500+", label: "Active Vendors" },
    { number: "10K+", label: "Daily Orders" },
    { number: "95%", label: "On-time Delivery" },
    { number: "4.8★", label: "Vendor Rating" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-20 pb-16 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-transparent"></div>
        <div className="max-w-7xl mx-auto p-12 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-white text-sm font-medium mb-6">
                <Users className="h-4 w-4 mr-2" />
                For Vendors & Local Sellers
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Empower Your
                <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                  Business
                </span>
                with Tech
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Join the digital revolution and grow your vegetable & fruit
                business. Reach more customers, manage orders efficiently, and
                build lasting trust.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-white text-purple-600 hover:bg-gray-100 font-semibold px-8 py-4 text-lg hover-lift"
                    onClick={() => {
                  window.location.href = "https://kadai2manai.com/apk/vendor.apk"}}
                >
                  <Download className="h-5 w-5 mr-2" />
                  Download Vendor App
                </Button>
                {/* <Button
                  variant="outline"
                  size="lg"
                  className="border-white bg-transparent text-white hover:bg-white hover:text-purple-600 font-semibold px-8 py-4 text-lg"
                >
                  Learn How It Works
                </Button> */}
              </div>
            </div>
            <div className="relative animate-float">
              <Card className="bg-white/10 backdrop-blur-md border-white/20 shadow-2xl">
                <CardContent className="p-8">
                  <div className="text-center text-white">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-4">
                      <Smartphone className="h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">
                      Kadai 2 Manai (Vendor)
                    </h3>
                    <p className="text-white/80 mb-6">
                      Smart tools for smart vendors
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="bg-white/10 rounded-lg p-3">
                        <div className="font-bold text-lg">24/7</div>
                        <div className="text-white/80">Support</div>
                      </div>
                      <div className="bg-white/10 rounded-lg p-3">
                        <div className="font-bold text-lg">Free</div>
                        <div className="text-white/80">to Use</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-purple-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50" id="features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Smart Tools for Local Vendors
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to digitize your business and serve customers
              better with our vendor-focused mobile application.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {vendorFeatures.map((feature, index) => (
              <Card key={index} className="hover-lift border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-medium mb-6">
                <TrendingUp className="h-4 w-4 mr-2" />
                Vendor Benefits
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Grow Your Business
                <span className="block text-purple-600">
                  with Digital Tools
                </span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Transform your traditional business into a modern, efficient
                operation that customers love and trust.
              </p>

              <div className="space-y-4 mb-8">
                {vendorBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>

              <Button
                size="lg"
                className="gradient-primary text-white hover:shadow-lg font-semibold px-8 py-4 text-lg hover-lift"
                   onClick={() => {
                  window.location.href = "https://kadai2manai.com/apk/customer.apk"}}
              >
                <Download className="h-5 w-5 mr-2" />
                Get Started Today
              </Button>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <Card className="hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-xl">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        Save Time
                      </h3>
                      <p className="text-gray-600">
                        Automate order management and customer registration
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 text-green-600 rounded-xl">
                      <TrendingUp className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        Increase Revenue
                      </h3>
                      <p className="text-gray-600">
                        Reach more customers and optimize delivery routes
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 text-purple-600 rounded-xl">
                      <Shield className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        Build Trust
                      </h3>
                      <p className="text-gray-600">
                        Transparent tracking and reliable service delivery
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Simple 4-Step Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get started with our vendor app and start growing your business
              today
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Download App",
                desc: "Get the vendor app from Our Website Or Google Play Store",
              },
              {
                step: "2",
                title: "Register Customers",
                desc: "Add customers directly at their doorstep",
              },
              {
                step: "3",
                title: "Manage Orders",
                desc: "Track and fulfill orders through the admin panel",
              },
              {
                step: "4",
                title: "Deliver & Collect",
                desc: "Use GPS navigation and collect payment on delivery",
              },
            ].map((item, index) => (
              <Card key={index} className="hover-lift text-center">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-600 text-white rounded-full text-xl font-bold mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join hundreds of vendors who are already growing their business with
            Kadai 2 Manai's vendor platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-purple-600 hover:bg-gray-100 font-semibold px-8 py-4 text-lg hover-lift"
                 onClick={() => {
                  window.location.href = "https://kadai2manai.com/apk/customer.apk"}}
            >
              <Download className="h-5 w-5 mr-2" />
              Download Vendor App
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white bg-transparent text-white hover:bg-white hover:text-purple-600 font-semibold px-8 py-4 text-lg"
            >
              Contact Support
            </Button>
          </div>
          <p className="text-white/80 text-sm mt-6">
            Free to download • No subscription fees • 24/7 support
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Vendor;
