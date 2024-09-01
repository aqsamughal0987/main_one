import React from "react";

const page = () => {
  return(
    <div><figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
    <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/aqsa pic.png" alt="" width="384" height="512"/>
    <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
      <blockquote>
        <p className="text-lg font-medium">
          “Assalam O Alikum!My name is Aqsa Ameen.I am from Rahim Yar Khan.I am a student of Artifial Intelligence.
        </p>
      </blockquote>
      <figcaption className="font-medium">
        <div className="text-sky-500 dark:text-sky-400">
          Aqsa Ameen
        </div>
        <div className="text-slate-700 dark:text-slate-500">
          Staff Engineer, Aqsa Ameen
        </div>
      </figcaption>
    </div>
  </figure></div>
   )
  }
export default page