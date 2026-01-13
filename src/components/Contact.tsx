import { useState } from 'react';
import { Phone, Mail, MapPin, Download, Share2, Copy, Check } from 'lucide-react';
import { toast } from "sonner";
import SectionCard from './SectionCard';
import SectionTitle from './SectionTitle';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const [isShareDialogOpen, setIsShareDialogOpen] = useState(false);
  const [hasCopiedLink, setHasCopiedLink] = useState(false);
  const [hasCopiedMessage, setHasCopiedMessage] = useState(false);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/bio-data.pdf';
    link.download = 'Shah_Hussain_Biodata.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleShare = async () => {
    const pdfUrl = window.location.origin + '/bio-data.pdf';

    // Try native share first on mobile
    if (navigator.share && /Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
      try {
        await navigator.share({
          title: 'Shah Hussain - Marriage Biodata PDF',
          text: 'Download and view Shah Hussain\'s marriage biodata',
          url: pdfUrl,
        });
        return;
      } catch (err) {
        console.log('Error sharing:', err);
      }
    }

    // Fallback to modal
    const link = pdfUrl;
    navigator.clipboard.writeText(link).then(() => {
      toast.success("Link copied to clipboard!");
      setIsShareDialogOpen(true);
    });
  };

  const copyToClipboard = (text: string, type: 'link' | 'message') => {
    navigator.clipboard.writeText(text).then(() => {
      toast.success("Copied to clipboard!");
      if (type === 'link') {
        setHasCopiedLink(true);
        setTimeout(() => setHasCopiedLink(false), 2000);
      } else {
        setHasCopiedMessage(true);
        setTimeout(() => setHasCopiedMessage(false), 2000);
      }
    });
  };

  const shareMessage = `As-salamu alaykum,

Please find attached the marriage biodata of Shah Hussain.

You can view and download the PDF here:
${window.location.origin}/bio-data.pdf

JazakAllah Khair.`;

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 bg-section-light relative overflow-hidden">
      <div className="absolute inset-0 bg-noise" />
      <div className="absolute inset-0 islamic-pattern" />

      <div className="container mx-auto px-3 sm:px-4 relative z-10">
        <SectionTitle
          title="Contact Details"
          subtitle="Get in touch for further discussions"
        />

        <div className="max-w-3xl mx-auto">
          <SectionCard>
            <div className="space-y-0 mb-6 sm:mb-8">
              <a
                href="tel:+917071967998"
                className="flex items-start sm:items-center py-3 sm:py-4 border-b border-secondary/10 hover:bg-secondary/5 active:bg-secondary/10 transition-colors rounded-lg px-2 sm:px-3 -mx-1 sm:-mx-2 group"
              >
                <span className="w-28 sm:w-36 md:w-48 text-secondary font-medium flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm md:text-base shrink-0">
                  <Phone size={14} className="sm:w-4 sm:h-4" />
                  Phone No.
                </span>
                <span className="text-secondary/60 mx-2 sm:mx-3">:</span>
                <span className="flex-1 text-foreground font-medium group-hover:text-secondary transition-colors text-sm sm:text-base">
                  +91 7071967998
                </span>
              </a>
              <a
                href="mailto:shahhussaindev@gmail.com"
                className="flex items-start sm:items-center py-3 sm:py-4 border-b border-secondary/10 hover:bg-secondary/5 active:bg-secondary/10 transition-colors rounded-lg px-2 sm:px-3 -mx-1 sm:-mx-2 group"
              >
                <span className="w-28 sm:w-36 md:w-48 text-secondary font-medium flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm md:text-base shrink-0">
                  <Mail size={14} className="sm:w-4 sm:h-4" />
                  Email
                </span>
                <span className="text-secondary/60 mx-2 sm:mx-3">:</span>
                <span className="flex-1 text-foreground font-medium group-hover:text-secondary transition-colors text-xs sm:text-sm md:text-base break-all">
                  shahhussaindev@gmail.com
                </span>
              </a>
              <div className="flex items-start sm:items-center py-3 sm:py-4 hover:bg-secondary/5 transition-colors rounded-lg px-2 sm:px-3 -mx-1 sm:-mx-2">
                <span className="w-28 sm:w-36 md:w-48 text-secondary font-medium flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm md:text-base shrink-0">
                  <MapPin size={14} className="sm:w-4 sm:h-4" />
                  Address
                </span>
                <span className="text-secondary/60 mx-2 sm:mx-3">:</span>
                <span className="flex-1 text-foreground font-medium text-sm sm:text-base">
                  Mohan Mekin, Daliganj, Lucknow, India
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 pt-4 sm:pt-6 border-t border-secondary/20">
              <button
                onClick={handleDownload}
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 btn-gold-gradient rounded-xl text-sm sm:text-base active:scale-95 transition-transform"
              >
                <Download size={16} className="sm:w-[18px] sm:h-[18px]" />
                Download Biodata
              </button>

              <button
                onClick={handleShare}
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 btn-gold-outline rounded-xl text-sm sm:text-base active:scale-95 transition-transform"
              >
                <Share2 size={16} className="sm:w-[18px] sm:h-[18px]" />
                Share Biodata
              </button>
            </div>
          </SectionCard>
        </div>
      </div>

      <Dialog open={isShareDialogOpen} onOpenChange={setIsShareDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Share Biodata</DialogTitle>
            <DialogDescription>
              The link has been copied to your clipboard. You can also copy the message below to share.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-2">
            <div className="space-y-2">
              <Label htmlFor="link">Direct Link</Label>
              <div className="flex items-center space-x-2">
                <Input
                  id="link"
                  value={`${window.location.origin}/bio-data.pdf`}
                  readOnly
                  className="bg-muted/50 font-mono text-xs"
                />
                <Button
                  size="icon"
                  variant="outline"
                  onClick={() => copyToClipboard(`${window.location.origin}/bio-data.pdf`, 'link')}
                  className="shrink-0"
                >
                  {hasCopiedLink ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Share Message</Label>
              <div className="relative">
                <Textarea
                  id="message"
                  value={shareMessage}
                  readOnly
                  className="min-h-[120px] bg-muted/50 resize-none font-sans text-sm pr-10"
                />
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={() => copyToClipboard(shareMessage, 'message')}
                  className="absolute right-2 top-2 h-8 w-8 hover:bg-background/80"
                >
                  {hasCopiedMessage ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-2">
            <Button variant="secondary" onClick={() => setIsShareDialogOpen(false)}>
              Close
            </Button>
            <Button onClick={() => {
              window.open(`https://wa.me/?text=${encodeURIComponent(shareMessage)}`, '_blank');
            }} className="bg-[#25D366] hover:bg-[#128C7E] text-white gap-2">
              <Share2 className="h-4 w-4" /> Share on WhatsApp
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section >
  );
};

export default Contact;
