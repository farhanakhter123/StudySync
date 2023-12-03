import React, { useState } from "react";
import { RxEyeOpen, RxEyeClosed, RxDownload } from "react-icons/rx";
import { FaArrowTurnDown } from "react-icons/fa6";
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";
import "./style.css";
import "animate.css";

const Micro = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [arrowOpen, setArrowOpen] = useState(false);
  const handleArrow = () => {
    setArrowOpen(!arrowOpen);
  };
  const handleToggleImage = () => {
    setIsOpen(!isOpen);
  };
  const handleSyllabus = () => {
    const link = document.createElement("a");
    link.href = "/Images/MicroSyllabus.png";
    link.download = "Microprocessor_syllabus.png";
    link.click();
  };
  const handleQuestionPaper = () => {
    const link = document.createElement("a");
    link.href = "/PDF/Micro/Question Paper Micro.pdf";
    link.download = "Micro_Question_Papers.pdf";
    link.click();
  };
  const handleEBook = () => {
    const link = document.createElement("a");
    link.href = "/PDF/Micro/book micro.pdf";
    link.download = "Micro_E_Book.pdf";
    link.click();
  };
  const handleQB1 = () => {
    const link = document.createElement("a");
    link.href = "/PDF/Micro/Unit-1 QB.pdf";
    link.download = "Micro_QB_1.pdf";
    link.click();
  };
  const handleQB2 = () => {
    const link = document.createElement("a");
    link.href = "/PDF/Micro/Unit-2 QB.pdf";
    link.download = "Micro_QB_2.pdf";
    link.click();
  };
  const handleQB3 = () => {
    const link = document.createElement("a");
    link.href = "/PDF/Micro/Unit-3 QB.pdf";
    link.download = "Micro_QB_3.pdf";
    link.click();
  };
  const handleQB4 = () => {
    const link = document.createElement("a");
    link.href = "/PDF/Micro/Unit-4 QB.pdf";
    link.download = "Micro_QB_4.pdf";
    link.click();
  };
  const handleQB5 = () => {
    const link = document.createElement("a");
    link.href = "/PDF/Micro/Unit-5 QB.pdf";
    link.download = "Micro_QB_5.pdf";
    link.click();
  };
  return (
    <>
      <div className="net-div animate__animated animate__fadeInUp">
        <h1>Introduction to Computer Networks</h1>
        <div className="">
          <iframe
            width="700"
            height="355"
            src="https://www.youtube.com/embed/SBh6dJMM6AI?si=5ORY7ucJdm9nAskD"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>

        <div className="syllabus">
          <h2 className="text-[20px] font-bold">Open Syllabus</h2>

          <div
            className="absolute top-10 left-36"
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <button onClick={handleToggleImage}>
              {isOpen ? (
                <RxEyeOpen className="eye-size" />
              ) : (
                <RxEyeClosed className="eye-size" />
              )}
            </button>
            {isOpen && (
              <div style={{ marginLeft: "10px" }}>
                <img
                  src="/Images/MicroSyllabus.png"
                  alt="Opened Image"
                  style={{
                    maxWidth: "100%",
                    maxHeight: "80vh",
                    border: "2px solid black",
                  }}
                />
              </div>
            )}
          </div>
        </div>

        <div className="my-2 text-xl space-y-3 ">
          <details open className="unit-details">
            <summary className="unit-summary" onClick={handleArrow}>
              {arrowOpen ? (
                <MdKeyboardArrowRight className="text-[22px]" />
              ) : (
                <MdKeyboardArrowDown className="text-[22px]" />
              )}
              Unit 1
            </summary>
            <p className="intro-para">
              Understanding the fundamentals of computer systems, including
              memory, microprocessors, microcontrollers, buses, machine and
              assembly languages, high-level programming, development tools, and
              the specifics of the 8085 microprocessor architecture and assembly
              programming, including interrupts and service routines.
            </p>
            <p className="imp-para">
              <span>Important Topics : </span>Types of memory, Microprocessor
              v/s Microcontroller, Buses, types of languages, 8085:architecture,
              pin diagram, timing diagram, Instruction cycle and types,
              Addressing modes, Interrupt.
            </p>
            <details>
              <summary className="notes-size">
                View Notes
                <FaArrowTurnDown className="ml-3 text-sm" />
              </summary>
              <embed
                src="/PDF/Micro/unit 1.pdf"
                width="800"
                height="500"
                sandbox="allow-same-origin allow-scripts"
                className="embed-pdf"
              />
            </details>
            <span className="py-4 pl-5 text-[#dd1112] flex items-center">
              Question Bank unit 1{" "}
              <RxDownload
                onClick={handleQB1}
                className="ml-3 text-[20px] text-[#bbbbbb] hover:cursor-pointer"
              />
            </span>
          </details>
          <details open className="unit-details">
            <summary className="unit-summary" onClick={handleArrow}>
              {arrowOpen ? (
                <MdKeyboardArrowRight className="text-[22px]" />
              ) : (
                <MdKeyboardArrowDown className="text-[22px]" />
              )}
              Unit 2
            </summary>
            <p className="intro-para">
              Exploring the 8086 microprocessor involves studying its
              architecture, pin diagram, timing diagram, addressing modes,
              instruction set, instruction templates, and assembly language
              programming, with a focus on procedures, macros, number
              conversion, and string operations.
            </p>
            <p className="imp-para">
              <span>Important Topics : </span>8086 : Architecture, Pin diagram,
              Timing diagram, Addressing modes, Instruction sets.
            </p>
            <details>
              <summary className="notes-size">
                View Notes
                <FaArrowTurnDown className="ml-3 text-sm" />
              </summary>
              <embed
                src="/PDF/Micro/unit 2.pdf"
                width="800"
                height="500"
                sandbox="allow-same-origin allow-scripts"
                className="embed-pdf"
              />
            </details>
            <span className="py-4 pl-5 text-[#dd1112] flex items-center">
              Question Bank unit 2{" "}
              <RxDownload
                onClick={handleQB2}
                className="ml-5 text-[20px] text-[#bbbbbb] hover:cursor-pointer"
              />
            </span>
          </details>
          <details open className="unit-details">
            <summary className="unit-summary" onClick={handleArrow}>
              {arrowOpen ? (
                <MdKeyboardArrowRight className="text-[22px]" />
              ) : (
                <MdKeyboardArrowDown className="text-[22px]" />
              )}
              Unit 3
            </summary>
            <p className="intro-para">
              Delving into interfacing with peripheral devices and memory covers
              various aspects such as types of transmission, DMA (Direct Memory
              Access) using 8257, programmable peripheral interface (PPI) with
              8255, serial data transfer through USART 8251, interfacing with
              keyboard and display controllers using 8279, and managing priority
              interrupts with the Priority Interrupt Controller 8259.
            </p>
            <p className="imp-para">
              <span>Important Topics : </span>Peripheral devices and memory,
              types of transmission, 8257(DMA), 8255(PPI), 8251, Display
              Controller, Interrupt Controller(8259).
            </p>
            <details>
              <summary className="notes-size">
                View Notes
                <FaArrowTurnDown className="ml-3 text-sm" />
              </summary>
              <embed
                src="/PDF/Micro/unit 3.pdf"
                width="800"
                height="500"
                sandbox="allow-same-origin allow-scripts"
                className="embed-pdf"
              />
            </details>
            <span className="py-4 pl-5 text-[#dd1112] flex items-center">
              Question Bank unit 3{" "}
              <RxDownload
                onClick={handleQB3}
                className="ml-5 text-[20px] text-[#bbbbbb] hover:cursor-pointer"
              />
            </span>
          </details>
          <details open className="unit-details">
            <summary className="unit-summary" onClick={handleArrow}>
              {arrowOpen ? (
                <MdKeyboardArrowRight className="text-[22px]" />
              ) : (
                <MdKeyboardArrowDown className="text-[22px]" />
              )}
              Unit 4
            </summary>
            <p className="intro-para">
              Exploring interfacing with timers and its applications involves
              understanding the Programmable Interval Timer/Counter (8253/8254),
              including its introduction, modes, interfacing procedures, and
              various applications. Additionally, studying Analog-to-Digital
              Converters (ADC) encompasses an introduction to ADC, different
              types of ADC converters, ADC ICs (such as 0808/0809), and their
              interfacing and applications in various contexts.
            </p>
            <p className="imp-para">
              <span>Important Topics : </span>8253/8254 : Introduction, Modes.
              8253, ADC and its convertors, 0808/0809, applications of ADC.
            </p>
            <details>
              <summary className="notes-size">
                View Notes
                <FaArrowTurnDown className="ml-3 text-sm" />
              </summary>
              <embed
                src="/PDF/Micro/unit 4.pdf"
                width="800"
                height="500"
                sandbox="allow-same-origin allow-scripts"
                className="embed-pdf"
              />
            </details>
            <span className="py-4 pl-5 text-[#dd1112] flex items-center">
              Question Bank unit 4{" "}
              <RxDownload
                onClick={handleQB4}
                className="ml-5 text-[20px] text-[#bbbbbb] hover:cursor-pointer"
              />
            </span>
          </details>
          <details open className="unit-details">
            <summary className="unit-summary" onClick={handleArrow}>
              {arrowOpen ? (
                <MdKeyboardArrowRight className="text-[22px]" />
              ) : (
                <MdKeyboardArrowDown className="text-[22px]" />
              )}
              Unit 5
            </summary>
            <p className="intro-para">
              Delving into advanced microprocessors and microcontrollers
              encompasses an introduction to Intel's 80186, 80286, 80386, and
              80486 microprocessors. Additionally, understanding embedded
              systems and microcontrollers involves an introduction to the 8051
              microcontroller, including its architecture.
            </p>
            <p className="imp-para">
              <span>Important Topics : </span>Introductin : 80186, 80286, 80386
              and 80486 its differences, Embedded system, 8051 Microcontroller.
            </p>
            <details>
              <summary className="notes-size">
                View Notes
                <FaArrowTurnDown className="ml-3 text-sm" />
              </summary>
              <embed
                src="/PDF/Micro/unit 5.pdf"
                width="800"
                height="500"
                sandbox="allow-same-origin allow-scripts"
                className="embed-pdf"
              />
            </details>
            <span className="py-4 pl-5 text-[#dd1112] flex items-center">
              Question Bank unit 5{" "}
              <RxDownload
                onClick={handleQB5}
                className="ml-5 text-[20px] text-[#bbbbbb] hover:cursor-pointer"
              />
            </span>
          </details>
        </div>
        <div className="extra-material">
          <h2>More material that you can Study from :)</h2>
          <ol className="flex flex-col">
            <li>
              <Link
                to="https://www.geeksforgeeks.org/introduction-of-microprocessor/"
                target="_blank"
              >
                GeeksForGeeks Microprocessor
              </Link>
            </li>
            <li>
              <Link
                to="https://youtube.com/playlist?list=PLxCzCOWd7aiHL7mF_dRsj4Q9x1NNaZqkh&si=L_wyuEBvz7wTNrX3"
                target="_blank"
              >
                Gate Smasher (YouTube playlist)
              </Link>
            </li>
            <li>
              <Link
                to="https://www.youtube.com/playlist?list=PLrjkTql3jnm8HbdMwBYIMAd3UdstWChFH"
                target="_blank"
              >
                Education 4U (YouTube playlist)
              </Link>
            </li>
          </ol>
        </div>

        <div className="download-div space-x-4">
          <button className="button" onClick={handleSyllabus}>
            Syllabus <RxDownload className="ml-2" />
          </button>
          <button className="button" onClick={handleQuestionPaper}>
            Question Papers <RxDownload className="ml-2" />
          </button>
          <button className="button" onClick={handleEBook}>
            E-Book <RxDownload className="ml-2" />
          </button>
        </div>
        <h3 className="text-[20px] text-[#dd1112]">
          Suggestion :{" "}
          <span className="text-[#bbbbbb]">
            Try to learn each and every diagram and pin digram in it. It will
            surely increase your marks
          </span>
        </h3>
      </div>
    </>
  );
};

export default Micro;
