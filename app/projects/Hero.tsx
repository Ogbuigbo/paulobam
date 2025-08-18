import React from 'react'
import Icon from '../_components/AppIcon'
import { mockProjects } from '@/lib/data'

function Hero() {
  return (
        <section className="pt-28 pb-12 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="pt-8 mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-primary mb-6">
                <Icon name="FolderOpen" size={16} />
                <span>Project Portfolio</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6">
                Our <span className="text-primary">Multi-Sector</span> Project Gallery
              </h1>
              
              <p className="text-xl text-text-secondary mb-8 leading-relaxed">
                Explore our comprehensive portfolio of successful projects across nine business verticals. 
                Each project represents our commitment to excellence, innovation, and measurable results 
                for clients throughout Nigeria and West Africa.
              </p>
              
              {/* Key Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">{mockProjects?.length}</div>
                  <div className="text-sm text-text-secondary">Total Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-success mb-2">9</div>
                  <div className="text-sm text-text-secondary">Business Sectors</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">4.8</div>
                  <div className="text-sm text-text-secondary">Average Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-text-primary mb-2">₦12B+</div>
                  <div className="text-sm text-text-secondary">Portfolio Value</div>
                </div>
              </div>
            </div>
          </div>
        </section>
  )
}

export default Hero
