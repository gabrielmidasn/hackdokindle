import UrgencyBanner from "@/components/darkebook/urgency-banner";
import BookGrid from "@/components/darkebook/book-grid";
import PainSection from "@/components/darkebook/pain-section";
import Comparison from "@/components/darkebook/comparison";
import WhyDarkebook from "@/components/darkebook/why-darkebook";
import SocialProof from "@/components/darkebook/social-proof";
import Offers from "@/components/darkebook/offers";
import Guarantee from "@/components/darkebook/guarantee";
import Faq from "@/components/darkebook/faq";
import Footer from "@/components/darkebook/footer";
import DynamicSocialProof from "@/components/darkebook/dynamic-social-proof";

export default function DarkebookPage() {
  return (
    <div 
      className="flex flex-col min-h-screen bg-charcoal-black text-light-gray bg-no-repeat bg-center"
      style={{backgroundImage: "url('https://i.imgur.com/b0FqFsO.png')", backgroundSize: '60%', backgroundAttachment: 'fixed'}}
    >
      <div className="bg-charcoal-black/90">
        <UrgencyBanner />
        <main className="flex-1">
          <BookGrid />
          <PainSection />
          <Comparison />
          <WhyDarkebook />
          <SocialProof />
          <Offers />
          <Guarantee />
          <Faq />
        </main>
        <Footer />
        <DynamicSocialProof />
      </div>
    </div>
  );
}
