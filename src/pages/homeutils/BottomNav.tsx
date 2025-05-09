import { FaGithub } from "react-icons/fa";
import Animate from "../../utils/animations/Animate";
import { CiLinkedin } from "react-icons/ci";

function BottomNav() {
  function handleOpenSocialLink(type: string) {
    switch (type) {
      case "GITHUB":
        window.open("https://github.com/VENKY-021");
        break;
      case "LINKEDIN":
        window.open(
          "https://www.linkedin.com/in/venkatesh-dagcupati-115537237"
        );
        break;
    }
  }

  function handleEmailClick() {
    const mailtoUrl =
      "mailto:venkateshdaggupati2003@gmail.com?subject=Electrical Engineering Collaboration";
    window.open(mailtoUrl);
  }

  return (
    <div className="w-full flex flex-col px-4 items-center justify-center mt-[5vh]">
      <div className="flex flex-col gap-10 lg:gap-3 text-center">
        <Animate delay={200} type="slideLeft">
          <h1 className="text-2xl lg:text-[40px] font-semibold">
            Available for substation design and power systems research
          </h1>
        </Animate>
        <Animate delay={400} type="slideLeft">
          <p className="font-semibold lg:text-xs">
            Need expertise in electrical engineering, renewable integration, or
            AI-based fault detection?
          </p>
        </Animate>
      </div>

      <Animate delay={500} type="slideLeft">
        <div className="mt-[5vh]">
          <div
            onClick={handleEmailClick}
            className="text-xl border-b-4 border-secondary cursor-pointer lg:hover:scale-105 lg:hover:text-primary"
          >
            venkateshdaggupati2003@gmail.com
          </div>

          <div className="text-center mt-[3vh] flex items-center justify-center gap-4">
            <h3
              onClick={() => handleOpenSocialLink("LINKEDIN")}
              className="flex items-center bg-foreground/10 rounded-md px-3 py-2 cursor-pointer lg:hover:bg-foreground/20 lg:hover:scale-105"
            >
              <CiLinkedin className="h-6 w-5" />
            </h3>
            <h3
              onClick={() => handleOpenSocialLink("GITHUB")}
              className="flex items-center bg-foreground/10 rounded-md px-3 py-2 cursor-pointer lg:hover:bg-foreground/20 lg:hover:scale-105"
            >
              <FaGithub className="h-6 w-5" />
            </h3>
          </div>
        </div>
      </Animate>

      <div className="w-full mt-[9vh] mb-1">
        <Animate delay={200} type="slideDown">
          <div className="w-full flex flex-col gap-2 lg:flex-row lg:justify-between lg:px-20">
            <div className="flex items-center justify-center text-foreground/40 text-xs lg:text-md">
              © 2025.
              <a
                href="mailto:venkateshdaggupati2003@gmail.com?subject=Electrical Engineering Collaboration"
                className="ml-1 font-semibold text-blue-600 border-b border-blue-600"
              >
                Venkatesh Daggupati
              </a>{" "}
              – Electrical Engineer
            </div>

            <div className="flex flex-col gap-2 mb-10 text-center items-center justify-center text-foreground/40 text-xs lg:text-md">
              <div>Specializing in Power Systems and Renewable Energy</div>
              <div className="flex items-center">
                | Developed with{" "}
                <span
                  className="ml-1 font-semibold text-blue-600 border-b border-blue-600 cursor-pointer"
                  onClick={() =>
                    window.open(
                      "mailto:afridayan01@gmail.com?subject=Software development collaboration"
                    )
                  }
                >
                  Afrid
                </span>
              </div>
            </div>
          </div>
        </Animate>
      </div>
    </div>
  );
}

export default BottomNav;
