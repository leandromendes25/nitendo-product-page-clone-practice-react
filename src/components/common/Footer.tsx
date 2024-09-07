import FooterInfo from "./FooterInfo";
import Logo from "./Logo";
import { FacebookIcon } from "@/components/icons/FacebookIcon";
import { InstagramIcon } from "@/components/icons/InstagramIcon";
import { TwitterIcon } from "@/components/icons/TwitterIcon";
import { YoutubeIcon } from "@/components/icons/YoutubeIcon";

export default function Footer() {
  return (
    <footer className="">
      <section className="bg-nitendo-red flex flex-col items-center p-8 md:flex-row md:justify-between">
        <Logo width={200} />
        <div className="flex pt-4 mt-4 gap-8 md:flex md:mt-0 md:pt-0 ">
          <FacebookIcon />
          <InstagramIcon />
          <TwitterIcon />
          <YoutubeIcon />
        </div>
      </section>
      <FooterInfo />
    </footer>
  );
}
