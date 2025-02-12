import Footer from "@/components/footer/footer";
import SectionTwo from "@/components/section-2/section-2";
import SectionThree from "@/components/section-3/section-3";
import SectionFour from "@/components/section-4/section-4";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col gap-y-10">
        <div>
          <SectionTwo />
        </div>
        <div>
          <SectionThree />
        </div>
        <div>
          <SectionFour />
        </div>
      </div>
      <Footer />
    </main>
  );
}
