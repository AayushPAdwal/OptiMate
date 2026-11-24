import type { EyeExamination } from "../../electron";
export type ExaminationFormValues = {
  examinationDate: string;
  examinedBy: string;
  chiefComplaints: string;

  unaidedVisionRight: string;
  correctedVisionRight: string;
  pinholeVisionRight: string;
  finalVisionRight: string;

  unaidedVisionLeft: string;
  correctedVisionLeft: string;
  pinholeVisionLeft: string;
  finalVisionLeft: string;

  sphRight: string;
  cylRight: string;
  axisRight: string;
  addRight: string;

  sphLeft: string;
  cylLeft: string;
  axisLeft: string;
  addLeft: string;

  pdDistance: string;
  pdNear: string;
  iopRight: string;
  iopLeft: string;

  nearVisionRight: string;
  nearVisionLeft: string;

  examinationFindings: string;
  recommendations: string;
  followUpDate: string;
};

export type ExaminationFormProps = {
  customerId: string;
  examination?: EyeExamination;
  onCancel: () => void;
  onSaved: () => void;
};
