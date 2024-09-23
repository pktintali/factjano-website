import Image from "next/image";
import Link from "next/link";
import ReviewCard from "./components/review_box";

export default function Home() {
  const gradientTextClass =
    "text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400";

  return (
    <main className="px-4 py-2 md:px-16 lg:px-32 xl:px-48">
      <section className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          <span className="inline-block bg-gradient-to-r from-blue-600 to-blue-400 dark:from-yellow-300 dark:to-yellow-500 text-transparent bg-clip-text sm:py-2">
            Micro-Learning
          </span>{" "}
          Like Never Before
        </h1>
        <div className="pt-8 flex justify-center">
          <Image
            className="rounded-xl md:hidden"
            width={1000}
            height={500}
            alt="FactJano Banner"
            src="/factjano_banner_v2.png"
          />
        </div>
      </section>

      <section className="py-6 text-justify text-gray-800 dark:text-gray-300 text-xl">
        <p>
          Dive into a vast{" "}
          <span className={gradientTextClass}>collection of topics</span>,
          including <span className={gradientTextClass}>science</span>, history,
          <span className={gradientTextClass}> nature</span>,{" "}
          <span className={gradientTextClass}>technology</span>, and more. With
          FactJano, there is always
          <span className={gradientTextClass}> something new to learn</span> and
          explore. Each fact is beautifully presented in a card format, making
          it <span className={gradientTextClass}> fun </span> and{" "}
          <span className={gradientTextClass}> easy to read</span> just keep
          swiping and learning.
        </p>
      </section>

      <section className="flex flex-wrap justify-center gap-4 items-center">
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
        <div className="relative">
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75 rounded-lg">
            <span className="text-white text-2xl font-bold">Coming Soon</span>
          </div>
          <Image
            className="dark:border rounded-lg border-gray-400"
            width={260}
            height={100}
            alt="Coming Soon on App Store"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png"
          />
        </div>
      </section>

      <section className="pt-4 flex justify-center">
        <Image
          className="rounded hidden md:block"
          width={1000}
          height={500}
          alt="FactJano Banner"
          src="/factjano_banner_v2.png"
        />
      </section>

      <section className="my-12">
        <hr className="border-gray-300 dark:border-gray-600" />
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <ReviewCard
          rating={5}
          review="Best app for facts I ever found 🔥🔥"
          username="Prakhar Gupta"
        />
        <ReviewCard
          rating={4}
          review="Superb app free to use amazing facts loved it 💕👍"
          username="Aliza Baig"
        />
        <ReviewCard
          rating={5}
          review="Outstanding I never used applications like this just amazing 🤩"
          username="Ayush Baranwal"
        />
        <ReviewCard
          rating={5}
          review="There are so many interesting facts to enrich GK"
          username="Harshansh Gondi"
        />
        <ReviewCard
          rating={5}
          review="Great user experience and informative application."
          username="Harsh Gupta"
        />
        <ReviewCard
          rating={5}
          review="It is very nice app for knowledge It has different categories . thanks for this type of app ."
          username="Ramkrishna Mishra"
        />
        <ReviewCard
          rating={5}
          review="Love this app and to know the facts🤩. Graphic is too good and it's user friendly. Highly recommend!!!♡✌️."
          username="Rabbia Khan"
        />
        <ReviewCard
          rating={5}
          review="Very very fantastic app with seamless user experience."
          username="Gyanendra Mohan Patel"
        />
        {/* <ReviewCard
          rating={5}
          review="Awesome app for anyone who loves to learn. It delivers fascinating and random facts on a daily basis, covering a wide range of topics. The app's sleek design and ease of use make it a winner. It's like having a mini encyclopedia in your pocket, but way cooler. Highly recommended for anyone who wants to expand their knowledge and have fun doing it!"
          username="Pratham Gupta"
        /> */}
        <div className="sm:col-span-2 md:col-span-3 lg:col-span-4 flex justify-center">
          <ReviewCard
            rating={5}
            review="Awesome app for anyone who loves to learn. It delivers fascinating and random facts on a daily basis, covering a wide range of topics. The app's sleek design and ease of use make it a winner. It's like having a mini encyclopedia in your pocket, but way cooler. Highly recommended for anyone who wants to expand their knowledge and have fun doing it!"
            username="Pratham Gupta"
          />
        </div>
      </section>
    </main>
  );
}
