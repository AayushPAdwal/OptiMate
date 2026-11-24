
export type PrescriptionSource = "IN_HOUSE" | "EXTERNAL";

export type PrescriptionRecord = Awaited<
  ReturnType<typeof window.prescriptionAPI.getByCustomer>
>[number];

export type ExaminationRecord = Awaited<
  ReturnType<typeof window.eyeExaminationAPI.getByCustomer>
>[number];

export type PrescriptionFormValues = {
  source: PrescriptionSource;
  examinationId: string;

  doctorName: string;
  clinicName: string;

  prescriptionDate: string;
  expiryDate: string;

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

  notes: string;
};

export type PrescriptionFormProps = {
  customerId: string;
  prescription: PrescriptionRecord | null;
  examinations: ExaminationRecord[];
  onCancel: () => void;
  onSaved: () => void;
};

export type PrescriptionDetailsProps = {
  prescription: PrescriptionRecord;
  onBack: () => void;
  onEdit: () => void;
  onDelete: (id: string) => void;
};
