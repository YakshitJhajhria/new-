import {
  eclipseFoundationLinks,
  legalLinks,
  otherLinks,
  usefulLinks,
} from "@/components/common/helper";
import { MinusIcon, PlusIcon } from "@/components/common/icons";
import { Disclosure } from "@headlessui/react";
import Link from "next/link";

export default function Dropdown() {
  return (
    <div className="w-full px-4 bg-fllopydisk h-auto py-3 flex flex-col gap-6">
      <div className="flex flex-col gap-6">
        <Disclosure>
          {({ open }) => (
            <div>
              <Disclosure.Button className="flex w-full justify-between items-center">
                <p className="text-white font-hankengrotesk text-[20px] leading-7 font-semibold">
                  Eclipse Foundation
                </p>
                {open ? <MinusIcon /> : <PlusIcon />}
              </Disclosure.Button>
              <Disclosure.Panel className="pt-6">
                <div className="flex flex-col gap-2 justify-center items-start">
                  {eclipseFoundationLinks.map((items, index) => (
                    <div key={index}>
                      <Link
                        href={items.link}
                        className="text-white font-hankengrotesk text-[16px] leading-6 font-normal hover:text-burningfireflies duration-300"
                      >
                        {items.name}
                      </Link>
                    </div>
                  ))}
                </div>
              </Disclosure.Panel>
            </div>
          )}
        </Disclosure>
        <Disclosure as="div">
          {({ open }) => (
            <div>
              <Disclosure.Button className="flex w-full justify-between items-center">
                <p className="text-white font-hankengrotesk text-[20px] leading-7 font-semibold">
                  Useful Links
                </p>
                {open ? <MinusIcon /> : <PlusIcon />}
              </Disclosure.Button>
              <Disclosure.Panel className="pt-6">
                <div className="flex flex-col gap-2 justify-center items-start">
                  {usefulLinks.map((items, index) => (
                    <div key={index}>
                      <Link
                        href={items.link}
                        className="text-white font-hankengrotesk text-[16px] leading-6 font-normal hover:text-burningfireflies duration-300"
                      >
                        {items.name}
                      </Link>
                    </div>
                  ))}
                </div>
              </Disclosure.Panel>
            </div>
          )}
        </Disclosure>
      </div>
      <div className="flex flex-col gap-6">
        <Disclosure>
          {({ open }) => (
            <div>
              <Disclosure.Button className="flex w-full justify-between items-center">
                <p className="text-white font-hankengrotesk text-[20px] leading-7 font-semibold">
                  Legal
                </p>
                {open ? <MinusIcon /> : <PlusIcon />}
              </Disclosure.Button>
              <Disclosure.Panel className="pt-6">
                <div className="flex flex-col gap-2 justify-center items-start">
                  {legalLinks.map((items, index) => (
                    <div key={index}>
                      <Link
                        href={items.link}
                        className="text-white font-hankengrotesk text-[16px] leading-6 font-normal hover:text-burningfireflies duration-300"
                      >
                        {items.name}
                      </Link>
                    </div>
                  ))}
                </div>
              </Disclosure.Panel>
            </div>
          )}
        </Disclosure>
        <Disclosure as="div">
          {({ open }) => (
            <div>
              <Disclosure.Button className="flex w-full justify-between items-center">
                <p className="text-white font-hankengrotesk text-[20px] leading-7 font-semibold">
                  Other
                </p>
                {open ? <MinusIcon /> : <PlusIcon />}
              </Disclosure.Button>
              <Disclosure.Panel className="pt-6">
                <div className="flex flex-col gap-2 justify-center items-start">
                  {otherLinks.map((items, index) => (
                    <div key={index}>
                      <Link
                        href={items.link}
                        className="text-white font-hankengrotesk text-[16px] leading-6 font-normal hover:text-burningfireflies duration-300"
                      >
                        {items.name}
                      </Link>
                    </div>
                  ))}
                </div>
              </Disclosure.Panel>
            </div>
          )}
        </Disclosure>
      </div>
    </div>
  );
}
