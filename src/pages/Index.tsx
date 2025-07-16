import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Smartphone,
  Clock,
  Users,
  Leaf,
  Star,
  CheckCircle,
  Download,
  ShoppingBag,
  Truck,
  Heart,
} from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Daily Fresh Delivery",
      description: "Get fresh produce delivered before 7:30 AM every day",
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Simple App Interface",
      description: "Designed for all age groups with easy-to-use features",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Community-Driven",
      description: "Supporting local vendors and farmers in your neighborhood",
    },
    {
      icon: <Leaf className="h-6 w-6" />,
      title: "100% Fresh & Local",
      description: "Sourced locally from trusted vendors and farmers",
    },
  ];

  const benefits = [
    "Order anytime before night",
    "Early morning delivery before 7:30 AM",
    "Real-time order tracking",
    "100% Cash on Delivery",
    "No subscription fees",
    "Community-trusted vendors",
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-20 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-transparent"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-white text-sm font-medium mb-6">
              <Star className="h-4 w-4 mr-2" />
              Launched July 16, 2025
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Your Daily
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Freshness
              </span>
              Partner
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto">
              Farm-fresh vegetables and fruits delivered to your doorstep every
              morning. Built by the community, for the community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-purple-600 hover:bg-gray-100 font-semibold px-8 py-4 text-lg hover-lift"
                onClick={() => {
                  window.location.href = "https://kadai2manai.com/apk/customer.apk"}}
              >
                <Download className="h-5 w-5 mr-2" />
                Download Customer App
              </Button>
              {/* <Button
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-purple-600 font-semibold px-8 py-4 text-lg bg-transparent"
              >
                Learn More
              </Button> */}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50" id="features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Kadai 2 Manai?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the convenience of fresh, locally-sourced produce
              delivered right to your doorstep with our community-driven
              approach.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover-lift border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 text-purple-600 rounded-xl mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* App Features Section */}
      <section className="py-20" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-medium mb-6">
                <ShoppingBag className="h-4 w-4 mr-2" />
                Customer App Features
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Freshness Delivered.
                <span className="block text-purple-600">
                  Simplicity Designed.
                </span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Our customer app is designed with simplicity in mind, making it
                easy for every family member to order fresh produce.
              </p>

              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
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
                Download Now
              </Button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 gradient-hero rounded-3xl transform rotate-3"></div>
              <Card className="relative transform -rotate-3 hover:rotate-0 transition-transform duration-500 shadow-2xl">
                <CardContent className="p-8">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 text-purple-600 rounded-2xl mb-4">
                      <Smartphone className="h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Kadai 2 Manai
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Customer App - Available Soon on Google Play Store
                    </p>
                    <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 mr-1" />
                        <span>4.8 Rating</span>
                      </div>
                      <div className="flex items-center">
                        <Download className="h-4 w-4 mr-1" />
                        <span>10K+ Downloads</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50" id="about">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              About Kadai 2 Manai
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              More than just a delivery app – we're a movement to bring healthy,
              locally-sourced produce to your community.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="hover-lift">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl mb-6">
                  <Heart className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Our Vision
                </h3>
                <p className="text-gray-600">
                  To revolutionize fresh produce access by empowering local
                  vendors and delivering farm-fresh essentials directly to homes
                  across Tamil Nadu.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-2xl mb-6">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Our Mission
                </h3>
                <p className="text-gray-600">
                  Supporting local farmers and vendors with digital tools while
                  delivering fresh produce with reliability and transparency.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 text-purple-600 rounded-2xl mb-6">
                  <Leaf className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Our Values
                </h3>
                <p className="text-gray-600">
                  Promoting sustainable, zero-waste grocery practices while
                  building stronger community connections through technology.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Join Tamil Nadu's Freshest Revolution
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Be a part of the movement that's bringing farms closer to homes, one
            delivery at a time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-purple-600 hover:bg-gray-100 font-semibold px-8 py-4 text-lg hover-lift"
                 onClick={() => {
                  window.location.href = "https://kadai2manai.com/apk/customer.apk"}}
            >
              <Download className="h-5 w-5 mr-2" />
              Download Customer App
            </Button>
            <Button
              variant="outline"
              size="lg"
              className=" text-white bg-transparent hover:bg-white hover:text-purple-600 font-semibold px-8 py-4 text-lg"
            >
              <Truck className="h-5 w-5 mr-2" />
              I'm a Vendor
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
