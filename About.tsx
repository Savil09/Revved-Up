import { motion } from 'motion/react';
import { Gauge, Target, Heart, Mail, MapPin, User } from 'lucide-react';

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Hero */}
      <section className="mb-32 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-block p-4 rounded-3xl bg-red-600 mb-8"
        >
          <Gauge className="w-12 h-12 text-white" />
        </motion.div>
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8">REVVED UP ENGINES</h1>
        <p className="text-white/50 text-xl max-w-3xl mx-auto leading-relaxed">
          A passion project dedicated to the pursuit of automotive excellence,
          engineering innovation, and the raw emotion of speed.
        </p>
      </section>

      {/* Mission */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32">
        <div className="space-y-8">
          <h2 className="text-4xl font-bold tracking-tight">OUR MISSION</h2>
          <p className="text-white/60 text-lg leading-relaxed">
            Revved Up Engines was born from a simple desire: to create the world's most
            premium digital showroom for car enthusiasts. We believe that supercars
            and hypercars are more than just machines—they are masterpieces of
            engineering and art.
          </p>
          <p className="text-white/60 text-lg leading-relaxed">
            Our platform provides deep technical insights, historical context, and
            an immersive visual experience for the most legendary vehicles ever created.
            Whether you're a collector, an engineer, or a dreamer, this is your digital garage.
          </p>

          <div className="grid grid-cols-2 gap-8 pt-8">
            <div className="space-y-2">
              <h4 className="text-3xl font-black text-red-500">25+</h4>
              <p className="text-white/40 text-sm font-bold uppercase tracking-widest">Iconic Vehicles</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-3xl font-black text-blue-500">100%</h4>
              <p className="text-white/40 text-sm font-bold uppercase tracking-widest">Passion Driven</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-blue-600/20 rounded-[3rem] blur-3xl" />
          <div className="relative bg-white/5 border border-white/10 rounded-[3rem] p-12 h-full flex flex-col justify-center">
            <div className="space-y-12">
              <div className="flex gap-6">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 h-fit">
                  <Target className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Precision Data</h4>
                  <p className="text-white/50">Every specification is meticulously researched and verified for accuracy.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 h-fit">
                  <Heart className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Enthusiast Hub</h4>
                  <p className="text-white/50">Built by enthusiasts, for enthusiasts. We speak the language of performance.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 h-fit">
                  <User className="w-6 h-6 text-amber-500" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Founder & Automotive Enthusiast</h4>
                  <p className="text-white/50 mb-2">Savil Pinto</p>
                  <p className="text-white/40 text-sm leading-relaxed">
                    I found this space to celebrate the thrill of the open road and the engineering marvels that ignite our passion for driving.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact */}
      <section className="p-12 md:p-20 rounded-[4rem] bg-white/5 border border-white/10 text-center">
        <h2 className="text-4xl font-bold mb-6">GET IN TOUCH</h2>
        <p className="text-white/50 mb-12 max-w-xl mx-auto">
          Have a suggestion for a new car or want to collaborate? We'd love to hear from you.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col items-center gap-4">
            <div className="p-4 rounded-full bg-white/5 border border-white/10">
              <Mail className="w-6 h-6 text-red-500" />
            </div>
            <p className="font-bold">savilspinto@gmail.com</p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="p-4 rounded-full bg-white/5 border border-white/10">
              <MapPin className="w-6 h-6 text-blue-500" />
            </div>
            <p className="font-bold">Toronto, Canada</p>
          </div>
        </div>
      </section>
    </div>
  );
}
