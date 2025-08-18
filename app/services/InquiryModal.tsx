import { useState } from 'react';
import Icon from '../_components/AppIcon';
import { Button } from '../_components/ui/button';
import { Input } from '../_components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../_components/ui/select';
import { LucideIconName } from '../_components/AppIcon';

interface Sector {
  name: string;
  icon?: string;
}

interface Option {
  value: string;
  label: string;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  projectType: string;
  budget: string;
  timeline: string;
  message: string;
}

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedSector?: Sector | null;
}

const InquiryModal = ({ isOpen, onClose, selectedSector }: InquiryModalProps) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const projectTypeOptions: Option[] = [
    { value: 'consultation', label: 'Initial Consultation' },
    { value: 'project', label: 'Full Project Implementation' },
    { value: 'partnership', label: 'Long-term Partnership' },
    { value: 'assessment', label: 'Capability Assessment' }
  ];

  const budgetOptions: Option[] = [
    { value: 'under-1m', label: 'Under ₦1M' },
    { value: '1m-5m', label: '₦1M - ₦5M' },
    { value: '5m-10m', label: '₦5M - ₦10M' },
    { value: '10m-50m', label: '₦10M - ₦50M' },
    { value: 'over-50m', label: 'Over ₦50M' },
    { value: 'discuss', label: 'Prefer to Discuss' }
  ];

  const timelineOptions: Option[] = [
    { value: 'immediate', label: 'Immediate (Within 1 month)' },
    { value: 'short', label: 'Short-term (1-3 months)' },
    { value: 'medium', label: 'Medium-term (3-6 months)' },
    { value: 'long', label: 'Long-term (6+ months)' },
    { value: 'flexible', label: 'Flexible Timeline' }
  ];

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Show success message
    alert(`Thank you for your inquiry about ${selectedSector?.name}! We'll contact you within 24 hours.`);
    
    setIsSubmitting(false);
    onClose();
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      projectType: '',
      budget: '',
      timeline: '',
      message: ''
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-border p-6 rounded-t-xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Icon name={'MessageSquare'} size={20} className="text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-display font-semibold text-text-primary">
                  Service Inquiry
                </h2>
                <p className="text-sm text-text-secondary">
                  {selectedSector?.name}
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-muted rounded-lg transition-colors duration-200"
            >
              <Icon name="X" size={20} className="text-text-secondary" />
            </button>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold text-text-primary mb-4">Contact Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Full Name
                </label>
                <Input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e: { target: { value: string; }; }) => handleInputChange('name', e.target.value)}
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Email Address
                </label>
                <Input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e: { target: { value: string; }; }) => handleInputChange('email', e.target.value)}
                  placeholder="your.email@company.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Phone Number
                </label>
                <Input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e: { target: { value: string; }; }) => handleInputChange('phone', e.target.value)}
                  placeholder="+234 xxx xxx xxxx"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Company Name
                </label>
                <Input
                  type="text"
                  value={formData.company}
                  onChange={(e: { target: { value: string; }; }) => handleInputChange('company', e.target.value)}
                  placeholder="Your company name"
                />
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div>
            <h3 className="text-lg font-semibold text-text-primary mb-4">Project Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Project Type
                </label>
                <Select
                  value={formData.projectType}
                  onValueChange={(value: string) => handleInputChange('projectType', value)}
                  required
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select project type" />
                  </SelectTrigger>
                  <SelectContent>
                    {projectTypeOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Budget Range
                </label>
                <Select
                  value={formData.budget}
                  onValueChange={(value: string) => handleInputChange('budget', value)}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select budget range" />
                  </SelectTrigger>
                  <SelectContent>
                    {budgetOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Timeline
                </label>
                <Select
                  value={formData.timeline}
                  onValueChange={(value: string) => handleInputChange('timeline', value)}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select timeline" />
                  </SelectTrigger>
                  <SelectContent>
                    {timelineOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">
                Project Description
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                placeholder={`Tell us about your ${selectedSector?.name?.toLowerCase()} requirements...`}
                rows={4}
                className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
              />
            </div>
          </div>

          {/* Trust Signals */}
          <div className="bg-muted/50 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <Icon name="Shield" size={20} className="text-success mt-0.5" />
              <div>
                <h4 className="font-medium text-text-primary mb-1">Your Information is Secure</h4>
                <p className="text-sm text-text-secondary">
                  We respect your privacy and will only use your information to respond to your inquiry. 
                  All communications are confidential and protected under Nigerian data protection laws.
                </p>
              </div>
            </div>
          </div>

          {/* Response Time Promise */}
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
            <div className="flex items-center space-x-3">
              <Icon name="Clock" size={20} className="text-primary" />
              <div>
                <h4 className="font-medium text-primary mb-1">24-Hour Response Guarantee</h4>
                <p className="text-sm text-text-secondary">
                  Our sector specialists will review your inquiry and respond within 24 hours with 
                  a detailed capability assessment and next steps.
                </p>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex items-center space-x-4 pt-4">
            <Button
              type="submit"
              variant="default"
              className="flex-1"
            >
              {isSubmitting ? 'Submitting Inquiry...' : 'Submit Inquiry'}
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              disabled={isSubmitting}
            >
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InquiryModal;