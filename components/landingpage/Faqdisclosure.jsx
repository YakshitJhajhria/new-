import {
  eclipseFoundationLinks,
  legalLinks,
  otherLinks,
  usefulLinks,
} from "@/components/common/helper";
import { MinusIcon, PlusIcon } from "@/components/common/icons";
import { Disclosure } from "@headlessui/react";
import Link from "next/link";

export default function Faqdisclosure() {
  return (
    <div className="w-full bg-fllopydisk h-auto flex flex-col gap-6">
      <div className="flex flex-col gap-6">
        <Disclosure>
          {({ open }) => (
            <div>
              <Disclosure.Button className="flex w-full justify-between items-center">
                <p className="text-white font-hankengrotesk text-[20px] leading-7 font-semibold">
                  Where are the latest Adoptium® JDKs?
                </p>
                <div className="duration-300">
                  {open ? <MinusIcon /> : <PlusIcon />}
                </div>
              </Disclosure.Button>
              <Disclosure.Panel className="pt-6">
                <div>
                  <p className="text-white">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptas quo quam deleniti aliquid, sequi quae debitis
                    minima perferendis, itaque a modi sapiente accusamus autem
                    laboriosam porro at rem perspiciatis ex.
                  </p>
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
                  Where are the latest Adoptium® JDKs?
                </p>
                {open ? <MinusIcon /> : <PlusIcon />}
              </Disclosure.Button>
              <Disclosure.Panel className="pt-6">
                <div>
                  <p className="text-white">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptas quo quam deleniti aliquid, sequi quae debitis
                    minima perferendis, itaque a modi sapiente accusamus autem
                    laboriosam porro at rem perspiciatis ex.
                  </p>
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
                  Where are the latest Adoptium® JDKs?
                </p>
                {open ? <MinusIcon /> : <PlusIcon />}
              </Disclosure.Button>
              <Disclosure.Panel className="pt-6">
                <div>
                  <p className="text-white">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptas quo quam deleniti aliquid, sequi quae debitis
                    minima perferendis, itaque a modi sapiente accusamus autem
                    laboriosam porro at rem perspiciatis ex.
                  </p>
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
                  Where are the latest Adoptium® JDKs?
                </p>
                {open ? <MinusIcon /> : <PlusIcon />}
              </Disclosure.Button>
              <Disclosure.Panel className="pt-6">
                <div>
                  <p className="text-white">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptas quo quam deleniti aliquid, sequi quae debitis
                    minima perferendis, itaque a modi sapiente accusamus autem
                    laboriosam porro at rem perspiciatis ex.
                  </p>
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
                  Where are the latest Adoptium® JDKs?
                </p>
                {open ? <MinusIcon /> : <PlusIcon />}
              </Disclosure.Button>
              <Disclosure.Panel className="pt-6">
                <div>
                  <p className="text-white">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptas quo quam deleniti aliquid, sequi quae debitis
                    minima perferendis, itaque a modi sapiente accusamus autem
                    laboriosam porro at rem perspiciatis ex.
                  </p>
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
                  Where are the latest Adoptium® JDKs?
                </p>
                {open ? <MinusIcon /> : <PlusIcon />}
              </Disclosure.Button>
              <Disclosure.Panel className="pt-6">
                <div>
                  <p className="text-white">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptas quo quam deleniti aliquid, sequi quae debitis
                    minima perferendis, itaque a modi sapiente accusamus autem
                    laboriosam porro at rem perspiciatis ex.
                  </p>
                </div>
              </Disclosure.Panel>
            </div>
          )}
        </Disclosure>
      </div>
    </div>
  );
}
