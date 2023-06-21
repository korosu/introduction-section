import Image from "next/image";
import { CiFacebook, CiTwitter, CiInstagram } from "react-icons/ci";

export default function Home() {
  return (
    <div className="w-auto flex justify-between flex-col md:flex-row p-4">
      <div className="flex flex-col justify-between">
        <Image
          src="/images/logo.svg"
          width={200}
          height={200}
          alt="logo"
        ></Image>
        <div className="md:max-w-6xl p-6">
          <Image
            src="/images/illustration-mockups.svg"
            width={700}
            height={500}
            alt="logo"
            className="mx-auto self-center"
          ></Image>
        </div>

        <div></div>
      </div>
      <div className="flex flex-col justify-between">
        <div></div>
        <div>
          <div className="text-white flex flex-col gap-y-6 gap-x-2">
            <h1 className="text-3xl mx-auto">
              Build The Community Your Fans Will Love
            </h1>

            <p className="w-96 mx-auto">
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.
            </p>

            <button className="bg-slate-200 w-44 h-12 rounded-xl mx-auto text-violet-500 shadow-indigo-900 shadow-lg">
              Register
            </button>
          </div>
        </div>
        <div className="md:mr-4 flex text-white mt-6 gap-x-4 mx-auto pb-4">
          <CiFacebook className="text-4xl hover:text-violet-900 hover:cursor-pointer"></CiFacebook>
          <CiTwitter className="text-4xl hover:text-violet-900 hover:cursor-pointer"></CiTwitter>
          <CiInstagram className="text-4xl hover:text-violet-900 hover:cursor-pointer"></CiInstagram>
        </div>
      </div>
    </div>
  );
}
