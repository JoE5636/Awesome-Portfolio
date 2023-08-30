import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const info = [
  {
    name: "Joel De la Rosa",
    role: "Frontend Web Developer",
    imageUrl: "src/assets/perfil.jpg",
    bio: "Praesentium iure error aliquam voluptas ut libero. Commodi placeat sit iure nulla officiis. Ut ex sit repellat tempora. Qui est accusamus exercitationem natus ut voluptas. Officiis velit eos ducimus.",
    githubUrl: "https://github.com/JoE5636",
    linkedinUrl: "https://www.linkedin.com/in/joeldelarosa23",
  },
];

export default function About() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="bg-gray-100 py-24 md:py-32 lg:py-40">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="flex items-center justify-center selection:mx-auto max-w-2xl lg:mx-0">
          <h2 className="motion-safe:animate-bounce text-6xl font-bold tracking-tight text-[#9f86c0]">
            About Me
          </h2>
        </div>
        <Slider {...settings}>
          <div>
            <img
              className="aspect-[3/2] w-full rounded-2xl object-cover"
              src="src/assets/perfil.jpg"
              alt="Joel de la Rosa"
            />
            <h3 className="mt-6 text-lg font-semibold leading-8 text-[#9f86c0]">
              Frontend Web Developer
            </h3>
            <p className="mt-4 text-base leading-7 text-[#9f86c0]">
              After co-founding and closing a crowdfunding startup, I am now
              working as a freelance web developer, while also searching for a
              new challenge in the tech industry, where I can put my affection
              for design, client management, problem solving and interpersonal
              skills into practice. I am excited to contribute and add value to
              a project or organization.
            </p>
            <ul
              role="list"
              className="mt-6 flex items-center justify-center gap-x-6"
            >
              <li>
                <a
                  href="https://github.com/JoE5636"
                  className="text-[#9f86c0] hover:text-gray-300"
                >
                  <span className="sr-only">Github</span>
                  <svg
                    className="h-8 w-8"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/joeldelarosa23"
                  className="text-[#9f86c0] hover:text-gray-300"
                >
                  <span className="sr-only">LinkedIn</span>
                  <svg
                    className="h-8 w-8"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
          <div>
            <img
              className="aspect-[3/2] w-full rounded-2xl object-cover"
              src="src/assets/electronauts.png"
              alt="Joel de la Rosa"
            />
            <h3 className="mt-6 text-lg font-semibold leading-8 text-[#9f86c0]">
              Professional DJ
            </h3>
            <p className="mt-4 text-base leading-7 text-[#9f86c0]">
              I am a music LOVER!!! besides my work as a web developer i'm also
              a professional DJ, with 10 years of experience. I currently have
              an online radio show at Club Lava, on the GlobalYo app, click on
              the icon to download the app and start the YOVERSE journey; i also
              do a little production experiments as Niño Sovietiko, click on the
              Souncloud logo to hear some of it.
            </p>
            <ul
              role="list"
              className="mt-6 flex items-center justify-center gap-x-6"
            >
              <li>
                <a
                  href="https://apps.apple.com/mx/app/global-yo/id6443722306"
                  className="text-[#9f86c0] hover:text-gray-300"
                >
                  <span className="sr-only">GlobalYo appstore</span>
                  <svg
                    className="h-8 w-8"
                    aria-hidden="true"
                    fill="#9f86c0"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M213.803394,167.030943 C214.2452,214.609646 255.542482,230.442639 256,230.644727 C255.650812,231.761357 249.401383,253.208293 234.24263,275.361446 C221.138555,294.513969 207.538253,313.596333 186.113759,313.991545 C165.062051,314.379442 158.292752,301.507828 134.22469,301.507828 C110.163898,301.507828 102.642899,313.596301 82.7151126,314.379442 C62.0350407,315.16201 46.2873831,293.668525 33.0744079,274.586162 C6.07529317,235.552544 -14.5576169,164.286328 13.147166,116.18047 C26.9103111,92.2909053 51.5060917,77.1630356 78.2026125,76.7751096 C98.5099145,76.3877456 117.677594,90.4371851 130.091705,90.4371851 C142.497945,90.4371851 165.790755,73.5415029 190.277627,76.0228474 C200.528668,76.4495055 229.303509,80.1636878 247.780625,107.209389 C246.291825,108.132333 213.44635,127.253405 213.803394,167.030988 M174.239142,50.1987033 C185.218331,36.9088319 192.607958,18.4081019 190.591988,0 C174.766312,0.636050225 155.629514,10.5457909 144.278109,23.8283506 C134.10507,35.5906758 125.195775,54.4170275 127.599657,72.4607932 C145.239231,73.8255433 163.259413,63.4970262 174.239142,50.1987249"
                      fill="#000000"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/joeldelarosa23"
                  className="text-[#9f86c0] hover:text-gray-300"
                >
                  <span className="sr-only">SoundCloud</span>
                  <svg
                    className="h-8 w-8"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
          <div>
            <img
              className="aspect-[3/2] w-full rounded-2xl object-cover"
              src="src/assets/gym.jpeg"
              alt="Joel de la Rosa"
            />
            <h3 className="mt-6 text-lg font-semibold leading-8 text-[#9f86c0]">
              Wholesome dude!!!
            </h3>
            <p className="mt-4 text-base leading-7 text-[#9f86c0]">
              Most importantly i'm a family man, i enjoy traveling with my
              family, going out to dinner with friends, run and go to the gym...
              i enjoy life!!
            </p>
          </div>
        </Slider>
      </div>
    </div>
  );
}
