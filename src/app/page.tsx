import Link from "next/link";

export default function Home() {
  return (
    <section className="flex flex-col items-center xl:mt-[3rem] m-auto text-center py-5 md:py-10">
      <div className="flex flex-col items-center mb-8">
        <img
          className="w-64 h-64 md:w-64 md:h-64 rounded-full object-cover shadow-lg mb-6"
          src="/my_photo.jpg"
          alt="Bartłomiej Treśka"
        />
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
          Bartłomiej Treśka
        </h1>
        <p className="text-xl md:text-2xl text-gray-300">
          Full-stack Developer
          <br />
          Computer Science student{" "}
          <a
            href="https://www.informatyka.agh.edu.pl/en/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200 underline"
          >
            @AGH
          </a>
        </p>
      </div>
      <p className="text-lg text-gray-300 max-w-2xl mb-8 text-left">
        Hi there! I'm Bartłomiej Treśka, a passionate full-stack developer and a
        computer science student at AGH University. I enjoy web development,
        mostly backend. Currently, I'm most fond of Kotlin and the OOP world.
      </p>
      <div className="flex gap-4">
        <Link
          href="/portfolio"
          className="px-8 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          View Portfolio
        </Link>
        <Link
          href="/contact"
          className="px-8 py-3 bg-gray-600 text-white rounded hover:bg-gray-700 transition"
        >
          Contact Me
        </Link>
      </div>
    </section>
  );
}
