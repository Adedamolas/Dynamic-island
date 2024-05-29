import { motion } from "framer-motion";
import Island2 from "./components/Island-v2";
import Island from "./components/Island";

function App() {
  return (
    <>
      <motion.div className=" bg-black flex flex-row justify-center pt-[5.5rem]">
        {/* <motion.div animate={{ y: 0 }} initial={{ y: -100 }}> */}
          <img
            className=" w-[80vw] relative"
            src="./iPhone14ProMax.png"
            alt=""
          />
          <Island2 />
          <Island />
        {/* </motion.div> */}
        {/* <motion.div
          transition={{ duration: 0.25 }}
          whileHover={{ scale: 2.1, y: 60 }}
          initial={{scale: 1}}
          className=" min-[1000px]:w-100px min-[1000px]:h-[50px] cursor-pointer group hover:h-28 hover:rounded-4xl px-2 rounded-full py-7 items-center fixed top-[23.55%] right-[38.6%] w-[310px] h-[85px] bg-black justify-between flex flex-row"
        >
          <div>
            <img
              className=" w-12 h-6 group-hover:h-7"
              src="./airpods.png"
              alt="airpods"
            />
          </div>
          <div className=" opacity-0 group-hover:opacity-100 transition-opacity duration-150 ease-in-out">
            <h4 className=" text-gray-500">Connected</h4>
            <h2>
              <h2 className=" text-white">Damola's Airpods</h2>
            </h2>
          </div>
          <div>
            <img
              className=" w-10 h-10 group-hover:hidden ease-in-out duration-100"
              src="./status_null.svg"
              alt="status"
            />
            <img
              className=" w-10 h-10 hidden group-hover:block ease-in-out duration-100"
              src="./status.svg"
              alt="status"
            />
          </div>
        </motion.div> */}
      </motion.div>
    </>
  );
}

export default App;
