import Link from "next/link"

export type ProjectProps = {
  name: string;
  description: string;
  link: string;
  techStackIcons: string[];
};

export default function Project({
  name,
  description,
  link,
  techStackIcons,
}: ProjectProps) {
  return (
    <>
      <div className="flex flex-col gap-2">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          {name}
        </h3>
        <div className="flex flex-row flex-wrap gap-2">
          {techStackIcons.map((iconUri, idx) => (
            <img key={idx} src={iconUri} className="h-[2rem]" alt="icon" />
          ))}
        </div>
      </div>

      
      <p className="mt-2 text-gray-700 dark:text-gray-300">
          {description}
      </p>
      
      <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-block text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200 underline"
      >
        <button className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
          View on github
        </button>
      </Link>
    </>
  )
}