import {motion} from "framer-motion"
import "../App.css"

export default function Island2() {
    return (
      <div className=" flex flex-row w-full justify-center items-start place-items-center fixed h-[100vh] pt-[1.5rem] sm:max-2xl:pt-[5.05rem]">
        <motion.div
          transition={{ duration: 0.25 }}
          whileHover={{ scale: 2.1, y: 10 }}
          initial={{ scale: 1 }}
          className="
          island cursor-pointer group hover:rounded-4xl px-2 rounded-full py-1 items-center w-[100px] sm:max-2xl:w-[310px] h-[30px] sm:max-2xl:h-[80px] sm:max-2xl:hover:-translate-y-52 -ml-[0.15rem] bg-black justify-between flex flex-row"
        >
          <div>
            <img
              className=" w-3 h-3 sm:max-2xl:w-8 sm:max-2xl:h-8"
              src="./airpods.png"
              alt="airpods"
            />
          </div>
          <div className=" opacity-0 group-hover:opacity-100 transition-opacity duration-150 ease-in-out">
            <h4 className=" text-gray-500 text-[5px] sm:max-2xl:text-base ">
              Connected
            </h4>
            <h2>
              <h2 className=" text-white text-[5px] sm:max-2xl:text-base">
                Damola's Airpods
              </h2>
            </h2>
          </div>
          <div>
            <img
              className=" w-5 h-5 sm:max-2xl:w-8 sm:max-2xl:h-8 group-hover:hidden ease-in-out duration-100"
              src="./status_null.svg"
              alt="status"
            />
            <img
              className=" w-5 h-5 sm:max-2xl:w-8 sm:max-2xl:h-8 hidden group-hover:block ease-in-out duration-100"
              src="./status.svg"
              alt="status"
            />
          </div>
        </motion.div>
      </div>
    );
}