import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, BookOpen, Target, BarChart2, Star, Users, Award, Clock, ArrowRight, Play, Download, Zap } from 'lucide-react';
import { GateIcon } from '@/components/icons';
import { ThemeToggle } from '@/components/theme-toggle';
import { placeholderImages } from '@/lib/placeholder-images.json';

const heroImage = placeholderImages.find(img => img.id === 'hero-landing');

const features = [
  {
    icon: <Target className="h-8 w-8 text-primary" />,
    title: 'AI-Powered Study Plans',
    description: 'Get personalized study plans tailored to your schedule, target GATE year, and learning pace using advanced AI algorithms.',
    highlight: 'NEW'
  },
  {
    icon: <BookOpen className="h-8 w-8 text-primary" />,
    title: 'Curated Resource Library',
    description: 'Access thousands of PYQs, video lectures, PDFs, and study materials curated by GATE experts and toppers.',
    highlight: '5000+'
  },
  {
    icon: <CheckCircle className="h-8 w-8 text-primary" />,
    title: 'Smart Test Engine',
    description: 'Practice with our intelligent test engine that adapts to your performance and provides detailed analytics.',
    highlight: 'ADAPTIVE'
  },
  {
    icon: <BarChart2 className="h-8 w-8 text-primary" />,
    title: 'Advanced Analytics',
    description: 'Track your progress with detailed insights, topic-wise accuracy, and performance predictions.',
    highlight: 'INSIGHTS'
  },
];

const stats = [
  { number: '50K+', label: 'Students Helped', icon: <Users className="h-6 w-6" /> },
  { number: '95%', label: 'Success Rate', icon: <Award className="h-6 w-6" /> },
  { number: '4.9/5', label: 'User Rating', icon: <Star className="h-6 w-6" /> },
  { number: '24/7', label: 'AI Support', icon: <Clock className="h-6 w-6" /> },
];

const testimonials = [
  {
    name: 'Priya Sharma',
    branch: 'Computer Science',
    score: '98.5%',
    text: 'GateAce helped me achieve AIR 47! The AI study plan was perfectly tailored to my schedule.',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face'
  },
  {
    name: 'Rajesh Kumar',
    branch: 'Electronics',
    score: '96.2%',
    text: 'The practice tests and analytics helped me identify my weak areas and improve systematically.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
  },
  {
    name: 'Anita Singh',
    branch: 'Mechanical',
    score: '94.8%',
    text: 'The resource library is comprehensive and the AI recommendations saved me hours of planning.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face'
  },
];

const pricingPlans = [
  {
    name: 'Free',
    price: '₹0',
    period: 'forever',
    features: ['Basic study plans', 'Limited practice tests', 'Community support', 'Basic analytics'],
    cta: 'Get Started',
    popular: false
  },
  {
    name: 'Pro',
    price: '₹999',
    period: 'month',
    features: ['AI-powered study plans', 'Unlimited practice tests', 'Advanced analytics', 'Priority support', 'Mock interviews'],
    cta: 'Start Free Trial',
    popular: true
  },
  {
    name: 'Premium',
    price: '₹1999',
    period: 'month',
    features: ['Everything in Pro', '1-on-1 mentoring', 'Custom study materials', 'Exam strategy sessions', 'Guaranteed improvement'],
    cta: 'Contact Sales',
    popular: false
  },
];

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <Link href="/" className="flex items-center gap-2 font-bold group">
            <div className="p-1 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
              <GateIcon className="h-6 w-6 text-primary" />
            </div>
            <span className="font-headline text-xl text-gradient">GateAce</span>
          </Link>
          <nav className="ml-auto flex items-center gap-6">
            <Link href="#features" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Features
            </Link>
            <Link href="#testimonials" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Success Stories
            </Link>
            <Link href="#pricing" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Pricing
            </Link>
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <Button variant="ghost" size="sm" asChild>
                <Link href="/login">Log In</Link>
              </Button>
              <Button size="sm" className="btn-primary" asChild>
                <Link href="/login">Get Started</Link>
              </Button>
            </div>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full py-24 md:py-32 lg:py-40 overflow-hidden">
            {heroImage && (
                 <Image
                    src={heroImage.imageUrl}
                    alt={heroImage.description}
                    fill
                    className="absolute inset-0 h-full w-full object-cover"
                    data-ai-hint={heroImage.imageHint}
                    priority
                />
            )}
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/80" />
          
          {/* Animated background elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary/30 rounded-full blur-lg animate-pulse delay-500"></div>
            <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-accent/15 rounded-full blur-2xl animate-pulse delay-700"></div>
          </div>
          
          <div className="container relative z-10 text-center text-white">
            <div className="animate-slide-up">
              <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30 font-medium">
                <Zap className="h-3 w-3 mr-1" />
                AI-Powered Learning Platform
              </Badge>
              
              <h1 className="font-headline text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl mb-8">
                <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                  Conquer the GATE Exam
                </span>
              </h1>
              
              <p className="mx-auto max-w-4xl text-xl text-white/90 md:text-2xl leading-relaxed mb-12">
                Join <span className="font-semibold text-white">50,000+</span> successful students who achieved their dream GATE scores with our AI-powered study plans, smart practice tests, and personalized guidance.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
                <Button size="lg" className="btn-primary px-10 py-4 text-lg font-semibold group animate-bounce-in" asChild>
                  <Link href="/login">
                    Start Your Journey
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="px-10 py-4 text-lg font-semibold border-white/30 text-white hover:bg-white/10 group animate-bounce-in" asChild>
                  <Link href="#demo">
                    <Play className="mr-2 h-5 w-5" />
                    Watch Demo
                  </Link>
                </Button>
              </div>
              
              {/* Trust indicators */}
              <div className="flex flex-wrap justify-center items-center gap-8 text-white/70">
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm">4.9/5 Rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  <span className="text-sm">50K+ Students</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-4 w-4" />
                  <span className="text-sm">95% Success Rate</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gradient-to-r from-primary/5 via-background to-accent/5">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300 mb-4">
                    <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-sm font-medium text-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-24 md:py-32 bg-gradient-to-b from-background to-muted/30">
          <div className="container">
            <div className="text-center mb-20">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                <Zap className="h-3 w-3 mr-1" />
                Powerful Features
              </Badge>
              <h2 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl mb-6 text-foreground">
                Everything You Need to Succeed
              </h2>
              <p className="mx-auto max-w-3xl text-lg text-muted-foreground md:text-xl leading-relaxed">
                From AI-powered planning to advanced analytics, we provide all the tools you need to achieve your GATE goals.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {features.map((feature, index) => (
                <Card key={index} className="group relative flex flex-col items-center text-center card-hover border-border shadow-lg hover:shadow-2xl bg-card backdrop-blur-sm overflow-hidden">
                  {feature.highlight && (
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-primary text-primary-foreground text-xs font-semibold">
                        {feature.highlight}
                      </Badge>
                    </div>
                  )}
                  <CardHeader className="pb-4 pt-8">
                    <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-all duration-300 mb-4 group-hover:scale-110">
                      {feature.icon}
                    </div>
                    <CardTitle className="font-headline text-xl group-hover:text-primary transition-colors duration-300 text-card-foreground">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-24 bg-gradient-to-r from-primary/5 via-background to-accent/5">
          <div className="container">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-green-100 text-green-700 border-green-200">
                <Award className="h-3 w-3 mr-1" />
                Success Stories
              </Badge>
              <h2 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl mb-6 text-foreground">
                What Our Students Say
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                Join thousands of successful students who achieved their dream GATE scores with GateAce.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="card-hover border-border shadow-lg bg-card backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="rounded-full"
                      />
                      <div>
                        <h4 className="font-semibold text-card-foreground">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground font-medium">{testimonial.branch}</p>
                      </div>
                      <Badge className="ml-auto bg-green-500/10 text-green-500 border-green-500/20">
                        {testimonial.score}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">"{testimonial.text}"</p>
                    <div className="flex mt-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-24 bg-gradient-to-b from-background to-muted/30">
          <div className="container">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-blue-100 text-blue-700 border-blue-200">
                <Target className="h-3 w-3 mr-1" />
                Choose Your Plan
              </Badge>
              <h2 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl mb-6 text-foreground">
                Simple, Transparent Pricing
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                Start free and upgrade as you grow. All plans include our core features.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <Card key={index} className={`relative card-hover border-border shadow-lg bg-card backdrop-blur-sm ${plan.popular ? 'ring-2 ring-primary scale-105' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-primary text-primary-foreground px-4 py-1">
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-2xl font-bold text-card-foreground">{plan.name}</CardTitle>
                    <div className="mt-4">
                      <span className="text-4xl font-bold text-gradient">{plan.price}</span>
                      <span className="text-muted-foreground">/{plan.period}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className={`w-full ${plan.popular ? 'btn-primary' : 'btn-secondary'}`}
                      size="lg"
                    >
                      {plan.cta}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-24 bg-gradient-to-r from-primary via-primary/90 to-accent relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-white/5 rounded-full blur-3xl"></div>
          </div>
          <div className="container relative z-10 text-center text-white">
            <h2 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl mb-6">
              Ready to Ace Your GATE Exam?
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-white/90 mb-8">
              Join thousands of successful students and start your journey to GATE success today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 px-8 py-3 text-lg font-semibold shadow-lg" asChild>
                <Link href="/login">Start Free Trial</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-3 text-lg font-semibold backdrop-blur-sm" asChild>
                <Link href="#demo">Watch Demo</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-muted/30">
        <div className="container py-16">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2 font-bold">
                <div className="p-1 rounded-lg bg-primary/10">
                  <GateIcon className="h-6 w-6 text-primary" />
                </div>
                <span className="font-headline text-xl text-gradient">GateAce</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The most advanced AI-powered GATE preparation platform. Helping students achieve their dream scores since 2020.
              </p>
              <div className="flex gap-4">
                <Button variant="outline" size="sm" className="rounded-full">
                  <Users className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm" className="rounded-full">
                  <Award className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm" className="rounded-full">
                  <Star className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="#features" className="text-muted-foreground hover:text-primary transition-colors">Features</Link></li>
                <li><Link href="#pricing" className="text-muted-foreground hover:text-primary transition-colors">Pricing</Link></li>
                <li><Link href="/dashboard" className="text-muted-foreground hover:text-primary transition-colors">Dashboard</Link></li>
                <li><Link href="/dashboard/tests" className="text-muted-foreground hover:text-primary transition-colors">Practice Tests</Link></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Support</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Help Center</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Community</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Status</Link></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">About</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Blog</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Careers</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} GateAce. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors font-medium">Terms</Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors font-medium">Privacy</Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors font-medium">Cookies</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
