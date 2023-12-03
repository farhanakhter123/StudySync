import React, { useState } from "react";
import { RxEyeOpen, RxEyeClosed, RxDownload } from "react-icons/rx";
import { FaArrowTurnDown } from "react-icons/fa6";
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";
import "./style.css";
import "animate.css";

const Network = () => {
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
    link.href = "/Images/NetworkSyllabus.png";
    link.download = "Network_syllabus.png";
    link.click();
  };
  const handleQuestionPaper = () => {
    const link = document.createElement("a");
    link.href = "/PDF/Networks/Question paper Network.pdf";
    link.download = "Neetworks_Question_Papers.pdf";
    link.click();
  };
  const handleEBook = () => {
    const link = document.createElement("a");
    link.href = "/PDF/Networks/Computer Networks Book.pdf";
    link.download = "Network_E_Book.pdf";
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
            src="https://www.youtube.com/embed/VwN91x5i25g?si=XnCmeJtQEhpoKbzS"
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
                  src="/Images/NetworkSyllabus.png"
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
              This unit will give you the fundamental principles of computer
              networking and the physical layer of communication systems. You'll
              explore concepts such as data transmission, network architectures,
              and the hardware components that form the foundation of
              communication networks. Topics may include network protocols, data
              encoding, modulation, and the characteristics of various
              transmission media. This unit aims to provide you with a solid
              understanding of the essential building blocks that support modern
              communication infrastructures.
            </p>
            <p className="imp-para">
              <span>Important Topics : </span>OSI layered architecture, TCP/IP
              protocols, Guided and Unguided Media, Switching and its methods.
            </p>
            <details>
              <summary className="notes-size">
                View Notes
                <FaArrowTurnDown className="ml-3 text-sm" />
              </summary>
              <embed
                src="/PDF/Networks/unit 1 network.pdf"
                width="800"
                height="500"
                sandbox="allow-same-origin allow-scripts"
                className="embed-pdf"
              />
            </details>
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
              In the Data Link Layer unit, you'll focus on the second layer of
              the OSI model, where data packets are organized and framed for
              reliable transmission between directly connected nodes. Key topics
              include error detection and correction mechanisms, flow control,
              and addressing schemes. You'll explore protocols governing local
              area networks (LANs) and gain insights into how data link layer
              protocols ensure the integrity and efficiency of data transfer
              over a shared medium. Understanding the intricacies of this layer
              is crucial for constructing robust and efficient communication
              links in network systems.
            </p>
            <p className="imp-para">
              <span>Important Topics : </span>Brief of data link layer, Error
              handling, Flow controls, ALOHA, CSMA, CSMA/CD, FDMA, TDMA, CDMA,
              Overview of FDDI.
            </p>
            <details>
              <summary className="notes-size">
                View Notes
                <FaArrowTurnDown className="ml-3 text-sm" />
              </summary>
              <embed
                src="/PDF/Networks/unit 2 network.pdf"
                width="800"
                height="500"
                sandbox="allow-same-origin allow-scripts"
                className="embed-pdf"
              />
            </details>
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
              In the Network Layer unit, you'll explore the third layer of the
              OSI model, where the emphasis shifts to routing and forwarding
              data between devices across different networks. Key concepts
              include logical addressing, subnetting, and the Internet Protocol
              (IP). You'll delve into routing algorithms and protocols that
              enable efficient data delivery across diverse network topologies.
              Understanding the network layer is vital for comprehending the
              end-to-end communication process and building scalable and
              interconnected networks. This unit lays the groundwork for
              creating robust and adaptable network architectures.
            </p>
            <p className="imp-para">
              <span>Important Topics : </span>IPv4 addressing, Classless and
              Classfull addressing(Numerical), Subnetting, IPv4 vs IPv6, Address
              mapping, ARP and RARP, Packet Delivery and Forwarding, Unicast
              Routing.
            </p>
            <details>
              <summary className="notes-size">
                View Notes
                <FaArrowTurnDown className="ml-3 text-sm" />
              </summary>
              <embed
                src="/PDF/Networks/unit 3 network.pdf"
                width="800"
                height="500"
                sandbox="allow-same-origin allow-scripts"
                className="embed-pdf"
              />
            </details>
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
              In the Transport Layer unit, you'll delve into the fourth layer of
              the OSI model, focusing on end-to-end communication and data
              transfer reliability. Key topics include segmentation and
              reassembly of data, error detection, and flow control mechanisms.
              You'll explore transport layer protocols such as Transmission
              Control Protocol (TCP) and User Datagram Protocol (UDP),
              understanding their roles in facilitating reliable and efficient
              communication between applications on different devices. This unit
              is pivotal for grasping the intricacies of data delivery and
              ensuring the secure and orderly exchange of information
              across networks.
            </p>
            <p className="imp-para">
              <span>Important Topics : </span>Connectionless vs Connection
              Oriented, TCP, UDP, Congestion Control: Open loop and Closed loop
              connection and its techniques.
            </p>
            <details>
              <summary className="notes-size">
                View Notes
                <FaArrowTurnDown className="ml-3 text-sm" />
              </summary>
              <embed
                src="/PDF/Networks/unit 4 network.pdf"
                width="800"
                height="500"
                sandbox="allow-same-origin allow-scripts"
                className="embed-pdf"
              />
            </details>
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
              The Quality of Service (QoS) unit will cover techniques and
              mechanisms aimed at ensuring and enhancing the performance and
              reliability of network services. Topics may include bandwidth
              management, prioritization of network traffic, and measures to
              minimize latency and packet loss. You'll explore how QoS
              parameters are defined, monitored, and controlled to meet specific
              requirements for different types of data and applications.
              Understanding QoS is crucial for optimizing network performance,
              providing a better user experience, and meeting the diverse needs
              of applications with varying demands on network resources.
            </p>
            <p className="imp-para">
              <span>Important Topics : </span>Jitter and Bandwidth, Traffic
              scheduling, Traffic shapping, Application layer: DNS, DNS in
              internet, WWW, FTP telnet, Electronic Mail.
            </p>
            <details>
              <summary className="notes-size">
                View Notes
                <FaArrowTurnDown className="ml-3 text-sm" />
              </summary>
              <embed
                src="/PDF/Networks/unit 5 network.pdf"
                width="800"
                height="500"
                sandbox="allow-same-origin allow-scripts"
                className="embed-pdf"
              />
            </details>
          </details>
        </div>
        <div className="extra-material">
          <h2>More material that you can Study from :)</h2>
          <ol className="flex flex-col">
            <li>
              <Link
                to="https://www.javatpoint.com/computer-network-tutorial"
                target="_blank"
              >
                JavaPoint Computer Networks Tutorial
              </Link>
            </li>
            <li>
              <Link
                to="https://youtube.com/playlist?list=PLxCzCOWd7aiGFBD2-2joCpWOLUrDLvVV_&si=fj0h7ThIajfgKhIg"
                target="_blank"
              >
                Gate Smasher (YouTube playlist)
              </Link>
            </li>
            <li>
              <Link
                to="https://www.youtube.com/playlist?list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx"
                target="_blank"
              >
                Neso Academey (YouTube playlist) (Best for numericals)
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
      </div>
    </>
  );
};

export default Network;
