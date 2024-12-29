import SocialMedia from "@/static/SocialMedia";
import Image from "next/image";

function Footer() {
  return (
    <div className="bg-gradient-to-r from-gradientLeft to-gradientRight">
      <Image
        src="/transitions/transition_grey_to_gradient.svg"
        alt="grey to gradient transition"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: '100%', height: '176px' }}
      />
      <footer className="flex flex-col items-center">
        <div className="pt-5">
          <SocialMedia size={35} />
        </div>
        <div className="flex text-white text-center p-5">
          &copy; {new Date().getFullYear()} All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default Footer;