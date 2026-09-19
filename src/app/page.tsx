import Hero from "@/components/home/Hero";
import FeaturedDishes from "@/components/home/FeaturedDishes";
import StoryTeaser from "@/components/home/StoryTeaser";
import ReservationTeaser from "@/components/home/ReservationTeaser";
import GalleryPreview from "@/components/home/GalleryPreview";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedDishes />
      <StoryTeaser />
      <ReservationTeaser />
      <GalleryPreview />
      <Testimonials />
    </>
  );
}