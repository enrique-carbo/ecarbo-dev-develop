import { useState } from "react";
import CardTech from "./card-tech";

export default function TabsTechRender() {
  const [openTab, setOpenTab] = useState(1);
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row gap-y-2 gap-x-2"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal md:text-md lg:text-lg " +
                  (openTab === 1
                    ? "text-white bg-blue-600"
                    : "text-blue-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Web development 
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal md:text-md lg:text-lg " +
                  (openTab === 2
                    ? "text-white bg-blue-600"
                    : "text-blue-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                 Chatbots
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal md:text-md lg:text-lg " +
                  (openTab === 3
                    ? "text-white bg-blue-600"
                    : "text-blue-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                 RPA
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal md:text-md lg:text-lg " +
                  (openTab === 4
                    ? "text-white bg-blue-600"
                    : "text-blue-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(4);
                }}
                data-toggle="tab"
                href="#link4"
                role="tablist"
              >
                 AI/ML
              </a>
            </li>
          </ul>


          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "grid grid-cols-2 lg:grid-cols-6 gap-x-5 gap-y-2" : "hidden"} id="link1">
                                
                  <CardTech srcImage="/img/technologies/html5.png" altImage="Logo of HTML5" title="HTML"/>

                  <CardTech srcImage="/img/technologies/css.png" altImage="Logo of CSS" title="CSS"/>

                  <CardTech srcImage="/img/technologies/js.png" altImage="Logo of JS" title="JAVASCRIPT"/>

                  <CardTech srcImage="/img/technologies/bootstrap.png" altImage="Logo of Bootstrap" title="BOOTSTRAP"/>

                  <CardTech srcImage="/img/technologies/tailwind.png" altImage="Logo of Tailwind" title="TAILWIND"/>

                  <CardTech srcImage="/img/technologies/react.png" altImage="Logo of React" title="REACT"/>

                  <CardTech srcImage="/img/technologies/nextjs.png" altImage="Logo of Next" title="NEXT"/>

                  <CardTech srcImage="/img/technologies/vue.png" altImage="Logo of Vue" title="VUE"/>

                  <CardTech srcImage="/img/technologies/quasar.png" altImage="Logo of Quasar" title="QUASAR"/>

                </div>
                <div className={openTab === 2 ? "grid grid-cols-2 lg:grid-cols-6 gap-x-5 gap-y-2" : "hidden"} id="link2">
                
                <CardTech srcImage="/img/technologies/dialogflow.png" altImage="Logo of Dialogflow" title="DIALOGFLOW"/>

                <CardTech srcImage="/img/technologies/rasa.png" altImage="Logo of Rasa" title="RASA"/>

                </div>
                <div className={openTab === 3 ? "grid grid-cols-2 lg:grid-cols-6 gap-x-5 gap-y-2" : "hidden"} id="link3">
                
                <CardTech srcImage="/img/technologies/rocketbot.jpeg" altImage="Logo of Rocketbot" title="ROCKETBOT"/>

                <CardTech srcImage="/img/technologies/robocorp.png" altImage="Logo of Robocorp" title="ROBOCORP"/>

                </div>
                <div className={openTab === 4 ? "grid grid-cols-2 lg:grid-cols-6 gap-x-5 gap-y-2" : "hidden"} id="link4">
                
                <CardTech srcImage="/img/technologies/tensorflow.png" altImage="Logo of Tensorflow" title="TENSORFLOW"/>

                <CardTech srcImage="/img/technologies/pytorch.png" altImage="Logo of Pytorch" title="PYTORCH"/>

                <CardTech srcImage="/img/technologies/huggingface.png" altImage="Logo of Huggingface" title="HUGGINGFACE"/>

                <CardTech srcImage="/img/technologies/pycaret.png" altImage="Logo of Pycaret" title="PYCARET"/>

                <CardTech srcImage="/img/technologies/gradio.png" altImage="Logo of gradio" title="GRADIO"/>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

