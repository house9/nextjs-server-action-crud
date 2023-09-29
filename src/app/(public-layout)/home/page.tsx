import Link from "next/link";
import { HomeIcon } from "lucide-react";

export default function Home() {
  console.log("  render: Home: app/(public-layout)/home/page.tsx");
  return (
    <div>
      {/* <!-- Testimonials --> */}
      <div className="relative overflow-hidden">
        <div className="max-w-[85rem] px-4 py-12 sm:px-6 lg:px-8 lg:py-16 mx-auto">
          {/* <!-- Gradients --> */}
          <div aria-hidden="true" className="flex absolute left-0 -z-[1]">
            <div className="bg-purple-200 opacity-20 blur-3xl w-[1036px] h-[300px] dark:bg-purple-900 dark:opacity-20"></div>
          </div>
          {/* <!-- End Gradients --> */}

          {/* <!-- Grid --> */}
          <div className="lg:grid lg:grid-cols-6 lg:gap-8 lg:items-center">
            <div className="hidden lg:block lg:col-span-2">
              <img
                className="rounded-xl"
                src="scott-webb-1ddol8rgUH8-unsplash-small.jpg"
                alt="Image Description"
              />
            </div>
            {/* <!-- End Col --> */}

            <div className="lg:col-span-4">
              {/* <!-- Blockquote --> */}
              <blockquote>
                <HomeIcon />

                <p className="text-xl font-medium text-gray-800 lg:text-2xl lg:leading-normal dark:text-gray-200">
                  Aut similique magnam quia suscipit non quisquam eos veritatis.
                  Et est quas placeat est enim magni voluptas ducimus sapiente
                  qui facere quod. Eos harum et beatae rerum aut aut tempore
                  asperiores impedit.
                </p>

                <footer className="mt-6">
                  <div className="flex items-center">
                    <div className="lg:hidden flex-shrink-0">
                      <img
                        className="h-12 w-12 rounded-full"
                        src="scott-webb-1ddol8rgUH8-unsplash-small.jpg"
                        alt="Image Description"
                      />
                    </div>
                    <div className="ml-4 lg:ml-0">
                      <Link
                        href="/dashboard"
                        className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-green-500 text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                      >
                        Enter App
                      </Link>
                    </div>
                  </div>
                </footer>
              </blockquote>
              {/* <!-- End Blockquote --> */}
            </div>
            {/* <!-- End Col --> */}
          </div>
          {/* <!-- End Grid --> */}
        </div>
      </div>
      {/* <!-- End Testimonials --> */}
    </div>
  );
}
