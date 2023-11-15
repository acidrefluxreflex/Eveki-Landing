import ContactForm from "@/components/sections/GFContactForm";
import PageHeadImage from "@/components/shared/PageHeadImage";

export default function Contact() {
  return (
    <>
      <PageHeadImage imageSrc="/images/HeadImage.webp" title="Contact" />
      <main className="flex min-h-screen flex-col items-center justify-between py-12">
        <ContactForm />
      </main>
    </>
  );
}
