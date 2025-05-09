/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import Animate from "../../utils/animations/Animate";
import ProjectCard from "./ProjectCard";
import { useUpdateProjectDetails } from "../../hooks/appHooks";

function Projects() {
  const [selectedType, setSelectedType] = useState<
    "ALL" | "SUBSTATION" | "AI" | "RENEWABLE" | "CONTROL"
  >("ALL");

  const { updateProjectDetails } = useUpdateProjectDetails();

  function handleCallBack(project: string) {
    updateProjectDetails(project);
  }

  return (
    <div className="mt-[10vh] px-4">
      <div className="text-xs flex flex-col gap-5 lg:items-center justify-center lg:gap-2 lg:flex-row hover:text-foreground/50">
        <div className="flex gap-3">
          <Animate type="slideDown" delay={200}>
            <div className="cursor-pointer flex items-center">
              <div
                className="relative flex"
                onClick={() => {
                  setSelectedType("NONE" as any);
                  setTimeout(() => {
                    setSelectedType("ALL");
                  }, 100);
                }}
              >
                <div className="absolute -right-3 text-xs -top-3 text-foreground/40">
                  6
                </div>
                <h3
                  className={`${
                    selectedType === "ALL"
                      ? "scale-105 border-b border-primary text-primary"
                      : "text-foreground/50"
                  } hover:border-b border-primary hover:scale-105 hover:text-primary`}
                >
                  Filter by ALL
                </h3>
              </div>
              <div className="ml-4 lg:ml-2"> /</div>
            </div>
          </Animate>

          <Animate type="slideDown" delay={400}>
            <div className="cursor-pointer flex items-center gap-3">
              <div
                className="relative flex"
                onClick={() => {
                  setSelectedType("NONE" as any);
                  setTimeout(() => {
                    setSelectedType("SUBSTATION");
                  }, 100);
                }}
              >
                <div className="absolute -right-3 text-xs -top-3 text-foreground/40">
                  2
                </div>
                <h3
                  className={`${
                    selectedType === "SUBSTATION"
                      ? "scale-105 border-b border-primary text-primary"
                      : "text-foreground/50"
                  } hover:border-b border-primary hover:scale-105 hover:text-primary`}
                >
                  Substation Design
                </h3>
              </div>
              <div className="ml-4 lg:ml-2 hidden lg:block"> /</div>
            </div>
          </Animate>
        </div>

        <div className="flex gap-3">
          <Animate type="slideDown" delay={600}>
            <div className="cursor-pointer flex items-center">
              <div
                className="relative flex"
                onClick={() => {
                  setSelectedType("NONE" as any);
                  setTimeout(() => {
                    setSelectedType("AI");
                  }, 100);
                }}
              >
                <div className="absolute -right-3 text-xs -top-3 text-foreground/40">
                  2
                </div>
                <h3
                  className={`${
                    selectedType === "AI"
                      ? "scale-105 border-b border-primary text-primary"
                      : "text-foreground/50"
                  } hover:border-b border-primary hover:scale-105 hover:text-primary`}
                >
                  AI in Power Systems
                </h3>
              </div>
              <div className="ml-4 lg:ml-2"> /</div>
            </div>
          </Animate>
          <Animate type="slideDown" delay={800}>
            <div className="cursor-pointer flex items-center">
              <div
                className="relative flex"
                onClick={() => {
                  setSelectedType("NONE" as any);
                  setTimeout(() => {
                    setSelectedType("RENEWABLE");
                  }, 100);
                }}
              >
                <div className="absolute -right-3 text-xs -top-3 text-foreground/40">
                  1
                </div>
                <h3
                  className={`${
                    selectedType === "RENEWABLE"
                      ? "scale-105 border-b border-primary text-primary"
                      : "text-foreground/50"
                  } hover:border-b border-primary hover:scale-105 hover:text-primary`}
                >
                  Renewable Energy
                </h3>
              </div>
              <div className="ml-4 lg:ml-2"> /</div>
            </div>
          </Animate>
        </div>

        <div className="flex">
          <Animate type="slideDown" delay={800}>
            <div className="cursor-pointer flex items-center">
              <div
                className="relative flex"
                onClick={() => {
                  setSelectedType("NONE" as any);
                  setTimeout(() => {
                    setSelectedType("CONTROL");
                  }, 100);
                }}
              >
                <div className="absolute -right-3 text-xs -top-3 text-foreground/40">
                  1
                </div>
                <h3
                  className={`${
                    selectedType === "CONTROL"
                      ? "scale-105 border-b border-primary text-primary"
                      : "text-foreground/50"
                  } hover:border-b border-primary hover:scale-105 hover:text-primary`}
                >
                  Control Systems
                </h3>
              </div>
            </div>
          </Animate>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center mt-[5vh] pb-[5vh]">
        <div className="flex flex-col lg:flex-row gap-10 pt-[5vh]">
          {(selectedType === "SUBSTATION" || selectedType === "ALL") && (
            <Animate delay={300} type="slideUp">
              <ProjectCard
                callBack={() => {
                  handleCallBack("SUBSTATION_500KV");
                }}
                category="Substation Design"
                title="500kV Substation Layout"
                image="/substation/500kv-layout.png"
              />
            </Animate>
          )}
          
          {(selectedType === "SUBSTATION" || selectedType === "ALL") && (
            <Animate delay={300} type="slideUp">
              <ProjectCard
                callBack={() => {
                  handleCallBack("GROUNDING_PLAN");
                }}
                category="Substation Design"
                title="Grounding & Conduit Plan"
                image="/substation/grounding-plan.png"
              />
            </Animate>
          )}
          
          {(selectedType === "AI" || selectedType === "ALL") && (
            <Animate delay={300} type="slideUp">
              <ProjectCard
                callBack={() => {
                  handleCallBack("FAULT_DETECTION");
                }}
                category="AI in Power Systems"
                title="IEEE 9-Bus Fault Detection"
                image="/ai/fault-scenarios.png"
              />
            </Animate>
          )}
        </div>

        <div className="flex flex-col lg:flex-row gap-10 pt-[5vh]">
          {(selectedType === "AI" || selectedType === "ALL") && (
            <Animate delay={300} type="slideUp">
              <ProjectCard
                callBack={() => {
                  handleCallBack("SNN_FAULT");
                }}
                category="AI in Power Systems"
                title="SNN Fault Classification"
                image="/ai/snn-architecture.png"
              />
            </Animate>
          )}
          
          {(selectedType === "RENEWABLE" || selectedType === "ALL") && (
            <Animate delay={300} type="slideUp">
              <ProjectCard
                callBack={() => {
                  handleCallBack("MICROGRID");
                }}
                category="Renewable Energy"
                title="Microgrid Integration"
                image="/renewable/microgrid-schematic.png"
              />
            </Animate>
          )}
          
          {(selectedType === "CONTROL" || selectedType === "ALL") && (
            <Animate delay={300} type="slideUp">
              <ProjectCard
                callBack={() => {
                  handleCallBack("BLDC_CONTROL");
                }}
                category="Control Systems"
                title="BLDC Motor Speed Control"
                image="control/bldc-circuit.png"
              />
            </Animate>
          )}
        </div>
      </div>
    </div>
  );
}

export default Projects;