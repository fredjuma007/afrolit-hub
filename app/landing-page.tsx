import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  BookOpen,
  Users,
  DollarSign,
  Upload,
  Star,
  MessageCircle,
  TrendingUp,
  Check,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"


export default function Component() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-amber-50">
      <Header />

      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 lg:space-y-8">
              <div className="space-y-4 lg:space-y-6">
                <Badge className="bg-orange-100 text-orange-800 border-orange-200 text-sm">
                  Empowering African Voices
                </Badge>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-orange-900 leading-tight">
                  Showcase Your Voice to the World
                </h1>
                <p className="text-base sm:text-lg lg:text-xl text-orange-700 leading-relaxed max-w-2xl">
                  Join the premier platform where African authors connect with readers worldwide. Whether you're seeking
                  publication or already published, we amplify your stories.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-orange-600 hover:bg-orange-700 text-white px-6 lg:px-8 py-3 lg:py-4 text-base lg:text-lg"
                >
                  Start Writing Today
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-orange-600 text-orange-600 hover:bg-orange-50 px-6 lg:px-8 py-3 lg:py-4 text-base lg:text-lg"
                >
                  Explore Stories
                </Button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6 text-sm lg:text-base text-orange-600">
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 flex-shrink-0" />
                  <span>10,000+ Authors</span>
                </div>
                <div className="flex items-center space-x-2">
                  <BookOpen className="h-5 w-5 flex-shrink-0" />
                  <span>50,000+ Stories</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 flex-shrink-0" />
                  <span>1M+ Readers</span>
                </div>
              </div>
            </div>
            <div className="relative mt-8 lg:mt-0">
              <div className="relative z-10">
                <Image
                  src="/african_author_AI.png"
                  alt="African author writing"
                  width={500}
                  height={600}
                  className="rounded-2xl shadow-2xl w-full h-auto"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-orange-400 to-amber-500 rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - Unpublished Authors */}
      <section id="how-it-works" className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-900 mb-4">For Aspiring Authors</h2>
            <p className="text-base sm:text-lg lg:text-xl text-orange-700 max-w-3xl mx-auto">
              Get your work discovered by readers and publishers with our simple submission process
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <Card className="border-orange-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Upload className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle className="text-orange-900 text-lg lg:text-xl">1. Upload Your Manuscript</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-orange-700 text-center text-sm lg:text-base">
                  Submit your completed work in any format. Our platform supports novels, short stories, poetry, and
                  more.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="border-orange-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle className="text-orange-900 text-lg lg:text-xl">2. Pay Small Fee</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-orange-700 text-center text-sm lg:text-base">
                  A modest submission fee helps us maintain quality and provide professional review services.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="border-orange-200 hover:shadow-lg transition-shadow md:col-span-2 lg:col-span-1">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle className="text-orange-900 text-lg lg:text-xl">3. Get Discovered</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-orange-700 text-center text-sm lg:text-base">
                  Reach thousands of readers and potential publishers. Build your audience and get feedback.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Published Authors Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-orange-100 to-amber-100">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <Image
                src="/library_AI.png"
                alt="Published author earning revenue"
                width={500}
                height={400}
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-900">For Published Authors</h2>
              <p className="text-base sm:text-lg lg:text-xl text-orange-700">
                Already published? Earn revenue based on reader engagement and build a loyal following.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Check className="h-6 w-6 text-orange-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-orange-900 text-base lg:text-lg">Revenue Sharing</h3>
                    <p className="text-orange-700 text-sm lg:text-base">
                      Earn money based on reader engagement, views, and subscriptions
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="h-6 w-6 text-orange-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-orange-900 text-base lg:text-lg">Analytics Dashboard</h3>
                    <p className="text-orange-700 text-sm lg:text-base">
                      Track your readership, engagement metrics, and earnings in real-time
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="h-6 w-6 text-orange-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-orange-900 text-base lg:text-lg">Direct Reader Connection</h3>
                    <p className="text-orange-700 text-sm lg:text-base">
                      Build relationships with your audience through comments and feedback
                    </p>
                  </div>
                </div>
              </div>
              <Button className="bg-orange-600 hover:bg-orange-700 text-white">Join as Published Author</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Reader Features */}
      <section id="for-readers" className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-900 mb-4">For Readers</h2>
            <p className="text-base sm:text-lg lg:text-xl text-orange-700 max-w-3xl mx-auto">
              Discover incredible stories from African authors and connect with a vibrant literary community
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <Card className="border-orange-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center pb-4">
                <BookOpen className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <CardTitle className="text-orange-900 text-lg lg:text-xl">Browse & Discover</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-orange-700 text-center text-sm lg:text-base">
                  Explore thousands of stories across genres. Find your next favorite author with our smart
                  recommendations.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="border-orange-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center pb-4">
                <Star className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <CardTitle className="text-orange-900 text-lg lg:text-xl">Rate & Review</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-orange-700 text-center text-sm lg:text-base">
                  Share your thoughts and help other readers discover great content. Your reviews matter to authors.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="border-orange-200 hover:shadow-lg transition-shadow md:col-span-2 lg:col-span-1">
              <CardHeader className="text-center pb-4">
                <MessageCircle className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <CardTitle className="text-orange-900 text-lg lg:text-xl">Connect & Discuss</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-orange-700 text-center text-sm lg:text-base">
                  Join discussions, comment on stories, and connect directly with authors and fellow readers.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-amber-100 to-orange-100">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-900 mb-4">Success Stories</h2>
            <p className="text-base sm:text-lg lg:text-xl text-orange-700">
              Hear from authors who've found success on our platform
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <Card className="bg-white border-orange-200">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <Image
                    src="/testimony.png"
                    alt="Author"
                    width={60}
                    height={60}
                    className="rounded-full flex-shrink-0"
                  />
                  <div>
                    <h3 className="font-semibold text-orange-900">Amara Okafor</h3>
                    <p className="text-orange-600 text-sm">Nigerian Novelist</p>
                  </div>
                </div>
                <p className="text-orange-700 italic text-sm lg:text-base">
                  "AfrolitHub gave me the platform I needed to reach readers worldwide. Within six months, I had a
                  publishing deal!"
                </p>
                <div className="flex text-orange-400 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white border-orange-200">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <Image
                    src="/testimony.png"
                    alt="Author"
                    width={60}
                    height={60}
                    className="rounded-full flex-shrink-0"
                  />
                  <div>
                    <h3 className="font-semibold text-orange-900">Kwame Asante</h3>
                    <p className="text-orange-600 text-sm">Ghanaian Poet</p>
                  </div>
                </div>
                <p className="text-orange-700 italic text-sm lg:text-base">
                  "The revenue sharing model has allowed me to focus on writing full-time. My readership has grown 10x!"
                </p>
                <div className="flex text-orange-400 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white border-orange-200 md:col-span-2 lg:col-span-1">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <Image
                    src="/testimony.png"
                    alt="Author"
                    width={60}
                    height={60}
                    className="rounded-full flex-shrink-0"
                  />
                  <div>
                    <h3 className="font-semibold text-orange-900">Zara Mthembu</h3>
                    <p className="text-orange-600 text-sm">South African Writer</p>
                  </div>
                </div>
                <p className="text-orange-700 italic text-sm lg:text-base">
                  "The community here is incredible. The feedback from readers has made me a better writer."
                </p>
                <div className="flex text-orange-400 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="about" className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-900">
                Empowering African Storytelling
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-orange-700 leading-relaxed">
                Our mission is to amplify African voices and stories, creating a bridge between talented authors and
                readers worldwide. We believe every story deserves to be heard.
              </p>
              <p className="text-base sm:text-lg text-orange-700 leading-relaxed">
                From the bustling streets of Lagos to the serene landscapes of the Serengeti, African literature offers
                unique perspectives that enrich global culture. We're here to ensure these voices reach every corner of
                the world.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-orange-600">54</div>
                  <div className="text-orange-700 text-sm lg:text-base">Countries Represented</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-orange-600">20+</div>
                  <div className="text-orange-700 text-sm lg:text-base">Languages Supported</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/AI_reader.png"
                alt="African storytelling"
                width={600}
                height={500}
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section
        id="pricing"
        className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-orange-50 to-amber-50"
      >
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-orange-700">
              Choose the plan that works best for your writing journey
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            <Card className="border-orange-200 bg-white">
              <CardHeader className="text-center">
                <CardTitle className="text-orange-900 text-lg lg:text-xl">Single Submission</CardTitle>
                <div className="text-2xl lg:text-3xl font-bold text-orange-600 mt-4">KES 2,000</div>
                <CardDescription className="text-orange-700">Perfect for trying us out</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-orange-600 flex-shrink-0" />
                    <span className="text-orange-700 text-sm lg:text-base">One manuscript submission</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-orange-600 flex-shrink-0" />
                    <span className="text-orange-700 text-sm lg:text-base">Basic analytics</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-orange-600 flex-shrink-0" />
                    <span className="text-orange-700 text-sm lg:text-base">Reader feedback</span>
                  </div>
                </div>
                <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">Submit Now</Button>
              </CardContent>
            </Card>
            <Card className="border-orange-400 bg-white ring-2 ring-orange-400 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-orange-600 text-white">Most Popular</Badge>
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-orange-900 text-lg lg:text-xl">Author Package</CardTitle>
                <div className="text-2xl lg:text-3xl font-bold text-orange-600 mt-4">KES 6,000</div>
                <CardDescription className="text-orange-700">Best value for serious writers</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-orange-600 flex-shrink-0" />
                    <span className="text-orange-700 text-sm lg:text-base">Up to 5 submissions</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-orange-600 flex-shrink-0" />
                    <span className="text-orange-700 text-sm lg:text-base">Advanced analytics</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-orange-600 flex-shrink-0" />
                    <span className="text-orange-700 text-sm lg:text-base">Priority review</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-orange-600 flex-shrink-0" />
                    <span className="text-orange-700 text-sm lg:text-base">Author profile page</span>
                  </div>
                </div>
                <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">Get Started</Button>
              </CardContent>
            </Card>
            <Card className="border-orange-200 bg-white">
              <CardHeader className="text-center">
                <CardTitle className="text-orange-900 text-lg lg:text-xl">Published Author</CardTitle>
                <div className="text-2xl lg:text-3xl font-bold text-orange-600 mt-4">Free</div>
                <CardDescription className="text-orange-700">Revenue sharing model</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-orange-600 flex-shrink-0" />
                    <span className="text-orange-700 text-sm lg:text-base">Unlimited submissions</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-orange-600 flex-shrink-0" />
                    <span className="text-orange-700 text-sm lg:text-base">Revenue sharing</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-orange-600 flex-shrink-0" />
                    <span className="text-orange-700 text-sm lg:text-base">Premium analytics</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-orange-600 flex-shrink-0" />
                    <span className="text-orange-700 text-sm lg:text-base">Marketing support</span>
                  </div>
                </div>
                <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">Apply Now</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-orange-900 text-white px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4 sm:col-span-2 lg:col-span-1">
              <div className="flex items-center space-x-2">
                <BookOpen className="h-8 w-8 text-orange-400" />
                <span className="text-2xl font-bold">AfrolitHub</span>
              </div>
              <p className="text-orange-200 text-sm lg:text-base">
                Empowering African voices and connecting stories with the world.
              </p>
              <div className="flex space-x-4">
                <Facebook className="h-5 w-5 text-orange-400 hover:text-white cursor-pointer transition-colors" />
                <Twitter className="h-5 w-5 text-orange-400 hover:text-white cursor-pointer transition-colors" />
                <Instagram className="h-5 w-5 text-orange-400 hover:text-white cursor-pointer transition-colors" />
                <Linkedin className="h-5 w-5 text-orange-400 hover:text-white cursor-pointer transition-colors" />
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-orange-400 mb-4">For Authors</h3>
              <ul className="space-y-2 text-orange-200 text-sm lg:text-base">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Submit Your Work
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Author Guidelines
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Success Stories
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Writing Resources
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-orange-400 mb-4">For Readers</h3>
              <ul className="space-y-2 text-orange-200 text-sm lg:text-base">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Browse Stories
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    New Releases
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Top Rated
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Reading Lists
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-orange-400 mb-4">Stay Updated</h3>
              <p className="text-orange-200 mb-4 text-sm lg:text-base">
                Get the latest stories and author updates delivered to your inbox.
              </p>
              <div className="flex space-x-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-orange-800 border-orange-700 text-white placeholder-orange-300 text-sm"
                />
                <Button className="bg-orange-600 hover:bg-orange-700 flex-shrink-0">
                  <Mail className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-orange-800 mt-8 pt-8 flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <p className="text-orange-200 text-sm lg:text-base">© 2024 AfrolitHub. All rights reserved.</p>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6">
              <Link href="#" className="text-orange-200 hover:text-white transition-colors text-sm lg:text-base">
                Privacy Policy
              </Link>
              <Link href="#" className="text-orange-200 hover:text-white transition-colors text-sm lg:text-base">
                Terms of Service
              </Link>
              <Link href="#" className="text-orange-200 hover:text-white transition-colors text-sm lg:text-base">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
