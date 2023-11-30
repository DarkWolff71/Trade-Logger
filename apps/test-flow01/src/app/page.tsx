import TextField from "@mui/material/TextField";

export default function Home() {
  return (
    <>
      fsafs
      <div className="w-60 ml-8">
        <div className="relative">
          <input
            type="text"
            id="floating_outlined"
            className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-md border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:border-2 focus:ring-0 focus:border-blue-600 peer hover:border-1 hover:border-black"
            placeholder=" "
          />
          <label
            htmlFor="floating_outlined"
            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-1 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
          >
            Floating outlined
          </label>
        </div>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </div>
    </>
  );
}
