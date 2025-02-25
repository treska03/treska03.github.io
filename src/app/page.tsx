import Link from "next/link";

export default function Home() {
  return (
    <section className="my-2">
      <div className="my-4 flex items-center">
        <img
          className="w-32 h-32 rounded-full object-cover shadow-lg"
          src="/my_photo.jpg"
          alt="Bartlomiej Treska"
        />
        <div className="ml-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
            Bartłomiej Treśka
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            Full-stack Developer
            <br></br>
            Computer Science student{" "}
            <Link
              href="https://www.informatyka.agh.edu.pl/en/"
              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200 underline"
            >
              @AGH
            </Link>
          </p>
        </div>
      </div>
      <p className="text-lg text-gray-700 dark:text-gray-300">
        Hello! I'm Bartłomiej Treśka, a passionate full-stack developer. I am a
        third-year Computer Science student at AGH University of Science and
        Technology in Kraków. I enjoy over engineering simple problems, and
        writing well structured projects that don't handle complex logic.
      </p>
      <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
        I have been interested in programming for several years – I started as a
        self-learner, writing simple Python scripts. As I became more familiar
        with the language, I began developing automation programs. During my
        studies, I became interested in web development, and now I enjoy working
        on back-end development, primarily for web applications. From time to
        time I like to do some front-end using react as well.
      </p>
    </section>
  );
}
