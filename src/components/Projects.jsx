import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";
import Tilt from "react-parallax-tilt";

const projects = [
  {
    name: "Get that Home",
    description:
      "fullstack web app, in which the user can create an account in two different roles, seeker and landlord, as a seeker the user can search for real estate to rent or buy, filter the search, save favorites and contact landlords; as a landlord the user can create new properties to offer for sell or rent and keep track of the offered properties, made with Rails for the back end (API) and React for the front end.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Eatable",
    description:
      "web app that shows a list of different international dishes, users can create a dish, update the dishes data (photo, name, price, description), users can delete a dish, receiving visual confirmation of the actions, all by interacting with an external API, created with React, and some external libraries like Taostify, Formik, React Router, etc.",
    icon: LockClosedIcon,
  },
  {
    name: "Expensable",
    description:
      "web app that allows authenticated users to keep track of their monthly expenses and income streams, it allows the user to utilize a calculator to input and calculate diverse operations and make a budget, at the same time all the information is stored in an external API, white user authentication is tokenized using session storage, created with React and an external API.",
    icon: ArrowPathIcon,
  },
  {
    name: "Some Splash",
    description:
      "a social web app that let the user load photos, create categories, rate and leave comments on other users submits, created with Ruby on Rails using the MVC design pattern (monolithic app).",
    icon: FingerPrintIcon,
  },
];

export default function Projects() {
  return (
    <div className="bg-[#9f86c0] mt-10 py-24 shadow-xl lg:mb-12">
      <div className="mx-auto max-w-2xl lg:text-center">
        <p className=" text-5xl font-bold tracking-tight text-white">
          Check out this selection of my best projects.
        </p>
        <p className="mt-6 text-xl leading-8 text-gray-300">
          Want to know more?
          <br></br>
          Click the icon to go to he Github repo.
        </p>
      </div>
      <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
        <dl className="grid max-w-xl grid-cols-1 gap-x-4 gap-y-4 lg:max-w-none lg:grid-cols-2 lg:gap-y-8">
          {projects.map((project) => (
            <Tilt>
              <div
                key={project.name}
                className="bg-blue-200 rounded-lg p-12 shadow-2xl shadow-[#231942] hover:shadow-none"
              >
                <dt className="flex flex-row justify-between text-lg font-semibold leading-7 text-gray-900">
                  <div className="left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <project.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  <div>{project.name}</div>
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {project.description}
                </dd>
              </div>
            </Tilt>
          ))}
        </dl>
      </div>
    </div>
  );
}
