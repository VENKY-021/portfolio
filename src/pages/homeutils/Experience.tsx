import Animate from "../../utils/animations/Animate";
import { FaLocationDot } from "react-icons/fa6";

function Experience() {
  return (
    <div>
      <div className=" px-4 flex flex-col justify-center items-center mt-[5vh] w-full ">
        <Animate delay={300} type="slideLeft">
          <div>
            <h2 className="text-4xl lg:text-[50px] font-semibold text-center">
              Professional Experience
            </h2>
          </div>
        </Animate>

        {/* Research Assistant */}
        <div className="mt-[5vh] flex flex-col gap-2 lg:w-[70vw]">
          <Animate delay={300} type="slideLeft">
            <div className="relative bg-blue-700 py-5 w-full flex flex-col lg:flex-row lg:items-center rounded-md px-6 font-semibold lg:gap-5">
              <div className="lg:text-nowrap">Research Assistant</div>
              <div className="font-this text-foreground/80 text-sm w-full flex">
                @ Texas Tech University <br className="lg:hidden" /> 2023 - Present
              </div>
            </div>
          </Animate>

          <Animate delay={400} type="slideLeft">
            <div className="w-full px-6 py-3 bg-white rounded-md flex flex-col gap-5">
              <div className="flex flex-col gap-3 lg:flex-row">
                <div>
                  <img src="texas.png" className="lg:ml-2 rounded-md w-42 h-20 object-cover" />
                </div>
                <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
                  <div className="flex items-center text-black">
                    <FaLocationDot className="w-5 h-6 text-black mr-3" /> Lubbock, Texas
                  </div>
                </div>
              </div>
              <div>
                <div className="lg:max-w-[50vw] text-black">
                  Developed AI-based fault detection for IEEE 9-bus transmission lines using CNN, ELM, and GNN. 
                  Simulated faults in MATLAB-Simulink and optimized deep learning models for real-time monitoring.
                </div>
              </div>
              <div className="flex flex-wrap flex-grow justify-between gap-3">
                <div className="w-fit h-fit py-2 px-5 rounded-full bg-blue-700">
                  MATLAB
                </div>
                <div className="w-fit h-fit py-2 px-5 rounded-full bg-blue-700">
                  Simulink
                </div>
                <div className="w-fit h-fit py-2 px-5 rounded-full bg-blue-700">
                  CNN/GNN
                </div>
                <div className="w-fit h-fit py-2 px-5 rounded-full bg-blue-700">
                  Power Systems
                </div>
                <div className="w-fit h-fit py-2 px-5 rounded-full bg-blue-700">
                  Fault Analysis
                </div>
              </div>
            </div>
          </Animate>
        </div>

        {/* ZF Technology Internship */}
        <div className="mt-[5vh] flex flex-col gap-2 lg:w-[70vw]">
          <Animate delay={500} type="slideLeft">
            <div className="relative bg-green-700 py-5 w-full flex flex-col lg:flex-row lg:items-center rounded-md px-6 font-semibold lg:gap-5">
              <div className="lg:text-nowrap">Electrical Engineer Intern</div>
              <div className="font-this text-foreground/80 text-sm w-full flex">
                @ ZF Technology <br className="lg:hidden" /> 2022 - 2023
              </div>
            </div>
          </Animate>

          <Animate delay={400} type="slideLeft">
            <div className="w-full px-6 py-3 bg-green-200 rounded-md flex flex-col gap-5">
              <div className="flex flex-col gap-3 lg:flex-row">
                <div>
                  <img src="zf.svg" className="rounded-md w-42 h-20 object-contain" />
                </div>
                <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
                  <div className="flex items-center text-black">
                    <FaLocationDot className="w-5 h-6 text-black mr-3" /> Chennai, India
                  </div>
                </div>
              </div>
              <div>
                <div className="lg:max-w-[50vw] text-black">
                  Created MATLAB/Simulink models for power flow analysis and voltage regulation. 
                  Developed control algorithms for power system stability and implemented HIL simulation 
                  for Electric Vehicle component testing.
                </div>
              </div>
              <div className="flex flex-wrap flex-grow justify-between gap-3">
                <div className="w-fit h-fit py-2 px-5 rounded-full bg-blue-700">
                  MATLAB
                </div>
                <div className="w-fit h-fit py-2 px-5 rounded-full bg-blue-700">
                  Simulink
                </div>
                <div className="w-fit h-fit py-2 px-5 rounded-full bg-blue-700">
                  HIL Simulation
                </div>
                <div className="w-fit h-fit py-2 px-5 rounded-full bg-blue-700">
                  EV Systems
                </div>
                <div className="w-fit h-fit py-2 px-5 rounded-full bg-blue-700">
                  Control Algorithms
                </div>
              </div>
            </div>
          </Animate>
        </div>

        {/* Sri Gajanan Internship */}
        <div className="mt-[5vh] flex flex-col gap-2 lg:w-[70vw]" >
          <Animate delay={300} type="slideLeft">
            <div className="relative bg-[#740cdc] py-5 w-full flex flex-col lg:flex-row lg:items-center rounded-md px-6 font-semibold lg:gap-5">
              <div className="lg:text-nowrap">Electrical Engineer Intern</div>
              <div className="font-this text-foreground/60 text-sm w-full flex">
                @ Sri Gajanan E-slates Pvt Ltd <br className="lg:hidden" /> 2021 - 2022
              </div>
            </div>
          </Animate>

          <Animate delay={400} type="slideLeft">
            <div className="w-full px-6 py-3 bg-secondary/30 rounded-md flex flex-col gap-5">
              <div className="flex flex-col gap-3 lg:flex-row">
                <div>
                  <img src="logo-Zauba.webp" className="rounded-md w-42 h-20 object-contain" />
                </div>
                <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
                  <div className="flex items-center text-foreground/70">
                    <FaLocationDot className="w-5 h-6 text-secondary mr-3" /> Hyderabad, India
                  </div>
                </div>
              </div>
              <div>
                <div className="lg:max-w-[50vw]">
                  Assisted in power distribution system design and implementation. 
                  Conducted electrical testing, fault diagnosis, and gained hands-on experience 
                  in substation operations including transformer maintenance and protection systems.
                </div>
              </div>
              <div className="flex flex-wrap flex-grow justify-between gap-3">
                <div className="w-fit h-fit py-2 px-5 rounded-full bg-blue-700">
                  Power Distribution
                </div>
                <div className="w-fit h-fit py-2 px-5 rounded-full bg-blue-700">
                  Substation Ops
                </div>
                <div className="w-fit h-fit py-2 px-5 rounded-full bg-blue-700">
                  Transformer
                </div>
                <div className="w-fit h-fit py-2 px-5 rounded-full bg-blue-700">
                  Electrical Safety
                </div>
                <div className="w-fit h-fit py-2 px-5 rounded-full bg-blue-700">
                  NFPA 70E
                </div>
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </div>
  );
}

export default Experience;