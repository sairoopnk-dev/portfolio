export interface Certification {
  id: string;
  name: string;
  issuer: string;
  issuerLogoUrl?: string;
  issuedDate: string;
  credentialId?: string;
  credentialUrl?: string;
  skillsVerified: string[];
}
