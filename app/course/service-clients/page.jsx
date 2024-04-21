"use client";

import React, { useState, useRef } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { LiaCopySolid } from "react-icons/lia";
import { PiCaretCircleRightLight } from "react-icons/pi";
import DetailComp from "../../../components/DetailComp";

const CustomerService = () => {
  const [copied, setCopied] = useState(false);
  // Separate refs for each div due to their unique layouts
  const divRef1 = useRef(null);
  const divRef2 = useRef(null);
  const divRef3 = useRef(null);
  const divRef4 = useRef(null);
  const divRef5 = useRef(null);
  const divRef6 = useRef(null);
  const divRef7 = useRef(null);
  const divRef8 = useRef(null);
  const divRef9 = useRef(null);
  // Continue for other divs as needed

  // Assuming you set refs for each text you want to copy
  const textRef = useRef(null);

  // In your component render method, assign the ref to the span
  <span ref={textRef}>Text to copy</span>;

  // Adjust the copyText function to use the ref
  const copyText = async (e) => {
    e.stopPropagation();
    try {
      const textToCopy = textRef.current.textContent;
      await navigator.clipboard.writeText(textToCopy);
      // rest of your logic
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  const scrollToDiv = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="w-full relative mx-auto">
      <DetailComp title="Service Clients" emoji="☎️" />
      <div className="px-5">
        {/* Navigation links for each div */}
        <div
          className="my-10 mx-auto w-full grid grid-flow-row   max-w-xl md:max-w-3xl lg:max-w-5xl
      overflow-hidden border border-gray-200 rounded-md  "
        >
          <div className="row-span-1 bg-amber-300  p-2">
            <h1 className="text-stone-900 md:text-2xl font-semibold px-3">
              Liens Rapides des prompts pour..
            </h1>
          </div>
          <div className=" row-span-8  flex flex-col md:flex-wrap md:max-h-80 gap-4 p-4 bg-white md:text-lg">
            <button
              onClick={() => scrollToDiv(divRef1)}
              className="px-2 py-4 flex flex-row whitespace-pre items-center h-5
             max-h-min  hover:underline  text-stone-900 rounded  font-light"
            >
              <PiCaretCircleRightLight className="mr-2 bg-black rounded-full text-white" />
              l&apos;appui général Messages électroniques.
            </button>
            <button
              onClick={() => scrollToDiv(divRef2)}
              className="px-2 py-4 flex flex-row whitespace-pre items-center h-5
             max-h-min  hover:underline  text-stone-900 rounded font-light"
            >
              <PiCaretCircleRightLight className="mr-2 bg-black rounded-full text-white" />
              rédiger des e-mails de confirmation de commande.
            </button>
            <button
              onClick={() => scrollToDiv(divRef3)}
              className="px-2 py-4 flex flex-row whitespace-pre items-center h-5
             max-h-min  hover:underline  text-stone-900 rounded  font-light"
            >
              <PiCaretCircleRightLight className="mr-2 bg-black rounded-full text-white" />
              Confirmation d&apos;expédition Modèles de courriel.
            </button>
            <button
              onClick={() => scrollToDiv(divRef4)}
              className="px-2 py-4 flex flex-row whitespace-pre items-center h-5
             max-h-min  hover:underline  text-stone-900 rounded  font-light"
            >
              <PiCaretCircleRightLight className="mr-2 bg-black rounded-full text-white" />
              L&apos;écriture de retour & échange de courriels
            </button>
            <button
              onClick={() => scrollToDiv(divRef5)}
              className="px-2 py-4 flex flex-row whitespace-pre items-center h-5
             max-h-min  hover:underline  text-stone-900 rounded  font-light"
            >
              <PiCaretCircleRightLight className="mr-2 bg-black rounded-full text-white" />
              le remboursement Messages électroniques.
            </button>
            <button
              onClick={() => scrollToDiv(divRef6)}
              className="px-2 py-4 flex flex-row whitespace-pre items-center h-5
             max-h-min  hover:underline  text-stone-900 rounded  font-light"
            >
              <PiCaretCircleRightLight className="mr-2 bg-black rounded-full text-white" />
              les e-mails d&apos;assistance technique.
            </button>
            <button
              onClick={() => scrollToDiv(divRef7)}
              className="px-2 py-4 flex flex-row whitespace-pre items-center h-5
             max-h-min  hover:underline  text-stone-900 rounded  font-light"
            >
              <PiCaretCircleRightLight className="mr-2 bg-black rounded-full text-white" />
              la gestion des comptes Messages électroniques.
            </button>
            <button
              onClick={() => scrollToDiv(divRef8)}
              className="px-2 py-4 flex flex-row whitespace-pre items-center h-5
             max-h-min  hover:underline  text-stone-900 rounded font-light"
            >
              <PiCaretCircleRightLight className="mr-2 bg-black rounded-full text-white" />
              les e-mails d&apos;enquête de produit.
            </button>
            <button
              onClick={() => scrollToDiv(divRef9)}
              className="px-2 py-4 flex flex-row whitespace-pre items-center h-5
             max-h-min  hover:underline  text-stone-900 rounded  font-light"
            >
              <PiCaretCircleRightLight className="mr-2 bg-black rounded-full text-white" />
              les e-mails d&apos;enquête de ventes.
            </button>

            {/* Repeat for other divs */}
          </div>
        </div>

        <TransitionGroup className=" grid grid-flow-row justify-center">
          {/* Each div has a unique layout, so we manually assign them */}

          <h1
            className="md:text-xl font-semibold text-gray-900 mt-5 "
            ref={divRef1}
            id="div1"
          >
            Prompts pour l&apos;appui général Messages électroniques...
          </h1>
          <CSSTransition timeout={500} classNames="fade">
            <div
              className="rounded-md bg-amber-100 max-w-xl md:max-w-3xl lg:max-w-4xl  my-5 shadow-md 
            flex flex-col  items-center   cursor-pointer hover:bg-gray-200 overflow-hidden"
            >
              <div
                className="w-full  flex flex-row flex-nowrap items-center 
            justify-between bg-gray-500 p-2 "
              >
                <div className="flex flex-grow"></div>
                <div
                  className="flex flex-row flex-nowrap items-center  "
                  onClick={copyText}
                >
                  <LiaCopySolid
                    className="cursor-pointer text-xl font-semibold text-white"
                    title="Copy"
                  />
                  <p className="text-sm font-light text-white pl-1">copier</p>
                </div>
              </div>
              <span ref={textRef} className="p-4">
                Créer un courriel qui répond à un client qui a du mal à accéder
                à son compte. Fournir des instructions sur la façon de
                réinitialiser leur mot de passe et offrir un soutien
                supplémentaire si nécessaire.{" "}
              </span>
            </div>
          </CSSTransition>
          <CSSTransition timeout={500} classNames="fade">
            <div
              className="rounded-md bg-amber-100 max-w-xl md:max-w-3xl lg:max-w-4xl  my-5 shadow-md 
            flex flex-col  items-center   cursor-pointer hover:bg-gray-200 overflow-hidden"
            >
              <div
                className="w-full  flex flex-row flex-nowrap items-center 
            justify-between bg-gray-500 p-2 "
              >
                <div className="flex flex-grow"></div>
                <div
                  className="flex flex-row flex-nowrap items-center  "
                  onClick={copyText}
                >
                  <LiaCopySolid
                    className="cursor-pointer text-xl font-semibold text-white"
                    title="Copy"
                  />
                  <p className="text-sm font-light text-white pl-1">copier</p>
                </div>
              </div>
              <span ref={textRef} className="p-4">
                Écrivez un courriel qui traite de la question de la facturation
                d&apos;un client. Reconnaître leurs préoccupations et fournir
                des informations sur la façon de résoudre la question, y compris
                les formulaires ou documents nécessaires à remplir.{" "}
              </span>
            </div>
          </CSSTransition>
          <CSSTransition timeout={500} classNames="fade">
            <div
              className="rounded-md bg-amber-100 max-w-xl md:max-w-3xl lg:max-w-4xl  my-5 shadow-md 
            flex flex-col  items-center   cursor-pointer hover:bg-gray-200 overflow-hidden"
            >
              <div
                className="w-full  flex flex-row flex-nowrap items-center 
            justify-between bg-gray-500 p-2 "
              >
                <div className="flex flex-grow"></div>
                <div
                  className="flex flex-row flex-nowrap items-center  "
                  onClick={copyText}
                >
                  <LiaCopySolid
                    className="cursor-pointer text-xl font-semibold text-white"
                    title="Copy"
                  />
                  <p className="text-sm font-light text-white pl-1">copier</p>
                </div>
              </div>
              <span ref={textRef} className="p-4">
                Créer un courriel qui répond à un client qui connaît un problème
                avec le site Web. Excusez-vous pour les inconvénients et
                fournissez des solutions ou des solutions pour les aider à
                accomplir leur tâche.{" "}
              </span>
            </div>
          </CSSTransition>
          <CSSTransition timeout={500} classNames="fade">
            <div
              className="rounded-md bg-amber-100 max-w-xl md:max-w-3xl lg:max-w-4xl  my-5 shadow-md 
            flex flex-col  items-center   cursor-pointer hover:bg-gray-200 overflow-hidden"
            >
              <div
                className="w-full  flex flex-row flex-nowrap items-center 
            justify-between bg-gray-500 p-2 "
              >
                <div className="flex flex-grow"></div>
                <div
                  className="flex flex-row flex-nowrap items-center  "
                  onClick={copyText}
                >
                  <LiaCopySolid
                    className="cursor-pointer text-xl font-semibold text-white"
                    title="Copy"
                  />
                  <p className="text-sm font-light text-white pl-1">copier</p>
                </div>
              </div>
              <span ref={textRef} className="p-4">
                Écrivez un courriel qui s&apos;adresse à la question d&apos;un
                client au sujet d&apos;une politique spécifique. Fournir une
                explication claire et concise de la politique et tout détail
                pertinent qui pourrait être important pour le client de savoir.{" "}
              </span>
            </div>
          </CSSTransition>
          <CSSTransition timeout={500} classNames="fade">
            <div
              className="rounded-md bg-amber-100 max-w-xl md:max-w-3xl lg:max-w-4xl  my-5 shadow-md 
            flex flex-col  items-center   cursor-pointer hover:bg-gray-200 overflow-hidden"
            >
              <div
                className="w-full  flex flex-row flex-nowrap items-center 
            justify-between bg-gray-500 p-2 "
              >
                <div className="flex flex-grow"></div>
                <div
                  className="flex flex-row flex-nowrap items-center  "
                  onClick={copyText}
                >
                  <LiaCopySolid
                    className="cursor-pointer text-xl font-semibold text-white"
                    title="Copy"
                  />
                  <p className="text-sm font-light text-white pl-1">copier</p>
                </div>
              </div>
              <span ref={textRef} className="p-4">
                Créez un courriel qui répond à un client qui a une question ou
                une préoccupation unique qui ne correspond pas à aucune des
                autres catégories de support. S&apos;adresser directement à
                leurs préoccupations et proposer des solutions ou des
                suggestions pour résoudre le problème.{" "}
              </span>
            </div>
          </CSSTransition>
          <h1
            className="md:text-xl font-semibold text-gray-900 mt-5 "
            ref={divRef2}
            id="div2"
          >
            Prompts For Writing Order Confirmation Emails...
          </h1>
          <CSSTransition timeout={500} classNames="fade">
            <div
              className="rounded-md bg-amber-100 max-w-xl md:max-w-3xl lg:max-w-4xl  my-5 shadow-md 
            flex flex-col  items-center   cursor-pointer hover:bg-gray-200 overflow-hidden"
            >
              <div
                className="w-full  flex flex-row flex-nowrap items-center 
            justify-between bg-gray-500 p-2 "
              >
                <div className="flex flex-grow"></div>
                <div
                  className="flex flex-row flex-nowrap items-center  "
                  onClick={copyText}
                >
                  <LiaCopySolid
                    className="cursor-pointer text-xl font-semibold text-white"
                    title="Copy"
                  />
                  <p className="text-sm font-light text-white pl-1">copier</p>
                </div>
              </div>
              <span ref={textRef} className="p-4">
                Write an order confirmation email for a customer who has just
                made a purchase for (product) in my online store. Use persuasive
                language to thank them for their purchase and encourage them to
                return for future purchases.{" "}
              </span>
            </div>
          </CSSTransition>
          <CSSTransition timeout={500} classNames="fade">
            <div
              className="rounded-md bg-amber-100 max-w-xl md:max-w-3xl lg:max-w-4xl  my-5 shadow-md 
            flex flex-col  items-center   cursor-pointer hover:bg-gray-200 overflow-hidden"
            >
              <div
                className="w-full  flex flex-row flex-nowrap items-center 
            justify-between bg-gray-500 p-2 "
              >
                <div className="flex flex-grow"></div>
                <div
                  className="flex flex-row flex-nowrap items-center  "
                  onClick={copyText}
                >
                  <LiaCopySolid
                    className="cursor-pointer text-xl font-semibold text-white"
                    title="Copy"
                  />
                  <p className="text-sm font-light text-white pl-1">copier</p>
                </div>
              </div>
              <span ref={textRef} className="p-4">
                Create an order confirmation email for a customer who has just
                signed up for a subscription service. Use a friendly and
                welcoming tone, and include details about the subscription and
                how it works.{" "}
              </span>
            </div>
          </CSSTransition>
          <CSSTransition timeout={500} classNames="fade">
            <div
              className="rounded-md bg-amber-100 max-w-xl md:max-w-3xl lg:max-w-4xl  my-5 shadow-md 
            flex flex-col  items-center   cursor-pointer hover:bg-gray-200 overflow-hidden"
            >
              <div
                className="w-full  flex flex-row flex-nowrap items-center 
            justify-between bg-gray-500 p-2 "
              >
                <div className="flex flex-grow"></div>
                <div
                  className="flex flex-row flex-nowrap items-center  "
                  onClick={copyText}
                >
                  <LiaCopySolid
                    className="cursor-pointer text-xl font-semibold text-white"
                    title="Copy"
                  />
                  <p className="text-sm font-light text-white pl-1">copier</p>
                </div>
              </div>
              <span ref={textRef} className="p-4">
                Write an order confirmation email for a customer who has made a
                large purchase of (product). Use language that reassures them
                about the order, and offer information about any next steps in
                the process.{" "}
              </span>
            </div>
          </CSSTransition>
          <CSSTransition timeout={500} classNames="fade">
            <div
              className="rounded-md bg-amber-100 max-w-xl md:max-w-3xl lg:max-w-4xl  my-5 shadow-md 
            flex flex-col  items-center   cursor-pointer hover:bg-gray-200 overflow-hidden"
            >
              <div
                className="w-full  flex flex-row flex-nowrap items-center 
            justify-between bg-gray-500 p-2 "
              >
                <div className="flex flex-grow"></div>
                <div
                  className="flex flex-row flex-nowrap items-center  "
                  onClick={copyText}
                >
                  <LiaCopySolid
                    className="cursor-pointer text-xl font-semibold text-white"
                    title="Copy"
                  />
                  <p className="text-sm font-light text-white pl-1">copier</p>
                </div>
              </div>
              <span ref={textRef} className="p-4">
                Create an order confirmation email for a customer who has
                pre-ordered a new product that is set to be released soon. Use
                language that creates excitement about the product and includes
                details about the release date and any shipping information.{" "}
              </span>
            </div>
          </CSSTransition>
          <CSSTransition timeout={500} classNames="fade">
            <div
              className="rounded-md bg-amber-100 max-w-xl md:max-w-3xl lg:max-w-4xl  my-5 shadow-md 
            flex flex-col  items-center   cursor-pointer hover:bg-gray-200 overflow-hidden"
            >
              <div
                className="w-full  flex flex-row flex-nowrap items-center 
            justify-between bg-gray-500 p-2 "
              >
                <div className="flex flex-grow"></div>
                <div
                  className="flex flex-row flex-nowrap items-center  "
                  onClick={copyText}
                >
                  <LiaCopySolid
                    className="cursor-pointer text-xl font-semibold text-white"
                    title="Copy"
                  />
                  <p className="text-sm font-light text-white pl-1">copier</p>
                </div>
              </div>
              <span ref={textRef} className="p-4">
                Write an order confirmation email for a customer who has just
                made a purchase for (product) as a gift. Use language that
                thanks them for their purchase and includes information about
                gift options such as gift wrapping or personalized messages.{" "}
              </span>
            </div>
          </CSSTransition>
          <h1
            className="md:text-xl font-semibold text-gray-900 mt-5 "
            ref={divRef3}
            id="div3"
          >
            Confirmation d&apos;expédition Modèles de courriel...
          </h1>
          <CSSTransition timeout={500} classNames="fade">
            <div
              className="rounded-md bg-amber-100 max-w-xl md:max-w-3xl lg:max-w-4xl  my-5 shadow-md 
            flex flex-col  items-center   cursor-pointer hover:bg-gray-200 overflow-hidden"
            >
              <div
                className="w-full  flex flex-row flex-nowrap items-center 
            justify-between bg-gray-500 p-2 "
              >
                <div className="flex flex-grow"></div>
                <div
                  className="flex flex-row flex-nowrap items-center  "
                  onClick={copyText}
                >
                  <LiaCopySolid
                    className="cursor-pointer text-xl font-semibold text-white"
                    title="Copy"
                  />
                  <p className="text-sm font-light text-white pl-1">copier</p>
                </div>
              </div>
              <span ref={textRef} className="p-4">
                Chère (nom du client), ma commande a été expédiée! Nous sommes
                ravis de vous faire savoir que mon (nom de produit) est en
                route. Vous pouvez suivre mon colis en utilisant le numéro de
                suivi ________________ à (shipping carrier website).{" "}
              </span>
            </div>
          </CSSTransition>
          <CSSTransition timeout={500} classNames="fade">
            <div
              className="rounded-md bg-amber-100 max-w-xl md:max-w-3xl lg:max-w-4xl  my-5 shadow-md 
            flex flex-col  items-center   cursor-pointer hover:bg-gray-200 overflow-hidden"
            >
              <div
                className="w-full  flex flex-row flex-nowrap items-center 
            justify-between bg-gray-500 p-2 "
              >
                <div className="flex flex-grow"></div>
                <div
                  className="flex flex-row flex-nowrap items-center  "
                  onClick={copyText}
                >
                  <LiaCopySolid
                    className="cursor-pointer text-xl font-semibold text-white"
                    title="Copy"
                  />
                  <p className="text-sm font-light text-white pl-1">copier</p>
                </div>
              </div>
              <span ref={textRef} className="p-4">
                Bonjour (customer name), ma commande a été expédiée et nous
                voulions vous donner une tête. Vous pouvez vous attendre à
                recevoir mon (nom du produit) par (estimated delivery date). Le
                numéro de suivi de mon colis est ________________. Vous pouvez
                utiliser ce numéro pour vérifier l&apos;état de la livraison à
                (shipping carrier website).{" "}
              </span>
            </div>
          </CSSTransition>
          <CSSTransition timeout={500} classNames="fade">
            <div
              className="rounded-md bg-amber-100 max-w-xl md:max-w-3xl lg:max-w-4xl  my-5 shadow-md 
            flex flex-col  items-center   cursor-pointer hover:bg-gray-200 overflow-hidden"
            >
              <div
                className="w-full  flex flex-row flex-nowrap items-center 
            justify-between bg-gray-500 p-2 "
              >
                <div className="flex flex-grow"></div>
                <div
                  className="flex flex-row flex-nowrap items-center  "
                  onClick={copyText}
                >
                  <LiaCopySolid
                    className="cursor-pointer text-xl font-semibold text-white"
                    title="Copy"
                  />
                  <p className="text-sm font-light text-white pl-1">copier</p>
                </div>
              </div>
              <span ref={textRef} className="p-4">
                Hey (customer name), Bonne nouvelle! mon (nom du produit) a été
                expédié et est actuellement en transit. Vous pouvez suivre mon
                colis en utilisant le numéro de suivi ________________ à
                (shipping carrier website). Si vous avez des questions ou des
                préoccupations, n&apos;hésitez pas à nous contacter à (customer
                support email or phone number).{" "}
              </span>
            </div>
          </CSSTransition>
          <CSSTransition timeout={500} classNames="fade">
            <div
              className="rounded-md bg-amber-100 max-w-xl md:max-w-3xl lg:max-w-4xl  my-5 shadow-md 
            flex flex-col  items-center   cursor-pointer hover:bg-gray-200 overflow-hidden"
            >
              <div
                className="w-full  flex flex-row flex-nowrap items-center 
            justify-between bg-gray-500 p-2 "
              >
                <div className="flex flex-grow"></div>
                <div
                  className="flex flex-row flex-nowrap items-center  "
                  onClick={copyText}
                >
                  <LiaCopySolid
                    className="cursor-pointer text-xl font-semibold text-white"
                    title="Copy"
                  />
                  <p className="text-sm font-light text-white pl-1">copier</p>
                </div>
              </div>
              <span ref={textRef} className="p-4">
                Hi (customer name), Juste une note rapide pour vous faire savoir
                que mon (nom du produit) a été expédié et est en route pour
                vous. Vous pouvez suivre mon colis en utilisant le numéro de
                suivi ________________ à (shipping carrier website). Merci pour
                ma commande et nous espérons que vous apprécierez mon achat!{" "}
              </span>
            </div>
          </CSSTransition>
          <CSSTransition timeout={500} classNames="fade">
            <div
              className="rounded-md bg-amber-100 max-w-xl md:max-w-3xl lg:max-w-4xl  my-5 shadow-md 
            flex flex-col  items-center   cursor-pointer hover:bg-gray-200 overflow-hidden"
            >
              <div
                className="w-full  flex flex-row flex-nowrap items-center 
            justify-between bg-gray-500 p-2 "
              >
                <div className="flex flex-grow"></div>
                <div
                  className="flex flex-row flex-nowrap items-center  "
                  onClick={copyText}
                >
                  <LiaCopySolid
                    className="cursor-pointer text-xl font-semibold text-white"
                    title="Copy"
                  />
                  <p className="text-sm font-light text-white pl-1">copier</p>
                </div>
              </div>
              <span ref={textRef} className="p-4">
                Chérie (customer name), mon (nom du produit) a été expédié! Vous
                pouvez vous attendre à recevoir ma commande par (estimated
                delivery date). Le numéro de suivi de mon colis est
                ________________, que vous pouvez utiliser pour vérifier
                l&apos;état de la livraison à (shipping carrier website). Si
                vous avez des questions ou des préoccupations, veuillez nous
                contacter à (customer support email or phone number). Merci
                d&apos;avoir fait vos achats avec nous!{" "}
              </span>
            </div>
          </CSSTransition>
          <h1
            className="md:text-xl font-semibold text-gray-900 mt-5 "
            ref={divRef4}
            id="div4"
          >
            Prompts pour l&apos;écriture de retour & échange de courriels...
          </h1>
          <CSSTransition timeout={500} classNames="fade">
            <div
              className="rounded-md bg-amber-100 max-w-xl md:max-w-3xl lg:max-w-4xl  my-5 shadow-md 
            flex flex-col  items-center   cursor-pointer hover:bg-gray-200 overflow-hidden"
            >
              <div
                className="w-full  flex flex-row flex-nowrap items-center 
            justify-between bg-gray-500 p-2 "
              >
                <div className="flex flex-grow"></div>
                <div
                  className="flex flex-row flex-nowrap items-center  "
                  onClick={copyText}
                >
                  <LiaCopySolid
                    className="cursor-pointer text-xl font-semibold text-white"
                    title="Copy"
                  />
                  <p className="text-sm font-light text-white pl-1">copier</p>
                </div>
              </div>
              <span ref={textRef} className="p-4">
                Créer un modèle de courriel qui guide les clients à travers le
                processus de retour (produit) en fournissant des instructions
                détaillées sur les étapes nécessaires et ce qu&apos;il faut
                attendre pendant le processu de retour.{" "}
              </span>
            </div>
          </CSSTransition>
          <CSSTransition timeout={500} classNames="fade">
            <div
              className="rounded-md bg-amber-100 max-w-xl md:max-w-3xl lg:max-w-4xl  my-5 shadow-md 
            flex flex-col  items-center   cursor-pointer hover:bg-gray-200 overflow-hidden"
            >
              <div
                className="w-full  flex flex-row flex-nowrap items-center 
            justify-between bg-gray-500 p-2 "
              >
                <div className="flex flex-grow"></div>
                <div
                  className="flex flex-row flex-nowrap items-center  "
                  onClick={copyText}
                >
                  <LiaCopySolid
                    className="cursor-pointer text-xl font-semibold text-white"
                    title="Copy"
                  />
                  <p className="text-sm font-light text-white pl-1">copier</p>
                </div>
              </div>
              <span ref={textRef} className="p-4">
                Écrivez un courriel qui reconnaît la demande de retour du client
                et leur fournit une estimation de quand ils peuvent
                s&apos;attendre à ce que leur remboursement ou échange soit
                traité. Inclure toute information supplémentaire qu&apos;ils ont
                besoin de savoir sur le processus de retour.{" "}
              </span>
            </div>
          </CSSTransition>
          <CSSTransition timeout={500} classNames="fade">
            <div
              className="rounded-md bg-amber-100 max-w-xl md:max-w-3xl lg:max-w-4xl  my-5 shadow-md 
            flex flex-col  items-center   cursor-pointer hover:bg-gray-200 overflow-hidden"
            >
              <div
                className="w-full  flex flex-row flex-nowrap items-center 
            justify-between bg-gray-500 p-2 "
              >
                <div className="flex flex-grow"></div>
                <div
                  className="flex flex-row flex-nowrap items-center  "
                  onClick={copyText}
                >
                  <LiaCopySolid
                    className="cursor-pointer text-xl font-semibold text-white"
                    title="Copy"
                  />
                  <p className="text-sm font-light text-white pl-1">copier</p>
                </div>
              </div>
              <span ref={textRef} className="p-4">
                Créer un modèle de courriel qui guide les clients à travers le
                processus d&apos;échange (produit) pour une taille ou une
                couleur différente. Inclure des instructions sur la façon
                d&apos;initier l&apos;échange, ce à quoi s&apos;attendre pendant
                le processus, et toute information supplémentaire qu&apos;ils
                ont besoin de savoir.{" "}
              </span>
            </div>
          </CSSTransition>
          <CSSTransition timeout={500} classNames="fade">
            <div
              className="rounded-md bg-amber-100 max-w-xl md:max-w-3xl lg:max-w-4xl  my-5 shadow-md 
            flex flex-col  items-center   cursor-pointer hover:bg-gray-200 overflow-hidden"
            >
              <div
                className="w-full  flex flex-row flex-nowrap items-center 
            justify-between bg-gray-500 p-2 "
              >
                <div className="flex flex-grow"></div>
                <div
                  className="flex flex-row flex-nowrap items-center  "
                  onClick={copyText}
                >
                  <LiaCopySolid
                    className="cursor-pointer text-xl font-semibold text-white"
                    title="Copy"
                  />
                  <p className="text-sm font-light text-white pl-1">copier</p>
                </div>
              </div>
              <span ref={textRef} className="p-4">
                Écrivez un courriel qui informe le client que leur retour a été
                reçu et traité, et leur fournit une mise à jour sur l&apos;état
                de leur remboursement ou échange. Inclure les détails
                nécessaires tels que le montant remboursé ou les informations
                d&apos;expédition pour l&apos;échange.{" "}
              </span>
            </div>
          </CSSTransition>
          <CSSTransition timeout={500} classNames="fade">
            <div
              className="rounded-md bg-amber-100 max-w-xl md:max-w-3xl lg:max-w-4xl  my-5 shadow-md 
            flex flex-col  items-center   cursor-pointer hover:bg-gray-200 overflow-hidden"
            >
              <div
                className="w-full  flex flex-row flex-nowrap items-center 
            justify-between bg-gray-500 p-2 "
              >
                <div className="flex flex-grow"></div>
                <div
                  className="flex flex-row flex-nowrap items-center  "
                  onClick={copyText}
                >
                  <LiaCopySolid
                    className="cursor-pointer text-xl font-semibold text-white"
                    title="Copy"
                  />
                  <p className="text-sm font-light text-white pl-1">copier</p>
                </div>
              </div>
              <span ref={textRef} className="p-4">
                Créer un modèle de courriel qui fournit aux clients des
                instructions sur la façon de demander un remboursement ou un
                échange pour un produit défectueux ou endommagé. Inclure des
                instructions détaillées sur la façon d&apos;initier la demande
                et ce qu&apos;il faut attendre pendant le processus, ainsi que
                toute information supplémentaire qu&apos;ils ont besoin de
                savoir.{" "}
              </span>
            </div>
          </CSSTransition>
          <h1
            className="md:text-xl font-semibold text-gray-900 mt-5 "
            ref={divRef5}
            id="div5"
          >
            Prompts pour le remboursement Messages électroniques...
          </h1>
          <CSSTransition timeout={500} classNames="fade">
            <div
              className="rounded-md bg-amber-100 max-w-xl md:max-w-3xl lg:max-w-4xl  my-5 shadow-md 
            flex flex-col  items-center   cursor-pointer hover:bg-gray-200 overflow-hidden"
            >
              <div
                className="w-full  flex flex-row flex-nowrap items-center 
            justify-between bg-gray-500 p-2 "
              >
                <div className="flex flex-grow"></div>
                <div
                  className="flex flex-row flex-nowrap items-center  "
                  onClick={copyText}
                >
                  <LiaCopySolid
                    className="cursor-pointer text-xl font-semibold text-white"
                    title="Copy"
                  />
                  <p className="text-sm font-light text-white pl-1">copier</p>
                </div>
              </div>
              <span ref={textRef} className="p-4">
                Écrivez un e-mail de confirmation de remboursement à un client
                qui a retourné (product name). Inclure les détails du
                remboursement, y compris le montant et le délai prévu pour le
                rembouragement à traiter.{" "}
              </span>
            </div>
          </CSSTransition>
          <CSSTransition timeout={500} classNames="fade">
            <div
              className="rounded-md bg-amber-100 max-w-xl md:max-w-3xl lg:max-w-4xl  my-5 shadow-md 
            flex flex-col  items-center   cursor-pointer hover:bg-gray-200 overflow-hidden"
            >
              <div
                className="w-full  flex flex-row flex-nowrap items-center 
            justify-between bg-gray-500 p-2 "
              >
                <div className="flex flex-grow"></div>
                <div
                  className="flex flex-row flex-nowrap items-center  "
                  onClick={copyText}
                >
                  <LiaCopySolid
                    className="cursor-pointer text-xl font-semibold text-white"
                    title="Copy"
                  />
                  <p className="text-sm font-light text-white pl-1">copier</p>
                </div>
              </div>
              <span ref={textRef} className="p-4">
                Créez un e-mail de confirmation de remboursement qui inclut un
                message personnalisé au client, les remerciant de leur
                entreprise et les assurant que leur rembourse a été traitée avec
                succès.{" "}
              </span>
            </div>
          </CSSTransition>
          <CSSTransition timeout={500} classNames="fade">
            <div
              className="rounded-md bg-amber-100 max-w-xl md:max-w-3xl lg:max-w-4xl  my-5 shadow-md 
            flex flex-col  items-center   cursor-pointer hover:bg-gray-200 overflow-hidden"
            >
              <div
                className="w-full  flex flex-row flex-nowrap items-center 
            justify-between bg-gray-500 p-2 "
              >
                <div className="flex flex-grow"></div>
                <div
                  className="flex flex-row flex-nowrap items-center  "
                  onClick={copyText}
                >
                  <LiaCopySolid
                    className="cursor-pointer text-xl font-semibold text-white"
                    title="Copy"
                  />
                  <p className="text-sm font-light text-white pl-1">copier</p>
                </div>
              </div>
              <span ref={textRef} className="p-4">
                Écrivez un e-mail de confirmation de remboursement à un client
                qui a demandé un rembursement pour (reason for refund).
                Assurez-vous d&apos;inclure toute information supplémentaire ou
                des instructions qu&apos;ils pourraient avoir besoin pour le
                processus de remboursement.{" "}
              </span>
            </div>
          </CSSTransition>
          <CSSTransition timeout={500} classNames="fade">
            <div
              className="rounded-md bg-amber-100 max-w-xl md:max-w-3xl lg:max-w-4xl  my-5 shadow-md 
            flex flex-col  items-center   cursor-pointer hover:bg-gray-200 overflow-hidden"
            >
              <div
                className="w-full  flex flex-row flex-nowrap items-center 
            justify-between bg-gray-500 p-2 "
              >
                <div className="flex flex-grow"></div>
                <div
                  className="flex flex-row flex-nowrap items-center  "
                  onClick={copyText}
                >
                  <LiaCopySolid
                    className="cursor-pointer text-xl font-semibold text-white"
                    title="Copy"
                  />
                  <p className="text-sm font-light text-white pl-1">copier</p>
                </div>
              </div>
              <span ref={textRef} className="p-4">
                Créer un e-mail de confirmation de remboursement qui met en
                évidence l&apos;engagement de ma société en faveur de la
                satisfaction de la clientèle et s&apos;assure que le processus
                de restitution a été terminé avec succès et en temps voulu.{" "}
              </span>
            </div>
          </CSSTransition>
          <CSSTransition timeout={500} classNames="fade">
            <div
              className="rounded-md bg-amber-100 max-w-xl md:max-w-3xl lg:max-w-4xl  my-5 shadow-md 
            flex flex-col  items-center   cursor-pointer hover:bg-gray-200 overflow-hidden"
            >
              <div
                className="w-full  flex flex-row flex-nowrap items-center 
            justify-between bg-gray-500 p-2 "
              >
                <div className="flex flex-grow"></div>
                <div
                  className="flex flex-row flex-nowrap items-center  "
                  onClick={copyText}
                >
                  <LiaCopySolid
                    className="cursor-pointer text-xl font-semibold text-white"
                    title="Copy"
                  />
                  <p className="text-sm font-light text-white pl-1">copier</p>
                </div>
              </div>
              <span ref={textRef} className="p-4">
                Écrivez un e-mail de confirmation de remboursement qui inclut un
                appel à l&apos;action pour inviter le client à laisser une
                évaluation ou fournir un commentaire sur leur expérience avec
                mon produit ou service.{" "}
              </span>
            </div>
          </CSSTransition>
          <h1
            className="md:text-xl font-semibold text-gray-900 mt-5 "
            ref={divRef6}
            id="div6"
          >
            Prompts For Technical Support Emails...
          </h1>
          <CSSTransition timeout={500} classNames="fade">
            <div
              className="rounded-md bg-amber-100 max-w-xl md:max-w-3xl lg:max-w-4xl  my-5 shadow-md 
            flex flex-col  items-center   cursor-pointer hover:bg-gray-200 overflow-hidden"
            >
              <div
                className="w-full  flex flex-row flex-nowrap items-center 
            justify-between bg-gray-500 p-2 "
              >
                <div className="flex flex-grow"></div>
                <div
                  className="flex flex-row flex-nowrap items-center  "
                  onClick={copyText}
                >
                  <LiaCopySolid
                    className="cursor-pointer text-xl font-semibold text-white"
                    title="Copy"
                  />
                  <p className="text-sm font-light text-white pl-1">copier</p>
                </div>
              </div>
              <span ref={textRef} className="p-4">
                Pouvez-vous m&apos;aider à créer un courriel qui fournit des
                instructions étape par étape pour les clients qui rencontrent un
                problème technique spécifique avec (produit / site Web)?{" "}
              </span>
            </div>
          </CSSTransition>
          <CSSTransition timeout={500} classNames="fade">
            <div
              className="rounded-md bg-amber-100 max-w-xl md:max-w-3xl lg:max-w-4xl  my-5 shadow-md 
            flex flex-col  items-center   cursor-pointer hover:bg-gray-200 overflow-hidden"
            >
              <div
                className="w-full  flex flex-row flex-nowrap items-center 
            justify-between bg-gray-500 p-2 "
              >
                <div className="flex flex-grow"></div>
                <div
                  className="flex flex-row flex-nowrap items-center  "
                  onClick={copyText}
                >
                  <LiaCopySolid
                    className="cursor-pointer text-xl font-semibold text-white"
                    title="Copy"
                  />
                  <p className="text-sm font-light text-white pl-1">copier</p>
                </div>
              </div>
              <span ref={textRef} className="p-4">
                Écrivez un courriel qui propose des conseils et des astuces pour
                optimiser les performances (produit / site Web) et résoudre les
                problèmes techniques courants que les clients peuvent
                rencontrer.{" "}
              </span>
            </div>
          </CSSTransition>
          <CSSTransition timeout={500} classNames="fade">
            <div
              className="rounded-md bg-amber-100 max-w-xl md:max-w-3xl lg:max-w-4xl  my-5 shadow-md 
            flex flex-col  items-center   cursor-pointer hover:bg-gray-200 overflow-hidden"
            >
              <div
                className="w-full  flex flex-row flex-nowrap items-center 
            justify-between bg-gray-500 p-2 "
              >
                <div className="flex flex-grow"></div>
                <div
                  className="flex flex-row flex-nowrap items-center  "
                  onClick={copyText}
                >
                  <LiaCopySolid
                    className="cursor-pointer text-xl font-semibold text-white"
                    title="Copy"
                  />
                  <p className="text-sm font-light text-white pl-1">copier</p>
                </div>
              </div>
              <span ref={textRef} className="p-4">
                Pouvez-vous créer une série de 3 courriels qui fournissent un
                support technique pour les différentes fonctionnalités du
                (produit/site Web), y compris des conseils de dépannage et des
                ressources pour une assistance supplémentaire?{" "}
              </span>
            </div>
          </CSSTransition>
          <CSSTransition timeout={500} classNames="fade">
            <div
              className="rounded-md bg-amber-100 max-w-xl md:max-w-3xl lg:max-w-4xl  my-5 shadow-md 
            flex flex-col  items-center   cursor-pointer hover:bg-gray-200 overflow-hidden"
            >
              <div
                className="w-full  flex flex-row flex-nowrap items-center 
            justify-between bg-gray-500 p-2 "
              >
                <div className="flex flex-grow"></div>
                <div
                  className="flex flex-row flex-nowrap items-center  "
                  onClick={copyText}
                >
                  <LiaCopySolid
                    className="cursor-pointer text-xl font-semibold text-white"
                    title="Copy"
                  />
                  <p className="text-sm font-light text-white pl-1">copier</p>
                </div>
              </div>
              <span ref={textRef} className="p-4">
                Écrivez un courriel traitant d&apos;un problème technique
                spécifique que plusieurs clients ont signalé, en fournissant une
                explication du problème et une solution étape par étape pour le
                résoudre.{" "}
              </span>
            </div>
          </CSSTransition>
          <CSSTransition timeout={500} classNames="fade">
            <div
              className="rounded-md bg-amber-100 max-w-xl md:max-w-3xl lg:max-w-4xl  my-5 shadow-md 
            flex flex-col  items-center   cursor-pointer hover:bg-gray-200 overflow-hidden"
            >
              <div
                className="w-full  flex flex-row flex-nowrap items-center 
            justify-between bg-gray-500 p-2 "
              >
                <div className="flex flex-grow"></div>
                <div
                  className="flex flex-row flex-nowrap items-center  "
                  onClick={copyText}
                >
                  <LiaCopySolid
                    className="cursor-pointer text-xl font-semibold text-white"
                    title="Copy"
                  />
                  <p className="text-sm font-light text-white pl-1">copier</p>
                </div>
              </div>
              <span ref={textRef} className="p-4">
                Pouvez-vous créer un courriel qui offre un support technique
                personnalisé aux clients qui nous ont contacté avec un problème
                technique spécifique? Inclure une demande d&apos;informations
                supplémentaires qui pourraient être nécessaires pour
                diagnostiquer et résoudre le problème.{" "}
              </span>
            </div>
          </CSSTransition>
          <h1
            className="md:text-xl font-semibold text-gray-900 mt-5 "
            ref={divRef7}
            id="div7"
          >
            Prompts pour la gestion des comptes Messages électroniques...
          </h1>
          <CSSTransition timeout={500} classNames="fade">
            <div
              className="rounded-md bg-amber-100 max-w-xl md:max-w-3xl lg:max-w-4xl  my-5 shadow-md 
            flex flex-col  items-center   cursor-pointer hover:bg-gray-200 overflow-hidden"
            >
              <div
                className="w-full  flex flex-row flex-nowrap items-center 
            justify-between bg-gray-500 p-2 "
              >
                <div className="flex flex-grow"></div>
                <div
                  className="flex flex-row flex-nowrap items-center  "
                  onClick={copyText}
                >
                  <LiaCopySolid
                    className="cursor-pointer text-xl font-semibold text-white"
                    title="Copy"
                  />
                  <p className="text-sm font-light text-white pl-1">copier</p>
                </div>
              </div>
              <span ref={textRef} className="p-4">
                Écrivez un courriel qui guide les clients sur la façon de mettre
                à jour leurs informations de compte, y compris leur nom, leur
                adresse et les informations de paiement.{" "}
              </span>
            </div>
          </CSSTransition>
          <CSSTransition timeout={500} classNames="fade">
            <div
              className="rounded-md bg-amber-100 max-w-xl md:max-w-3xl lg:max-w-4xl  my-5 shadow-md 
            flex flex-col  items-center   cursor-pointer hover:bg-gray-200 overflow-hidden"
            >
              <div
                className="w-full  flex flex-row flex-nowrap items-center 
            justify-between bg-gray-500 p-2 "
              >
                <div className="flex flex-grow"></div>
                <div
                  className="flex flex-row flex-nowrap items-center  "
                  onClick={copyText}
                >
                  <LiaCopySolid
                    className="cursor-pointer text-xl font-semibold text-white"
                    title="Copy"
                  />
                  <p className="text-sm font-light text-white pl-1">copier</p>
                </div>
              </div>
              <span ref={textRef} className="p-4">
                Créer un courriel expliquant le processus de changement
                d&apos;un mot de passe pour les clients qui doivent
                réinitialiser leurs identifiants de connexion.{" "}
              </span>
            </div>
          </CSSTransition>
          <CSSTransition timeout={500} classNames="fade">
            <div
              className="rounded-md bg-amber-100 max-w-xl md:max-w-3xl lg:max-w-4xl  my-5 shadow-md 
            flex flex-col  items-center   cursor-pointer hover:bg-gray-200 overflow-hidden"
            >
              <div
                className="w-full  flex flex-row flex-nowrap items-center 
            justify-between bg-gray-500 p-2 "
              >
                <div className="flex flex-grow"></div>
                <div
                  className="flex flex-row flex-nowrap items-center  "
                  onClick={copyText}
                >
                  <LiaCopySolid
                    className="cursor-pointer text-xl font-semibold text-white"
                    title="Copy"
                  />
                  <p className="text-sm font-light text-white pl-1">copier</p>
                </div>
              </div>
              <span ref={textRef} className="p-4">
                Écrivez un courriel qui informe les clients des avantages de la
                création d&apos;un compte avec mon site Web, y compris le
                paiement plus rapide et le suivi de l&apos;historique des
                commandes.{" "}
              </span>
            </div>
          </CSSTransition>
          <CSSTransition timeout={500} classNames="fade">
            <div
              className="rounded-md bg-amber-100 max-w-xl md:max-w-3xl lg:max-w-4xl  my-5 shadow-md 
            flex flex-col  items-center   cursor-pointer hover:bg-gray-200 overflow-hidden"
            >
              <div
                className="w-full  flex flex-row flex-nowrap items-center 
            justify-between bg-gray-500 p-2 "
              >
                <div className="flex flex-grow"></div>
                <div
                  className="flex flex-row flex-nowrap items-center  "
                  onClick={copyText}
                >
                  <LiaCopySolid
                    className="cursor-pointer text-xl font-semibold text-white"
                    title="Copy"
                  />
                  <p className="text-sm font-light text-white pl-1">copier</p>
                </div>
              </div>
              <span ref={textRef} className="p-4">
                Créez un courriel qui encourage les clients à vérifier leur
                adresse électronique à des fins de sécurité et pour
                s&apos;assurer qu&apos;ils reçoivent des mises à jour et des
                notifications importantes.{" "}
              </span>
            </div>
          </CSSTransition>
          <CSSTransition timeout={500} classNames="fade">
            <div
              className="rounded-md bg-amber-100 max-w-xl md:max-w-3xl lg:max-w-4xl  my-5 shadow-md 
            flex flex-col  items-center   cursor-pointer hover:bg-gray-200 overflow-hidden"
            >
              <div
                className="w-full  flex flex-row flex-nowrap items-center 
            justify-between bg-gray-500 p-2 "
              >
                <div className="flex flex-grow"></div>
                <div
                  className="flex flex-row flex-nowrap items-center  "
                  onClick={copyText}
                >
                  <LiaCopySolid
                    className="cursor-pointer text-xl font-semibold text-white"
                    title="Copy"
                  />
                  <p className="text-sm font-light text-white pl-1">copier</p>
                </div>
              </div>
              <span ref={textRef} className="p-4">
                Écrivez un courriel expliquant le processus de suppression du
                compte et ce que les clients devraient attendre après la
                suppression de leur compte.{" "}
              </span>
            </div>
          </CSSTransition>
          <h1
            className="md:text-xl font-semibold text-gray-900 mt-5 "
            ref={divRef8}
            id="div8"
          >
            Prompts pour les e-mails d&apos;enquête de produit...
          </h1>
          <CSSTransition timeout={500} classNames="fade">
            <div
              className="rounded-md bg-amber-100 max-w-xl md:max-w-3xl lg:max-w-4xl  my-5 shadow-md 
            flex flex-col  items-center   cursor-pointer hover:bg-gray-200 overflow-hidden"
            >
              <div
                className="w-full  flex flex-row flex-nowrap items-center 
            justify-between bg-gray-500 p-2 "
              >
                <div className="flex flex-grow"></div>
                <div
                  className="flex flex-row flex-nowrap items-center  "
                  onClick={copyText}
                >
                  <LiaCopySolid
                    className="cursor-pointer text-xl font-semibold text-white"
                    title="Copy"
                  />
                  <p className="text-sm font-light text-white pl-1">copier</p>
                </div>
              </div>
              <span ref={textRef} className="p-4">
                Écrivez un courriel d&apos;enquête de produit qui explique les
                caractéristiques uniques du (produit) et comment ils profitent
                au client. Assurez-vous d&apos;inclure des spécifications ou des
                exigences de compatibilité.{" "}
              </span>
            </div>
          </CSSTransition>
          <CSSTransition timeout={500} classNames="fade">
            <div
              className="rounded-md bg-amber-100 max-w-xl md:max-w-3xl lg:max-w-4xl  my-5 shadow-md 
            flex flex-col  items-center   cursor-pointer hover:bg-gray-200 overflow-hidden"
            >
              <div
                className="w-full  flex flex-row flex-nowrap items-center 
            justify-between bg-gray-500 p-2 "
              >
                <div className="flex flex-grow"></div>
                <div
                  className="flex flex-row flex-nowrap items-center  "
                  onClick={copyText}
                >
                  <LiaCopySolid
                    className="cursor-pointer text-xl font-semibold text-white"
                    title="Copy"
                  />
                  <p className="text-sm font-light text-white pl-1">copier</p>
                </div>
              </div>
              <span ref={textRef} className="p-4">
                Créer un courriel qui fournit une comparaison entre (produit 1)
                et (produit 2), en soulignant les principales différences et en
                recommandant la meilleure option pour les besoins du client.{" "}
              </span>
            </div>
          </CSSTransition>
          <CSSTransition timeout={500} classNames="fade">
            <div
              className="rounded-md bg-amber-100 max-w-xl md:max-w-3xl lg:max-w-4xl  my-5 shadow-md 
            flex flex-col  items-center   cursor-pointer hover:bg-gray-200 overflow-hidden"
            >
              <div
                className="w-full  flex flex-row flex-nowrap items-center 
            justify-between bg-gray-500 p-2 "
              >
                <div className="flex flex-grow"></div>
                <div
                  className="flex flex-row flex-nowrap items-center  "
                  onClick={copyText}
                >
                  <LiaCopySolid
                    className="cursor-pointer text-xl font-semibold text-white"
                    title="Copy"
                  />
                  <p className="text-sm font-light text-white pl-1">copier</p>
                </div>
              </div>
              <span ref={textRef} className="p-4">
                Écrivez un courriel qui traite de l&apos;inquiétude d&apos;un
                client au sujet du (produit) et explique comment il répond à
                leurs exigences spécifiques.{" "}
              </span>
            </div>
          </CSSTransition>
          <CSSTransition timeout={500} classNames="fade">
            <div
              className="rounded-md bg-amber-100 max-w-xl md:max-w-3xl lg:max-w-4xl  my-5 shadow-md 
            flex flex-col  items-center   cursor-pointer hover:bg-gray-200 overflow-hidden"
            >
              <div
                className="w-full  flex flex-row flex-nowrap items-center 
            justify-between bg-gray-500 p-2 "
              >
                <div className="flex flex-grow"></div>
                <div
                  className="flex flex-row flex-nowrap items-center  "
                  onClick={copyText}
                >
                  <LiaCopySolid
                    className="cursor-pointer text-xl font-semibold text-white"
                    title="Copy"
                  />
                  <p className="text-sm font-light text-white pl-1">copier</p>
                </div>
              </div>
              <span ref={textRef} className="p-4">
                Créer un courriel expliquant comment (le produit) peut être
                personnalisé ou adapté pour répondre aux besoins du client.
                Inclure toutes les options de personnalisation pertinentes ou
                des fonctionnalités supplémentaires.{" "}
              </span>
            </div>
          </CSSTransition>
          <CSSTransition timeout={500} classNames="fade">
            <div
              className="rounded-md bg-amber-100 max-w-xl md:max-w-3xl lg:max-w-4xl  my-5 shadow-md 
            flex flex-col  items-center   cursor-pointer hover:bg-gray-200 overflow-hidden"
            >
              <div
                className="w-full  flex flex-row flex-nowrap items-center 
            justify-between bg-gray-500 p-2 "
              >
                <div className="flex flex-grow"></div>
                <div
                  className="flex flex-row flex-nowrap items-center  "
                  onClick={copyText}
                >
                  <LiaCopySolid
                    className="cursor-pointer text-xl font-semibold text-white"
                    title="Copy"
                  />
                  <p className="text-sm font-light text-white pl-1">copier</p>
                </div>
              </div>
              <span ref={textRef} className="p-4">
                Écrivez un courriel qui fournit des instructions détaillées sur
                la façon d&apos;utiliser (produit) pour un but ou un objectif
                spécifique. Assurez-vous d&apos;inclure tous les accessoires
                nécessaires ou l&apos;équipement supplémentaire qui pourrait
                être nécessaire.{" "}
              </span>
            </div>
          </CSSTransition>
          <h1
            className="md:text-xl font-semibold text-gray-900 mt-5 "
            ref={divRef9}
            id="div9"
          >
            Prompts pour les e-mails d&apos;enquête de ventes...
          </h1>
          <CSSTransition timeout={500} classNames="fade">
            <div
              className="rounded-md bg-amber-100 max-w-xl md:max-w-3xl lg:max-w-4xl  my-5 shadow-md 
            flex flex-col  items-center   cursor-pointer hover:bg-gray-200 overflow-hidden"
            >
              <div
                className="w-full  flex flex-row flex-nowrap items-center 
            justify-between bg-gray-500 p-2 "
              >
                <div className="flex flex-grow"></div>
                <div
                  className="flex flex-row flex-nowrap items-center  "
                  onClick={copyText}
                >
                  <LiaCopySolid
                    className="cursor-pointer text-xl font-semibold text-white"
                    title="Copy"
                  />
                  <p className="text-sm font-light text-white pl-1">copier</p>
                </div>
              </div>
              <span ref={textRef} className="p-4">
                Écrivez un courriel d&apos;enquête de vente qui informe les
                clients d&apos;une promotion ou d&apos;un rabais à durée limitée
                pour un produit spécifique, et inclut un appel à l&apos;action
                pour effectuer un achat.{" "}
              </span>
            </div>
          </CSSTransition>
          <CSSTransition timeout={500} classNames="fade">
            <div
              className="rounded-md bg-amber-100 max-w-xl md:max-w-3xl lg:max-w-4xl  my-5 shadow-md 
            flex flex-col  items-center   cursor-pointer hover:bg-gray-200 overflow-hidden"
            >
              <div
                className="w-full  flex flex-row flex-nowrap items-center 
            justify-between bg-gray-500 p-2 "
              >
                <div className="flex flex-grow"></div>
                <div
                  className="flex flex-row flex-nowrap items-center  "
                  onClick={copyText}
                >
                  <LiaCopySolid
                    className="cursor-pointer text-xl font-semibold text-white"
                    title="Copy"
                  />
                  <p className="text-sm font-light text-white pl-1">copier</p>
                </div>
              </div>
              <span ref={textRef} className="p-4">
                Créer un courriel d&apos;enquête de vente qui fournit des
                informations sur les avantages et les caractéristiques d&apos;un
                produit, et inclut une offre spéciale ou une offre exclusive
                pour un temps limité.{" "}
              </span>
            </div>
          </CSSTransition>
          <CSSTransition timeout={500} classNames="fade">
            <div
              className="rounded-md bg-amber-100 max-w-xl md:max-w-3xl lg:max-w-4xl  my-5 shadow-md 
            flex flex-col  items-center   cursor-pointer hover:bg-gray-200 overflow-hidden"
            >
              <div
                className="w-full  flex flex-row flex-nowrap items-center 
            justify-between bg-gray-500 p-2 "
              >
                <div className="flex flex-grow"></div>
                <div
                  className="flex flex-row flex-nowrap items-center  "
                  onClick={copyText}
                >
                  <LiaCopySolid
                    className="cursor-pointer text-xl font-semibold text-white"
                    title="Copy"
                  />
                  <p className="text-sm font-light text-white pl-1">copier</p>
                </div>
              </div>
              <span ref={textRef} className="p-4">
                Écrivez un courriel d&apos;enquête de vente qui met en évidence
                les points de vente uniques d&apos;un produit, et inclut les
                témoignages des clients ou des commentaires pour construire la
                crédibilité et la confiance avec les acheteurs potentiels.{" "}
              </span>
            </div>
          </CSSTransition>
          <CSSTransition timeout={500} classNames="fade">
            <div
              className="rounded-md bg-amber-100 max-w-xl md:max-w-3xl lg:max-w-4xl  my-5 shadow-md 
            flex flex-col  items-center   cursor-pointer hover:bg-gray-200 overflow-hidden"
            >
              <div
                className="w-full  flex flex-row flex-nowrap items-center 
            justify-between bg-gray-500 p-2 "
              >
                <div className="flex flex-grow"></div>
                <div
                  className="flex flex-row flex-nowrap items-center  "
                  onClick={copyText}
                >
                  <LiaCopySolid
                    className="cursor-pointer text-xl font-semibold text-white"
                    title="Copy"
                  />
                  <p className="text-sm font-light text-white pl-1">copier</p>
                </div>
              </div>
              <span ref={textRef} className="p-4">
                Créez un courriel d&apos;enquête de vente qui propose des
                recommandations de produits personnalisées en fonction des
                préférences ou de l&apos;historique d&apos;achat du client, et
                inclut une réduction ou une incitation spéciale pour les
                encourager à effectuer un achat.{" "}
              </span>
            </div>
          </CSSTransition>
          <CSSTransition timeout={500} classNames="fade">
            <div
              className="rounded-md bg-amber-100 max-w-xl md:max-w-3xl lg:max-w-4xl  my-5 shadow-md 
            flex flex-col  items-center   cursor-pointer hover:bg-gray-200 overflow-hidden"
            >
              <div
                className="w-full  flex flex-row flex-nowrap items-center 
            justify-between bg-gray-500 p-2 "
              >
                <div className="flex flex-grow"></div>
                <div
                  className="flex flex-row flex-nowrap items-center  "
                  onClick={copyText}
                >
                  <LiaCopySolid
                    className="cursor-pointer text-xl font-semibold text-white"
                    title="Copy"
                  />
                  <p className="text-sm font-light text-white pl-1">copier</p>
                </div>
              </div>
              <span ref={textRef} className="p-4">
                Écrivez un courriel d&apos;enquête de vente qui fournit des
                informations sur les différents produits ou services offerts par
                l&apos;entreprise, et comprend une offre spéciale ou un rabais
                pour les clients de première fois ou les nouveaux abonnés.{" "}
              </span>
            </div>
          </CSSTransition>

          {/* More divs with their unique layouts */}
        </TransitionGroup>
      </div>
    </div>
  );
};

export default CustomerService;
