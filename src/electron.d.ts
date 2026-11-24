
export {};

type CustomerInput = {
  id: string;
  name: string;
  phone: string;
  email?: string;
  dob?: string;
  gender?: string;
  address?: string;
  notes?: string;
};

type Customer = {
  id: string;
  name: string;
  phone: string;
  email: string | null;
  dob: string | null;
  gender: string | null;
  address: string | null;
  notes: string | null;
  createdAt: string;
};

type EyeExaminationInput = {
  id: string;
  customerId: string;
  examinationDate?: string | Date | null;
  examinedBy?: string | null;
  chiefComplaints?: string | null;

  unaidedVisionRight?: string | null;
  correctedVisionRight?: string | null;
  pinholeVisionRight?: string | null;
  finalVisionRight?: string | null;

  unaidedVisionLeft?: string | null;
  correctedVisionLeft?: string | null;
  pinholeVisionLeft?: string | null;
  finalVisionLeft?: string | null;

  sphRight?: number | null;
  cylRight?: number | null;
  axisRight?: number | null;
  addRight?: number | null;

  sphLeft?: number | null;
  cylLeft?: number | null;
  axisLeft?: number | null;
  addLeft?: number | null;

  pdDistance?: number | null;
  pdNear?: number | null;
  iopRight?: number | null;
  iopLeft?: number | null;

  nearVisionRight?: string | null;
  nearVisionLeft?: string | null;

  examinationFindings?: string | null;
  recommendations?: string | null;
  followUpDate?: string | Date | null;
};

type EyeExaminationUpdateInput = {
  id: string;
} & Partial<Omit<EyeExaminationInput, "id" | "customerId">>;


type PrescriptionInput = {
  id: string;
  customerId: string;
  source: "IN_HOUSE" | "EXTERNAL";
  examinationId?: string | null;

  doctorName?: string | null;
  clinicName?: string | null;

  prescriptionDate?: string | Date;
  expiryDate?: string | Date | null;

  sphRight?: number | null;
  cylRight?: number | null;
  axisRight?: number | null;
  addRight?: number | null;

  sphLeft?: number | null;
  cylLeft?: number | null;
  axisLeft?: number | null;
  addLeft?: number | null;

  pdDistance?: number | null;
  pdNear?: number | null;

  notes?: string | null;
};

type PrescriptionUpdateInput = {
  id: string;
} & Partial<Omit<PrescriptionInput, "id" | "customerId">>;

export type Prescription = {
  id: string;
  customerId: string;
  source: "IN_HOUSE" | "EXTERNAL";
  examinationId: string | null;

  doctorName: string | null;
  clinicName: string | null;

  prescriptionDate: Date;
  expiryDate: Date | null;

  sphRight: number | null;
  cylRight: number | null;
  axisRight: number | null;
  addRight: number | null;

  sphLeft: number | null;
  cylLeft: number | null;
  axisLeft: number | null;
  addLeft: number | null;

  pdDistance: number | null;
  pdNear: number | null;

  notes: string | null;

  createdAt: Date;
  updatedAt: Date;
};


export type EyeExamination = {
  id: string;
  customerId: string;
  examinationDate: Date;
  examinedBy: string | null;
  chiefComplaints: string | null;

  unaidedVisionRight: string | null;
  correctedVisionRight: string | null;
  pinholeVisionRight: string | null;
  finalVisionRight: string | null;

  unaidedVisionLeft: string | null;
  correctedVisionLeft: string | null;
  pinholeVisionLeft: string | null;
  finalVisionLeft: string | null;

  sphRight: number | null;
  cylRight: number | null;
  axisRight: number | null;
  addRight: number | null;

  sphLeft: number | null;
  cylLeft: number | null;
  axisLeft: number | null;
  addLeft: number | null;

  pdDistance: number | null;
  pdNear: number | null;
  iopRight: number | null;
  iopLeft: number | null;

  nearVisionRight: string | null;
  nearVisionLeft: string | null;

  examinationFindings: string | null;
  recommendations: string | null;
  followUpDate: Date | null;

  createdAt: Date;
  updatedAt: Date;
};

declare global {
  interface Window {
    customerAPI: {
      getAll: () => Promise<Customer[]>;
      create: (data: CustomerInput) => Promise<unknown>;
      update: (data: CustomerInput) => Promise<unknown>;
      delete: (id: string) => Promise<unknown>;
    };

    eyeExaminationAPI: {
      getByCustomer: (customerId: string) => Promise<EyeExamination[]>;
      getById: (id: string) => Promise<EyeExamination | null>;
      create: (data: EyeExaminationInput) => Promise<EyeExamination>;
      update: (data: EyeExaminationUpdateInput) => Promise<EyeExamination>;
    };


prescriptionAPI: {
  getByCustomer: (customerId: string) => Promise<Prescription[]>;
  getById: (id: string) => Promise<Prescription | null>;
  create: (data: PrescriptionInput) => Promise<Prescription>;
  update: (data: PrescriptionUpdateInput) => Promise<Prescription>;
  delete: (id: string) => Promise<Prescription>;
};

  }
}
