import React from "react";
import img1 from "../assets/ben-7656dd36.jpg";
import img2 from "../assets/claire-bfdbc161.jpg";
import img3 from "../assets/iwan-70e1c572.jpg";
import img4 from "../assets/judith-8d0417f0.jpg";
import img5 from "../assets/lori-07099057.jpg";
import img6 from "../assets/mali-a8248c71.webp";
import img7 from "../assets/mi-68a0f720.jpg";
import img8 from "../assets/nim-d6bbfb63.jpg";
import img9 from "../assets/san-3b86301b.jpg";
import img10 from "../assets/sanjid-2d7a907f.jpg";
import img11 from "../assets/steph-68f47994.jpg";
import img12 from "../assets/zak-be2e6aeb.jpg";
import "../assets/style-410a9dbc.css";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import Header from "../organization/Header";

function Home() {
  return (
    <div>
      <Header />
      <div id="app" className="">
        <div>
          <div
            className="site-content  overflow-hidden"
            data-testid="site-content"
          >
            <section
              id="sc6yawt3xq"
              className="pt-8 overflow-hidden sm:pt-12 lg:relative lg:py-48"
              sectionname="hero"
              imagestretch="true"
              sectioncomponent="Hero"
              sortorder="0"
            >
              <div className="max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24">
                <div className="relative z-[1]">
                  <div className="space-x-3 flex items-center">
                    <img
                      className="h-12 w-auto"
                      src="https://storage.googleapis.com/mixo-files/logos/hirEx-1679323310963.svg"
                      alt="HirEx logo"
                    />
                    <p className="text-3xl font-sans font-bold text-gray-900">
                      HirEx
                    </p>
                  </div>
                  <div className="mt-14">
                    <div className="mt-6 sm:max-w-xl">
                      <h1 className="text-4xl font-black tracking-tight text-gray-900 sm:text-6xl md:text-7xl">
                        Streamline Your Hiring Process with HirEx
                        <span className="text-primary">.</span>
                      </h1>
                      <h2 className="mt-6 text-lg text-gray-500 sm:text-xl">
                        Our platform utilizes advanced technologies to ensure
                        you find the right candidate with desirable skills.
                      </h2>
                    </div>

                    <div
                      className="mt-6 sm:mt-12 sm:mx-auto sm:max-w-lg flex flex-col items-start "
                      data-v-77b1cd82
                    >
                      <Link to="/getstarted">
                        <Button
                          variant="contained"
                          type="button"
                          className="  p-2 rounded"
                        >
                          Get Started
                        </Button>
                      </Link>
                    </div>
                    <div className="mt-6">
                      <div className="items-center sm:divide-x sm:divide-gray-300 sm:inline-flex">
                        <div className="flex flex-shrink-0 pb-1 sm:pr-3 sm:pb-0">
                          <svg
                            width="1.2em"
                            height="1.2em"
                            preserveAspectRatio="xMidYMid meet"
                            viewBox="0 0 20 20"
                            className="w-5 h-5 text-yellow-400"
                          >
                            <path
                              fill="currentColor"
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292Z"
                            ></path>
                          </svg>
                          <svg
                            width="1.2em"
                            height="1.2em"
                            preserveAspectRatio="xMidYMid meet"
                            viewBox="0 0 20 20"
                            className="w-5 h-5 text-yellow-400"
                          >
                            <path
                              fill="currentColor"
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292Z"
                            ></path>
                          </svg>
                          <svg
                            width="1.2em"
                            height="1.2em"
                            preserveAspectRatio="xMidYMid meet"
                            viewBox="0 0 20 20"
                            className="w-5 h-5 text-yellow-400"
                          >
                            <path
                              fill="currentColor"
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292Z"
                            ></path>
                          </svg>
                          <svg
                            width="1.2em"
                            height="1.2em"
                            preserveAspectRatio="xMidYMid meet"
                            viewBox="0 0 20 20"
                            className="w-5 h-5 text-yellow-400"
                          >
                            <path
                              fill="currentColor"
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292Z"
                            ></path>
                          </svg>
                          <svg
                            width="1.2em"
                            height="1.2em"
                            preserveAspectRatio="xMidYMid meet"
                            viewBox="0 0 20 20"
                            className="w-5 h-5 text-yellow-400"
                          >
                            <path
                              fill="currentColor"
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292Z"
                            ></path>
                          </svg>
                        </div>
                        <div className="min-w-0 py-1 text-sm text-gray-500 sm:px-3">
                          Rated 5 stars
                        </div>
                        <div className="min-w-0 py-1 text-sm text-gray-500 sm:pl-3">
                          Over 1000 happy users
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sm:pl-6">
                <div className="py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                  <div className="hidden sm:block">
                    <div className="absolute inset-y-0 w-screen left-1/2 bg-gray-50 rounded-l-3xl lg:left-80 lg:right-0 lg:w-full"></div>
                    <svg
                      className="absolute -mr-3 top-8 right-1/2 lg:m-0 lg:left-0"
                      width="404"
                      height="392"
                      fill="none"
                      viewBox="0 0 404 392"
                    >
                      <defs>
                        <pattern
                          id="837c3e70-6c3a-44e6-8854-cc48c737b659"
                          x="0"
                          y="0"
                          width="20"
                          height="20"
                          patternUnits="userSpaceOnUse"
                        >
                          <rect
                            x="0"
                            y="0"
                            width="4"
                            height="4"
                            className="text-gray-200"
                            fill="currentColor"
                          ></rect>
                        </pattern>
                      </defs>
                      <rect
                        width="404"
                        height="392"
                        fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"
                      ></rect>
                    </svg>
                  </div>
                  <div className="relative pl-4 ml-auto sm:max-w-3xl sm:px-0 lg:h-full lg:max-w-none lg:flex lg:items-center xl:pl-12">
                    <img
                      className="w-full rounded-l-3xl lg:w-auto 2xl:h-full 2xl:max-w-none 2xl:rounded-3xl"
                      src="https://images.unsplash.com/photo-1573496130407-57329f01f769?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=MnwzMzczODV8MHwxfHNlYXJjaHw0fHxoaXJpbmd8ZW58MHwwfHx8MTY3OTI4NDk1MA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
                      alt="HirEx"
                    />
                  </div>
                </div>
              </div>
            </section>
            <section
              className="relative pt-16 pb-32 overflow-hidden bg-white space-y-24"
              sectionname="features"
              id="zrtcf41kib"
              sectioncomponent="Features"
              sortorder="1"
              site-name="HirEx"
              site-id="h9QMp40QYZtKvlOwdZbR"
              site-logo-url="https://storage.googleapis.com/mixo-files/logos/hirEx-1679323310963.svg"
              site-logo-size="lg"
            >
              <div>
                <div className="lg:mx-auto lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-6 xl:gap-12 2xl:gap-24">
                  <div className="lg:col-start-2 lg:mx-0 lg:px-0 lg:pr-8 max-w-xl px-4 mx-auto space-y-6 sm:px-6 lg:py-32 2xl:mx-0">
                    <div>
                      <h2 className="text-4xl font-extrabold tracking-tight text-gray-900">
                        Save time and effort
                        <span className="text-primary">.</span>
                      </h2>
                      <p className="mt-4 text-lg leading-relaxed text-gray-500 sm:text-xl">
                        With HirEx, you can automate the screening and
                        pre-selection process, allowing you to focus on the top
                        candidates who match your job requirements.
                      </p>
                    </div>
                    <div></div>
                  </div>
                  <div className="lg:col-start-1 mt-12 sm:mt-16 lg:mt-0">
                    <div className="pr-4 -sm:ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full lg:flex lg:items-center">
                      <img
                        src="https://images.unsplash.com/photo-1518893494013-481c1d8ed3fd?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=MnwzMzczODV8MHwxfHNlYXJjaHwyfHxoaXJpbmd8ZW58MHwwfHx8MTY3OTI4NDk1MA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
                        className="lg:right-0 rounded-r-2xl w-full 2xl:max-h-[44rem]"
                        alt="Save time and effort"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="lg:mx-auto lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-6 xl:gap-12 2xl:gap-24">
                  <div className="lg:mx-auto lg:max-w-3xl xl:pl-12 2xl:pl-20 2xl:justify-self-end max-w-xl px-4 mx-auto space-y-6 sm:px-6 lg:py-32 2xl:mx-0">
                    <div>
                      <h2 className="text-4xl font-extrabold tracking-tight text-gray-900">
                        Enhance candidate selection
                        <span className="text-primary">.</span>
                      </h2>
                      <p className="mt-4 text-lg leading-relaxed text-gray-500 sm:text-xl">
                        HirEx&#39;s technology analyzes candidate resumes,
                        conduct face analysis, and tone analysis which helps you
                        evaluate candidates&#39; skills, background and
                        personality. It checks for both hard skills and soft
                        skills to ensure a well-rounded candidate selection.
                      </p>
                    </div>
                    <div></div>
                  </div>
                  <div className="mt-12 sm:mt-16 lg:mt-0">
                    <div className="pl-4 sm:-mr-48 sm:-mr-6 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full lg:flex lg:items-center">
                      <img
                        src="https://images.unsplash.com/photo-1603834305747-b0fb6f8bbfd6?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=MnwzMzczODV8MHwxfHNlYXJjaHwxMHx8aGlyaW5nfGVufDB8MHx8fDE2NzkyODQ5NTA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
                        className="rounded-l-2xl lg:left-0 w-full 2xl:max-h-[44rem]"
                        alt="Enhance candidate selection"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="lg:mx-auto lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-6 xl:gap-12 2xl:gap-24">
                  <div className="lg:col-start-2 lg:mx-0 lg:px-0 lg:pr-8 max-w-xl px-4 mx-auto space-y-6 sm:px-6 lg:py-32 2xl:mx-0">
                    <div>
                      <h2 className="text-4xl font-extrabold tracking-tight text-gray-900">
                        Improve your hiring decisions
                        <span className="text-primary">.</span>
                      </h2>
                      <p className="mt-4 text-lg leading-relaxed text-gray-500 sm:text-xl">
                        With our advanced text analysis using BERT, you can
                        easily compare the skills and experience of different
                        candidates to narrow down your selection.
                      </p>
                    </div>
                    <div></div>
                  </div>
                  <div className="lg:col-start-1 mt-12 sm:mt-16 lg:mt-0">
                    <div className="pr-4 -sm:ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full lg:flex lg:items-center">
                      <img
                        src="https://images.unsplash.com/photo-1635350736475-c8cef4b21906?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=MnwzMzczODV8MHwxfHNlYXJjaHwxfHxoaXJpbmd8ZW58MHwwfHx8MTY3OTI4NDk1MA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
                        className="lg:right-0 rounded-r-2xl w-full 2xl:max-h-[44rem]"
                        alt="Improve your hiring decisions"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section
              className="py-12 overflow-hidden bg-primary bg-opacity-80 md:py-20"
              sectionname="testimonials"
              id="f2x6yx93px"
              sectioncomponent="Testimonials"
              sortorder="2"
              site-name="HirEx"
              site-id="h9QMp40QYZtKvlOwdZbR"
              site-logo-url="https://storage.googleapis.com/mixo-files/logos/hirEx-1679323310963.svg"
              site-url="https://www.mixo.io/site/hir-ex-jn8gq"
              site-logo-size="lg"
            >
              <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <svg
                  className="absolute transform top-full right-full translate-x-1/3 -translate-y-1/4 lg:translate-x-1/2 xl:-translate-y-1/2 rotate-3"
                  width="404"
                  height="404"
                  fill="none"
                  viewBox="0 0 404 404"
                  role="img"
                  aria-labelledby="svg-squares"
                >
                  <title id="svg-squares">squares</title>
                  <defs>
                    <pattern
                      id="ad119f34-7694-4c31-947f-5c9d249b21f3"
                      x="0"
                      y="0"
                      width="20"
                      height="20"
                      patternUnits="userSpaceOnUse"
                    >
                      <rect
                        x="0"
                        y="0"
                        width="4"
                        height="4"
                        className="text-primary"
                        fill="currentColor"
                      ></rect>
                    </pattern>
                  </defs>
                  <rect
                    width="404"
                    height="404"
                    fill="url(#ad119f34-7694-4c31-947f-5c9d249b21f3)"
                  ></rect>
                </svg>
                <div className="relative">
                  <blockquote>
                    <div className="max-w-3xl mx-auto text-xl font-bold leading-7 text-center text-white md:leading-10 md:text-3xl text-shadow-sm">
                      <p>
                        &quot;The face analysis and tone analysis features were
                        game-changers in our hiring process.&quot;
                      </p>
                    </div>
                    <footer className="mt-8">
                      <div className="md:flex md:items-center md:justify-center">
                        <div className="md:flex-shrink-0">
                          <img
                            src="../../../storage.googleapis.com/mixo-files/public/img/avatars/male-21.png"
                            className="w-10 h-10 mx-auto border-2 border-slate-200 rounded-full shadow-sm object-cover"
                            alt="Testimonial"
                          />
                        </div>
                        <div className="mt-3 text-center md:mt-0 md:ml-3 md:flex md:items-center text-shadow-sm">
                          <div className="text-lg font-medium text-white">
                            William Brown
                          </div>
                        </div>
                      </div>
                    </footer>
                  </blockquote>
                </div>
              </div>
            </section>
            <section
              className="px-4 py-12 mx-auto max-w-7xl sm:py-16 sm:px-6 lg:px-8 md:py-24"
              sectionname="faqs"
              id="2dk0zli2zs"
              sectioncomponent="Faqs"
              sortorder="3"
              site-name="HirEx"
              site-id="h9QMp40QYZtKvlOwdZbR"
              site-logo-url="https://storage.googleapis.com/mixo-files/logos/hirEx-1679323310963.svg"
              site-url="https://www.mixo.io/site/hir-ex-jn8gq"
              site-logo-size="lg"
            >
              <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
                <h2 className="text-3xl font-extrabold text-center text-gray-900 sm:text-4xl">
                  Questions?
                </h2>
                <dl className="mt-6 space-y-6 divide-y divide-gray-200">
                  <div className="pt-6">
                    <dt className="text-lg">
                      <span className="font-medium text-gray-900">
                        How much does it cost?
                      </span>
                    </dt>
                    <dd className="pr-12 mt-2">
                      <p className="text-base text-gray-500">
                        Provide your potential customers with an overview of how
                        much they would be paying.
                      </p>
                    </dd>
                  </div>
                  <div className="pt-6">
                    <dt className="text-lg">
                      <span className="font-medium text-gray-900">
                        Who is this for?
                      </span>
                    </dt>
                    <dd className="pr-12 mt-2">
                      <p className="text-base text-gray-500">
                        Explain the primary user / customer that is designed
                        for. Also include some benefits that may specifically
                        relate to this customer base.
                      </p>
                    </dd>
                  </div>
                  <div className="pt-6">
                    <dt className="text-lg">
                      <span className="font-medium text-gray-900">
                        What makes this different?
                      </span>
                    </dt>
                    <dd className="pr-12 mt-2">
                      <p className="text-base text-gray-500">
                        Include details that give a competitive advantage over
                        what else is out there in the market.
                      </p>
                    </dd>
                  </div>
                </dl>
              </div>
            </section>
            <section
              className="relative py-12 sm:py-20 md:py-24 lg:py-32"
              sectionname="cta"
              id="nbomy0fa2b"
              sectioncomponent="Cta"
              sortorder="4"
              site-name="HirEx"
              site-logo-url="https://storage.googleapis.com/mixo-files/logos/hirEx-1679323310963.svg"
              site-url="https://www.mixo.io/site/hir-ex-jn8gq"
              site-logo-size="lg"
              data-v-77b1cd82
            >
              <div aria-hidden="true" className="block" data-v-77b1cd82>
                <div
                  className="absolute inset-y-0 left-0 w-1/2 bg-gray-50 rounded-r-3xl mb-12"
                  data-v-77b1cd82
                ></div>
                <svg
                  className="absolute -ml-3 top-8 left-1/2"
                  width="404"
                  height="392"
                  fill="none"
                  viewBox="0 0 404 392"
                  data-v-77b1cd82
                >
                  <defs data-v-77b1cd82>
                    <pattern
                      id="8228f071-bcee-4ec8-905a-2a059a2cc4fb"
                      x="0"
                      y="0"
                      width="20"
                      height="20"
                      patternUnits="userSpaceOnUse"
                      data-v-77b1cd82
                    >
                      <rect
                        x="0"
                        y="0"
                        width="4"
                        height="4"
                        className="text-gray-200"
                        fill="currentColor"
                        data-v-77b1cd82
                      ></rect>
                    </pattern>
                  </defs>
                  <rect
                    width="404"
                    height="392"
                    fill="url(#8228f071-bcee-4ec8-905a-2a059a2cc4fb)"
                    data-v-77b1cd82
                  ></rect>
                </svg>
              </div>
              <div
                className="max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8"
                data-v-77b1cd82
              >
                <div
                  className="relative px-6 py-10 overflow-hidden bg-white border-primary border-2 shadow-xl rounded-2xl sm:px-12 sm:py-20"
                  data-v-77b1cd82
                >
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0"
                    data-v-77b1cd82
                  >
                    <svg
                      className="absolute inset-0 w-full h-full"
                      preserveAspectRatio="xMidYMid slice"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 1463 360"
                      data-v-77b1cd82
                    >
                      <path
                        className="text-primary/5"
                        fill="currentColor"
                        d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
                        data-v-77b1cd82
                      ></path>
                      <path
                        className="text-primary/10"
                        fill="currentColor"
                        d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
                        data-v-77b1cd82
                      ></path>
                    </svg>
                  </div>
                  <div className="relative" data-v-77b1cd82>
                    <div
                      className="flex flex-wrap justify-center w-full mx-auto sm:max-w-3xl"
                      data-v-77b1cd82
                    >
                      <img
                        src={img1}
                        alt="User ben"
                        className="user-avatar"
                        data-v-77b1cd82
                      />
                      <img
                        src={img2}
                        alt="User beth"
                        className="user-avatar"
                        data-v-77b1cd82
                      />
                      <img
                        src={img3}
                        alt="User claire"
                        className="user-avatar"
                        data-v-77b1cd82
                      />
                      <img
                        src={img4}
                        alt="User iwan"
                        className="user-avatar"
                        data-v-77b1cd82
                      />
                      <img
                        src={img5}
                        alt="User lori"
                        className="user-avatar"
                        data-v-77b1cd82
                      />
                      <img
                        src={img6}
                        alt="User mali"
                        className="user-avatar"
                        data-v-77b1cd82
                      />
                      <img
                        src={img7}
                        alt="User mi"
                        className="user-avatar"
                        data-v-77b1cd82
                      />
                      <img
                        src={img8}
                        alt="User nim"
                        className="user-avatar"
                        data-v-77b1cd82
                      />
                      <img
                        src={img9}
                        alt="User san"
                        className="user-avatar"
                        data-v-77b1cd82
                      />
                      <img
                        src={img10}
                        alt="User sanjid"
                        className="user-avatar"
                        data-v-77b1cd82
                      />
                      <img
                        src={img11}
                        alt="User steph"
                        className="user-avatar"
                        data-v-77b1cd82
                      />
                      <img
                        src={img12}
                        alt="User zak"
                        className="user-avatar"
                        data-v-77b1cd82
                      />
                    </div>
                    <div
                      className="mt-6 sm:mt-12 sm:text-center"
                      data-v-77b1cd82
                    >
                      <h2
                        className="text-3xl font-black tracking-tight text-gray-900 sm:text-4xl md:text-5xl md:leading-tight md:max-w-4xl md:mx-auto"
                        data-v-77b1cd82
                      >
                        Simplify Your Hiring with HirEx
                        <span className="text-primary" data-v-77b1cd82>
                          .
                        </span>
                      </h2>
                      <p
                        className="max-w-2xl mx-auto mt-6 italic text-gray-700 sm:text-lg"
                        data-v-77b1cd82
                      >
                        <span data-v-77b1cd82>
                          “Learning how to learn is the new marker of literacy,
                          not knowing how to read and write”
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <footer className="border-t" sectioncomponent="MixoFooter">
              <div className="mx-auto max-w-7xl overflow-hidden py-16 px-6 sm:py-24 lg:px-8 space-y-8">
                <p className="sm:text-center text-xs leading-5 text-gray-500">
                  © 2023. All rights reserved by Rahat & Hrushikesh.
                </p>
              </div>
            </footer>
          </div>
        </div>
        <ile-root id="ile-2"></ile-root>
      </div>
    </div>
  );
}

export default Home;
