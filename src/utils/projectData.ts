export const projectData = {
  SUBSTATION_500KV: {
    projectTitle: "500kV Substation Design",
    strategy: ["Safety Compliance", "Efficiency"],
    client: "Texas Tech University",
    technology: "AutoCAD, Revit MEP",
    projectDesc:
      "Designed a comprehensive 500kV substation layout including electrical schematics, grounding plans, and conduit routing. Ensured compliance with IEEE and NFPA standards while optimizing for space efficiency and maintenance access.",
    images: [
      "/substation/500kv-layout.png",
      "/substation/grounding-plan.png",
      "/substation/conduit-routing.png",
    ],
    openProject: false,
    viewCode: false,
    category: "Substation Design",
  },
  FAULT_DETECTION: {
    projectTitle: "AI-Based Fault Detection",
    strategy: ["Real-time Analysis", "Accuracy"],
    client: "Texas Tech Research",
    technology: "MATLAB, Python, CNN/GNN",
    projectDesc:
      "Developed an AI system for real-time fault detection in IEEE 9-bus transmission lines using CNN, ELM, and GNN models. Achieved 98.7% classification accuracy for various fault types including line-to-ground and three-phase faults.",
    images: [
      "/ai/fault-simulation.png",
      "/ai/model-architecture.png",
      "/ai/results-analysis.png",
    ],
    openProject: false,
    viewCode: true,
    viewCodeLink: "https://github.com/VENKY-021/fault-detection",
    category: "AI in Power Systems",
  },
  MICROGRID: {
    projectTitle: "Renewable Microgrid Integration",
    strategy: ["Stability", "Efficiency"],
    client: "Graduate Research",
    technology: "MATLAB/Simulink",
    projectDesc:
      "Designed and simulated a hybrid microgrid integrating solar and wind energy sources. Implemented advanced control strategies to minimize power fluctuations and optimize energy distribution under varying load conditions.",
    images: [
      "/renewable/microgrid-schematic.png",
      "/renewable/power-flow.png",
      "/renewable/control-system.png",
    ],
    openProject: false,
    viewCode: true,
    viewCodeLink: "https://github.com/VENKY-021/microgrid-simulation",
    category: "Renewable Energy",
  },
  SNN_FAULT: {
    projectTitle: "SNN Fault Classification",
    strategy: ["Low Latency", "Adaptive Learning"],
    client: "Research Project",
    technology: "Python, TensorFlow",
    projectDesc:
      "Implemented a Single Neural Network (SNN) model for transmission line fault classification, reducing detection latency by 40% compared to traditional methods. Integrated wavelet transform for feature extraction from time-series data.",
    images: [
      "/ai/snn-architecture.png",
      "/ai/fault-scenarios.png",
      "/ai/performance-metrics.png",
    ],
    openProject: false,
    viewCode: true,
    viewCodeLink: "https://github.com/VENKY-021/snn-fault-detection",
    category: "AI in Power Systems",
  },
  BLDC_CONTROL: {
    projectTitle: "BLDC Motor Control System",
    strategy: ["Energy Efficiency", "Precision"],
    client: "Graduate Project",
    technology: "MATLAB, Power Electronics",
    projectDesc:
      "Designed a Luo converter-based speed control system for BLDC motors, reducing voltage ripple by 35% and improving torque stability. Optimized for renewable energy applications with variable load conditions.",
    images: [
      "/control/bldc-circuit.png",
      "/control/speed-response.png",
      "/control/efficiency-analysis.png",
    ],
    openProject: false,
    viewCode: true,
    viewCodeLink: "https://github.com/VENKY-021/bldc-control",
    category: "Control Systems",
  },
  GROUNDING_PLAN: {
    projectTitle: "Substation Grounding System",
    strategy: ["Safety", "IEEE Compliance"],
    client: "ZF Technology",
    technology: "AutoCAD, ETAP",
    projectDesc:
      "Developed comprehensive grounding plans for 138kV substations, ensuring step/touch potential safety limits. Performed soil resistivity analysis and optimized conductor sizing for fault current dissipation.",
    images: [
      "substation/grounding-design.png",
      "substation/soil-analysis.png",
      "substation/safety-metrics.png",
    ],
    openProject: false,
    viewCode: false,
    category: "Substation Design",
  },
};
