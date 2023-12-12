import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h2 className="text-4xl font-semibold">
        <span className="text-blue-500">Explore </span> and Learn{" "}
        <span className="text-blue-500">Amazing Facts</span> at Your{" "}
        <span className="text-blue-500">Fingertips!</span>
      </h2>
      {/* <p className="py-6 text-justify text-xl">
        Discover captivating trivia and insightful facts on FactJano, an
        intuitive app designed for easy exploration and endless knowledge on
        various subjects.
      </p> */}
      <p className="py-6 text-justify text-xl">
        Dive into a vast{" "}
        <span className="text-blue-500">collection of topics</span>, including{" "}
        <span className="text-blue-500">science</span>, history,
        <span className="text-blue-500"> nature</span>,{" "}
        <span className="text-blue-500">technology</span>, and more. With
        FactJano, there is always
        <span className="text-blue-500"> something new to learn</span> and
        explore. Each fact is beautifully presented in a card format, making it{" "}
        <span className="text-blue-500"> easy and enjoyable to read</span> just
        keep swiping and learning.
      </p>
      <div className="flex flex-wrap">
        <div className="pt-5 pl-5 sm:pl-0" style={{ width: 300 }}>
          <Link href="https://app.factjano.com" target="_blank">
            <Image
              width={260}
              height={100}
              alt="Launch as PWA"
              src="https://user-images.githubusercontent.com/9122190/28998409-c5bf7362-7a00-11e7-9b63-db56694522e7.png"
            />
          </Link>
        </div>
        <div style={{ width: 300 }}>
          <Link
            href="https://play.google.com/store/apps/details?id=com.tdevelopers.factjano&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
            target="_blank"
          >
            <Image
              width={300}
              height={100}
              alt="Get it on Google Play"
              src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
            />
          </Link>
        </div>
      </div>
      <div className="pt-4">
        <Image
          className="rounded"
          width={1000}
          height={500}
          alt="Get it on Google Play"
          src="/banner.png"
        />
      </div>
    </main>
  );
}
