import React from "react";
import { GlobeIcon } from "@heroicons/react/solid";

function Footer() {
  return (
    <footer
      className="grid w-full divide-y-[1px] divide-gray-300 bg-gray-100 text-sm 
    text-gray-500"
    >
      <div className="px-8 py-3 ">
        <p>SOUTH AFRICA</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 px-8 py-3 grid-flow-row-dense">
        <div className="flex justify-center items-center md:col-span-2 lg:col-span-1 lg:col-start-2">
          <GlobeIcon className="h-5 mr-1 text-green-700" /> 
          <a href="https://sustainability.google/carbon-free/?utm_source=googlehpfooter&utm_medium=housepromos&utm_campaign=bottom-footer&utm_content=">
            Carbon neutral since 2007
          </a>
        </div>
        <div className="flex justify-center space-x-8 whitespace-nowrap md:justify-self-start">
          <p>
            <a href="https://about.google/?utm_source=google-ZA&utm_medium=referral&utm_campaign=hp-footer&fg=1">
              About
            </a>
          </p>
          <p>
            <a href="https://www.google.com/intl/en_za/ads/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1">
              Advertising
            </a>
          </p>
          <p>
            <a href="https://www.google.com/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1">
              Business
            </a>
          </p>
          <p>
            <a href="https://google.com/search/howsearchworks/?fg=1">
              How Search works
            </a>
          </p>
        </div>
        <div className="flex justify-center space-x-8 whitespace-nowrap md:ml-auto">
          <p>
            <a href="https://policies.google.com/privacy?hl=en-ZA&fg=1">
              Privacy
            </a>
          </p>
          <p>
            <a href="https://policies.google.com/terms?hl=en-ZA&fg=1">Terms</a>
          </p>
          <p>Settings</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
