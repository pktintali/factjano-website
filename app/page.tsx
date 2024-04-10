import Image from "next/image";
import Link from "next/link";
import ReviewCard from "./components/review_box";

export default function Home() {

  const gradientTextClass =
  "text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400";

  return (
    <main>
      <h2 className="text-4xl font-semibold">
        <span className={gradientTextClass}>Explore </span> and Learn{" "}
        <span className={gradientTextClass}>Amazing Facts</span> at Your{" "}
        <span className={gradientTextClass}>Fingertips!</span>
      </h2>
      <div className="pt-4">
        <Image
          className="rounded md:hidden"
          width={1000}
          height={500}
          alt="FactJano Banner"
          src="/factjano_banner_v2.png"
        />
      </div>
      {/* <p className="py-6 text-justify text-xl">
        Discover captivating trivia and insightful facts on FactJano, an
        intuitive app designed for easy exploration and endless knowledge on
        various subjects.
      </p> */}
      <p className="py-6 text-justify text-gray-600 dark:text-gray-400 text-xl">
        Dive into a vast{" "}
        <span className={gradientTextClass}>collection of topics</span>,
        including <span className={gradientTextClass}>science</span>, history,
        <span className={gradientTextClass}> nature</span>,{" "}
        <span className={gradientTextClass}>technology</span>, and more. With
        FactJano, there is always
        <span className={gradientTextClass}> something new to learn</span> and
        explore. Each fact is beautifully presented in a card format, making it{" "}
        <span className={gradientTextClass}> fun </span> and <span className={gradientTextClass}> easy to read</span>{" "}
        just keep swiping and learning.
      </p>
      <div className="flex flex-wrap">
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
        <div className="sm:pt-5 ml-5 pt-2" style={{ width: 300 }}>
            <Image
              className="dark:border rounded-lg border-gray-400 opacity-60"
              width={220}
              height={100}
              alt="Coming Soon on App Store"
              src="https://1radionews.com/wp-content/uploads/app_store_coming_soon.png"
            />
        </div>
      </div>
      <div className="pt-4">
        <Image
          className="rounded hidden md:block"
          width={1000}
          height={500}
          alt="FactJano Banner"
          src="/factjano_banner_v2.png"
        />
      </div>
      <div className="h-12 hidden md:block"></div>
      <hr className="my-8"/>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div>
          <ReviewCard
            rating={5}
            review="Best app for facts I ever found 🔥🔥"
            username="Prakhar Gupta"
          />
        </div>
        <div>
          <ReviewCard
            rating={4}
            review="Superb app free to use amazing facts loved it 💕👍"
            username="Aliza Baig"
          />
        </div>
        <div>
          <ReviewCard
            rating={5}
            review="Outstanding I never used applications like this just amazing 🤩"
            username="Ayush Baranwal"
          />
        </div>
        <div>
          <ReviewCard
            rating={5}
            review="There are so many interesting facts to enrich GK"
            username="Harshansh Gondi"
          />
        </div>
        <div>
          <ReviewCard
            rating={5}
            review="Great user experience and informative application."
            username="Harsh Gupta"
          />
        </div>
        <div>
          <ReviewCard
            rating={5}
            review="It is very nice app for knowledge It has different categories . thanks for this type of app ."
            username="Ramkrishna Mishra"
          />
        </div>
        <div>
          <ReviewCard
            rating={5}
            review="Love this app and to know the facts🤩. Graphic is too good and it's user friendly. Highly recommend!!!♡✌️."
            username="Rabbia Khan"
          />
        </div>
        <div>
          <ReviewCard
            rating={5}
            review="Very very fantastic app with seamless user experience."
            username="Gyanendra Mohan Patel"
          />
        </div>
        <div>
          <ReviewCard
            rating={5}
            review="Awesome app for anyone who loves to learn. It delivers fascinating and random facts on a daily basis, covering a wide range of topics. The app's sleek design and ease of use make it a winner. It's like having a mini encyclopedia in your pocket, but way cooler. Highly recommended for anyone who wants to expand their knowledge and have fun doing it!"
            username="Pratham Gupta"
          />
        </div>
        {/* Add more items as needed */}
      </div>
    </main>
  );
}
