import Link from "next/link";
import React from "react";
import { Icon } from "@/components";

const Footer = () => {
  return (
    <footer className="flex w-full justify-center bg-gray-300 text-gray-800">
      <div className="w-full px-20 py-7">
        <div>
          <p className="text-12-regular tablet:text-14-regular">
            ©coworkers - 2025
          </p>
        </div>
        <hr className="my-5 border-gray-500" />
        <div className="flex justify-between">
          <div className="flex gap-9">
            <div>
              <span className="text-xl">Index</span>
              <ul className="mt-3 flex flex-col">
                <li>
                  <Link className="text-xs" href={"/#hero"}>
                    To do list
                  </Link>
                </li>
                <li>
                  <Link className="text-xs" href={"/#kanban-board"}>
                    Kanban Board
                  </Link>
                </li>
                <li>
                  <Link className="text-xs" href={"/#calendar"}>
                    Calender
                  </Link>
                </li>
                <li>
                  <Link className="text-xs" href={"/#task-detail"}>
                    Task Detail
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <span className="text-xl">Support</span>
              <ul className="mt-3">
                <li>
                  <Link className="text-xs" href={"/#task-detail"}>
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <ul className="flex gap-2">
            <li>
              <Link
                href="https://www.instagram.com/"
                aria-label="go to instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon
                  icon="instagram"
                  className="h-6 w-6 hover:text-blue-800"
                />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.facebook.com/"
                aria-label="go to facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon icon="facebook" className="h-6 w-6 hover:text-blue-800" />
              </Link>
            </li>
            <li>
              <Link
                href={"https://github.com/Part-4-1/coworkers"}
                aria-label="go to github"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon icon="github" className="h-6 w-6 hover:text-blue-800" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
